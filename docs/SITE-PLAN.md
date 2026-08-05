# braydenstrong.org — Site Plan

> Operator-approved 2026-08-04 (workspace Phase 2 — planning brainstorm). This is the durable,
> project-resident copy of the approved plan; the plan-mode working copy was
> `~/.claude/plans/goal-for-this-session-expressive-pizza.md`.

## Context
braydenstrong.org honors the operator's son, **Brayden**, who died in 2020 from *Naegleria fowleri*
(the "brain-eating amoeba"), and turns that loss into prevention so fewer families go through the same.
The build is the next phase, under normal workspace governance.

**State at planning (2026-08-04):** scaffold only — README, AGENTS.md, PROJECT_STATUS.md, `docs/changes/`,
one commit, clean tree, **private** GitHub remote `bitscon/braydenstrong-org`, Kanboard board id=7. **No
site code yet.** Registered in AGENT_OS.md Section 17 as `static-web`, domain `braydenstrong.org`, rsync deploy.

**Content boundary (project AGENTS.md):** Brayden's name, story, dedication wording, and images are the
**operator's to author and approve**. Agents build structure and delivery, not the personal content.
Awareness/medical content is drafted by the agent from current CDC guidance for operator approval.

---

## Decisions locked (Phase 2)
1. **Heart = woven as one.** Brayden's story is the front door and leads every visitor into the prevention
   message. Memorial and awareness carried as a single path.
2. **No charity yet; donations deferred; merch at launch.** No non-profit entity exists or is forming soon.
   Donations wait for a later phase (needs entity + charitable-solicitation registration). Merch **is** in v1
   as an ordinary commercial sale (family & friends now, public later). **Honesty guardrail:** never frame
   purchases as tax-deductible donations or imply proceeds go to a registered charity — use "shop / support,"
   not "donate." Store platform handles sales tax + card data; no custom checkout on the static site.
3. **Merch = link-out.** A tasteful "Shop / Support" section opens the operator's existing storefront in a
   new tab. No cart on the memorial site. *(Store URL + platform supplied at build.)*
4. **Structure = full multi-page.** Separate pages, each topic its own findable/linkable page, room to grow.
5. **Page set = 7, with Contact hidden at launch** (see page map). Contact/Press is built but dark at launch:
   no nav link, excluded from sitemap, `noindex`. Flipped on later — clean, reversible toggle.
6. **Tribute = curated by the operator.** The Remember page shows memories/photos/words the operator places.
   Static, no moderation, no guestbook. Any visitor memories later arrive privately and are approved before
   appearing — nothing auto-posts on Brayden's page.
7. **Tone = strong & rallying.** "BraydenStrong" as a movement. Strength drives the mission pages (Home,
   Prevention, How to Help); Brayden's Story and Remember stay tender *within* the strong frame.
8. **Branding = established with the site**, palette anchored on **Brayden's favorite colors**.
9. **Palette = BraydenStrong Orange + BraydenStrong Blue** (Brayden loved Nerf). Bright orange + strong blue
   in that family, defined as **our own hex values** (documented as ours; exact hexes proposed for approval).
   Colors lead the identity on mission pages, applied with restraint/warmth on his pages.
   **IP read:** colors carry no risk (you can't copyright a color; color trademark/trade-dress is narrow and
   context-bound — no confusion with Nerf on a memorial). The line is the Nerf **name, logo, wordmark, and
   font** — never used. Our own hexes cover the "different color code" instinct as brand hygiene, not law.
10. **Build = Astro** (the saltydawg pattern already in the workspace). Static output, deployed by rsync.

---

## Page map (7 pages, shared header/footer)
| Page | Route | Purpose | Treatment |
|---|---|---|---|
| Home | `/` | Brayden leads; short story hook → clear paths into prevention, help/shop, remember | Bold rallying |
| Brayden's Story | `/brayden` | Full memorial narrative — **operator-authored** (who he was, 2020, the loss) + photos | Tender, in strong frame |
| About the Amoeba | `/about-naegleria-fowleri` | What *N. fowleri* is — warm freshwater, nasal route, rare but fatal (CDC-sourced) | Calm, credible |
| Prevention & Warning Signs | `/prevention` | Prevention steps + early warning signs + when/what to tell an ER (CDC-sourced) | Calm, authoritative, SEO-built |
| How to Help | `/how-to-help` | Share/spread awareness + "Shop / Support" link-out; "more coming" re: future non-profit | Bold rallying |
| Remember | `/remember` | Curated tribute — operator-placed memories/photos/words | Tender |
| Contact / Press | `/contact` | Families, media, health orgs — **built but hidden at launch** (no nav, `noindex`, out of sitemap) | Simple, static (mailto) |

Shared: header + nav (logo; Contact omitted at launch), footer (honest non-profit-status note, share links,
social, copyright). Per-page SEO/Open Graph so pages preview well when shared.

---

## Build approach (reuse the saltydawg pattern)
- **Stack:** Astro 6 + Tailwind 4 (tokens via `@theme`), optional tasteful GSAP motion — **must honor
  `prefers-reduced-motion`**. Output is static; deploy by rsync.
- **Content in one place:** all copy in a single `src/data/site.ts` so the operator owns the words and agents
  build the vessels (matches the Content Boundary). Placeholders mark operator-authored/approval-needed spots.
- **Accessibility is load-bearing here:** the bold orange/blue palette must pass WCAG AA contrast for all body
  text — tune shades for contrast, keep large color fields off text-heavy prevention content.

**Critical files to create in this repo:**
- `package.json`, `astro.config.mjs` (`site: 'https://braydenstrong.org'`), `tsconfig.json`
- `src/layouts/Layout.astro` — clone saltydawg's head (title/description, Open Graph, `theme-color`, favicon,
  reduced-motion gate)
- `src/pages/{index,brayden,about-naegleria-fowleri,prevention,how-to-help,remember,contact}.astro`
  (contact = `noindex` + kept out of nav/sitemap)
- `src/components/` — Header, Footer, Hero, StoryHook, AmoebaExplainer, PreventionSteps, WarningSigns,
  ShopCTA, ShareBar, TributeGrid
- `src/data/site.ts` — all content + operator-content placeholders
- `src/styles/global.css` — Tailwind `@theme` with BraydenStrong orange/blue tokens
- `public/` — logo, favicon, OG share image, Brayden's photos (operator supplies)
- `deploy/` (adapt saltydawg's) or a documented rsync command; `docs/changes/CHANGE-*.md` per task

**Reference files to copy patterns from (workspace siblings):**
- `saltydawg/src/layouts/Layout.astro` — head / OG / reduced-motion
- `saltydawg/src/data/site.ts` — content-in-one-file
- `saltydawg/astro.config.mjs` — Tailwind-via-Vite + `site` URL
- `saltydawg/deploy/` and `steadlog/deploy.sh` — deploy reference (static-web uses **plain rsync** of the
  built output, not the full release-rotation)

---

## Inputs needed from the operator (at build time)
- **Merch:** store URL + which platform it's on.
- **Memorial content:** Brayden's story, key dates, and photos (his to author — handled with care).
  *Photo source note:* Google Photos ≠ Google Drive; the available Drive connector cannot reach a Photos
  library. Settle whether the pictures are in Drive or in Photos before relying on it.
- **Design approvals:** exact orange/blue hex values and a proposed BraydenStrong logo (agent proposes).
- **Launch:** green-light to flip the GitHub repo public at go-live; decide when to reveal the Contact page.

---

## Verification (when built)
- `npm install` → `npm run build` produces `dist/` with all 7 pages.
- Local preview: click through nav (**Contact absent from nav**); "Shop / Support" opens the store in a new
  tab; prevention/amoeba content present; mobile responsive; `prefers-reduced-motion` honored.
- Contrast check: WCAG AA on all body text against the bold palette.
- Contact page: confirm `noindex` meta present and it is **not** in the sitemap.
- Share preview: Open Graph cards render correctly for each page.
- **Content accuracy:** prevention/amoeba facts checked against the **current CDC** *Naegleria fowleri* page
  before publish (§21.5 currency).
- On deploy (static-web Checkpoint 6): push GitHub first; `rsync -avz --delete dist/ →
  /var/www/vhosts/braydenstrong.org/`; verify HTTP 200 on the live URL and deployed commit == `git HEAD`;
  record the deploy in PROJECT_STATUS.md.

## Governance path for the build phase
Static-web project: Change Record per task, board id=7 kept current through completion, repo stays **private
until launch** then flips public, deploy per Checkpoint 6. No ADR expected (static-web). Personal content
stays with the operator per the Content Boundary.
