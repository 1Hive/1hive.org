---
id: unassigned
title: A Hive That Outlives Its Agents
summary: Test which shared knowledge structures and curation rules let successive agents build on prior work, then improve 1Hive contributor orientation and handoffs.
stage: working-draft
scope: Open knowledge-inheritance research and candidate policies, skills, and procedures for contributors
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

# A Hive That Outlives Its Agents

**Working draft for review.** This proposes research into shared knowledge, not a running knowledge service or an adopted contributor policy. No experiment, model call, funding, researcher commitment, or access to private contributor material is authorized by this document.

## Outcome

Test whether useful knowledge survives the complete replacement of an agent cohort, and which structures and curation rules make that inheritance reliable when tasks change or stored claims are wrong. Measure successful action and avoided rediscovery, not the ability to repeat inherited text.

The intended public good is a reproducible evaluation and a small, portable set of candidate practices for shared knowledge. For 1Hive, the result should help answer what we should ask contributors to document, verify, retrieve, revise, and hand off so the community becomes more capable even as people and their agents come and go.

## Why this matters to the 1Hive contributor economy

The [agent participation approach](https://1hive.org/Participate-with-your-agent) lets volunteers use different models, configurations, personal context, and tools. They will not share one agent's memory or remain available forever. Without a reliable way to inherit knowledge, each new human/agent pair may rediscover basic facts, repeat failed approaches, follow obsolete guidance, or mistake a proposed action for an authorized one. That consumes contributor compute and scarce human review time.

The [knowledge commons direction](https://1hive.org/Knowledge-commons) proposes shared, source-linked context whose status and editorial history are visible. This research would test some of the choices needed to make that useful:

1. **Structure:** does a claim with evidence, scope, version, and uncertainty orient a new agent better than an equally bounded pile of notes?
2. **Skills:** do explicit procedures for checking evidence, resolving contradictions, and retiring stale advice improve task completion enough to justify their overhead?
3. **Governance:** who may propose, verify, revise, or quarantine a shared claim, and what record should survive a correction? Can a new contributor challenge inherited guidance without silently destroying history?
4. **Portability:** does useful knowledge transfer to a different model or configuration, or does it depend on a particular agent's hidden state and writing conventions?

The causal bridge is to test these choices under controlled turnover, turn supported findings into candidate knowledge and handoff procedures, then evaluate them on a small set of real public 1Hive orientation tasks. For example, a finding that evidence-backed claims reduce stale-rule failures would motivate testing dated sources and supersession records in contributor skills. It would not automatically justify a new centralized editor, mandatory platform, or broad surveillance of contributors.

The unit of value is a next contributor who can do useful work with less avoidable effort and fewer errors. More stored text, model calls, or attractive summaries do not establish that value, and no research score becomes a person's reputation or entitlement to Honey.

## Current state and evidence

Sources checked on **2026-11-11**:

- The [OpenSocialJax paper](https://arxiv.org/abs/2610.13710v1) studies discovering hidden rules through repeated interaction. Its [pinned upstream README](https://github.com/cooperativex/OpenSocialJax/blob/6edcd417684286d6630394e6960b764a32ae55e6/README.md) describes OpenCleanup's hidden tool recipes and individually rewarded harvesting, plus notebooks and evidence ledgers retained across trials. These existing memory channels must be reset, not mistaken for newly demonstrated inheritance.
- [Voyager](https://arxiv.org/abs/2305.16291v2) already studies reusable skill libraries and transfer without changing model weights. A library helping a later run is not, by itself, a novel result.
- [DRAGged into Conflicts / CONFLICTS](https://arxiv.org/abs/2506.08500v2) examines conflicting retrieved sources. It motivates explicit stale/conflicting-evidence tests, but does not establish that this proposed governance design works. This proposal does not depend on redistributing that benchmark.

The candidate contribution here is a controlled comparison of knowledge curation under full cohort turnover, changed rules, and different models. Novelty still needs a focused related-work review before publication as a research result. No overlapping open issue or pull request was found in the website repository on the date above; this is not an exhaustive community-work search. The website's knowledge commons remains exploratory.

## Research question and hypotheses

**Question:** at a fixed knowledge and compute budget, which ways of organizing and reviewing inherited knowledge let replacement agents perform useful work, recover from stale or false claims, and avoid repeating experiments?

- **H1, useful transfer:** structured inherited claims improve early task performance and reduce redundant discovery compared with free-form notes or no inheritance.
- **H2, governance:** evidence checks and explicit correction procedures reduce harm from false or obsolete claims compared with the same structure without those procedures. Review can also slow work or wrongly reject discoveries.
- **H3, portability:** a benefit observed with one model persists, or degrades measurably, when a different model or agent configuration becomes the inheritor.

Freeze outcomes, minimum useful effects, guardrails, and the analysis before confirmatory testing. Improvement over no memory alone would support ordinary retrieval value, not establish the value of curation or community governance.

## Proposed experiment

Begin with a pinned OpenCleanup configuration, where agents must learn tool recipes to perform useful cleaning. Hold a world configuration fixed across a short sequence of generations, resetting its physical state comparably at each generation boundary. Replace every agent instance and clear all within-agent state. Only the declared shared artifact is inherited; model weights remain fixed and there is no fine-tuning.

Use five conditions with the same task, observations, action tools, and total inference/review budget:

1. **No inheritance:** fresh agents receive the task and environment interface only.
2. **Free-form notes:** the previous cohort can leave a bounded text document.
3. **Structured claims:** the same storage budget is organized into claims with applicability, evidence references, uncertainty, version, and supersession links, without a verification gate.
4. **Evidence-checked claims:** the same schema plus a bounded review procedure for admitting, challenging, correcting, and retiring claims.
5. **Ordinary retrieval control:** retrieve from a capped record of prior observations without the structured curation workflow. This checks whether improvements are explained by access to history rather than the proposed governance.

The proposed review procedure lets contributors submit claims, requires a cited observable event or reproducible test before a claim is marked verified, preserves rejected and disputed states, and marks replaced claims as superseded rather than silently overwriting them. Verification uses only logged observations that a contributor could access, never the hidden rule key. A fixed review budget limits how much checking can be done. Claims without enough evidence remain provisional; a fluent model judgment is not ground truth.

Start with a matched artifact comparison: derive alternative representations from the same observation record and check that no condition receives additional factual content by accident. Then, if authorized, test closed-loop inheritance, where each condition produces the artifact its next generation receives. The latter measures the whole knowledge-production process and must not be described as isolating formatting alone.

Use a preregistered sequence length and generation budget. A feasibility pilot may start with three generations and one model; it is not enough to establish long-term accumulation. A separately budgeted study should vary the inheriting model and at least one relevant configuration, using matched originating artifacts and both transfer directions where feasible. Never infer provider-neutral portability from same-model restarts.

## Task changes, corruption, and reset controls

Test three separately reported situations:

- **Stable rules:** can new agents use inherited recipes rather than rediscovering them?
- **Changed rules:** alter one declared family of rules at a fixed generation boundary. Give all conditions the same indication of whether a change may have happened. Measure revalidation and recovery, not blind loyalty to old knowledge.
- **False inherited claims:** inject a preregistered number of plausible but unsupported or misleading claims into the same candidate material. Track admission, rejection, correction, and downstream harm. Do not cherry-pick corruptions after seeing which condition fails.

A process reset must clear prompts, conversation history, notebooks, observation ledgers, plans, recent-event buffers, cached retrieved content, replay/resume files, and any persisted workspace state visible to the next cohort. Reuse model weights, not agent state. The evaluator may retain private scoring state, but agents and curators must not read it. Synthetic sentinel facts in excluded state should be unrecoverable; clean-process reconstruction and an artifact manifest should verify the boundary.

Use held-out procedural rule sets and newly assigned labels to reduce prior-knowledge shortcuts. Randomize agent roles and model order where relevant. Preserve only the designed inheritance channel, not environment damage from a prior cohort, unless physical-state inheritance is explicitly tested as a separate factor. Avoid adding commons-governance interventions from the [companion proposal](draft-save-ai-commons.md) to the first study; they would confound knowledge transfer with enforcement.

## Measures and validity

- **Useful transfer:** environmental return and cleaning accomplished in a fixed early window of each new generation, plus time to its first verified productive action. Include failure to reach that event within the horizon.
- **Avoided rediscovery:** repeated recipe tests where applicable evidence was available, distinguished from justified revalidation after a change.
- **Knowledge quality:** supported, false, disputed, and stale claims; correction delay; unsupported authority claims; and harmful actions induced by bad inheritance.
- **Curation burden:** writing, retrieval, verification, and correction calls/tokens, wall time, reviewer effort, and storage. Report total cost per useful outcome, not only action-generation cost.
- **Portability:** effects by source model, recipient model, configuration, and task condition, including failures.

Count provenance and metadata against storage and retrieval budgets. Use a common byte cap for the stored artifact, document each model's tokenization, and cap actual retrieved context and total inference separately. Fix truncation/retrieval policies before testing. Comparable conditions must have the same access to allowed raw observations; any verifier assistance must be charged to the treatment's budget. A structured library that simply receives more evidence or more inference is not a fair comparison.

Analyze independent world-and-lineage runs, not individual steps or successive generations as independent samples. Report distributions and uncertainty, account for stochastic model variation, and distinguish controlled representation results from the full curation process. Calibrate sample sizes after a measured pilot and reserve held-out rules and corruptions for the final comparison.

Ground truth for scoring comes from the environment and test harness, withheld from agents. Use blinded, independently checked rubrics where human judgment is necessary. Publish unsuccessful lineages and overhead. If the best curation policy does not beat ordinary retrieval at equal resources, that is a useful reason to prefer the simpler system.

## Delivery plan and resource gates

No execution is approved. Each step below requires a named owner, a scoped authorization, and review of its resource limits.

1. **Specify and inspect:** settle reset boundaries, candidate artifact schema, curation rights, budgets, corruption cases, and closest prior work. Check upstream code and licenses.
2. **CPU-only validity test:** use scripted cohorts and synthetic artifacts, without model endpoints, to test resets, leakage, evaluator isolation, inherited-state handling, and changed-rule scoring. Stop if a cohort can recover excluded state or if the scorer rewards recall without useful behavior.
3. **Small-model feasibility:** test a bounded number of same-model lineages to measure task competence, call volume, variance, and storage overhead. Stop if all agents fail before knowledge could help, the reset cannot be verified, or cost exceeds the approved cap.
4. **Held-out and cross-model evaluation:** authorize a separate measured budget, fix the analysis, and run the comparison with stale/false inheritance and model replacement. Without this stage, report a pilot, not a validated portable knowledge system.
5. **1Hive translation:** prepare one candidate orientation and handoff skill plus a minimal claim record. If separately approved, test it against current documentation on public tasks such as identifying the current contribution route, distinguishing a proposal from an adopted decision, and finding applicable source evidence. Use independently reviewed answers and record uncertainty, time, and corrective effort. Do not use private chats or score named contributors.

No local runtime or dollar budget has been measured. Work scales with conditions × independent lineages × generations × agents × steps, plus writing, retrieval, verification, and model-transfer comparisons. Review can dominate inference savings. Before a model pilot, identify the model/version, prices or hardware allocation, call/token limits, maximum spend and currency, runtime cap, payer, and stopping rule. A provider's historical demo price is not an estimate for this experiment.

Compute must be voluntarily supplied with its owner's permission and within provider terms. No subscription allowance, paid service, training run, or credential pooling is authorized. A funding request, if needed, must be separate and evidence-backed.

## Open outputs and risks

Proposed outputs are the cohort-reset harness and tests, artifact schemas, curation procedure, synthetic task/corruption generators, permitted logs, run manifests, analysis and cost accounting, and a short report mapping findings to candidate 1Hive policies and skills. Include a compact lineage visualization showing what survived and what failed. Release only material whose code, data, model-output, and redistribution terms have been checked. Keep private conversations, personal account state, credentials, and unnecessary personal information out of the corpus.

Toy tool recipes do not capture human turnover, tacit knowledge, consent, social trust, or every task agents perform. Strong results would justify a bounded public-knowledge pilot, not a claim that institutional knowledge has been solved. Evidence gates can privilege incumbents, reject new discoveries, or preserve a stale consensus; measure those failures and keep disputed states and correction paths visible.

A simpler alternative is a source-linked handoff template tested directly on public 1Hive tasks. Ordinary retrieval may be sufficient. If the controlled study cannot separate inheritance from leaked state or justify curation cost, stop with a documented negative result or narrow the work rather than building a new knowledge platform.

## Decision and authority

**Pending.** Review is needed on the research design, ownership, resource cap, public corpus, release terms, and relevance to contributor work. Maintainers may decide whether this draft belongs in the website. They are not thereby approving research spending, a new knowledge-governance policy, mandatory contributor tools, or a reward system. Any later policy, funding, permissions, or protocol change needs the applicable authority and explicit scope.

## Progress and outcome

Prepared as a working draft on 2026-11-11. No reset test, simulator change, model evaluation, cross-model transfer experiment, or contributor trial has run for this proposal. There are no accepted recommendations, allocated funds, or delivery commitments.

## Agent assistance

An agent helped research sources and prepare this draft. Human scientific and contributor review is still required. A later submission should list the repository checks actually performed and the remaining evidence and licensing limits.
