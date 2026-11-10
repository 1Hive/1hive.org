import { readFile, readdir, stat } from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { agentResources } from "../quartz/plugins/emitters/agentResources"

const siteOrigin = "https://1hive.org"

async function isFile(file: string): Promise<boolean> {
  return stat(file)
    .then((info) => info.isFile())
    .catch(() => false)
}

async function htmlFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const file = path.join(directory, entry.name)
      if (entry.isDirectory()) return htmlFiles(file)
      return entry.isFile() && entry.name.endsWith(".html") ? [file] : []
    }),
  )
  return files.flat()
}

export async function checkLocalLinks(
  output: string,
  source: string,
  links: string[],
): Promise<string[]> {
  const errors: string[] = []
  for (const link of new Set(links)) {
    let url: URL
    let pathname: string
    try {
      url = new URL(link.replaceAll("&amp;", "&"), `${siteOrigin}/${source}`)
      if (url.origin !== siteOrigin) continue
      pathname = decodeURIComponent(url.pathname)
    } catch {
      errors.push(`${source}: invalid link ${link}`)
      continue
    }

    const target = path.resolve(output, `.${pathname}`)
    const relative = path.relative(path.resolve(output), target)
    if (relative === ".." || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
      errors.push(`${source}: link leaves the output directory: ${link}`)
      continue
    }

    const candidates = [target, `${target}.html`, path.join(target, "index.html")]
    if (!(await Promise.all(candidates.map(isFile))).some(Boolean)) {
      errors.push(`${source}: missing target for ${link}`)
    }
  }
  return errors
}

export async function checkSite(output: string): Promise<string[]> {
  const errors: string[] = []
  if (!(await isFile(path.join(output, "index.html")))) {
    return [`${output}/index.html is missing. Run npm run build first.`]
  }

  for (const file of await htmlFiles(output)) {
    const html = await readFile(file, "utf8")
    const links = Array.from(html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/g), (m) => m[1])
    errors.push(...(await checkLocalLinks(output, path.relative(output, file), links)))
  }

  for (const file of agentResources) {
    const source = await readFile(file, "utf8")
    const generated = await readFile(path.join(output, file), "utf8").catch(() => undefined)
    if (generated !== source) {
      errors.push(`${file}: published agent document is missing or differs from its source`)
      continue
    }
    // Agent documents intentionally use simple inline Markdown links. Ignore examples in fences.
    const prose = source.replace(/```[\s\S]*?```/g, "")
    const links = Array.from(prose.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g), (m) => m[1])
    errors.push(...(await checkLocalLinks(output, file, links)))
  }
  return errors
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const errors = await checkSite(path.resolve(process.argv[2] ?? "public"))
  if (errors.length > 0) {
    console.error(errors.join("\n"))
    process.exitCode = 1
  } else {
    console.log("Generated local link targets and published agent documents are valid.")
  }
}
