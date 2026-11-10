# 1Hive knowledge and activity map

Research snapshot: 10 November 2026, UTC. Recent-activity window: 3–10 November 2026. Older evidence is included to explain the landscape. Prepared against website commit `654576bdb2705d3c3de77796e1707150c43df400` for review, without changing published pages.

## Where things stand

**The most useful next documentation change is to reconcile the treasury map.** A July 2025 Forum announcement describes two Gardens v2 treasury pools that are missing from the June 2026 website map. The announcement is evidence of the process described then, not verification of today's funds, configuration, or execution. [Treasury announcement](https://forum.1hive.org/t/updates-to-1hives-treasury-process/5846), [website infrastructure map](https://1hive.org/Navigating-core-community-infrastructure).

There are three distinct documentation layers:

- **Published orientation:** `1hive.org` explains the community, contribution paths, and infrastructure. The inspected map displays 26 June 2026. GitHub's `v4` branch points to `0afd48e`, also dated 26 June. A documentation page is not a live governance status feed. [Published map](https://1hive.org/Navigating-core-community-infrastructure), [public branch](https://github.com/1Hive/1hive.org/tree/v4), [commit](https://github.com/1Hive/1hive.org/commit/0afd48e8a72a70a929350559ec38bd63d673c87e).
- **Proposed participation guidance:** website PR #1 is open and draft, with head `654576b`. Its agent workflows and improvement process are review material, not an adopted community policy or a verified live service. Link to the PR or exact revision until publication is confirmed. [PR #1](https://github.com/1Hive/1hive.org/pull/1).
- **Legacy depth:** `wiki.1hive.org` contains historical onboarding, Pollen, swarms, and covenant explanations. Its corresponding GitHub repository's latest returned commit is from October 2024; the Pollen file's latest returned change is from January 2023. A recent search crawl does not make the underlying guidance recent. [Legacy wiki](https://wiki.1hive.org/), [repository commit](https://github.com/1Hive/wiki/commit/36bd2a64f0d7ae85b4ea725957917a016ca19417), [Pollen history](https://github.com/1Hive/wiki/commits/master/getting-started/pollen.md).

**Public development is broader than the homepage suggests.** Markee has November review work, Gardens v2 has October merged maintenance, and Quests has October interface work. These are repository observations. None establishes production deployment, current funding, or an invitation to take over a task. See the dated activity section below.

## Which source to use

| Question                                         | Start here                                                                                                                                                                               | What the source establishes                                 | What to verify elsewhere                                                                           |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| What is 1Hive and how can I help?                | [Main website](https://1hive.org/) and [wiki index](https://1hive.org/wiki)                                                                                                              | Public orientation and documented contribution paths        | Current maintainers, task availability, and permission to publish                                  |
| How should a personal agent contribute?          | [Website PR #1](https://github.com/1Hive/1hive.org/pull/1), then [revision-pinned AGENTS.md](https://github.com/1Hive/1hive.org/blob/654576bdb2705d3c3de77796e1707150c43df400/AGENTS.md) | Proposed provider-neutral workflow and boundaries           | Whether the PR has merged and the pages have actually deployed                                     |
| What did earlier onboarding mean?                | [Legacy wiki](https://wiki.1hive.org/) and [its source repository](https://github.com/1Hive/wiki)                                                                                        | Historical explanations and file history                    | Whether programs, bot commands, roles, and payment arrangements still apply                        |
| Why was a governance change proposed?            | [Forum](https://forum.1hive.org/) and the exact topic                                                                                                                                    | Public reasoning, author statements, and discussion         | Later replies, an actual decision, and execution evidence                                          |
| What is being built or reviewed?                 | [1Hive repositories](https://github.com/1Hive) and exact issues or PRs                                                                                                                   | Technical scope, branches, review and merge state           | The deployed version, current owner, and whether an issue has been superseded                      |
| Where are Honey governance and treasury records? | [Infrastructure map](https://1hive.org/Navigating-core-community-infrastructure) and [treasury announcement](https://forum.1hive.org/t/updates-to-1hives-treasury-process/5846)          | Documented entry points and historical process descriptions | Chain, contract, current covenant, pool rules, balances, proposal state, and execution             |
| How is a dispute meant to work?                  | [Celeste documentation](https://1hive.gitbook.io/celeste)                                                                                                                                | Protocol design and vocabulary                              | The particular deployment and governance integration; a generic guide is insufficient              |
| Who is coordinating now?                         | [Discord invitation](https://discord.gg/1hive)                                                                                                                                           | A community entry point linked by the website               | Current channels, participants, permission boundaries, and any conversation not publicly available |

Prefer evidence that directly answers the question: a commit for code, a PR's merge state for review, an executed transaction for an on-chain action. A newer general webpage does not override a more specific primary record automatically.

## Stale or conflicting guidance to resolve

### 1 Treasury paths are incompletely mapped

The website's [funding page](https://1hive.org/Curating-community-contributions) emphasizes Gardens v1 for Honey Common Pool governance and lists four v2 pools. Paul’s 8 July 2025 [treasury announcement](https://forum.1hive.org/t/updates-to-1hives-treasury-process/5846) describes an sDAI-funded v2 Common Pool and a Treasury Management pool, with Council Safe execution for the latter. The post distinguishes this system from a future migration of the Honey Common Pool. Do not collapse these into a claim that all v1 governance has been replaced.

The two linked destinations are [Common Pool 67](https://app.gardens.fund/gardens/100/0x71850b7e9ee3f13ab46d67167341e4bdc905eef9/0xe2396fe2169ca026962971d3b2e373ba925b6257/67) and [Treasury Management 66](https://app.gardens.fund/gardens/100/0x71850b7e9ee3f13ab46d67167341e4bdc905eef9/0xe2396fe2169ca026962971d3b2e373ba925b6257/66). The text fetch returned no usable pool state. Confirm both configurations and execution paths before rewriting the map as current operational guidance.

**Suggested correction:** add a separately dated treasury section, cite the announcement, distinguish HNY and sDAI pools, and retain an explicit current-state verification requirement. Do not repeat the post's historical treasury valuation as a current balance.

### 2 Legacy Pollen rewards are presented without a current validity check

The [Pollen page](https://wiki.1hive.org/getting-started/pollen) describes weekly Honey distributions and Discord registration commands in the present tense. Its source file's latest returned commit is 20 January 2023, for Discord link maintenance. The [Pollen repository's latest returned commit](https://github.com/1Hive/pollen/commit/a9df4b5b40f89efa3d4306a136fd2c26fa769915) is dated 6 February 2022. These are freshness warnings, not proof that Pollen has ended.

**Suggested correction:** label the instructions historical or unverified until a maintainer and recent distribution evidence establish what still operates. Do not tell newcomers that participation or registration guarantees payment.

### 3 Celeste explanations mix planned and existing infrastructure

The legacy [community covenant](https://wiki.1hive.org/community-covenant) says enforcement depends on Celeste's completion. The newer website links a Celeste deployment and describes it as governance infrastructure. The covenant source file's latest returned change is [11 October 2021](https://github.com/1Hive/wiki/commit/de62de17289891161c631dacf8c7af3216e02fb8). This is a temporal mismatch, not a basis for choosing the binding covenant or deciding whether a dispute can be opened today.

**Suggested correction:** preserve historical text with context and direct operational readers to the covenant and integration configured for their specific deployment. Do not infer current juror opportunities or deadlines from the docs.

### 4 Proposed agent features must not be described as published

[PR #1](https://github.com/1Hive/1hive.org/pull/1) was opened on 10 November 2026 and is still a draft. Its head matches this research base. The web fetch of `https://1hive.org/AGENTS.md` did not return accessible content, and the public `v4` ref remains at the June commit. This is enough to withhold a publication claim, but not to diagnose every deployment endpoint.

**Suggested correction:** use revision-pinned GitHub links in previews and review packets. After an authorized merge, separately verify the actual public URLs. Keep automatic digests, notifications, identity, reputation, and agent rewards labeled as future possibilities unless independently implemented and verified.

### 5 Repository activity is not a release or a working service

GitHub's organization overview can change when reviews or other repository activity occur. The newest default-branch commit may be older, and a merged PR may target a development branch. For example, Markee PR #51 is merged into `dev`, while release PR #50 remains open against `main`. [PR #51](https://github.com/1Hive/markee/pull/51), [PR #50](https://github.com/1Hive/markee/pull/50).

**Suggested correction:** every digest should retain the PR's base branch, merge state, source date, and whether deployment was checked. Do not count PR titles or issue checkboxes as shipped capabilities.

## Dated public activity

The following is a curated sample, not a complete organization changelog. PR status was checked directly after discovery. Test counts in PR descriptions are author reports, not tests rerun for this research.

### During the 3–10 November window

- **Website participation foundation:** [1hive.org #1](https://github.com/1Hive/1hive.org/pull/1), created 10 November, is open and draft against `v4`. It adds agent participation guidance, contribution workflows, and a draft proposal process. Status: proposed, not merged.
- **Markee payment and input work:** [#59](https://github.com/1Hive/markee/pull/59), [#60](https://github.com/1Hive/markee/pull/60), and [#61](https://github.com/1Hive/markee/pull/61), created 9 November, are open. Their descriptions address uncertain transaction outcomes, reusable/reclaimable streaming deposits, and amount parsing. The PRs form a dependency chain: #60 is based on #59's branch and #61 on #60's. Status: review work; no deployment claim.
- **Markee streaming accounting:** [#51](https://github.com/1Hive/markee/pull/51) merged into `dev` on 9 November. Its description explicitly requires a separate implementation rollout and says existing clones retain their implementation. Status: merged development code, deployment unverified.
- **Markee release:** [#50](https://github.com/1Hive/markee/pull/50), created 7 November, remains open against `main`. The description calls its Juicebox forwarder experimental, unaudited, and outside production. Status: proposed release, not shipped evidence. The checked `main` ref is [80f7db9](https://github.com/1Hive/markee/commit/80f7db9ba4cc48be2817e6b952b85188b561f273), dated 6 November.
- **Gardens advisory-board proposal:** [gardens-v2 #975](https://github.com/1Hive/gardens-v2/pull/975) was opened and closed on 10 November without merging. Status: closed proposal. Its presence in a recent-activity search is not evidence that an advisory-board service is available.

### Background outside the window

| Repository                                                              | Latest commit returned in the sampled default-branch history                                                               | Interpretation                                                                                                                                                                                                    |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Gardens v2](https://github.com/1Hive/gardens-v2)                       | [30 October 2026, 58d8301](https://github.com/1Hive/gardens-v2/commit/58d830131176a1ec7da7a32d274a80d6313f3cc3)            | [PR #972](https://github.com/1Hive/gardens-v2/pull/972) merged migration and upgrade-script fixes. Its description says no production transactions had been sent for that work. Later deployment was not checked. |
| [Quests](https://github.com/1Hive/quests)                               | [31 October 2026, 967a323](https://github.com/1Hive/quests/commit/967a323c58819b42819ebe0a61303bb7eff299e6)                | Recent commits concern token display and expiry handling. This does not establish an available funded quest.                                                                                                      |
| [Honeyswap interface](https://github.com/1Hive/honeyswap-interface)     | [16 September 2026, 11635d8](https://github.com/1Hive/honeyswap-interface/commit/11635d862c824fb3bd2bf88ba6309b67a0126aba) | The latest returned entries update a sponsored message. Do not treat their recency as proof of protocol maintenance.                                                                                              |
| [Celeste dashboard](https://github.com/1Hive/celeste-dashboard)         | [30 May 2024, 134682c](https://github.com/1Hive/celeste-dashboard/commit/134682c929ebf101d6441fdeab9372cdf5527def)         | Older dashboard history. Current application health and disputes are unverified.                                                                                                                                  |
| [Dynamic issuance app](https://github.com/1Hive/dynamic-issuance-app)   | [19 April 2023, f37d515](https://github.com/1Hive/dynamic-issuance-app/commit/f37d5159d82fe92f754d6ff1ff88c18a6e851cd8)    | Historical implementation reference, not current monetary-policy state.                                                                                                                                           |
| [Conviction voting app](https://github.com/1Hive/conviction-voting-app) | [5 November 2021, 27df568](https://github.com/1Hive/conviction-voting-app/commit/27df568fcf640dc3f1f96fb534c1cf3029422ac7) | Useful for the earlier app design. Do not confuse it with Gardens v2's current implementation.                                                                                                                    |

## An agent's first useful contribution

1. Read the main website for orientation, then inspect the exact source repository and contribution instructions for the chosen task. Use PR #1's instructions as proposed guidance, not community-wide authority.
2. Ask the human to choose a bounded outcome: a sourced correction, review, documentation patch, or activity brief. Establish permission separately for publishing, contacting people, and financial or governance actions.
3. Check existing issues and PRs before writing. The Markee review chain above already addresses several obvious problem areas; do not open duplicate work from a stale summary.
4. Record the source URL, original publication/change date, check date, branch or chain where relevant, and whether the evidence is a proposal, merged code, or verified execution.
5. Produce a small result with its sources and unresolved questions. When a read is incomplete, preserve the gap instead of filling it with an assumption.

### Recommended follow-up order

1. **Reconcile the treasury map.** Verify pools 66 and 67 and identify the current operational record before changing routing guidance. This has the greatest chance of preventing a newcomer from using the wrong funding path.
2. **Review and publish the participation foundation only when authorized.** Check PR #1, then verify public URLs after any deployment. Avoid mixing this research snapshot into evergreen policy.
3. **Add explicit historical context to legacy onboarding.** Start with Pollen and the covenant's Celeste wording. Preserve provenance rather than silently deleting useful history.
4. **Use an evidence-aware activity digest.** Begin with selected repositories and accessible public Forum topics. Add a recurring schedule only if separately requested; this research did not create one.

## Coverage and verification limits

- Research used public webpages and read-only GitHub metadata. The organization overview, selected repo histories, and up to 30 recently updated PR search results were examined. Only selected PRs were fetched individually. This is not all 1Hive repositories, all branches, all comments, or a security audit.
- Forum root returned a 502 and `/latest` was inaccessible through the web reader. A Community category page and the treasury topic were readable as crawled content. Their crawl dates were months old. Search snippets located topics but were not treated as complete or current discussions. No claim is made that the Forum is inactive.
- Gardens v1 and Celeste yielded JavaScript app shells. The Gardens v2 community and pool pages did not yield usable configuration or balance data. No chain reads, transactions, wallet connections, voting, or contract execution were performed.
- The announcement's Snapshot link resolved to a generic page without usable voting evidence. The historical announcement was not upgraded to independently verified approval or execution.
- Discord contents were not read. Private conversations, private security advisories, wallets, and personal data were not used.
- Repository file history is evidence about that repository, not proof that every GitBook edit is synchronized there. Public pages may be cached, and statuses can change after this snapshot.
- [The companion source registry](1hive-knowledge-sources-2026-11-10.json) separates source purpose, observed state, and unverified claims. It is a research inventory, not an automatically refreshed feed.

This report and registry are kept outside `content/` and outside the raw-resource allowlist. They are review artifacts and are not added to site navigation or publication output by this change.
