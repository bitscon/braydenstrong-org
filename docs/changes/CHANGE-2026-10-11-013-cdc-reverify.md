# CHANGE: Re-verify awareness copy against current CDC pages

Date: 2026-10-11
Type: fix
ADR: none

## What changed

- src/data/site.ts: removed "Loss of balance" from the later-stage warning signs list — CDC's dedicated
  signs-and-symptoms page no longer lists it (confirmed by direct fetch of the live page; it still appears
  on CDC's About-page summary, so CDC itself is inconsistent across its own pages — the dedicated page is
  the more authoritative source for this list).
- src/data/site.ts: bumped `cdc.reviewedOn` from 2026-08-04 to 2026-10-11.

## Why

Card BRAY-4 requires the awareness copy to be re-verified against CDC's current pages at publish time
rather than trusted because it was right once. Direct re-fetch of all four cited CDC pages found one
factual drift (above); everything else — case counts (167 cases 1962–2024, 4 survivors), annual rate,
transmission/at-risk facts, early symptoms, the 1–12 day / 1–18 day timeline, swimming prevention steps,
and sinus-rinse guidance (distilled/sterile or boiled-and-cooled water) — still matches the live CDC
wording verbatim or in substance.

## Risk

LOW

Single-word removal from a bulleted list on an unpublished static site; no deploy triggered.

## Verified

- [x] Tests pass — `npm run build` green, all 7 pages generated (Node 24.19.0; the barn's default `node`
  on non-interactive SSH resolves to an unsupported 18.19.1 — use the nvm-installed 24.19.0 binary instead).
- [x] No regressions observed — contact page still the only one with noindex, still absent from nav and
  sitemap.xml.
- [x] Behavior matches intent — later-signs list now matches CDC's dedicated signs-symptoms page exactly.

## Open from this check (not fixed here)

- CDC's sinus-rinse page no longer uses an explicit "never use untreated tap water" prohibition — it's
  framed positively only (use distilled/sterile/boiled-and-cooled). Site copy's "never" phrasing is a
  reasonable inference, not a current CDC quote; worth softening at next copy pass but not a factual error.
- Social preview image (`og-default.png`) still not supplied — referenced in src/layouts/Layout.astro but
  absent from public/.
- Not eyeballed in a real browser this session either — no browser reachable from this environment.
- PROJECT_STATUS.md states the site "is deployed to prod (braydenstrong.org)"; README.md, AGENTS.md, and
  every change record say the opposite (private repo, rsync deploy, not deployed yet). This looks like a
  stale/incorrect line in PROJECT_STATUS.md — flagging rather than resolving, since actual deploy state on
  the VPS could not be checked from this session (SSH command required interactive approval unavailable
  in an unattended run).
