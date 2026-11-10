# Worked example: a source-backed contribution review

This is a training example, not a submitted proposal, real contributor review, or decision by 1Hive. It shows how [check sources](../../check-sources/SKILL.md), [review a contribution](../../review-contribution/SKILL.md), and [develop a proposal](../../develop-proposal/SKILL.md) fit together. The short input below is deliberately flawed.

## 1. Sample request and contribution

**Sample human request:** “Review this onboarding draft against the repository. Suggest corrections and outline a small pilot for the digest idea. Keep everything local; do not post it.”

**Sample onboarding draft, revision A:**

> Every contribution must first be accepted through proposal 0001. Once your proposal is merged, the Contributor Rewards pool automatically pays you Honey. Personal agents can already subscribe to a weekly 1Hive activity digest. The site provides portable Markdown skills that work without a shared model account.

This request authorizes a review, corrections, and a draft outline. It does not authorize subscriptions, a Forum post, a funding request, or starting the pilot.

## 2. Evidence boundary

**Repository snapshot inspected:** `654576bdb2705d3c3de77796e1707150c43df400`, the baseline used to prepare this example, on 2026-11-10 UTC. The paths below refer to that local revision. Their relative links open the documents shipped alongside this example, which may change in later revisions. To reproduce the historical check in a checkout containing that commit, read the files with `git show <revision>:<path>`.

**Not checked:** live GitHub issues and pull requests, Forum activity, deployed site contents, Gardens configuration or balances, and any on-chain payment records. The example makes no claim about their current state. Repository evidence can settle what this documented workflow says, not whether a separate reward or digest service exists elsewhere.

### Source observations

- **S1: [Contribution guide](../../../CONTRIBUTING.md), “Choose a useful change” and “When a proposal helps.”** It says small, reversible site and documentation improvements can go directly to a focused pull request, and the proposal process is a working draft rather than adopted DAO-wide policy.
- **S2: [Proposal 0001](../../../proposals/0001-improvement-process.md), “Suggested proposal states.”** “Merging it does not itself adopt its recommendations.” The proposal's status is Working draft and decision is pending at this revision.
- **S3: [Contribution guide](../../../CONTRIBUTING.md), “Submit for review.”** “Submitting or merging a change does not automatically create a claim to Honey.”
- **S4: [Agent entry point](../../../AGENTS.md), “What exists in this first slice.”** “Automatic summaries, subscriptions, agent identity or reputation systems, and agent-specific Honey rewards remain possible future work.”
- **S5: [Skills library](../../README.md).** Skills are plain Markdown with name and description metadata. The library requires no model provider, runtime, central account, API key, or installer. That does not mean a human's chosen agent runs without an account or cost.

These observations are about one repository snapshot. S3 and S4 do not prove that no reward or digest service could exist anywhere in the community.

## 3. Claim check

All rows use the revision and check date above.

| Claim in revision A                                                                | Assessment   | Evidence and reasoning                                                                                                                           | Correction or next check                                                                                                          |
| ---------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Every contribution must first be accepted through proposal 0001.                   | Contradicted | S1 allows small changes through ordinary pull requests; S2 is a working draft, not a mandatory adopted process.                                  | A separate working proposal is useful for larger changes; it is optional for small, reversible fixes.                             |
| Merging a proposal automatically pays the contributor Honey.                       | Contradicted | S2 separates merging a draft from adopting it; S3 explicitly denies automatic entitlement from merging.                                          | Contribution and funding decisions are separate. Verify any particular funding process and approved request at its source.        |
| The Contributor Rewards pool is currently funded and executing automatic payments. | Not verified | This is an implied premise of the preceding sentence. No live pool configuration, funds, execution mechanism, or payment records were inspected. | Do not publish it as fact. Inspect the relevant deployment and decision/execution evidence before making a current funding claim. |
| This repository foundation already offers digest subscriptions.                    | Contradicted | S4 lists automatic summaries and subscriptions as possible future work at this revision.                                                         | The repository supplies an on-demand public-activity summary workflow, not a subscription service.                                |
| The skills are Markdown and require no shared model account.                       | Supported    | S5 describes the format and library requirements.                                                                                                | Keep the claim scoped to this library; do not imply that using an agent has no cost or account requirements.                      |

Notice the difference between **contradicted** and **not verified**. The documented automatic-entitlement claim can be corrected. The current pool state remains unknown; a repository disclaimer is not a substitute for examining the deployment.

## 4. Review returned to the human

**Recommendation: Changes needed.** Reviewed the four-sentence sample draft, revision A, against the five repository observations above. This was a documentation and evidence review, not a code, security, or live governance review.

1. **Blocker, sentence 2: promised automatic payment.** The wording could cause contributors to commit time expecting compensation. S2 and S3 do not support that promise. Remove it, separate contribution from funding, and do not infer a pool's current state from a wiki link.
2. **Blocker, sentence 1: invented mandatory process.** S1 and S2 allow a shorter contribution path and do not establish proposal 0001 as adopted policy. Describe the optional working-draft route instead.
3. **Blocker, sentence 3: unavailable capability claimed for this foundation.** S4 identifies automated subscriptions as future work. Describe on-demand summaries and label a recurring digest as a proposal.

**Suggested replacement:**

> Small, reversible contributions can use the normal pull-request workflow. For work that needs a durable plan, the repository offers a working-draft improvement-proposal process. Contribution does not automatically earn Honey; verify any funding opportunity through its current process. You can ask your own agent for an on-demand, source-linked summary of public activity. The library provides portable Markdown workflows and does not require a shared model account.

**Checks performed:** compared the claims with the named repository sections at the recorded revision. No code or proposed local patch was executed, so build, lint, tests, and visual checks were not run for this sample review. A real patch to site copy would still need the repository checks and appropriate visual inspection. No review was posted, no contribution accepted, and no funding or subscription created.

## 5. A proportionate proposal outline

Correcting the copy above is a small documentation change and does not need a separate proposal. The requested digest pilot would introduce a new workflow, so a short working draft can clarify what is being proposed. The outline below is illustrative, not an approved project, assigned task, or scheduled service.

### Try a human-requested public-activity digest

- **ID:** Unassigned
- **Status:** Working draft
- **Scope:** Contributor workflow experiment
- **Delivery owner:** Unassigned; no contributor has committed
- **Decision:** Pending; no funding or publication authorization

**Outcome.** Test whether a human can use the existing summary skill to understand a week's relevant public activity and identify one useful next step.

**Current state.** S4 and S5 establish that the repository provides reusable workflows rather than an automated subscription service. The [existing summary skill](../../summarize-public-activity/SKILL.md) describes an on-demand, dated, source-linked digest. Active discussions and any overlapping digest work have not been checked; that is a dependency before starting a real pilot.

**Proposed change.** Try one manually requested digest for a consenting participant using their existing agent. Define topics, a seven-day UTC window, accessible public sources, and the desired format before research. Return it privately to that participant. Gather feedback only if the participant chooses to provide it. Do not add a scheduler, mailing list, public posting, private-source integration, or reward mechanism.

**Alternative.** Improve the existing skill using a repository-only example first. That is cheaper and needs no live participant, but cannot test whether real activity coverage is useful. A recurring service may eventually be worthwhile, but would introduce consent, delivery, maintenance, and cost questions this pilot need not solve.

**Delivery plan.** After a human agrees to participate and an owner agrees to deliver, check overlapping work and current source access. Prepare one digest, then record permitted feedback and proposed skill changes. A later documentation patch should follow normal maintainer review. Keep personal feedback private unless permission to share it is given. No budget is requested or approved. Account or model costs depend on the participant's tools and must be agreed before incurring charges.

**Validation.** Every material factual claim should link to evidence; the period, timezone, check time, coverage gaps, and distinctions between proposals and outcomes should be clear. The participant should be able to trace one item to its original source and say whether the digest helped them choose a next step. Treat one participant's result as one observation, not proof of community demand. If sources are inaccessible, report the coverage limit rather than manufacture a complete digest.

**Risks and recovery.** A partial source set could hide important activity; label its limits. Stale status could mislead; check the latest relevant entries. Publishing feedback could expose personal information; keep it private absent permission. Stop after the one digest if it is not useful. There is no recurring job or subscription to unwind.

**Decision and authority.** The participating human chooses whether to commission the private digest and what it may read or deliver. Maintainers decide any repository changes. Wider distribution, recurring delivery, funding, and governance actions require their own applicable authorization. None is granted by this outline.

**Open questions.** Who wants the digest, what topics matter, which public sources are accessible, and who will deliver it? These remain unresolved, not hidden commitments.

## Try the workflows on your own contribution

Start with the actual draft or diff, its version, and the decision it supports. Preserve the useful parts, check consequential claims, and return concrete corrections. Use a working proposal only when the work benefits from one. Do not copy this example's dates, evidence assessments, or unverified pool status as current facts.
