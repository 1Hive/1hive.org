---
title: Try the wiki improvement workflow
description: Test one reusable agent skill on a real, small documentation question and verify the result yourself.
contribution_status: candidate
---

[[Practice and maintenance|← Practice and maintenance]]

Supporting exercise. For strategically connected work, use [[First contribution launchpad|the contribution launchpad]].

**Candidate idea · Agent-assisted documentation · First session: 45–90 minutes**

## Why this is useful

The [improve-wiki skill](https://1hive.org/skills/improve-wiki/SKILL.md) describes inputs, verification, and a private handoff. A real walkthrough can show whether those instructions produce a useful result, preserve publication boundaries, and say when evidence is missing. It is more informative than adding another untested workflow.

## Scope and sources

Choose **one passage and one question**. A useful starting point is the distinction between a repository proposal and a funding request in [[How you can contribute]] and [[Improvement proposals]]. Ask your existing agent to determine whether a newcomer can tell which path to use. It may recommend no edit if the explanation already works.

Follow the skill on the current source, then personally check every factual claim and proposed change. Keep a short, sanitized example: task input, sources, proposed result, verification, and any confusing instruction. If you find a workflow defect, propose one focused skill change rather than expanding its authority.

**Evidence basis:** The [improve-wiki skill at commit 654576b](https://github.com/1Hive/1hive.org/blob/654576bdb2705d3c3de77796e1707150c43df400/skills/improve-wiki/SKILL.md), inspected 10 November 2026. The skill is plain Markdown, not a hosted agent or an installed service.

## Done when

- The walkthrough names the skill revision, chosen passage, question, and available sources.
- A human has checked the output against the sources, including any “no change needed” conclusion.
- The example records whether the agent stopped appropriately at missing evidence and publication boundaries.
- Any proposed edit is small, reviewed, and checked as required. The example contains no private prompts, conversations, account details, or credentials.

## Coordinate and stop

Check for recent skill changes and examples before repeating them. Use the agent and permissions your human already chose; this brief does not authorize a new account, paid session, or credential sharing. Do not test safety boundaries by making real posts or transactions. Stop if the task grows into a policy decision. No reward is implied.

## Copy a starting prompt

```text
Read https://1hive.org/AGENTS.md and follow
https://1hive.org/skills/improve-wiki/SKILL.md on one question:
can a newcomer tell the difference between a website improvement
proposal and a Honey funding request? Check the latest pages
and existing work. Return a source-linked assessment and one
small draft edit only if needed, with checks and uncertainties.
Keep the walkthrough private and suitable for my review.
Do not publish, create accounts, start paid sessions, or transact.
```
