import assert from "node:assert/strict"
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import { checkLocalLinks, checkSite } from "./check-site"
import { agentResources } from "../quartz/plugins/emitters/agentResources"

test("local links resolve HTML, folders, raw Markdown, and encoded assets", async (t) => {
  const output = await mkdtemp(path.join(os.tmpdir(), "1hive-links-"))
  t.after(() => rm(output, { recursive: true, force: true }))
  for (const file of ["index.html", "wiki.html", "folder/index.html", "AGENTS.md", "a b.svg"]) {
    const dest = path.join(output, file)
    await mkdir(path.dirname(dest), { recursive: true })
    await writeFile(dest, "fixture")
  }
  assert.deepEqual(
    await checkLocalLinks(output, "skills/README.md", [
      "/",
      "../wiki#section",
      "../folder/",
      "../AGENTS.md",
      "../a%20b.svg",
      "https://1hive.org/wiki?view=all&amp;sort=recent#section",
      "https://example.org/not-a-local-file",
      "mailto:example@example.org",
      "data:image/svg+xml,example",
    ]),
    [],
  )
})

test("local links report missing and malformed destinations once", async (t) => {
  const output = await mkdtemp(path.join(os.tmpdir(), "1hive-missing-links-"))
  t.after(() => rm(output, { recursive: true, force: true }))
  const errors = await checkLocalLinks(output, "index.html", [
    "/missing",
    "/missing",
    "https://1hive.org/also-missing",
    "/bad%ZZ",
  ])
  assert.equal(errors.length, 3)
  assert.match(errors[0], /missing target for \/missing/)
  assert.match(errors[1], /missing target for https:\/\/1hive.org\/also-missing/)
  assert.match(errors[2], /invalid link/)
})

test("site validation fails clearly when the site has not been built", async (t) => {
  const output = await mkdtemp(path.join(os.tmpdir(), "1hive-unbuilt-"))
  t.after(() => rm(output, { recursive: true, force: true }))
  assert.match((await checkSite(output))[0], /Run npm run build first/)
})

test("local links cannot resolve outside the generated site", async (t) => {
  const output = await mkdtemp(path.join(os.tmpdir(), "1hive-link-boundary-"))
  t.after(() => rm(output, { recursive: true, force: true }))
  const errors = await checkLocalLinks(output, "index.html", ["/%2e%2e%2foutside.txt"])
  assert.equal(errors.length, 1)
  assert.match(errors[0], /link leaves the output directory/)
})

test("site validation detects stale and missing published agent documents", async (t) => {
  const output = await mkdtemp(path.join(os.tmpdir(), "1hive-document-parity-"))
  t.after(() => rm(output, { recursive: true, force: true }))
  await writeFile(path.join(output, "index.html"), '<a href="/broken">Broken fixture</a>')
  for (const file of agentResources) {
    const dest = path.join(output, file)
    await mkdir(path.dirname(dest), { recursive: true })
    await writeFile(dest, await readFile(file))
  }
  await writeFile(path.join(output, "AGENTS.md"), "stale instructions")
  await rm(path.join(output, "skills/improve-wiki/SKILL.md"))
  const errors = await checkSite(output)
  assert(errors.some((error) => error.startsWith("index.html: missing target for /broken")))
  assert(errors.some((error) => error.startsWith("AGENTS.md: published agent document")))
  assert(
    errors.some((error) =>
      error.startsWith("skills/improve-wiki/SKILL.md: published agent document"),
    ),
  )
})
