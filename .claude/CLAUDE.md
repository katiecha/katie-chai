# katie-chai.com

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Type check: `npx tsc --noEmit`

## Stack
- Next.js 16 (App Router, TypeScript strict mode)
- Tailwind CSS v4 (`@theme` block in `globals.css` for design tokens)
- No database — all data is static in `app/work/data.ts` and `app/play/data.ts`
- Path alias `@/*` → repo root, so imports include the `app/` segment (`@/app/components/...`, `@/app/work/data`). Use the alias for all cross-module imports — never relative `../` across directories.
- Fonts load via `next/font/google` (`Inter`) in `app/layout.tsx`, applied as `inter.className` on `<html>`; the `--font-sans` token mirrors it.

## Component Architecture — Atomic Design

Components live in `app/components/` organized by Brad Frost's Atomic Design:

```
app/components/
  atoms/       Indivisible building blocks. No internal composition of other components.
               icons, tag, tooltip, search-input, language-dot, section-heading,
               instagram/ (profile-picture)
  molecules/   Compose atoms (and, when needed, other molecules) into a single unit.
               icon-link, status-badge, project-badges, project-links, section,
               page-shell, row, card, dropdown-filter, horizontal-scroller,
               definition-grid, image-placeholder, instagram/ (sub-components)
  organisms/   Complex, self-contained sections composed of molecules and atoms.
               nav, footer, filterable-projects, mobile-nav-menu
               instagram/ (instagram-section)
```

**Import direction: never import upward (atoms import no components; molecules never import organisms). Molecules may compose other molecules and organisms other organisms, but prefer reaching down a tier when possible.**

When adding a component:
- Can it stand alone with no other component imports? → atom
- Does it combine atoms into one cohesive unit? → molecule
- Is it a full section or feature of a page? → organism
- Is it page-specific and not reused elsewhere? → co-locate with the page (e.g. `app/work/` holds `hero-header`, `uiux-card`, `back-link`, `case-study-header`; `app/play/` holds `page-header`; `app/readme/` holds `fun-fact-card` + its wrappers)

**Data files always stay co-located with their page** (`app/work/data.ts`, `app/play/data.ts`). Never move them into `app/components/`. Shared utility functions live in `app/lib/`.

## Design Tokens

All visual primitives are defined in `app/globals.css` under `@theme`:

```css
--color-background                    /* white — nav + page background        */
--color-border, --color-border-hover
--color-link                          /* GitHub blue #0969da — project name links */
--color-text-primary, --color-text-muted, --color-text-subtle, --color-text-disabled
--color-surface                       /* image backgrounds                    */
--color-surface-hover                 /* hover backgrounds                    */
--color-surface-muted                 /* GitHub grey #f6f8fa — filter buttons */
--color-overlay-dark                  /* IG story viewer backdrop             */
--radius-fillet                       /* 8px — subtle rounding on cards/images */
--z-nav, --z-tooltip, --z-modal
```

Never use raw Tailwind gray values (`gray-500`, `gray-100`, etc.), raw hex codes (`bg-[#...]`), or inline style hexes — always use semantic tokens.

**Icon sizes** live in `molecules/icon-link.tsx` as the exported `ICON_SIZE` constant, not in CSS (Lucide icons take a `size={number}` prop):

```ts
ICON_SIZE.sm   // 14 — cards, tags, compact contexts
ICON_SIZE.md   // 18 — default: rows, nav, standalone links
ICON_SIZE.lg   // 20 — hero, large UI
```

Never hardcode `size={16}` on an icon — import `ICON_SIZE` and pick a bucket. Same applies to language dot colors: the `TAG_COLORS` map in `atoms/language-dot.tsx` uses raw hex ONLY because those are GitHub Linguist's canonical language identifier colors (external data, not our design system).

**Card chrome**: the bordered-panel shell classes are the `CARD_SHELL` / `CARD_SHELL_HOVER` constants in `app/lib/styles.ts` — never re-type `border border-border rounded-fillet …` inline on a card/panel.

**`rounded-fillet` vs `rounded-md`**: use `rounded-fillet` (8px) on cards and image containers. Use `rounded-md` (6px) on interactive controls — buttons, inputs, dropdowns. These are intentionally different tokens; change card rounding only via `--radius-fillet`.

**`scrollbar-hide`**: Tailwind v4 does not include this utility. It is defined manually in `globals.css` under `@layer utilities`. Do not try to install a plugin for it.

**`globals.css` structure**: single `@import "tailwindcss"` (no separate config file). `@theme` holds colors, radius, **and** the z-index scale (`--z-nav/--z-tooltip/--z-modal`). The **typography-scale reference comment block** in this file is the canonical type-scale doc — consult it when picking text sizes/weights. Base rules (`box-sizing`, `scroll-behavior: smooth`) sit outside any layer.

**Icons & Tailwind idioms** (follow the observed conventions):
- `transition-colors` is the default transition on any `hover:` color change; `transition-all duration-150` for border/transform on cards.
- `group` / `group-hover:` for parent-driven hover, including named groups (`group/tooltip` → `md:group-hover/tooltip:opacity-100`).
- Add explicit `cursor-pointer` on interactive `<div>`/`<button>` elements; `shrink-0` on icons/avatars and horizontal-scroll children.
- Input focus style is `focus:outline-none focus:border-border-hover`.

## Patterns

### Page shell
Every page wraps its content in `<PageShell>` (molecule) — the single source of truth for `<main>` sizing (`max-w-4xl mx-auto px-6 py-16`). Never re-declare that width/padding in a page file. Each page then picks its own hero:
- `<HeroHeader />` — Work page: h1 + tagline + social icons + headshot
- `<PageHeader title subtitle />` — Play page: simple title + subtitle
- None — README page: content is a single styled card

Nav and footer are rendered globally by `app/layout.tsx` (`<Nav />`, `<Footer />`); pages never include them.

### Stretched link (clickable cards)
Used on **cards only** — rows use a plain title link (like GitHub), not a stretched click target.
- Place an `<a>` with `position: absolute; inset: 0` as the first child of a `position: relative` container
- Give **only** the interactive inner links `relative z-10` — not the description, title, or other non-interactive content
- Non-positioned content sits below the absolute `<a>` in stacking order; clicks pass through
- `z-10` on non-interactive elements breaks this — clicks hit the element, not the link underneath

### Preview link resolution
Use `previewHref()` from `app/lib/links.ts` to pick the primary click target for a project: the first non-GitHub link (live site/demo), falling back to the first link if only GitHub exists. Never duplicate this logic inline.

### Icon-link tap targets
`IconLink` (atom) adds `p-1 -m-1` around the icon to expand the click target to ~40px without shifting layout. Preserve this pattern when overriding `className`.

### Component authoring
- **Props typing**: declare a module-level `type <ComponentName>Props = {}` and destructure it inline in the signature. No `interface`, no `Readonly<>`. A trivial single-prop component may inline the type (`{ children }: { children: ReactNode }`).
- **Declaration**: always `export function Name(...)` with the export on the declaration. Reserve `const` arrow functions for local event handlers; private same-file helpers are non-exported `function`s.
- **No class-merge util**: there is deliberately no `cn()`/clsx/classnames. Build conditional classes with template literals + ternaries, using `?? ""` as the fallback for an optional `className`.
- **React imports**: `import type { ReactNode }` (not `React.ReactNode`); import hooks by name (`import { useState } from "react"`), never `React.useState`. No `forwardRef`. **No barrel/`index.ts` files** — import every component by its full path.
- **File layout**: put module-level constants and lookup maps (`Record<...>`, size-variant maps keyed by a union) above the component that uses them.

### Data & types
- **Types live in `data.ts` and are re-exported per page**: `app/work/data.ts` is the canonical home for `Project`, `ProjectLink`, `LinkType`, `Category`; `app/play/data.ts` re-exports them (`export type { Project, ProjectLink }`) alongside its page-local types. There is no separate `types.ts`.
- **No `id` field** — collections are keyed by `project.name` in `.map()`. Name is the de-facto id.
- **Tag semantics**: `tags` = languages only; `other` = libraries/engines/platforms.
- Data is exported as `UPPER_SNAKE_CASE` typed const arrays/objects (`SOCIAL_LINKS`, `CURRENT_PROJECTS`, …). `SOCIAL_LINKS` is the single source for social/resume URLs — consume it, don't re-hardcode links.
- **Image paths**: per-project case studies under `/images/<slug>/...`; flat one-off thumbnails as `/images/<prefix>-<slug>.png` (e.g. `uiux-`). Internal navigation uses a site-relative `href` with `type: "site"`.

### Analytics
Vercel Web Analytics. `<Analytics />` is mounted once in `app/layout.tsx`. Import `{ track }` from `@vercel/analytics` and call it **only inside `onClick` handlers, never during render**. Always use the `ANALYTICS_EVENTS` const map in `app/lib/analytics.ts` — never hardcode the event-name string. Keep event data to ≤2 primitive (string/number/bool) props. `IconLink` forwards analytics via its `eventName`/`eventData` props.

### Auth (password-gated case studies)
`/work/*` detail routes are gated via an **API route + httpOnly cookie**, not middleware. `app/api/unlock/route.ts` validates `process.env.UIUX_PASSWORD` and sets the `uiux_auth` cookie; `isProtectedPath()` in `app/lib/protected.ts` is the path predicate; the unlock UI is `app/work/unlock/page.tsx`. API-route convention: `app/api/<name>/route.ts` with named `export async function POST` using `NextRequest`/`NextResponse` from `next/server`.

### Page metadata
Every page exports `export const metadata: Metadata` (typed via `import type { Metadata } from "next"`) with a manual `"<Page> - Katie Chai"` title suffix and a `description`. Do not introduce `title.template` or `metadataBase`.

### next/image
Two modes: (a) `fill` + `sizes` + `object-cover`/`object-contain` — never omit `sizes` when using `fill`; the standard full-width case-study value is `sizes="(min-width: 896px) 896px, 100vw"`. (b) explicit `width`/`height` + `style={{ width: "100%", height: "auto" }}` for known-dimension diagrams. `alt` is always meaningful, or explicitly `""` for decorative images.

## Rules
- Named exports only, no default exports
- Server components by default; `"use client"` only on leaf components that need state or browser APIs
- One component per file
- Semantic `key` props in `.map()` — never index-based
- No comments unless the WHY is non-obvious

## Accessibility
- Semantic HTML (`<section>`, `<nav>`, `<header>`, etc.)
- `lang="en"` on `<html>`
- All `target="_blank"` links must have `rel="noopener noreferrer"` and `aria-label`
- Decorative inline SVG icons carry `aria-hidden="true"`
- Icon-only interactive elements always get an `aria-label` (dynamic where stateful, e.g. `open ? "Close menu" : "Open menu"`)

## Responsive
- Mobile-first; primary breakpoint is `md` (768px)
- Use `sm` only when necessary; avoid `lg`/`xl` — max content width is `max-w-4xl`

## Conventions
- Files: kebab-case
- Components: PascalCase
- Functions/hooks: camelCase
- Constants: UPPER_SNAKE_CASE
- Tailwind class order: layout → spacing → typography → color → border → effects
- Style baseline: no semicolons, double quotes, `??` for fallbacks
