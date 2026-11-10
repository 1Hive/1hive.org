import assert from "node:assert/strict"
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import type { BuildCtx } from "../../util/ctx"
import { AgentResources, agentResources } from "./agentResources"
import { readProposals, renderIndex } from "../../../scripts/proposals"

test("agent resources emit the exact allowlisted source files and refresh on a partial build", async (t) => {
  const output = await mkdtemp(path.join(os.tmpdir(), "1hive-agent-resources-"))
  t.after(() => rm(output, { recursive: true, force: true }))
  const ctx = { argv: { output } } as BuildCtx
  const plugin = AgentResources()
  const resources = { css: [], js: [], additionalHead: [] }
  const emitted = []
  for await (const file of await plugin.emit(ctx, [], resources)) emitted.push(file)
  assert.equal(emitted.length, agentResources.length)
  for (const file of agentResources) {
    assert.deepEqual(await readFile(path.join(output, file)), await readFile(file))
  }
  assert.deepEqual((await readdir(output)).sort(), [
    "AGENTS.md",
    "CODE_OF_CONDUCT.md",
    "CONTRIBUTING.md",
    "proposals",
    "skills",
  ])
  await writeFile(path.join(output, "AGENTS.md"), "stale content")
  for await (const file of (await plugin.partialEmit!(ctx, [], resources, []))!) {
    assert(emitted.includes(file))
  }
  assert.deepEqual(await readFile(path.join(output, "AGENTS.md")), await readFile("AGENTS.md"))
})

test("every skill has metadata and is listed for publication and discovery", async () => {
  const index = await readFile("skills/README.md", "utf8")
  for (const entry of await readdir("skills", { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const file = `skills/${entry.name}/SKILL.md`
    assert(
      agentResources.some((resource) => resource === file),
      `${file} is not published`,
    )
    assert(index.includes(`${entry.name}/SKILL.md`), `${file} is not indexed`)
    const text = await readFile(file, "utf8")
    assert.match(text, /^---\nname: [a-z0-9-]+\ndescription: .+\n---\n/)
    assert(text.includes(`name: ${entry.name}\n`))
    for (const section of ["When to use", "Inputs", "Workflow", "Return", "Boundaries"]) {
      assert(text.includes(`## ${section}`), `${file} is missing ${section}`)
    }
  }
})

test("proposal documents are explicitly published, indexed, and distinguish drafts from decisions", async () => {
  const index = await readFile("proposals/README.md", "utf8")
  const proposals = await readProposals()
  const browserIndex = renderIndex(proposals)
  const template = await readFile("proposals/TEMPLATE.md", "utf8")
  assert.match(index, /Process status: working draft/)
  assert.match(template, /^stage: working-draft$/m)
  for (const section of [
    "Current state and evidence",
    "Proposed change",
    "Delivery plan",
    "Validation and risks",
    "Decision and authority",
    "Progress and outcome",
  ]) {
    assert(template.includes(`## ${section}`), `Proposal template is missing ${section}`)
  }
  for (const entry of await readdir("proposals", { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue
    const file = `proposals/${entry.name}`
    assert(
      agentResources.some((resource) => resource === file),
      `${file} is not published`,
    )
    if (entry.name === "README.md") continue
    if (entry.name === "TEMPLATE.md") {
      assert(index.includes(`](${entry.name})`), `${file} is not discoverable`)
      continue
    }
    const proposal = await readFile(file, "utf8")
    assert(browserIndex.includes(file.slice(0, -3)), `${file} is not indexed`)
    assert(
      proposals.some((p) => p.file === file),
      `${file} has not been validated`,
    )
    assert.match(proposal, /^## Decision and authority$/m)
    assert.match(proposal, /^## Progress and outcome$/m)
  }
})
