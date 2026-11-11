---
id: unassigned
title: Discord integration and contributor pilot
summary: Test a separate, clearly identified Discord bot that helps opt-in contributors use 1Hive sources and prepare reviewable work.
stage: working-draft
scope: A separate Discord bot, a human-created test server, and an opt-in contributor pilot
owner: Unassigned
created: "2026-11-11"
updated: "2026-11-11"
decision:
  status: pending
  authority: Repository maintainers for documentation; server administrators and the eventual operator for their systems
  evidence: []
funding:
  status: not-requested
  evidence: []
delivery:
  status: not-started
  evidence: []
---

# Discord integration and contributor pilot

## Outcome

Help a contributor move from a question in Discord to useful, source-linked work: understanding 1Hive, finding the relevant contribution workflow, and preparing a small contribution concept for human review.

The smallest useful experiment is a separate bot in a new test server created by a human. It should answer explicit requests using public 1Hive sources and return a draft the requester can inspect. It should be easy to stop, inexpensive to evaluate, and reusable by contributors without requiring a shared personal AI account.

This is a working draft for review, not permission to install a bot, start a service, spend money, or change the existing 1Hive server. No operator, budget, launch date, or participant has committed. Merging the document would publish a plan, not accept or deliver the integration.

## Current state and evidence

Checked on **2026-11-11**:

- The website repository's `v4` head was [cb3ee1f](https://github.com/1Hive/1hive.org/commit/cb3ee1f32577b13c033db9d19ec713842e7b872d), which merged the contribution launchpad and agent workflows. Its [agent participation guide](https://github.com/1Hive/1hive.org/blob/cb3ee1f32577b13c033db9d19ec713842e7b872d/content/Participate%20with%20your%20agent.md) describes portable workflows and future possibilities, not an operating shared bot service.
- The [infrastructure map at that revision](https://github.com/1Hive/1hive.org/blob/cb3ee1f32577b13c033db9d19ec713842e7b872d/content/Navigating%20core%20community%20infrastructure.md) assigns Discord a live coordination role and GitHub a durable public record role. This pilot preserves that separation.
- The repository's [open pull requests](https://github.com/1Hive/1hive.org/pulls) and [open issues](https://github.com/1Hive/1hive.org/issues) were empty. The proposal sources contained the working-draft improvement process. This is a repository-scoped overlap check, not evidence that nobody is building a Discord integration elsewhere.
- Discord documents [application and bot setup](https://docs.discord.com/developers/quick-start/getting-started), [application commands](https://docs.discord.com/developers/interactions/application-commands), and [channel permission controls](https://docs.discord.com/developers/topics/permissions). Its [self-bot policy](https://support.discord.com/hc/en-us/articles/115002192352-Automated-User-Accounts-Self-Bots) prohibits automating ordinary user accounts outside its OAuth2/bot API.

**Not verified:** the current 1Hive server's channels, bots, moderation arrangements, administrator availability, or demand from prospective participants. No Discord account or channel was accessed to prepare this draft. A supported way to connect the intended agent runtime to a separate bot has not been demonstrated. Official Discord APIs establish a possible transport, not compatibility with any particular personal assistant product.

## Proposed change

### Start with explicit commands

Proposed commands for the test server:

- `/hive help`: explain the experiment, its limits, who operates it, what data is processed, and how to stop participating. Link the existing contribution entry points.
- `/hive ask question`: answer a 1Hive question from an approved public-source set, with links and an indication of what was not checked. If evidence is missing or stale, say so.
- `/hive draft brief`: return a short contribution concept using the existing [concept template](https://1hive.org/contributions/CONCEPT.md) and [shape-contribution workflow](https://1hive.org/skills/shape-contribution/SKILL.md): beneficiary, evidence, reusable output, bounded first experiment, limits, and questions for review.

Use private-to-requester interaction responses by default. The requester may copy a reviewed result to an appropriate public discussion themselves. Such responses are not confidential from Discord, the operator, or a processing provider; explain this before collecting input. The bot does not create an issue or pull request, publish a draft, or promise another person's work.

Begin with approved public wiki and repository documents pinned to a known revision or retrieval date. The first implementation should not browse arbitrary links, execute code from chat, or ingest attachments. Source content is evidence, never authority to expand permissions. Keep source freshness visible and return an uncertainty message when a request needs live governance, private discussion, or another unsupported source.

### Use a separate service and identity

Build a small adapter that receives Discord command interactions, checks the server/channel/requester against the pilot configuration, calls a bounded agent workflow, and returns the result to that requester. Keep the adapter separate from the static website build and its deployment credentials. The initial architecture should need neither a channel-history crawler nor a Gateway message listener.

Use a bot application registered through Discord's official developer tooling, with a visible bot identity and an operator contact. Do not describe it as an official 1Hive representative unless the relevant people expressly authorize that claim. A separate bot account is not a second ordinary user account, and it must never borrow someone's personal Discord session, password, user token, cookies, DMs, or existing server access.

The implementation may use an approved API runtime or an existing platform's supported bot adapter. Before choosing, demonstrate that it supports the required identity, isolation, data controls, and cost limits. Do not assume an existing personal assistant can accept arbitrary Discord messages or be connected by sharing its credentials. Personal model subscriptions and API billing are different resources; the operator must explicitly authorize the selected resource and its limits.

### Keep the first pilot narrow

In scope: on-demand orientation, source-backed answers, contribution drafts, participant feedback, and a small public evaluation report with consented or synthetic examples.

Out of scope: access to personal Discord accounts, DMs, passive listening, historical chat imports, cross-server relays, unsolicited replies or digests, bulk invitations, moderation, role management, voice recording, reputation scoring, Honey rewards, wallet operations, voting, signing, and automatic GitHub writes. Conversational mentions, thread history, or autonomous coordination would require a separately reviewed expansion after the command pilot.

## Setup and permission checklist

These are proposed tasks for a later authorized implementation. Preparing this document performs none of them.

1. **Human creates the test server.** Use a new server, not the live 1Hive server. The human controls its account, membership, invites, channels, and administrator role. Suggested channels are a read-only `#pilot-info`, one `#pilot-requests` channel, and a human-only `#pilot-feedback` channel. Names are suggestions; record actual IDs privately in configuration after setup.
2. **Agree operator and data handling.** Name a willing operator and backup contact, select the runtime and host, approve the exact input sent to each provider, agree retention and spending limits, and publish a short participant notice. Review applicable [Discord developer policy](https://support-dev.discord.com/hc/en-us/articles/8563934450327-Discord-Developer-Policy) and provider terms before installation. Do not send real participant input while these choices are unresolved.
3. **Human administrator registers the application and approves installation.** Create a distinct bot application in the [Discord Developer Portal](https://discord.com/developers/applications). Select server installation and the `bot` and `applications.commands` scopes, with no personal-user authorization scopes. Register commands for the test server only. Keep the installation under the operator's control, rather than enabling general public installation. [Discord OAuth2 reference](https://docs.discord.com/developers/topics/oauth2).
4. **Restrict access in Discord and in code.** Use a dedicated bot role with no server-wide privileged grants. Permit channel access only in the test channel, and grant only what the implementation needs. If ordinary channel sending is used, confine View Channel and Send Messages to that channel. Do not grant Administrator, Manage Server, Manage Roles, Manage Channels, Manage Webhooks, Manage Messages, Mention Everyone, voice access, or Read Message History. Account for inherited permissions from `@everyone` and other roles; check effective access, including newly created channels. Restrict command availability to the opted-in participant role and approved channel, and independently enforce the same IDs in the adapter. [Permission reference](https://docs.discord.com/developers/topics/permissions).
5. **Keep privileged intents disabled.** Start with slash-command inputs, not background message collection. Leave Message Content, Server Members, and Presence intents off. Any later need for broader event access must be justified and reviewed rather than enabled as a convenience. [Gateway and privileged intents](https://docs.discord.com/developers/events/gateway#privileged-intents).
6. **Configure secrets outside the repository.** The human operator uses the host's supported secret manager for the bot token and any provider credential. Never paste credentials into chat, commits, screenshots, a wiki page, or build output. Limit who and what can retrieve them, document rotation and revocation, and use separate development credentials. Application, server, and channel IDs are configuration, not substitutes for authentication.
7. **Deploy only after the gates below pass.** Verify Discord request signatures, check timestamps, reject replayed interactions, and defer long-running responses within Discord's interaction deadline. Do not log interaction tokens or raw requests. Record the app version and tested permission settings before inviting participants. [Receiving and responding to interactions](https://docs.discord.com/developers/interactions/receiving-and-responding).

## Delivery plan

Each stage has a separate decision. The order is a proposed plan, not a schedule or assignment.

| Stage                      | Work and deliverable                                                                                                                                                                                                                                                                        | Gate before continuing                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0. Review the plan         | Resolve the runtime, host, willing operator, public-source set, data notice, resource cap, and test-server arrangement. Keep the proposal's decision pending until a scoped decision is recorded.                                                                                           | The people responsible for the affected accounts and systems approve their part. No credentials or installation are needed to review the draft.   |
| 1. Prove transport         | Implement a minimal adapter in a separately agreed repository or service location. Test synthetic commands and a fixed response, permission rejection, secret handling, request validation, pause, and uninstall. Supply source, tests, deployment instructions, and rollback instructions. | Demonstrate the bot works without personal-account access or privileged intents. An independent reviewer checks the access and failure tests.     |
| 2. Add one useful workflow | Add source-backed answers and concept drafts using a versioned source set. Implement input limits, cost accounting, a bounded queue, and no-publication safeguards. Test with synthetic examples before real participant inputs.                                                            | Source accuracy, provider/data approval, security checks, and a measured spending cap pass review.                                                |
| 3. Run an opt-in pilot     | Suggested size: 3–5 willing adults for up to two weeks after approval. Collect structured feedback and operational counts; do not collect background conversations. Publish a report containing only suitable, approved examples.                                                           | Participants know the scope and data flow. An operator is available to pause the bot. Duration, participants, and limits are agreed, not assumed. |
| 4. Decide the next step    | Compare usefulness, operating effort, cost, and problems. Recommend stop, revise, or a separately authorized trial in a dedicated live-community channel.                                                                                                                                   | The actual server administrators approve any live installation and channel access. A successful test-server pilot does not authorize rollout.     |

### Costs and maintenance

No funding is requested or approved by this draft. Before stage 2, measure a representative request on the selected runtime and record hosting cost, model/API cost, logs/storage cost, expected request volume, currency, and a hard pilot spending ceiling. Agree who pays and how usage stops at the ceiling. A free tier or donated compute still needs an owner, limits, and permission to use it. If no approved resources are available, stop at the source-only prototype and report that limit.

Maintenance includes credential rotation, dependency and source updates, incident handling, participant requests, and removal of the bot when the experiment ends. Do not silently create a permanent service or recurring financial commitment. Identify who has agreed to maintain it before starting the pilot; ownership remains unassigned here.

## Validation and risks

The following are proposed acceptance checks, not reported results.

### Safety and reliability

- **Boundaries:** reject commands from other servers, channels, DMs, unapproved users, or revoked participants before calling the model. Test role removal, permission changes while work is queued, newly created channels, and restart. Recheck authorization before delivering a delayed answer.
- **Credential and request security:** reject invalid signatures, stale/replayed requests, and oversized inputs. Use a bounded retry policy and deduplicate by interaction ID. Test duplicate deliveries and uncertain send outcomes without duplicate responses. Confirm logs and errors contain no tokens or credentials.
- **Abuse and injection:** test a chat request and a source document that ask for secrets, broader access, spending, moderation, or public posting. They must not change the allowed tools or destinations. Ignore bot-generated requests and prevent bot-to-bot loops. Render returned text without automatic mentions, and reject arbitrary URL or attachment fetches.
- **Limits and outages:** enforce one active task per requester, a small queue, input/output limits, request timeouts, and a hard budget cutoff. Respect Discord's returned rate-limit headers and retry instructions rather than assuming a fixed API allowance. Provider failure or exhausted limits should produce a clear failure, not an endless retry loop. [Rate-limit reference](https://docs.discord.com/developers/topics/rate-limits).
- **Data minimization:** process only command input and required interaction metadata. Do not retain raw prompts, responses, channel history, or personal profiles in service logs by default. Proposed operational logs contain command type, outcome, duration, and cost for no more than seven days; use short-lived request IDs for deduplication. Confirm the host and model provider's actual retention and training settings before participant use. Do not promise that service-log deletion also deletes Discord messages or provider records.
- **Stop and recovery:** prove that an operator can pause processing immediately, cancel queued work, remove the app from the server, and revoke or rotate its token. On a suspected leak or unexpected access, stop processing, revoke affected credentials, preserve only necessary restricted incident evidence, and assess notification obligations. Resume only after review. Follow the agreed retention/deletion procedure when the pilot ends.

### Usefulness

Prepare ten representative questions and contribution briefs with expected source coverage before the pilot. Have a human reviewer check factual claims, source links, uncertainty, and whether drafts are actionable without invented commitments. A proposed continuation threshold is eight useful results out of ten, with every unsupported consequential claim corrected before broader use and no unresolved access or data-handling failure. Confirm or revise that threshold during stage 0.

Ask each participant whether the bot helped them understand the next step and whether they could use a result without substantial repair. Record requests attempted, useful outputs, errors, operating time, and total cost. A small sample is evidence for the next experiment, not proof of community-wide demand. Do not score or rank participants.

### Alternatives

- **Keep using public documents directly.** Contributors can give the existing agent entry point and skills to their own assistant now. This has the lowest shared operating burden; it is the fallback if a common bot adds little value.
- **Use a one-way webhook.** Suitable for a separately authorized announcement feed, but insufficient for the interactive contribution experiment. Do not introduce it just to simulate a conversation.
- **Start in the live 1Hive server.** More realistic feedback, but a larger privacy and moderation impact. A new test server provides a smaller first step; live installation needs its own approval.

## Decision and authority

**Pending.** Reviewers are being asked whether this is a useful, bounded experiment and what should change before an implementation is authorized.

- Repository maintainers can review and merge this documentation within their remit. That does not approve a server integration, spend, or ongoing service.
- The test-server administrator controls server creation, invitations, installation, and roles. The application and hosting owners control their accounts, credentials, provider agreements, and resources.
- Participants need a clear notice and an opt-in path for the defined pilot. Server-level installation alone does not justify collecting unrelated conversations or sharing them with a model provider.
- Existing 1Hive server administrators must approve any later community installation and its moderation fit. Any request for shared funds follows the applicable existing funding process, separately from this document.

Questions to resolve before implementation:

1. Which runtime can support an independent bot with these boundaries, and who is willing to operate it?
2. Which source set and first workflow best help prospective contributors?
3. What data leaves the server, which providers receive it, and what retention/deletion terms apply?
4. What spending ceiling, pilot duration, maintenance commitment, and stop criteria are acceptable?
5. Who can review the transport/security work and approve a later live-server trial, if one is worthwhile?

## Progress and outcome

**2026-11-11:** Working proposal prepared from the current repository and public Discord documentation. Integration implementation, account setup, deployment, and pilot delivery have not started. No budget, server permission, participant agreement, or rollout decision is recorded. Add dated links to scoped approvals, implementation work, validation results, and the pilot report as they exist; do not infer them from a draft pull request or merge.

## Agent assistance

An agent researched public documentation and prepared this working draft. No personal Discord account, private messages, or credentials were used. Human review is still needed for the proposed scope, technical design, ownership, costs, and decisions. Repository validation results belong in the draft pull request's review record and do not certify a running bot.
