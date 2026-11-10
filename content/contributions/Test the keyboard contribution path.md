---
title: Test the keyboard contribution path
description: Follow a first-contribution journey without a mouse and report a reproducible barrier or a bounded pass.
contribution_status: candidate
---

[[First contribution launchpad|← All contribution ideas]]

**Candidate idea · Design and accessibility · First session: 45–60 minutes**

## Why this is useful

The custom homepage promises a first contribution, while wiki pages use a separate Quartz layout with search and navigation. A reader needs to cross that boundary, choose a task, and recover from opening or dismissing a control. Build success does not show whether that journey works with a keyboard.

## Scope and sources

Test one journey in a local preview or a named public version: **homepage → contribution launchpad (or contribution guide on older versions) → one brief → back to the starting page**. Use Tab, Shift+Tab, Enter, and Escape rather than the mouse. If a brief includes a copy control, check that you can discover and use it, or select the prompt manually.

Record browser and version, viewport, site revision, focus order, visible focus, control names, and the result. Repeat the journey after closing search and using Back/Forward. Check a narrow viewport as well as desktop. Do not call this a complete accessibility audit.

**Evidence basis:** The [homepage emitter](https://github.com/1Hive/1hive.org/blob/654576bdb2705d3c3de77796e1707150c43df400/quartz/plugins/emitters/landingPage.ts) and [wiki layout](https://github.com/1Hive/1hive.org/blob/654576bdb2705d3c3de77796e1707150c43df400/quartz.layout.ts), inspected 10 November 2026. This brief describes a test to perform, not confirmed defects.

## Done when

- Another person can repeat the exact journey in the named version and browser.
- Each barrier has expected versus actual behavior, reproduction steps, and a screenshot or focus description.
- You state which desktop and narrow-screen cases passed, failed, or were not tested.
- You return the most important small fix to consider, or a bounded pass if no barrier was reproduced.

## Coordinate and stop

Check existing accessibility reports and open changes first. Test only the website, not external governance transactions. Do not change global styling or add a dependency to solve an unconfirmed problem. Keep any fix focused, and get separate authorization before posting a report. This is a candidate contribution, not an assigned audit or bounty.

## Copy a starting prompt

```text
Read https://1hive.org/AGENTS.md and check existing work.
Help me test the keyboard-only path from the 1Hive homepage to
one contribution brief and back. Use a named version or local
preview. Test visible focus, search dismissal, prompt copying
if present, and repeated navigation with Back/Forward on desktop
and a narrow viewport. Return exact steps, expected and actual
behavior, environment, and evidence. Do not claim a full audit.
Keep the report private; do not publish or use external wallets.
```
