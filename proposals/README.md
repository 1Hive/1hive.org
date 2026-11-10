# 1Hive improvement proposals

Use this directory to develop improvements that benefit from a durable record of the problem, proposed change, review, and outcome. Start small and update the proposal as the work teaches us more.

**Process status: working draft.** This is a proposed workflow for this repository, not an adopted DAO-wide governance policy. It creates no funding entitlement, voting rule, or authority over contracts or shared assets.

## Choose the shortest useful path

- **Small, reversible website, documentation, or tooling improvement:** use an issue or pull request with a clear explanation and checks. A separate improvement proposal is optional.
- **Change spanning several contributions, introducing a new process, or needing a durable decision record:** copy [TEMPLATE.md](TEMPLATE.md) and develop a working draft here.
- **Funding, contract, covenant, or on-chain governance change:** use the relevant existing governance process. A repository proposal can support research and planning, but cannot approve or execute that change.

See [CONTRIBUTING.md](../CONTRIBUTING.md) for the website workflow and the [infrastructure map](https://1hive.org/Navigating-core-community-infrastructure) for governance references. Check the current rules at their source before relying on them.

## Browse proposals

The [wiki proposal index](https://1hive.org/proposals/) is generated from each public proposal's metadata and groups records by document stage. Each detail page uses the normal wiki layout, search, and navigation. The Markdown in this directory is the source of truth; there is no hand-maintained status table.

Document stage describes the writing: **working-draft**, **in-review**, **stable**, or **archived**. It is independent of acceptance, funding, and delivery. A stable document can still have a pending decision. An accepted proposal can still be unfunded and unfinished.

An identifier is only a reference. Inclusion here or merger of a draft does not mean the proposal has been accepted. Record the actual decision and its scope before changing the decision status.

## Prepare a draft

1. Check existing issues, pull requests, and proposals for overlapping work.
2. Copy the template to a descriptive Markdown file in this directory. Keep `stage: working-draft` and `id: unassigned` until a maintainer assigns the next unused number. A file name such as `draft-clearer-onboarding.md` is enough to begin.
3. Explain the smallest useful outcome, who can deliver it, evidence, risks, and how to check the result. Mark unknowns rather than inventing commitments.
4. Open a draft pull request when you are ready and authorized to share it. Add its path to the explicit public allowlist in `quartz/plugins/emitters/agentResources.ts` and link relevant discussion. The browser includes only allowlisted proposals. Do not create a duplicate Forum discussion unless it helps reach the people affected.
5. Keep implementation and review moving where authorized. Use [proposal 0001](0001-improvement-process.md) as a suggested workflow, not a requirement to wait for broad consensus on routine maintenance.

All proposal files are intended to be public. Do not include private conversations, credentials, or unnecessary personal information. Agent-assisted drafts remain the submitting contributor's responsibility.

## Metadata and validation

Fill in the YAML frontmatter from [TEMPLATE.md](TEMPLATE.md). Keep `id` quoted when it is numeric, use real `YYYY-MM-DD` dates, and use **Unassigned** for an owner or decision authority that is not yet known. Do not name someone as an owner without their agreement. `updated` cannot precede `created`.

- `id`, `title`, `summary`, `stage`, `scope`, `owner`, `created`, and `updated` are required. Numbered filenames begin with their ID, such as `0001-improvement-process.md`. Unassigned drafts begin with `draft-`.
- `decision` requires `status`, `authority`, and an `evidence` array. Status is `pending`, `accepted`, `declined`, `deferred`, `withdrawn`, or `superseded`.
- `funding` requires `status` and `evidence`. Status is `not-requested`, `not-recorded`, `requested`, `approved`, or `declined`. Approval of a proposal does not imply approval of funding.
- `delivery` requires `status` and `evidence`. Status is `not-started`, `not-recorded`, `in-progress`, or `complete`. A merge is not a deployment; explain which result the evidence supports.
- Use an empty evidence array (`[]`) only when there is no recorded event. Decision statuses other than `pending`, funding statuses `requested`/`approved`/`declined`, and delivery statuses `in-progress`/`complete` require a `date` and at least one public HTTP(S) evidence URL. The date cannot be later than `updated`.

Validation checks structure, dates, IDs, and evidence links' syntax. It cannot verify that an authority is legitimate, evidence is accurate, or linked governance status is current. Review those facts before recording a decision. Keep the decision's scope, funding terms, and delivery checks in the body.

Run `npm run check:proposals` to validate metadata, then the usual repository checks. Both `npm run build` and `npm run serve` generate the stage index and detail pages in `content/proposals/` before Quartz processes them. This directory is generated and ignored by Git; never edit it directly. Restart the preview after changing proposal sources or the allowlist. `npm run generate:proposals` can regenerate just those pages. Removed sources are removed from the generated directory on the next build, while hand-authored files are protected from replacement.
