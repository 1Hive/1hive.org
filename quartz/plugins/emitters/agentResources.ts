import { readFile } from "node:fs/promises"
import type { QuartzEmitterPlugin } from "../types"
import type { BuildCtx } from "../../util/ctx"
import type { FullSlug } from "../../util/path"
import { write } from "./helpers"

// Publish only reviewed, public contribution documents. Never copy the repository wholesale.
// These are the same source files agents read in a checkout, so there is no second copy to maintain.
export const agentResources = [
  "AGENTS.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "skills/README.md",
  "skills/navigate-1hive/SKILL.md",
  "skills/shape-contribution/SKILL.md",
  "contributions/CONCEPT.md",
  "skills/improve-wiki/SKILL.md",
  "skills/summarize-public-activity/SKILL.md",
  "skills/develop-proposal/SKILL.md",
  "skills/review-contribution/SKILL.md",
  "skills/check-sources/SKILL.md",
  "skills/review-contribution/references/worked-example.md",
  "proposals/README.md",
  "proposals/TEMPLATE.md",
  "proposals/0001-improvement-process.md",
  "proposals/draft-discord-integration-pilot.md",
  "proposals/draft-save-ai-commons.md",
  "proposals/draft-hive-outlives-agents.md",
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
