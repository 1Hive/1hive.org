---
id: "0001"
title: A lightweight improvement process
summary: Keep a durable proposal record when useful, while letting small improvements follow normal review.
stage: working-draft
scope: Website, documentation, and repository contribution workflows
owner: Unassigned
created: "2026-11-10"
updated: "2026-11-10"
decision:
  status: pending
  authority: Site and repository maintainers within their remit; other systems use their own process
  evidence: []
funding:
  status: not-requested
  evidence: []
delivery:
  status: not-started
  evidence: []
---

# A lightweight improvement process

## Outcome

Make it easier to turn a useful idea into a contribution people can inspect, improve, and build on. Keep a durable record when a change needs one, without making ordinary maintenance wait for a formal proposal or broad consensus.

## Current state and evidence

This repository contains the public website, community wiki, agent entry point, and reusable skills. [CONTRIBUTING.md](../CONTRIBUTING.md) describes the existing pull-request workflow and checks. Pushes to `v4` trigger the repository's deployment workflow.

The [infrastructure map](https://1hive.org/Navigating-core-community-infrastructure) documents separate governance systems. Their current rules and operational state must be checked at the original sources. Repository access does not confer control over those systems.

This document proposes a contribution workflow. It does not record a community vote or establish a new funding program.

## Proposed change

Use two paths, chosen by the needs of the work:

1. **Ship a focused improvement.** Small, reversible site, documentation, and tooling changes can use the normal issue and pull-request workflow. State the purpose, show the result, run the checks, and have the appropriate maintainer review it. No separate improvement proposal is required.
2. **Keep a proposal record.** Use a Markdown proposal for changes that span several contributions, introduce a new process, or need an explicit record of alternatives, risks, and decisions. Begin with a working draft and let it evolve alongside authorized implementation.

Seek feedback from people affected by a change and contributors who can help deliver or maintain it. Record specific concerns and how they were handled. Routine repository work should not require unanimous agreement, a token vote, or an invented waiting period.

Decisions remain with the people or processes that already have authority over the affected system. A maintainer may authorize a website change within their remit. That decision does not establish DAO-wide policy or authorize spending shared funds.

## Record document maturity separately

The proposal browser groups documents by maturity, not by approval or funding:

- **Working draft:** The problem and approach are being developed. Open questions are expected.
- **In review:** The document is ready for feedback from the people affected.
- **Stable:** The document is maintained as a settled reference. This does not mean its recommendations were accepted.
- **Archived:** The document is no longer being developed. Explain why and link any replacement.

Keep the decision record separate: pending, accepted, declined, deferred, withdrawn, or superseded. A decision should identify its authority, date, scope, and source evidence. Funding and delivery have their own records, too. An accepted proposal can be unfunded and unfinished; a document can be stable while its decision remains pending.

Moving a draft into the repository makes it available for review. Merging it does not itself adopt its recommendations. Update the frontmatter in this file when a record changes; the wiki page and stage index are generated from it.

## Delivery plan

The first increment is the [template](TEMPLATE.md), index, and a [wiki entry point](https://1hive.org/Improvement-proposals). Try the workflow on a real website or contributor-experience improvement, then simplify or extend it based on what helps people finish work.

Authors should name owners only when those people have agreed to take on the work. No new budget, reward program, or recurring obligation is requested by this draft.

Website and process improvements can proceed independently of protocol research. Any future on-chain change needs its own careful design, security and economic review, migration or recovery plan, and authorization through the relevant governance process. This draft proposes no contract change, dispute-resolution replacement, or governance transaction.

## Validation and risks

- A contributor should be able to find the template from the homepage or wiki and understand when a proposal is unnecessary.
- Each proposal should distinguish current behavior from proposed behavior, name its decision authority, and make its delivery status clear.
- Website changes still run the repository's normal checks. A proposal does not replace tests, security review, or maintainer judgment.
- Avoid process overhead: if an issue or pull request is enough, use it. Review the workflow after practical use rather than creating standing meetings or mandatory review periods.
- Avoid false authority: retain the working-draft label until there is an explicit, scoped decision. Protocol and funding decisions stay with their existing processes.
- The documentation can be amended or reverted through a normal pull request. Preserve decision links when changing or replacing a proposal.

## Decision and authority

**Pending.** Site and repository maintainers may choose to use this workflow for their own work. Adopting it for another system requires a decision through that system's applicable process. This working draft claims no broader adoption.

## Progress and outcome

This draft, template, and index are prepared for review. No proposal has been accepted or implemented through this draft process, and no live deployment or governance action is claimed here.

## Agent assistance

An agent helped prepare the documentation and website changes. The implementation's review record should list checks performed and any remaining limits. Human review remains necessary before publication or adoption.
