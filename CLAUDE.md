# CLAUDE.md — Kuijpers Research Field Website

Guidance for Claude Code when working in this repository.

## Project overview

Marketing/corporate website for **Kuijpers Research Field** — an independent
poultry/agri research partner. Built with Astro, React islands, Tailwind CSS,
and a Sanity CMS backend. Content (team, services, research projects, news,
publications, site settings) is managed in Sanity; hero/banner images and the
logo are static files in `public/`.

- **Framework:** Astro `^6.4.2` — **fully static** (`output: 'static'`, no adapter). `npm run build`
  emits plain HTML/CSS/JS to `./dist` that can be hosted on ANY host (Bluehost/shared Apache,
  Netlify, Vercel-static, GitHub Pages…).
- **UI:** React `^19` islands via `@astrojs/react`
- **Styling:** Tailwind CSS `^4.3` via `@tailwindcss/vite` (no `tailwind.config` — v4 CSS-first; see `src/styles/global.css`)
- **CMS:** Sanity (`@sanity/client`, `@sanity/image-url`) — fetched at build time
- **Contact form:** **Web3Forms** (client-side POST, no server). Key via `PUBLIC_WEB3FORMS_ACCESS_KEY`.
- **Node:** `>=22.12.0`

## Commands

Run from `astro-site/`:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |

## Structure

```
astro-site/
├── public/
│   ├── logo.png              # header logo
│   ├── favicon.svg
│   └── images/               # static hero/banner photos (see table below)
├── src/
│   ├── layouts/BaseLayout.astro
│   ├── components/
│   │   ├── Header.astro       # uses /logo.png
│   │   ├── Footer.astro
│   │   ├── TeamCard.astro     # Sanity member.photo via urlFor()
│   │   ├── ContactForm.tsx    # React island → POST /api/contact
│   │   └── innovations/
│   │       └── InnovationExplorer.tsx  # React island: rotatable network + farm scene + cards
│   ├── data/
│   │   └── innovations.ts     # 21 innovations, impacts, and interconnections (see below)
│   ├── lib/
│   │   ├── sanity.ts          # Sanity client + typed fetch helpers
│   │   ├── queries.ts         # GROQ queries
│   │   └── image.ts           # urlFor() image-URL builder
│   └── pages/
│       ├── index.astro        # Home
│       ├── about.astro
│       ├── services.astro
│       ├── innovations.astro   # (formerly "publications") hero + <InnovationExplorer>
│       ├── innovations/[id].astro  # per-innovation detail pages (static)
│       ├── contact.astro
│       ├── privacy.astro / cookies.astro
│       ├── news/index.astro + [slug].astro
│       ├── research/index.astro + [slug].astro
│       └── api/contact.ts     # Resend email endpoint (prerender = false)
├── photo/real/                # source photos (originals; not served)
└── astro.config.mjs
```

Note: `photo/real/` holds original/source images provided by the client. They are
NOT served directly — selected ones are copied into `public/images/` for use.

## Images — two systems

**1. Static hero/banner photos** live in `public/images/` and are referenced by
path in the `.astro` pages. To change one: copy the new file into `public/images/`
and update the `<img src>` if the filename/extension differs.

| File (`public/images/`) | Page | Notes |
| :-- | :-- | :-- |
| `hero.png` | Home (`index.astro`) | `object-cover object-center` |
| `about-hero.jpg` | About hero | large (~13 MB — should optimize) |
| `our-story-family.png` | About "Our Story" | fixed 4:3 `object-cover` frame |
| `service-hero.jpg` | Services | large (~17 MB — should optimize) |
| `research-hero.jpg` | Research index | |
| `innovations-hero.jpg` | Innovations | (formerly `publication-hero.jpg`) |
| `contact-hero.jpg` | Contact | `object-bottom` (keeps farm building in frame) |
| `logo.png` | Header | |

**2. CMS-managed images** (Sanity) — team `photo`, service `image`, research
`coverImage`, news `mainImage`, author `photo`. Rendered with `urlFor(...)` from
`src/lib/image.ts`. Changed in Sanity Studio (or via Sanity MCP tools), not in code.

### Hero image fit conventions
Heroes are full-bleed background `<img>` with `class="absolute inset-0 h-full w-full object-cover"`
plus a dark gradient overlay for text legibility. Because heroes are wide/short:
- Use a **landscape (~16:9 or ~2:1)** source so `object-cover` fills without losing content.
- For a near-square/portrait source, either the image gets cropped (`object-cover`) or
  shows fully with side bars (`object-contain object-right`, dark bg fills the text side).
- Adjust crop anchor with `object-top` / `object-bottom` / `object-center` or a custom
  `object-[x%_y%]` when a subject sits off-center (e.g. Contact uses `object-bottom`).

## Sanity

- Client config in `src/lib/sanity.ts`: `projectId: 'j7mus8gf'`, `dataset: 'production'`,
  `apiVersion: '2024-01-01'`, `useCdn: true`.
- Fetch helpers: `getAllResearchProjects`, `getResearchProjectBySlug`, `getAllTeamMembers`,
  `getAllPublications`, `getAllNews`, `getAllServices`, `getAllAdvantages`, `getSiteSettings`.
- GROQ queries live in `src/lib/queries.ts`. Image fields are projected whole (with `alt`/hotspot)
  so they can be passed straight to `urlFor()`.
- Before querying/writing Sanity, load the schema (`get_schema`) — see Sanity MCP guidance.

## Contact form

- `ContactForm.tsx` (React island) POSTs JSON **directly to Web3Forms**
  (`https://api.web3forms.com/submit`) from the browser — no server route, so the site stays
  fully static and host-agnostic. (The old Resend server route `src/pages/api/contact.ts` was
  removed, and `resend` + `@astrojs/vercel` were uninstalled.)
- Needs a Web3Forms **access key** (public by design): get one free at web3forms.com with the
  recipient email (`jan@kuijperskip.com`), then set `PUBLIC_WEB3FORMS_ACCESS_KEY` in a `.env`
  (see `.env.example`) or paste it into `ContactForm.tsx`, and rebuild. Until set, the built
  form carries the literal `REPLACE_WITH_WEB3FORMS_ACCESS_KEY` placeholder and won't deliver.
- Spam: a `botcheck` honeypot is sent; enable hCaptcha in the Web3Forms dashboard for more.

## Routing notes

- `astro.config.mjs` redirects `/advantages` → `/services` (the old standalone Advantages
  page was merged into Services).
- `astro.config.mjs` redirects `/publications` → `/innovations` (the page was renamed to
  "Innovations"). The Innovations page no longer renders the Sanity publications list — it is
  now the hero + the Innovation Explorer (data from `src/data/innovations.ts`). The home page's
  "Latest Innovations" teaser also now shows 3 innovations from `src/data/innovations.ts`
  (`INNOVATIONS.slice(0,3)`, linking to their detail pages) — NOT Sanity publications, so it no
  longer shows "coming soon". (`getAllPublications()` still exists but is now unused by pages.)
- Research **detail** pages (`research/[slug].astro`) are Overview-only — the old
  Team / Innovations / Data tabs (and their client tab script) were removed; the research index
  no longer shows the "Innovations" stat.

## Innovation Explorer (Innovations page centrepiece)

An interactive React island (`src/components/innovations/InnovationExplorer.tsx`,
rendered with `client:visible` from `innovations.astro`) that visualises 21
interconnected innovations. Three synced views share one `selectedId`:

The explorer has two synced views (the "Explore the site" 360° tour is a separate section
— see **Virtual tour** below):

1. **Rotatable network** — nodes on a Fibonacci sphere; drag to spin 360° (pseudo-3D via a
   Y/X rotation matrix), auto-spins only when idle (pauses on hover/select/drag). No zoom.
   Node colour = category, size = direct vs. indirect impact. **At rest** it rotates showing
   the **front-facing node names** only (labels for `depth > 0.6`), no lines. **When a node
   is focused** (hover, or click to lock via `activeSet`) it draws that node's links and
   shows labels **only for it + its connected innovations** (dark pills; the selected one in
   brand blue), dimming everything else. Those connected labels are **de-collided** (`activeLabels`
   greedy layout: place beside the node, push down until clear, draw a leader line) so names
   never overlap. Link colours are company colours via `RELATION_META`
   (required = brand blue `#054c9c`, enhancing = accent `#f49f3c`). Clicking fills the impact
   panel beside it. (No "show all links" toggle, no zoom, and the old indicative-figures
   disclaimer under the cards was removed.)
2. **Cards grid (bottom)** — research-style cards, one per innovation, filterable by
   category. Each card is a **link to `/innovations/<id>`** (the detail page).

Selection UX: clicking a map marker or a node selects it, scrolls the **network + impact
panel** into view (not the cards), and lights up its connections. Clicking empty space in
the network or on the map background (or the "Reset ✕" button) clears the selection so the
whole web is visible again. Unselected edges/nodes are kept fairly opaque on purpose so the
network reads clearly; selecting one dims the rest to focus it.

**Farm view** ("Explore the site") — `src/components/innovations/FarmView3D.astro`, its own
section on the innovations page ABOVE the explorer. A **built (not photographed) Three.js**
model (r128 from cdnjs via an `is:inline` script; "3D failed to load — refresh" fallback).
**Five identical** red corrugated barns stand parallel in a row, spaced `2*HW` apart so their
half-hexagon bases just touch at ground level (walls lean apart above). The base `barn` group is
`.clone()`d four times (to z = −4·HW … +2·HW) *before* the silos are added to `barn`, so the whole
complex shares ONE silo cluster; the original silo-bearing barn is moved to the RIGHT (+Z, +4·HW)
end of the row with its silos on the outer (+Z) side. Each barn is fully enclosed (front + back walls closed) with
a plain grey seam roof (no roof clutter). Windows sit **only on the two END walls** (±X half-hexagon gables, via `onEnd()`) — not on the
long front/back faces; the **+X end** also carries a big garage door + a personnel door. The metal
**silos stand in a tight row on the outer (+Z) side of the right-hand barn**, on support legs that
reach the ground. Interior (seen via the Inside view) is **built once** as
its own `inside` group at the z=0 barn (NOT cloned into all five — the one you enter is the rich
one). Black litter floor and a light-brown inside ceiling liner (a plane just below the grey outer roof,
so the outside roof is unchanged). Six-tier cage system both sides of a central aisle with per-tier
equipment (**vertical green feed pipes running top-to-bottom INSIDE each cage block** + a nipple
drinker line, manure belts under each tier, wire-mesh fronts, back panels, support frames, and a
**yellow emissive LED bar lighting each layer**), overhead feed-conveyor tubes + roof tie-beams, two
cool emissive LED runs, **roof-hung ceiling circulation fans** (inside only — below the roofline so
they stay hidden from outside), and ~540
instanced **chicken-shaped** birds (a merged body+head+beak+tail geometry via a small `mergeGeos`
helper, brown low-reflectivity material so they read as hens — not egg-like ovoids); the +X (door) end has exhaust
fans + feed hopper bins; the −X far end is a **full-red backdrop** you look toward; side walls have
angled air inlets + sensor/screen boxes. Lighting is cool/tech in the aisle (cool-blue points + bright cool
far-end) contrasted with a row of **warm yellow point lights + yellow LED bars glowing inside the
cage layers**. The Inside camera **enters from the +X door end** (`IN.theta = +π/2`) looking down the
corridor toward the glowing −X end (the barn has doors on the +X end only). Custom drag-orbit + scroll-zoom;
auto-rotates in **Outside** mode with a **Pause** toggle; the **Inside** button (`IN` preset)
tweens the camera to one end of the aisle looking **down the corridor**. A **Full screen** button
(`.fs`, top-right of the stage) requests fullscreen on the stage via the Fullscreen API (with a
`:fullscreen` CSS rule sizing it to 100vw/100vh). (A real corridor-photo interior was tried and
reverted — `sharp`-mirrored `EMBE6822.jpg` on a plane — so `public/images/barn-corridor.jpg` no
longer exists.)
There is intentionally **no "Walk" mode** — it was buggy and removed. Side pill
flips Outside/Inside. No hotspots. Namespaced under `.farm3d`, ids `f3d-*`; the stage has an
explicit CSS `height: 500px` (WebGL needs a real height). GOTCHA: `Object3D.add()` returns the
PARENT, so never write `barn.add(mesh).position.set(...)` — set position then add. (Superseded
and removed, in order: `SiteViewer.tsx` turntable, `SiteModel.tsx` 3D, `Barn360.astro` panorama,
`VirtualTour.astro` + `FarmView.astro` Pannellum. Each innovation's `scene:{x,y}` field is unused.)

**Detail pages** — `src/pages/innovations/[id].astro` (static, `getStaticPaths` over
`INNOVATIONS`): full "What it is" explanation (`inn.details`), a "How it connects"
section listing required / enhancing links to other innovations' detail pages, and a
server-rendered impact card. The inline panel and every card link here.

Data lives in **`src/data/innovations.ts`** (NOT Sanity): `INNOVATIONS` (id, name,
category, description, 6 yearly impact figures, scene pin), `RELATIONS` (a↔b, type
1=required / 2=enhancing), `CATEGORY_META`, `METRICS` (per-kg conversions),
`SLAUGHTER_KG`. Impact sign convention: **positive = a saving** (reduction/retention/
on-site generation, green); **negative = extra use/discharge** (red). Figures are
indicative, sourced from the internal cross-table in `visulization/INNOVA~3.HTM.html`
(Dutch; the original 2D chicken-silhouette map — read it for the data, not the design).

- Pin pulse animation: `.fscl-pulse` keyframes in `src/styles/global.css`.
- To add/edit an innovation or a connection, edit `src/data/innovations.ts` only —
  all three views and the impact bars derive from it. To reposition a farm pin,
  change its `scene` percentages.

## Internationalization (EN / NL / DE) — in progress

- Astro i18n config in `astro.config.mjs`: `locales: ['en','nl','de']`, `defaultLocale: 'en'`,
  `prefixDefaultLocale: false` → English at `/`, Dutch at `/nl/`, German at `/de/`.
- Strings live in **`src/i18n/ui.ts`** (`ui[lang][key]`, falls back to English). Helpers in
  **`src/i18n/utils.ts`**: `getLangFromUrl(Astro.url)`, `useTranslations(lang)` → `t(key)`,
  `localizePath`, `localizedHref` (localizes only for pages listed in `TRANSLATED_ROUTES`, else
  falls back to the English URL so links never 404), and `switchLangPath` (language switcher).
- **Header/Footer** are fully localized + a language switcher (EN/NL/DE). `BaseLayout` sets
  `<html lang>` from the URL.
- **Pattern for translating a page:** extract its body into `src/components/pages/XxxPage.astro`
  that reads `const lang = getLangFromUrl(Astro.url); const t = useTranslations(lang);` and uses
  `t("…")`; add keys to `ui.ts` for all 3 langs; create thin routes `src/pages/xxx.astro`,
  `src/pages/nl/xxx.astro`, `src/pages/de/xxx.astro` (each just `<XxxPage />`); add the route to
  `TRANSLATED_ROUTES` so nav localizes to it. The **home page** is done this way
  (`components/pages/HomePage.astro`); **still TODO:** about, services, research (+ `[slug]`),
  innovations (+ data in `innovations.ts`), contact, news, privacy/cookies, and **Sanity CMS
  content localization** (schema fields + editor entry — separate, larger task).

## Conventions

- Match existing file style: tabs for indentation in `.astro`/`.ts`, Tailwind utility classes.
- Brand accent color is `brand-*` (e.g. `text-brand-300`), stone palette for neutrals.
- Keep hero overlay gradients when swapping hero images so overlaid white text stays legible.

## Deploying (static)

`npm run build` → upload everything in `./dist` to the host's web root (e.g. `public_html`), or
connect the GitHub repo to Netlify/Vercel (root dir `astro-site`, static — no adapter). `public/`
extras that ship in the build: `.htaccess` (Apache HTTPS + the two 301 redirects; Nginx hosts
ignore it). Set `PUBLIC_WEB3FORMS_ACCESS_KEY` before building or the contact form won't deliver.
New Sanity content only appears after a rebuild + re-upload (static site).

## Outstanding / TODO

- Hero images were optimized (heroes now ~240–360 KB; home hero is `hero.jpg`). `our-story-family.png`
  (~0.9 MB) could still be trimmed if needed.
- Set the real Web3Forms access key and confirm a test submission reaches `jan@kuijperskip.com`.
