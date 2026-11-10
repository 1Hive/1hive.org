---
title: Test five newcomer searches
description: Check whether five practical questions lead a newcomer to the right page, then propose one focused improvement.
contribution_status: candidate
---

[[First contribution launchpad|← All contribution ideas]]

**Candidate idea · Content and usability · First session: 30–60 minutes**

## Why this is useful

The wiki has guidance for contributing, funding, proposal planning, infrastructure, and personal agents. Those page names may not be the words a new reader searches for. Testing a small set of actual questions reveals whether existing answers can be found before adding more content.

## Scope and sources

In a named version of the wiki, try these five searches and record the first useful result, its position, and whether the page answers the question:

1. `first contribution` → [[How you can contribute]] or [[First contribution launchpad]].
2. `get paid` → [[Curating community contributions]], including its warning that work does not guarantee Honey.
3. `proposal template` → [[Improvement proposals]].
4. `personal agent` → [[Participate with your agent]].
5. `dispute` → [[Navigating core community infrastructure]], with the Celeste reference.

These are expected destinations to evaluate, not claims about current search rankings. If one query fails, propose the smallest accurate wording or navigation change to an existing page. Avoid keyword stuffing, duplicate pages, or a search-engine rewrite.

**Evidence basis:** The [wiki index](https://github.com/1Hive/1hive.org/blob/654576bdb2705d3c3de77796e1707150c43df400/content/wiki.md) and [search component](https://github.com/1Hive/1hive.org/blob/654576bdb2705d3c3de77796e1707150c43df400/quartz/components/Search.tsx), inspected 10 November 2026. Search outcomes still need a browser check.

## Done when

- All five queries have a result or an explicit not-tested status, with the site revision and date.
- You distinguish “not found,” “found but unclear,” and “answered.”
- A proposed change addresses one observed failure without changing funding expectations or governance rules.
- If you edit a page, repeat all five queries and the repository checks to catch regressions.

## Coordinate and stop

Check for search fixes and content changes already underway. If all five questions are answered, return the useful baseline instead of manufacturing a change. Stop if the next step requires broader search architecture work. Keep publication separate from the private test report. This candidate is not a funded task.

## Copy a starting prompt

```text
Read https://1hive.org/AGENTS.md and check existing search work.
Test the wiki queries “first contribution”, “get paid”, “proposal
template”, “personal agent”, and “dispute” in a named version.
For each, record the first useful result and whether it answers
the question accurately. Propose one small, evidence-backed
content change only if needed, then describe how to retest it.
Return the report and any draft privately. Do not publish or
imply that contributing automatically earns Honey.
```
