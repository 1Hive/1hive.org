---
id: unassigned
title: Save the AI Commons
summary: Test how shared evidence, proposed rules, and enforcement affect a toy commons, then use the findings to improve 1Hive contribution practices.
stage: working-draft
scope: Open commons-management research and candidate improvements to contributor workflows
owner: Unassigned
created: "2026-11-11"
updated: "2026-11-11"
decision:
  status: pending
  authority: Unassigned
  evidence: []
funding:
  status: not-requested
  evidence: []
delivery:
  status: not-started
  evidence: []
---

# Save the AI Commons

**Working draft for review.** This proposes research, not an adopted governance system, funded project, or authorized experiment. No researcher, compute provider, or reviewer is committed. The title poses a challenge; success is not assumed.

## Outcome

Build a small, reproducible test of whether agents can use shared evidence and revisable rules to keep a common resource productive while still producing useful individual outcomes. Publish the methods, failures, costs, and matched-condition replays so others can inspect what helped and why.

The intended 1Hive result is practical: evidence for improving contribution proposals, review skills, governance procedures, and possible reputation signals for independent human/agent pairs. A successful simulator run is only a reason to test a corresponding practice in a bounded contributor workflow, not a reason to adopt a live rule.

## Why this matters to the 1Hive contributor economy

The [proposed AI-era direction](https://1hive.org/Why-now) depends on people contributing through agents they configure and control themselves. More available compute does not automatically produce a healthy commons. Contributors can pursue different objectives, see different evidence, consume shared review capacity, and benefit from work they did not maintain. Useful rules must support productive contributions without exhausting the resources and attention that make future contributions possible.

A commons game makes some of these tensions observable and cheap to vary. In OpenHarvest, agents receive individual rewards from a shared resource whose future productivity depends on restraint. Adding explicit proposal and rule-revision mechanisms creates a toy model of contributors seeking individual benefit while negotiating how to preserve a common pool.

The connection is a sequence of tests:

1. **Shared evidence:** if a common observation record improves decisions, test whether contribution proposals become easier to review when they include source-backed assumptions, resource use, and effects on other contributors.
2. **Proposed and revisable rules:** if a rule works only under one resource condition, develop proposal skills that require monitoring, revision triggers, and stop conditions rather than presenting one policy as permanently correct.
3. **Enforcement and legitimacy:** if results depend on compulsory restrictions, identify the authority and enforcement cost that a real process would require. Do not describe forced compliance as voluntary cooperation between independent contributors.
4. **Contribution and reputation:** if individual reward hides harm to shared productivity, explore records that include reproducibility, maintenance, effects on others, and verified outcomes. Simulation scores must never become rankings of real people or automatic Honey entitlements.

OpenHarvest does not model Honey's token economics, real proposals for spending, human consent, informal relationships, or 1Hive's deployed governance. Its renewable apples are not a valuation model for Honey. The research can reveal mechanisms and failure cases worth examining, not determine the right real-world institution.

## Current state and evidence

Sources checked on **2026-11-11**:

- The [OpenSocialJax paper, version 1](https://arxiv.org/abs/2610.13710v1), evaluates eight language models on hidden-rule social dilemmas. Its tested OpenHarvest teams eventually depleted the resource, despite some successful rule discovery. This is the authors' result under their settings, not a universal claim or an independently reproduced result.
- The [upstream README at commit 6edcd417](https://github.com/cooperativex/OpenSocialJax/blob/6edcd417684286d6630394e6960b764a32ae55e6/README.md) describes held-out configurations, individual rewards, noncommunicating agents, persistent within-run notebooks, recorded runs, and GIF rendering. A proposal channel and rule-enforcement layer would be our extensions, not existing benchmark features.
- Upstream includes [scripted OpenHarvest reference policies](https://github.com/cooperativex/OpenSocialJax/blob/6edcd417684286d6630394e6960b764a32ae55e6/tests/harvest_gate.py). Its advertised no-key demo is OpenCleanup and checks plumbing; it is not evidence that this OpenHarvest study is valid or cheap.
- The repository has an [Apache-2.0 license](https://github.com/cooperativex/OpenSocialJax/blob/6edcd417684286d6630394e6960b764a32ae55e6/LICENSE). Dependencies, model terms, and any additional artifacts need their own checks before reuse or release.
- [GovSim-SelfGovern, version 2](https://arxiv.org/abs/2609.22600v2), already studies agents authoring executable Python rules for a shared fishery, testing proposals in a sandbox, and voting on rules that persist across rounds. Its reported improvement under abundance did not extend to scarce-resource regimes. Voting also depended on framing and how consequences were presented, including immediate versus deferred removal of a participant. These are findings from that study's conditions, not results reproduced here.

Agent-authored commons rules, sandbox testing, and collective ratification are therefore established related work, not this proposal's novelty claim. The narrower proposed comparison uses hidden-rule OpenHarvest to test fixed versus adaptive rules at matched information and intervention budgets, and the same adaptive proposal mechanism under binding enforcement versus nonbinding advice. The aim is to separate discovery, adaptation, and enforced compliance before considering a bounded 1Hive workflow trial. A focused comparison with GovSim-SelfGovern and other related work must establish whether this design adds useful evidence; novelty remains unproven. For comparisons using the same proposal process, hold its instructions, ballot format, and consequence-preview policy constant so presentation effects do not masquerade as benefits of enforcement.

The 1Hive site's [agent participation guide](https://1hive.org/Participate-with-your-agent) supplies a contribution model to investigate, not evidence that an agent economy or reputation service is already operating. No overlapping open issue or pull request was found in the website repository when checked on the date above; this was not an exhaustive search of community work. Research novelty and practical benefit remain unproven.

## Research question and hypotheses

**Question:** under unfamiliar resource dynamics and self-interested participants, which combinations of shared evidence, revisable rules, and enforcement improve sustained productivity, and at whose expense?

- **H1, evidence:** a bounded shared observation record improves productivity compared with the original noncommunicating baseline. It may instead amplify mistakes or cost more than it saves.
- **H2, adaptation:** revisable rules outperform a fixed rule after a resource change, at matched information and intervention budgets. They may instead cause delay, oscillation, or capture.
- **H3, enforcement:** some apparent gains disappear when the same adaptive rules become advice only or when one participant is outside enforcement. This distinguishes a useful cooperative practice from reliance on universal control.

Freeze primary outcomes, minimum useful effects, welfare guardrails, exclusions, and analysis before confirmatory runs. These hypotheses are not results.

## Proposed experiment

Use a pinned OpenHarvest version and five independently acting agents. Keep model version, action horizon, sampled maps and rules, decoding, role prompts, and observation access matched across conditions. Start with one model to understand the mechanism; a separately budgeted extension can compare heterogeneous models and configurations.

Compare five conditions:

1. **Original baseline:** the upstream observation and reward setup, with no added shared record or governance layer.
2. **Shared evidence:** a capped record of observations agents choose to share, with no binding rule.
3. **Fixed enforced rule:** the same shared record plus a preregistered resource-preservation rule enforced by the harness.
4. **Adaptive enforced rule:** the same information and enforcement, with bounded proposals that can revise the rule.
5. **Adaptive advice:** the identical proposal process and resulting rule format, but agents can ignore it. No action masking or automatic penalties.

The first proposed mechanism is deliberately small: a minimum resource floor and a rotating access schedule, with revisions at fixed intervals. Agents can submit evidence-linked amendments within fixed parameter ranges; a declared vote threshold and tie/no-proposal default determine the next rule. The feasibility specification must fix the exact parameters, voting rule, report size, revision interval, and monitoring inputs before model trials. This is an experimental choice, not a recommendation to replace 1Hive's decision process.

The rule layer may use only the declared observation record, not hidden environmental rules or an unannounced global view. All comparable intervention conditions receive the same information. If enforcement needs privileged state, give that state to the matched advice control and label the intervention as privileged; do not attribute its advantage to governance alone. Log each proposed action, intervention, executed action, and rule revision. Action masking can obstruct travel as well as harvesting, so those side effects count as costs.

Evaluate stable environments first, then a preregistered change in resource dynamics. Include matched populations with no scripted exploiter and with one greedy participant, both inside and outside the enforcement boundary. Define the exploiter's objective and capabilities in advance. A later capture or false-report test is an extension, not an unbudgeted addition to the first pilot.

## Measures and validity controls

- **Primary outcome:** cumulative team return over a fixed horizon, alongside whether resources remain productive at that horizon. Record resource stock and time to depletion; a preserved orchard with no useful harvesting is not success.
- **Distribution:** each participant's return, the lowest return, and the return to cooperators versus exploiters. Do not hide individual losses behind a team average.
- **Costs:** model calls and tokens, wall time, communication volume, rejected actions, idle time, rule changes, and review effort. Report economic return and compute cost separately unless a conversion is explicitly justified.
- **Adaptation:** recovery after the announced experimental change, unnecessary restrictions, and repeated rule reversals.

Use separate development and held-out configurations. Pair conditions on environment seeds and rotate participant roles; do not treat individual agents, steps, or trials in one run as independent samples. Report uncertainty across independent runs and stochastic model repeats. Choose confirmatory sample sizes from a measured pilot variance and declared effect size, not a convenient number of successful replays.

Include greedy and leave-everything scripted controls, and a clearly labelled oracle reference for debugging only. An oracle that knows hidden rules must not be counted as a deployable governance success. Reproduce the local baseline before comparing with the paper; changed horizons or prompts make this a new comparison, not an exact replication.

Preregister replay selection, show at least one failure, and publish aggregate results with any illustration. A striking video must not substitute for the full distribution. If only enforced conditions improve, report that limitation directly.

## Delivery plan and resource gates

Each gate needs a named owner, review, and explicit authorization before execution. Preparation of this draft satisfies none of those gates.

1. **Specify and inspect:** finish the mechanism, causal comparisons, license inventory, and reproducibility plan. Record the smallest 1Hive practice each comparison could inform.
2. **CPU-only design test:** with scripted policies and no model endpoint, check resource dynamics, action translation, controls, intervention logs, replay correctness, and runtime. Stop if the controls cannot distinguish productive restraint from trivial inactivity or if the mechanism accesses hidden information.
3. **Measured model pilot:** use one agreed model and a capped set of runs to measure feasibility, variability, context growth, and cost. Stop if the baseline cannot act competently enough for the comparison, outcomes are insensitive to the intervention, or the cap is reached. This is exploratory, not confirmatory evidence.
4. **Held-out study and open report:** run only the reviewed, separately budgeted design. Include failed and interrupted runs with the preregistered handling, then have an independent contributor reproduce a small subset.
5. **Translate cautiously:** propose one reversible contribution-workflow trial, such as an evidence-and-revision section in a proposal skill. Measure review time, useful outcomes, and burden with consenting contributors before recommending wider use.

CPU support is reported upstream; runtime here has not been measured. Model cost depends on agents × steps × trials × conditions × seeds × repeats, plus proposal and review calls. Successful resource preservation may lengthen runs that otherwise terminate early. Token growth, retries, hosted inference, and human review add uncertainty. No dollar estimate or free-compute guarantee is offered. Before gate 3, record the provider, model/version, prices, call/token limits, currency, spending ceiling, runtime ceiling, and who pays. Local inference requires an agreed hardware allocation instead.

No model training, paid inference, subscription session, pooled credentials, or automatic resource donation is approved. An owner's permission and provider terms govern each contribution of compute.

## Open outputs and alternatives

Proposed outputs are a versioned experiment specification, minimal extension and tests, licensed configurations, seed manifest, sanitized action/rule logs, analysis scripts, cost ledger, full result tables, reproducible replays, and a short 1Hive implications note separating observations from recommendations. Verify what provider outputs may be released and omit credentials and private material. A negative result or failed validity gate is a useful published outcome if publication is authorized.

A cheaper alternative is to reproduce scripted commons controls and stop with a methods note. Another is to improve contributor proposal skills directly and measure them in real work; that offers greater immediate relevance but less control over causal variables. If this simulator cannot isolate a mechanism that matters to contributors, prefer that narrower work instead of expanding the experiment for its story.

## Decision and authority

**Pending.** Reviewers should assess the causal design, relevance to independent contributors, ownership, costs, and release plan. Maintainers can decide whether to include this draft in the website. A separate scoped decision is needed to run or fund research, and any later change to community practices, shared funds, contracts, or governance must follow the applicable authority and process. This draft requests no funding and creates no reward entitlement.

## Progress and outcome

Prepared as a working draft on 2026-11-11 from primary sources. No study, simulator modification, model evaluation, or contributor trial has been performed for this proposal. There are no results, accepted recommendations, allocated funds, or delivery commitments to record.

## Agent assistance

An agent helped research sources and prepare the draft. Scientific review, source-license review, and review by affected contributors remain necessary. Publication should include the repository checks actually performed and their limitations.
