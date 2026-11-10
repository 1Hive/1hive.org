import assert from "node:assert/strict"
import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import test from "node:test"
import { agentResources } from "../quartz/plugins/emitters/agentResources"

async function markdownFiles(directory: string): Promise<string[]> {
  const files: string[] = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await markdownFiles(file)))
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(file)
  }
  return files
}

test("published participation guidance and navigation do not link the retired forum", async () => {
  const files = new Set([
    ...(await markdownFiles("content")),
    ...agentResources,
    "README.md",
    "quartz.config.ts",
    "quartz.layout.ts",
    "quartz/plugins/emitters/landingPage.ts",
  ])
  for (const file of files) {
    assert.doesNotMatch(
      await readFile(file, "utf8"),
      /https?:\/\/forum[.]1hive[.]org/i,
      `${file}: retired coordination destination must not be published`,
    )
  }
})

test("homepage and wiki footer route GitHub to the contribution repository", async () => {
  const landing = await readFile("quartz/plugins/emitters/landingPage.ts", "utf8")
  const layout = await readFile("quartz.layout.ts", "utf8")
  assert.match(landing, /href="https:\/\/github.com\/1Hive\/1hive.org">GitHub<\/a>/)
  assert.match(layout, /GitHub: "https:\/\/github.com\/1Hive\/1hive.org"/)
  const join = await readFile("content/Join the community.md", "utf8")
  assert(join.includes("https://github.com/1Hive/1hive.org/issues"))
  assert(join.includes("https://github.com/1Hive/1hive.org/pulls"))
  assert.match(join, /does not itself approve spending or authorize governance changes/)
})

test("retained forum evidence is historical, inaccessible, and outside published resources", async () => {
  const registry = JSON.parse(
    await readFile("research/1hive-knowledge-sources-2026-11-10.json", "utf8"),
  )
  const historical = registry.sources.filter((source: { url: string }) =>
    /https?:\/\/forum[.]1hive[.]org/i.test(source.url),
  )
  assert.equal(historical.length, 1, "retain only the useful historical treasury citation")
  assert.equal(historical[0].kind, "historical_primary_discussion")
  assert.match(historical[0].current_access, /Inaccessible.*Historical provenance only/)
  assert.equal(
    registry.coordination_update.current_entry_point,
    "https://github.com/1Hive/1hive.org",
  )
  assert(!agentResources.some((file) => file.startsWith("research/")))
})
