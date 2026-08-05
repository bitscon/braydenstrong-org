# CHANGE: Add BraydenStrong logo to header

Date: 2026-08-05
Type: feature
ADR: none

## What changed

- img/braydenstrong-logo-2-horizontal-tight.png: operator's chosen logo lockup (bike-and-birds emblem +
  BraydenStrong wordmark, tightened spacing), archived in-repo. img/bike.jpg (the emblem source) also archived.
- public/img/braydenstrong-logo.png: optimized served copy (1050x581, 26KB).
- src/components/Header.astro: replaced the text wordmark in the top bar with the logo image. Header row
  height raised (h-16→h-20 mobile, 4.25rem→h-24 desktop) so the tall emblem + wordmark stay legible.

## Why

Operator finalized a logo (emblem + wordmark) and wants it used as the top/header logo only. Hero and
footer keep their text wordmark by request.

## Risk

LOW

Presentation change in a private repo; reversible. Header is taller to fit the emblem's bird trail without
shrinking the wordmark to unreadable.

## Verified

- [x] Tests pass — `npm run build` green; 7 pages.
- [x] No regressions observed — all 7 built pages reference /img/braydenstrong-logo.png in the header; the
  file serves from dist/img/; hero and footer text wordmarks unchanged.
- [x] Behavior matches intent — logo is header-only. Not eyeballed live (host localhost unreachable from
  the connected browser); operator reviews on deploy.
