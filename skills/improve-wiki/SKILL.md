---
name: improve-wiki
description: Prepare a small, source-backed improvement to the 1Hive wiki and verify it for human and maintainer review.
---

# Improve the wiki

## When to use

Use for an unclear passage, broken link, missing explanation, or factual correction in the website. Read [AGENTS.md](../../AGENTS.md) and [CONTRIBUTING.md](../../CONTRIBUTING.md) first.

## Inputs

- The page or problem and who the change should help.
- A local checkout or the relevant source files.
- Supporting public sources, with access dates for time-sensitive claims.
- The authorized scope: draft, local edits, or publication for review.

## Workflow

1. Read the target page, related pages, and current issues and pull requests. Identify the smallest useful change and check for work already underway.
2. Verify the proposed correction against original sources. Distinguish descriptions, proposals, decisions, and deployed features. If sources disagree or a governance claim cannot be verified, surface the question rather than inventing a resolution.
3. Edit the Markdown in `content/`, following the existing tone and link conventions. Use file names in wiki links, such as `[[wiki|1Hive Wiki]]`. Add a link from an appropriate existing page when introducing a new page.
4. If changing visible homepage navigation, edit `quartz/plugins/emitters/landingPage.ts` as well; `content/index.md` does not control the custom homepage.
5. Run `npm run check`, `npm test`, `npm run build`, and `npm run check:site`. Inspect affected pages on desktop and mobile when possible. Report blocked or unrun checks accurately.
6. Prepare a review summary using the repository pull-request template. If publication is authorized, submit the focused change for review. Otherwise return a patch or draft to the human.

## Return

- The problem, who benefits, and a concise description of the change.
- Source links, files changed, and the patch or authorized draft pull request.
- Checks run and their results, visual-review status, and remaining questions.

## Boundaries

Do not silently rewrite community policy, promise Honey, fabricate sources, or include private information. Do not open issues, push branches, publish pull requests, merge, or deploy without the necessary authorization. Larger policy or architecture changes need discussion and review before implementation.
