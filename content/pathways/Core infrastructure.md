---
title: Core infrastructure
description: Build the Honey tools, agent workflows, skills, documentation, and governance knowledge that make future contributions easier.
contribution_lane: infrastructure
---

[[First contribution launchpad|← Contribution launchpad]]

## The lasting question

How can people and their agents understand Honey, contribute effectively, and govern shared resources without already knowing the entire system?

A useful contribution leaves the next person more capable: a reliable read, a reproducible workflow, a clearer interface, or evidence that resolves a governance question.

## Existing foundations

This repository provides [agent instructions](https://1hive.org/AGENTS.md), a [skills library](https://1hive.org/skills/README.md), and [[Improvement proposals|proposal records and a working-draft process]]. Those are documents and tooling, not an autonomous contributor network or rewards service. Check the [latest website issues and pull requests](https://github.com/1Hive/1hive.org) before extending them.

[[Navigating core community infrastructure]] identifies documented governance and funding systems. The [Gardens v2 repository](https://github.com/1Hive/gardens-v2), [historical conviction-voting code](https://github.com/1Hive/conviction-voting-app), and [Celeste documentation](https://1hive.gitbook.io/celeste) are distinct starting points. A repository or interface alone does not verify a deployment's current state.

For Honey CLI work, first locate an authorized source checkout and inspect what the commands actually do. Separate implemented reads, unsigned previews, signing, and stubs. Do not assume a command is available or safe because its name appears in documentation.

## Contributions you could originate

- **Read-only Honey tools.** Produce a source-linked view of one proposal, funding route, or stewardship question. Keep decision, funding, and execution separate. Start with a manual brief and a fixture before building a general adapter.
- **Agent contribution workflows.** Build a context pack, portable skill, or review tool that helps a fresh agent produce useful work without inventing status or permissions. Test it against a real task and an unavailable-source case.
- **Documentation with a purpose.** Make a consequential workflow understandable and reproducible: choosing a funding route, checking a contribution, or using a tool safely. Verify the underlying behavior rather than polishing an obsolete description.
- **Protocol and governance research.** Map authority and dependencies, reproduce a limitation, compare alternatives, or simulate low participation and disputes. Resolve a specific uncertainty before drafting a formal on-chain improvement proposal.

These are possible contribution shapes, not assigned tasks or funded openings.

## First experiment and evidence

Choose one user and one repeated difficulty. Produce a bounded prototype or research note, record the baseline, and make the test reproducible. Can a second person or agent use it? Does it reduce errors, handoff time, or review effort? What would make you revise or stop?

For protocol work, research deployed dependencies, authority, existing obligations, failure modes, and alternatives **before formal on-chain proposals**. Local tests do not authorize deployment, voting, spending, or migration. Contributor-tool and documentation work can proceed while protocol questions remain open.

[[Propose a contribution|Shape a contribution concept →]]
