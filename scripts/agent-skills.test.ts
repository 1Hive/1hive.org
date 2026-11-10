import assert from "node:assert/strict"
import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import test from "node:test"
import matter from "gray-matter"
import { agentResources } from "../quartz/plugins/emitters/agentResources"

// Discovery checks packaging, not the quality or safety of a skill's instructions.
async function skillDocuments(directory: string): Promise<string[]> {
  const files: string[] = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.posix.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await skillDocuments(file)))
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(file)
  }
  return files
}

test("every portable skill has discoverable metadata and a matching folder name", async () => {
  const files = (await skillDocuments("skills")).filter((file) => file.endsWith("/SKILL.md"))
  assert(files.length > 0, "the skill library should contain at least one skill")
  const names = new Set<string>()
  for (const file of files) {
    const { data, content } = matter(await readFile(file, "utf8"))
    assert.equal(typeof data.name, "string", `${file}: name must be a string`)
    assert.match(data.name, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${file}: use a portable skill name`)
    assert(data.name.length < 64, `${file}: name must be shorter than 64 characters`)
    assert.equal(data.name, path.posix.basename(path.posix.dirname(file)), file)
    assert(!names.has(data.name), `${file}: duplicate skill name ${data.name}`)
    names.add(data.name)
    assert.equal(typeof data.description, "string", `${file}: description must be a string`)
    assert(data.description.trim().length > 0, `${file}: description must not be empty`)
    assert(content.trim().length > 0, `${file}: instructions must not be empty`)
  }
})

test("all public skill documents are explicitly included in the publication allowlist", async () => {
  const published = new Set<string>(agentResources)
  assert.equal(published.size, agentResources.length, "publication entries must be unique")
  for (const file of await skillDocuments("skills")) {
    assert(
      published.has(file),
      `${file}: publish after review or keep non-public material outside the skills library`,
    )
  }
})

test("the skill index links every portable skill", async () => {
  const index = await readFile("skills/README.md", "utf8")
  const links = new Set(
    Array.from(index.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g), (match) =>
      path.posix.normalize(path.posix.join("skills", match[1])),
    ),
  )
  for (const file of await skillDocuments("skills")) {
    if (file.endsWith("/SKILL.md")) {
      assert(links.has(file), `${file}: link this skill from skills/README.md`)
    }
  }
})
