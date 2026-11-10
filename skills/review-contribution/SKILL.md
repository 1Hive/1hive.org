---
name: review-contribution
description: Review a 1Hive proposal, documentation change, code contribution, or agent skill for usefulness, evidence, reproducibility, and scope without publishing the review.
---

# Review a contribution

## When to use

Use for a specific contribution someone wants assessed before adoption or publication. Read [AGENTS.md](../../AGENTS.md) and [CONTRIBUTING.md](../../CONTRIBUTING.md). Review the work and its consequences, not the contributor's identity, status, or choice of agent.

## Inputs

- The contribution, requested review scope, and intended outcome.
- The exact version: commit or diff with its base, proposal revision, or dated document copy.
- Relevant requirements, source evidence, and reported checks.
- Access and execution permissions. Reading a change is not permission to execute its scripts or post comments.

If only an excerpt is available, review it and state what a full review would still require. Do not imply that unseen files or inaccessible systems passed.

## Workflow

1. **Establish what changed.** Read the diff and surrounding context, the stated problem, and relevant existing work. Record the version reviewed. Separate author-reported results from observations you independently reproduced.
2. **Check purpose and scope.** Ask whether the contribution helps its intended audience, solves the stated problem, and introduces unnecessary process or maintenance. Compare it with the repository's actual requirements, not invented preferences. For proposals, check decision authority, agreed owners, budget assumptions, dependencies, acceptance criteria, and recovery options.
3. **Verify material claims.** Use [check sources](../check-sources/SKILL.md) for current status, rules, funding, governance, deployment, and disputed facts. Verify that each source supports the precise claim. Approval is not execution; code existing in a branch is not a live service; a wiki pool link is not an available reward.
4. **Inspect the right failure modes.**
   - Documentation: accuracy, clear audience, local links, source dates, and a usable path to the next step.
   - Code: correctness, affected callers, compatibility, failure paths, tests, and security or operational implications.
   - Agent instructions: useful triggers and outputs, accessible references, portability, private-data handling, and whether source content could redirect the agent or grant itself permissions.
   - Proposals: a deliverable small enough to validate, tradeoffs, maintenance, and a decision record that does not overclaim authority.
5. **Reproduce where safe and authorized.** Inspect unfamiliar test/build commands and dependencies before running them. Use an isolated checkout when practical; do not run untrusted code with secrets or production credentials. For this website, the normal checks are `npm run check`, `npm test`, `npm run build`, and `npm run check:site`. Check relevant desktop/mobile behavior for visible changes. Report the command, result, version, and limitations; passing local checks does not prove external links, governance state, or deployment.
6. **Write actionable findings.** For each material issue, name the file/section or line, explain the failure or unsupported claim and its consequence, cite evidence or reproduction, and suggest the smallest useful correction. Distinguish blockers from non-blocking suggestions and unresolved questions. Combine duplicates and avoid padding the review with style preferences.
7. **Give a bounded recommendation.** Use **Ready for the stated scope**, **Changes needed**, or **Unable to assess**, with the reason and remaining risks. A narrow review can be complete while publication or a specialist review remains pending. If nothing material was found, say so within the checked scope rather than certifying that the contribution has no defects.

## Return

- Version, purpose, scope reviewed, and recommendation.
- Findings ordered by consequence, each with location, evidence, impact, and a practical correction.
- Checks independently run, author-reported checks, and unrun or blocked checks, clearly separated.
- Remaining questions, access limits, and any necessary specialist or human decision.

When an example would help, consult [the worked contribution review](references/worked-example.md). Keep the report concise when the contribution is small.

## Boundaries

Return the review to the human unless posting to a named destination is authorized. Do not submit a platform approval, request changes publicly, merge, deploy, assign work, promise rewards, or rank contributors as a side effect of reviewing. Do not repeat secrets or private information found in a diff; identify the affected location and recommend appropriate handling privately. The author and maintainers remain responsible for decisions.
