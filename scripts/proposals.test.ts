import assert from "node:assert/strict"
import { mkdtemp, mkdir, readFile, readdir, rm, symlink, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import test from "node:test"
import {
  generateProposals,
  generatedMarker,
  parseProposal,
  readProposals,
  renderIndex,
  renderProposal,
  resolveProposalLinks,
  validateMetadata,
  type ProposalMetadata,
} from "./proposals"

function metadata(): ProposalMetadata {
  return {
    id: "0001",
    title: "A useful improvement",
    summary: "Make a small improvement people can review.",
    stage: "working-draft",
    scope: "Website documentation",
    owner: "Unassigned",
    created: "2026-11-01",
    updated: "2026-11-10",
    decision: { status: "pending", authority: "Website maintainers", evidence: [] },
    funding: { status: "not-requested", evidence: [] },
    delivery: { status: "not-started", evidence: [] },
  }
}

function source(m = metadata(), body = "## Outcome\n\nAn inspectable improvement.") {
  // JSON is valid YAML, keeping fixtures clear and avoiding hand-written escaping.
  return `---\n${JSON.stringify(m)}\n---\n\n${body}\n`
}

const file = "proposals/0001-useful-improvement.md"

test("a working draft requires no invented decision, funding, or delivery", () => {
  assert.deepEqual(validateMetadata(metadata()), [])
  const proposal = parseProposal(file, source())
  assert.equal(proposal.slug, "proposals/0001-useful-improvement")
  const rendered = renderProposal(proposal)
  assert.match(rendered, /Document stage:\*\* Working draft/)
  assert.match(rendered, /Decision:\*\* Pending/)
  assert.match(rendered, /Funding:\*\* Not requested/)
  assert.match(rendered, /Delivery:\*\* Not started/)
  assert.match(rendered, /not live status/)
})

test("document maturity cannot stand in for acceptance, funding, or delivery", () => {
  const m = metadata()
  m.stage = "stable"
  assert.deepEqual(validateMetadata(m), [])
  const index = renderIndex([parseProposal(file, source(m))])
  assert.match(index, /## Stable[\s\S]*0001: A useful improvement/)
  assert.match(
    index,
    /Decision:\*\* Pending · \*\*Funding:\*\* Not requested · \*\*Delivery:\*\* Not started/,
  )
  assert(validateMetadata({ ...m, stage: "accepted" }).some((e) => e.startsWith("stage must")))
})

test("the validator catches missing metadata, unknown fields, dates, and numeric YAML IDs", () => {
  for (const patch of [
    { id: 1 },
    { id: "1" },
    { title: "" },
    { summary: "\n" },
    { owner: null },
    { scope: "one\ntwo" },
    { stage: "implemented" },
    { created: "2026-02-30" },
    { updated: "2026-10-01" },
    { decision: null },
    { status: "accepted" },
  ])
    assert(validateMetadata({ ...metadata(), ...patch }).length > 0, JSON.stringify(patch))
  assert.deepEqual(validateMetadata(null), ["frontmatter must be a YAML object"])
})

test("recorded events require dated evidence without coupling independent statuses", () => {
  for (const [key, status] of [
    ["decision", "accepted"],
    ["funding", "requested"],
    ["delivery", "complete"],
  ] as const) {
    const m = metadata()
    const record = m[key]
    record.status = status
    assert(validateMetadata(m).some((e) => e.includes("requires source evidence")))
    record.evidence = ["https://example.org/record/1"]
    assert(validateMetadata(m).some((e) => e.includes(`${key}.date`)))
    record.date = "2026-11-09"
    assert.deepEqual(validateMetadata(m), [])
    record.date = "2026-11-11"
    assert(validateMetadata(m).some((e) => e.includes("cannot be later than updated")))
  }
})

test("evidence must be explicit HTTP(S) links and decision authority must be present", () => {
  for (const url of [
    "javascript:alert(1)",
    "file:///tmp/private",
    "../decision.md",
    "https://user:secret@example.org",
    "https://example.org/space here",
  ]) {
    const m = metadata()
    m.decision.evidence = [url]
    assert(
      validateMetadata(m).some((e) => e.includes("public HTTP(S)")),
      url,
    )
  }
  const m = metadata()
  m.decision.authority = ""
  assert(validateMetadata(m).some((e) => e.includes("decision.authority")))
})

test("filenames, IDs, and body must be coherent", () => {
  assert.throws(
    () => parseProposal("proposals/0002-other.md", source()),
    /filename prefix must match/,
  )
  assert.throws(() => parseProposal("proposals/..\/private.md", source()), /filename/)
  assert.throws(() => parseProposal(file, source(metadata(), "")), /body must not be empty/)
  const draft = { ...metadata(), id: "unassigned" }
  assert.equal(
    parseProposal("proposals/draft-new-idea.md", source(draft)).metadata.id,
    "unassigned",
  )
})

test("index includes every document stage and empty states without inventing proposals", () => {
  const index = renderIndex([])
  assert.match(index, /0 proposals recorded/)
  for (const stage of ["Working draft", "In review", "Stable", "Archived"])
    assert(index.includes(`## ${stage}`))
  assert.equal(index.match(/No proposals at this stage\./g)?.length, 4)
  assert.match(index, /showFolderListing: false/)
  assert.match(index, /not a live on-chain proposal feed/)
})

test("metadata is escaped and source-relative links work in wiki pages", () => {
  const m = metadata()
  m.title = "A <script> & *test*"
  const rendered = renderProposal(
    parseProposal(
      file,
      source(
        m,
        "# Old heading\n\n[Guide](../CONTRIBUTING.md), [Draft](0002-another.md#scope), [Template](TEMPLATE.md), [Source](https://example.org/source), [Section](#outcome).",
      ),
    ),
  )
  assert(!rendered.includes("# Old heading"))
  assert(rendered.includes("[Guide](https://1hive.org/CONTRIBUTING.md)"))
  assert(rendered.includes("[Draft](proposals/0002-another#scope)"))
  assert(rendered.includes("[Template](https://1hive.org/proposals/TEMPLATE.md)"))
  assert(rendered.includes("[Source](https://example.org/source)"))
  assert(rendered.includes("[Section](#outcome)"))
  assert(renderIndex([parseProposal(file, source(m))]).includes("&lt;script&gt; &amp; \\*test\\*"))
})

test("only allowlisted proposal documents become pages, never README or TEMPLATE", async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "1hive-proposals-"))
  t.after(() => rm(root, { recursive: true, force: true }))
  await mkdir(path.join(root, "proposals"))
  await writeFile(path.join(root, file), source())
  await writeFile(path.join(root, "proposals/draft-private.md"), "unreviewed local content")
  const resources = [file, "proposals/README.md", "proposals/TEMPLATE.md", "AGENTS.md"]
  assert.equal((await readProposals(root, resources)).length, 1)
  const paths = await generateProposals(root, resources)
  assert.deepEqual(paths, ["proposals/index.md", "proposals/0001-useful-improvement.md"])
  assert.match(
    await readFile(path.join(root, "content/proposals/index.md"), "utf8"),
    /1 proposal recorded/,
  )
  assert.deepEqual((await readdir(path.join(root, "content/proposals"))).sort(), [
    "0001-useful-improvement.md",
    "index.md",
  ])
})

test("link conversion preserves code, wiki links, reference labels, and titles", () => {
  const body = [
    "`[Code](TEMPLATE.md)`",
    "```md\n[Example](README.md)\n```",
    "[[Our mission and values]]",
    '[A **bold** guide](../CONTRIBUTING.md "Title")',
    "[Reference][guide]",
    '[guide]: README.md "More detail"',
  ].join("\n\n")
  const resolved = resolveProposalLinks(parseProposal(file, source(metadata(), body)))
  assert(resolved.includes("`[Code](TEMPLATE.md)`"))
  assert(resolved.includes("```md\n[Example](README.md)\n```"))
  assert(resolved.includes("[[Our mission and values]]"))
  assert(resolved.includes('[A **bold** guide](https://1hive.org/CONTRIBUTING.md "Title")'))
  assert(resolved.includes("[Reference][guide]"))
  assert(resolved.includes('[guide]: <https://1hive.org/proposals/README.md> "More detail"'))
})

test("duplicate IDs and unsafe source paths fail before generation", async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "1hive-proposal-ids-"))
  t.after(() => rm(root, { recursive: true, force: true }))
  await mkdir(path.join(root, "proposals"))
  const other = "proposals/0001-another.md"
  await writeFile(path.join(root, file), source())
  await writeFile(path.join(root, other), source())
  await assert.rejects(readProposals(root, [file, other]), /duplicate proposal ID/)
  await assert.rejects(readProposals(root, [file, file]), /Duplicate proposal file/)
  await assert.rejects(
    readProposals(root, ["proposals/../../secret.md"]),
    /invalid allowlisted proposal path/,
  )
  await rm(path.join(root, other))
  await symlink(path.join(root, file), path.join(root, other))
  await assert.rejects(readProposals(root, [other]), /regular file/)
})

test("repeated generation updates both views and removes only stale generated files", async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "1hive-proposal-repeat-"))
  t.after(() => rm(root, { recursive: true, force: true }))
  await mkdir(path.join(root, "proposals"))
  await writeFile(path.join(root, file), source())
  await generateProposals(root, [file])
  const before = await readFile(path.join(root, "content/proposals/index.md"), "utf8")
  await generateProposals(root, [file])
  assert.equal(await readFile(path.join(root, "content/proposals/index.md"), "utf8"), before)
  const m = { ...metadata(), title: "Updated once", stage: "in-review" as const }
  await writeFile(path.join(root, file), source(m))
  await generateProposals(root, [file])
  for (const name of ["index.md", path.basename(file)]) {
    const content = await readFile(path.join(root, "content/proposals", name), "utf8")
    assert(content.includes("Updated once"))
    assert(content.includes("In review"))
  }
  await generateProposals(root, [])
  assert.deepEqual(await readdir(path.join(root, "content/proposals")), ["index.md"])
})

test("generation refuses to overwrite hand-authored files or follow output symlinks", async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "1hive-proposal-protection-"))
  t.after(() => rm(root, { recursive: true, force: true }))
  const directory = path.join(root, "content/proposals")
  await mkdir(directory, { recursive: true })
  const target = path.join(directory, "index.md")
  await writeFile(target, "Keep my hand-written page")
  await assert.rejects(generateProposals(root, []), /hand-authored content/)
  assert.equal(await readFile(target, "utf8"), "Keep my hand-written page")
  await rm(target)
  const elsewhere = path.join(root, "elsewhere.md")
  await writeFile(elsewhere, generatedMarker)
  await symlink(elsewhere, target)
  await assert.rejects(generateProposals(root, []), /hand-authored content/)
  assert.equal(await readFile(elsewhere, "utf8"), generatedMarker)
})

test("the real catalog preserves proposal 0001 as an unfunded working draft", async () => {
  const proposals = await readProposals()
  const processProposal = proposals.find((p) => p.metadata.id === "0001")
  assert(processProposal)
  const m = processProposal.metadata
  assert.equal(m.id, "0001")
  assert.equal(m.stage, "working-draft")
  assert.equal(m.decision.status, "pending")
  assert.equal(m.funding.status, "not-requested")
  assert.equal(m.delivery.status, "not-started")
})
