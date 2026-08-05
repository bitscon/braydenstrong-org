# CHANGE: Confirm static-web; create board; init git

Date: 2026-08-04
Type: chore
ADR: none

## What changed

- AGENTS.md / PROJECT_STATUS.md: type confirmed static-web; remote and board recorded (operator go-ahead)
- board-sync/boards.yaml: registered braydenstrong-org (scheduled) — Kanboard board created on the barn (project id=7)
- git: repository initialized; first commit; private GitHub remote bitscon/braydenstrong-org created and pushed

## Why

Operator confirmed the three open setup decisions (static-web, create a board, init git + GitHub).

## Risk

LOW

GitHub repo created private (unlaunched memorial); flip to public at launch.

## Verified

- [x] Tests pass — N/A, no code yet
- [x] No regressions observed — new isolated project
- [x] Behavior matches intent — board live and clean (5 columns); repo pushed private
