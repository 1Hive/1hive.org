---
name: develop-proposal
description: Turn a 1Hive improvement idea into a scoped, source-backed working proposal with a delivery plan, review criteria, and clear decision authority.
---

# Develop a proposal

## When to use

Use when an improvement spans several contributions, introduces a process, or needs a durable decision record. Read [AGENTS.md](../../AGENTS.md), the [proposal workflow](../../proposals/README.md), and [template](../../proposals/TEMPLATE.md). A small, reversible fix can use an ordinary issue or pull request; do not manufacture a proposal requirement.

Before formal on-chain improvement proposals, research deployed dependencies, authority, existing obligations, failure modes, and alternatives. An early idea can remain a [contribution concept](../../contributions/CONCEPT.md) or research note until those questions are understood. Do not prematurely turn a possible protocol direction into an executable proposal.

## Inputs

- The problem, intended beneficiaries, and the human's desired outcome.
- Relevant discussions, existing work, and available evidence.
- Constraints such as time, maintenance capacity, cost, or affected systems.
- Authorized work: research, a draft, local implementation, or a specific publication action.

Ask only for missing information that prevents a useful draft. Mark unresolved ownership, funding, and decisions as unknown rather than assigning them.

## Workflow

1. **Check the starting point.** Read relevant issues, pull requests, proposals, and original sources. Record what was checked and when; if live sources are inaccessible, say duplicate-work and current-status checks remain incomplete. Use [check sources](../check-sources/SKILL.md) for consequential or disputed claims. Separate today's behavior from the desired outcome.
2. **Choose the decision's scope.** Identify who is affected and which existing authority can decide. Repository maintainers can decide repository changes within their remit. Funding, contracts, covenants, and on-chain actions need their applicable governance process; a repository draft cannot substitute for it. If the decision path cannot be verified, make resolving it a dependency.
3. **Define the smallest useful result.** Describe success in observable terms and state non-goals. Compare meaningful alternatives, including a smaller change or doing nothing. Prefer an increment people can try over a speculative system that needs several new services to be useful.
4. **Write a working draft.** Use the template in proportion to the change. Keep the ID **Unassigned** until a maintainer assigns one. Start at document stage **Working draft**; advance the stage according to document maturity, independently of the decision. Keep the decision **Pending** until a scoped decision is supported by dated evidence. Record funding and delivery separately. Name delivery owners only when they have agreed. Separate cost estimates or funding requests from approved budgets, including currency, assumptions, and any recurring maintenance burden.
5. **Plan delivery and review.** Define increments, dependencies, the evidence each will produce, and acceptance checks. Address material privacy, security, accessibility, operational, and economic risks as applicable. Include a rollback or recovery path. Identify specialist review when the work exceeds the drafter's evidence or expertise.
6. **Make the decision easy to review.** Summarize the specific choice, unresolved questions, and feedback needed from affected people. Use [review a contribution](../review-contribution/SKILL.md) to examine the draft before handoff. Do not confuse a persuasive case, a positive comment, a merged document, and an authorized decision.
7. **Return the draft or authorized local change.** Keep implementation, publishing, and external coordination within the human's scope. If the draft later advances, record the decision maker or mechanism, date, approved scope, and evidence. Accepted, implemented, merged, and deployed are different claims and need their own evidence.

## Return

- A short recommendation: a focused contribution or a working proposal, and why.
- The complete draft or local file, with problem, sources, scope, alternatives, delivery plan, checks, risks, and decision authority.
- Open questions, assumptions, and the next action requiring human or maintainer input.
- What was actually prepared or checked, and what remains unverified. No invented approval, owner, budget, or deployment.

When an example would help, consult [the compact worked draft and source-backed review](../review-contribution/references/worked-example.md).

## Boundaries

This skill prepares work; it does not establish policy or authorize publication, spending, votes, signatures, or transactions. Do not open a discussion, claim a task, assign someone, or commit the human to delivery as a side effect of drafting. Stop the affected action when permissions or decision authority are unclear; continue independent research and record the blocker.
