# CHANGE: Add approved site plan (Phase 2)

Date: 2026-08-04
Type: docs
ADR: none

## What changed

- docs/SITE-PLAN.md: new — durable, project-resident copy of the operator-approved braydenstrong.org
  site plan (10 locked decisions, 7-page map, Astro build approach, verification, governance path).

## Why

The planning-phase deliverable must live in the project repo so the build session finds it and it is
version-controlled with the project — not left in the transient `~/.claude/plans/` tooling directory.

## Risk

LOW

Documentation only; no code and no site behavior. The site is still unbuilt.

## Verified

- [x] Tests pass — N/A, docs only
- [x] No regressions observed — no code touched
- [x] Behavior matches intent — content matches the operator-approved plan
