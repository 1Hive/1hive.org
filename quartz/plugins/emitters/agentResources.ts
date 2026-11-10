import { readFile } from "node:fs/promises"
import type { QuartzEmitterPlugin } from "../types"
import type { BuildCtx } from "../../util/ctx"
import type { FullSlug } from "../../util/path"
import { write } from "./helpers"

// Publish only reviewed, public agent documents. Never copy the repository wholesale.
// These are the same source files agents read in a checkout, so there is no second copy to maintain.
export const agentResources = [
  "AGENTS.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "skills/README.md",
  "skills/navigate-1hive/SKILL.md",
  "skills/improve-wiki/SKILL.md",
  "skills/summarize-public-activity/SKILL.md",
] as const

async function* emitAgentResources(ctx: BuildCtx) {
  for (const file of agentResources) {
    yield await write({
      ctx,
      slug: file.slice(0, -3) as FullSlug,
      ext: ".md",
      content: await readFile(file),
    })
  }
}

export const AgentResources: QuartzEmitterPlugin = () => ({
  name: "AgentResources",
  emit: emitAgentResources,
  partialEmit: emitAgentResources,
})
