# CHANGE: Two-tone BraydenStrong wordmark (blue Brayden)

Date: 2026-08-05
Type: refactor
ADR: none

## What changed

- src/components/Header.astro, src/pages/index.astro, src/components/Footer.astro: the "BraydenStrong"
  wordmark now renders "Brayden" in the page identity blue (`text-bs-blue`, #1f6fd0) and "Strong" in the
  orange (unchanged). Previously "Brayden" inherited the default dark ink.

## Why

Operator wants the wordmark two-toned everywhere it appears — Brayden in the site blue, Strong in orange.

## Risk

LOW

Presentation only; three display instances of the wordmark. Plain-text mentions of "BraydenStrong" inside
body copy and metadata are left as normal text for readability.

## Verified

- [x] Tests pass — `npm run build` green; 7 pages.
- [x] No regressions observed — the blue-Brayden + orange-Strong markup is present on all 7 built pages
  (header and footer are global). Blue is the same #1f6fd0 used for links; readable on the light header,
  hero, and light-blue footer backgrounds.
- [x] Behavior matches intent — only the three wordmark instances changed; not deployed (manual deploy).
