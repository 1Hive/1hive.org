---
name: summarize-public-activity
description: Prepare a dated, source-linked summary of a defined period of public 1Hive activity for a human.
---

# Summarize public activity

## When to use

Use when a human wants to catch up on public discussions, repository work, or governance proposals. This is an on-demand workflow, not an installed notification or monitoring service. Read [AGENTS.md](../../AGENTS.md) first.

## Inputs

- A date range and timezone. If absent, use the last seven days in UTC and state that assumption.
- Topics or projects of interest.
- Public sources available to the agent and the intended audience.

## Workflow

1. Use the [infrastructure map](https://1hive.org/Navigating-core-community-infrastructure) to locate relevant original sources. Read the [website repository](https://github.com/1Hive/1hive.org) and relevant project issues, pull requests, and releases where accessible. Consult a governance interface only when its current status can be verified.
2. Record the period covered, when each source was checked, and any pagination, access, or coverage limits. Do not present a search snippet as a complete discussion.
3. Read the latest relevant entries before reporting a status. Distinguish a proposed idea, an active discussion, an approved decision, merged code, and a deployed change. A vote or comment alone is not proof of an outcome.
4. Group changes by topic, remove duplicates, and prioritize decisions, useful contributions, blockers, and opportunities that match the human's interests.
5. Link each substantive claim to its original source. Include dates and attribute views to their authors when necessary. Separate observed facts from your interpretation and suggested next steps.
6. Return the digest to the human. If publication to a wider audience is requested, verify the destination and authorization before sending.

## Return

- Date range, timezone, sources checked, and last checked time.
- A short summary of meaningful changes, each with a source link.
- Open questions or decisions the human may want to review.
- Coverage limits and sources that could not be checked.

If nothing material was found, say so within the checked sources; do not claim nothing happened across all of 1Hive.

## Boundaries

Do not infer consensus from activity counts or promise funding from a proposal. Do not copy private conversations into a public digest. Do not schedule recurring work, subscribe the human, send unsolicited replies, vote, or transact as a side effect of summarizing. Ask separately if the human wants an ongoing workflow and the agent can actually support it.
