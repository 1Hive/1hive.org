import assert from "node:assert/strict"
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import type { BuildCtx } from "../../util/ctx"
import { LandingPage } from "./landingPage"

test("homepage links contribution and proposal entry points on full and partial builds", async (t) => {
  const output = await mkdtemp(path.join(os.tmpdir(), "1hive-landing-page-"))
  t.after(() => rm(output, { recursive: true, force: true }))
  const ctx = { argv: { output } } as BuildCtx
  const plugin = LandingPage()
  const resources = { css: [], js: [], additionalHead: [] }
  const emitted = []
  for await (const file of await plugin.emit(ctx, [], resources)) emitted.push(file)
  assert.equal(emitted.length, 1)
  const homepage = path.join(output, "index.html")
  const html = await readFile(homepage, "utf8")
  assert.match(html, /<html lang="en">/)
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1)
  for (const route of [
    "wiki",
    "How-you-can-contribute",
    "Participate-with-your-agent",
    "Improvement-proposals",
    "Navigating-core-community-infrastructure",
  ]) {
    assert(html.includes(`href="/${route}"`), `Missing homepage link to ${route}`)
  }
  assert.match(html, /working-draft process and template/)
  await writeFile(homepage, "stale homepage")
  for await (const file of (await plugin.partialEmit!(ctx, [], resources, []))!) {
    assert(emitted.includes(file))
  }
  assert.equal(await readFile(homepage, "utf8"), html)
})
