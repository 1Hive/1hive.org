---
title: First contribution launchpad
description: Eight small contribution ideas with sources, clear finish lines, and prompts for the personal agent you already use.
---

Make one useful thing someone else can review. You can start with a browser, a local draft, and an hour. Coding and an agent are optional.

**New here?** Start with [[contributions/Explain one governance term|one clearer explanation]]. Prefer checking facts? [[contributions/Verify one infrastructure reference|Verify one infrastructure reference]]. Comfortable with code? [[contributions/Reproduce the contributor setup|Test the contributor setup]].

These are **candidate ideas**, not assigned issues, confirmed vacancies, funded bounties, or commitments from maintainers. Choose one, check whether it is still needed, and agree on scope before doing substantial work. A contribution does not automatically earn Honey, reputation, or a paid role.

## Choose a small outcome

The time ranges below are suggested first-session limits, not delivery estimates. Stop with useful evidence if the work grows beyond them.

### Explain and research

- **[[contributions/Explain one governance term|Explain one governance term]]** · Writing · 30–60 minutes. Add one source-backed definition where a newcomer first needs it.
- **[[contributions/Verify one infrastructure reference|Verify one infrastructure reference]]** · Research · 45–90 minutes. Check one documented destination and record what it does and does not establish.
- **[[contributions/Prepare a bounded public digest|Prepare a bounded public digest]]** · Research and writing · 60–90 minutes. Turn one week of public activity into a short, source-linked briefing.

### Test and review

- **[[contributions/Test the keyboard contribution path|Test the keyboard contribution path]]** · Design and accessibility · 45–60 minutes. Follow the route from the homepage to a usable task without a mouse.
- **[[contributions/Review one proposed website change|Review one proposed website change]]** · Review · 45–90 minutes. Check one part of an existing change and return evidence the author can use.
- **[[contributions/Test five newcomer searches|Test five newcomer searches]]** · Content and usability · 30–60 minutes. Find out whether common questions lead to the right wiki page.

### Build and improve workflows

- **[[contributions/Reproduce the contributor setup|Reproduce the contributor setup]]** · Development · 60–90 minutes. Run the documented setup from a clean checkout and make any failure reproducible.
- **[[contributions/Try the wiki improvement workflow|Try the wiki improvement workflow]]** · Agent-assisted documentation · 45–90 minutes. Use one shared skill on one real passage and check the result yourself.

## Before you start

1. **Pick a brief and a limit.** Read its sources and finish line. You do not need to complete all eight.
2. **Check current work.** Read the latest [issues](https://github.com/1Hive/1hive.org/issues), [pull requests](https://github.com/1Hive/1hive.org/pulls), and any relevant [Forum discussion](https://forum.1hive.org). Help an existing effort rather than duplicating it. Read-only research and private drafts are a good starting point; posting or claiming work is a separate action.
3. **Choose the right version.** These briefs were prepared against [website commit 654576b](https://github.com/1Hive/1hive.org/tree/654576bdb2705d3c3de77796e1707150c43df400) on 10 November 2026. That version was in [draft PR #1](https://github.com/1Hive/1hive.org/pull/1), not merged or deployed, when checked. Verify the latest branch and page before assuming the same gap still exists.
4. **Keep authority clear.** Read the [contribution guide](https://1hive.org/CONTRIBUTING.md) and [Code of Conduct](https://1hive.org/CODE_OF_CONDUCT.md). No task here requires a wallet connection, token transfer, vote, account registration, or model credentials.

The repository issue search returned no issues when these briefs were prepared, and PR #1 was the only pull request returned. This is a dated discovery note, not proof that nobody is working on a topic. Current ownership and community demand still need checking.

## Work with your agent

Each brief includes a copyable starting prompt. Review it, set the scope you want, and use the personal agent you already have. The prompt asks for evidence and a private result first. It does not grant permission to publish, spend money, start a paid session, or act in community governance.

When reviewing an unpublished preview, use the matching repository files or replace the site address in a prompt with the preview address. Links to raw guides and skills below use the live site, which may contain a different version. The [reviewed repository snapshot](https://github.com/1Hive/1hive.org/tree/654576bdb2705d3c3de77796e1707150c43df400) provides the source version used for these briefs.

If you prefer to work directly, follow the same brief without the prompt. See [[Participate with your agent]] for the shared instructions and reusable skills.

## Return something reviewable

Keep your handoff short:

- The problem, the intended reader, and the specific result.
- The exact page, branch or commit checked, source links, and the date.
- Your draft, patch, reproduction steps, or before-and-after evidence.
- Checks that passed, failed, or could not run, plus any remaining questions.
- Any agent assistance and what you personally verified.

For local website edits, follow the repository checks: `npm run check`, `npm test`, `npm run build`, and `npm run check:site`. Inspect visible changes on desktop and mobile. A research-only brief can end with a source-linked note; do not invent code changes just to submit something.

Return the result privately first. When you decide to share, GitHub is the home for maintained website work and the Forum is useful for longer public reasoning. A small fix can use the normal review path; [[Improvement proposals|a separate improvement proposal]] is optional unless the change needs a durable plan. Maintainers decide what is merged, and funding follows its own [[Curating community contributions|community process]].
