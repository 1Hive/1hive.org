import assert from "node:assert/strict"
import { readFile, readdir } from "node:fs/promises"
import test from "node:test"
import matter from "gray-matter"

const directory = new URL("../content/contributions/", import.meta.url)
const launchpad = new URL("../content/First contribution launchpad.md", import.meta.url)

test("the launchpad links every candidate brief with a source and a clear finish line", async () => {
  const index = await readFile(launchpad, "utf8")
  const files = (await readdir(directory)).filter((file) => file.endsWith(".md"))
  assert(files.length >= 6 && files.length <= 8, "keep the first-contribution choices bounded")

  for (const file of files) {
    const source = await readFile(new URL(file, directory), "utf8")
    const { data, content } = matter(source)
    assert.equal(
      data.contribution_status,
      "candidate",
      `${file}: distinguish ideas from assignments`,
    )
    assert.equal(typeof data.title, "string", `${file}: missing title`)
    assert.equal(typeof data.description, "string", `${file}: missing description`)
    assert(
      index.includes(`[[contributions/${file.slice(0, -3)}|`),
      `${file}: missing launchpad link`,
    )
    assert(content.includes("[[First contribution launchpad|"), `${file}: missing return link`)
    for (const heading of [
      "Why this is useful",
      "Scope and sources",
      "Done when",
      "Coordinate and stop",
      "Copy a starting prompt",
    ]) {
      assert(content.includes(`## ${heading}\n`), `${file}: missing ${heading}`)
    }
    assert.match(content, /\*\*Evidence basis:\*\*/, `${file}: missing dated evidence basis`)
    assert.match(content, /https:\/\/github\.com\/1Hive\/1hive\.org\//, `${file}: missing source`)
    const prompts = Array.from(content.matchAll(/```text\n([\s\S]*?)\n```/g))
    assert.equal(prompts.length, 1, `${file}: provide one copyable prompt`)
    assert.match(prompts[0][1], /private/, `${file}: prompt must return a private result first`)
    assert.match(prompts[0][1], /[Dd]o not/, `${file}: prompt must preserve action boundaries`)
  }
})

test("newcomers can reach the launchpad from the homepage and contribution guides", async () => {
  const homepage = await readFile(
    new URL("../quartz/plugins/emitters/landingPage.ts", import.meta.url),
    "utf8",
  )
  assert.match(homepage, /href="\/First-contribution-launchpad">Find your first contribution<\/a>/)
  for (const file of ["How you can contribute.md", "Participate with your agent.md", "wiki.md"]) {
    const source = await readFile(new URL(`../content/${file}`, import.meta.url), "utf8")
    assert(source.includes("[[First contribution launchpad]]"), `${file}: missing entry point`)
  }
})
