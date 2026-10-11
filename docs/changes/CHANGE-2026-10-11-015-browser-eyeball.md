# CHANGE: Eyeball the build in a real browser

Date: 2026-10-11
Type: docs
ADR: none

## What changed

- PROJECT_STATUS.md: records the first successful in-browser verification of this site. No site code
  changed — this is a verification pass only.

## Why

Card BRAY-4 step: "Eyeball it in a real browser — the last verification pass could not reach a
browser and said so." This session found `google-chrome` already installed on the barn and used it
headless (`--headless=new`) to serve the production build (`npm run preview`) and screenshot the
homepage, the Prevention & Warning Signs page, and the hidden Contact page.

## Risk

LOW

Read-only verification against a local preview server; nothing deployed, no files served publicly.

## Verified

- [x] Homepage: two-tone wordmark, header logo, hero photo, nav (6 items, Contact correctly absent),
  placeholder box all render as intended.
- [x] Prevention & Warning Signs: later-symptoms list renders without "Loss of balance" (confirms the
  CDC re-verification fix took effect in the built output); CDC source links present; reviewed-date
  shown as 2026-10-11.
- [x] Contact page: reachable directly (as designed — hidden from nav/sitemap, not from direct URL);
  served HTML's `<meta name="robots">` confirmed `noindex, nofollow`; placeholder messaging renders
  correctly.
- [x] `og-default.png` served 200 OK at its public path.
