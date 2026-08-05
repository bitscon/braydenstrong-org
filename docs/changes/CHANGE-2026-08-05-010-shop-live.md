# CHANGE: Take the shop live (Printful storefront)

Date: 2026-08-05
Type: feature
ADR: none

## What changed

- src/data/site.ts: set `merchComingSoon: false` and `storeUrl: 'https://braydenstrong.printful.me/'`
  (the Printful-hosted BraydenStrong storefront, now stocked with the BraydenStrong Classic T, S–5XL,
  $20–$30.50).

## Why

The Brayden Strong store now has a live, public product, so the site's "How to Help" shop flips from
"coming soon" to a working Shop button that links out to the storefront.

## Risk

LOW

One data flag + URL. Static link-out (button opens the storefront in a new tab, rel=noopener). Reversible.
Honesty note unchanged — purchases remain ordinary sales, not tax-deductible donations.

## Verified

- [x] Tests pass — `npm run build` green; 7 pages.
- [x] No regressions observed — /how-to-help now renders the live shop copy (coming-soon text gone) and the
  Shop button href is the storefront URL with target=_blank rel=noopener.
- [x] Behavior matches intent — storefront confirmed live in a real browser (product listed, cart +
  checkout present; the 403 seen via curl is Printful's bot-blocking, not a dead store). Not eyeballed on
  the site itself live (host localhost unreachable here); operator reviews on deploy.
