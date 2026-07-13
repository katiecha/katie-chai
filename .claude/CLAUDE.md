# katie-chai.com

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Type check: `npx tsc --noEmit`

## Stack
- Next.js 16 (App Router, TypeScript strict mode)
- Tailwind CSS v4 (`@theme` block in `globals.css` for design tokens)
- No database — all data is static in `app/work/data.ts` and `app/play/data.ts`

## Component Architecture — Atomic Design

Components live in `app/components/` organized by Brad Frost's Atomic Design:

```
app/components/
  atoms/       Indivisible building blocks. No internal composition of other components.
               icons, icon-link, tag, tooltip, search-input, language-dot
  molecules/   Groups of 2+ atoms forming a single unit.
               section, page-header, page-shell, hero-header, row, card,
               uiux-card, dropdown-filter, horizontal-scroller
  organisms/   Complex, self-contained sections composed of molecules and atoms.
               nav, footer, filterable-projects
               instagram/ (instagram-section + its sub-components)
```

**Import direction is strictly one-way: organisms → molecules → atoms. Never import upward or sideways across branches.**

When adding a component:
- Can it stand alone with no other component imports? → atom
- Does it combine atoms into one cohesive unit? → molecule
- Is it a full section or feature of a page? → organism
- Is it page-specific and not reused elsewhere? → co-locate with the page (e.g. `app/work/`)

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
--radius-fillet                       /* 2px — very slight rounding on cards/images */
--z-nav, --z-tooltip, --z-modal
```

Never use raw Tailwind gray values (`gray-500`, `gray-100`, etc.), raw hex codes (`bg-[#...]`), or inline style hexes — always use semantic tokens.

**Icon sizes** live in `atoms/icon-link.tsx` as the exported `ICON_SIZE` constant, not in CSS (Lucide icons take a `size={number}` prop):

```ts
ICON_SIZE.sm   // 14 — cards, tags, compact contexts
ICON_SIZE.md   // 18 — default: rows, nav, standalone links
ICON_SIZE.lg   // 20 — hero, large UI
```

Never hardcode `size={16}` on an icon — import `ICON_SIZE` and pick a bucket. Same applies to language dot colors: the `TAG_COLORS` map in `atoms/language-dot.tsx` uses raw hex ONLY because those are GitHub Linguist's canonical language identifier colors (external data, not our design system).

**`rounded-fillet` vs `rounded-md`**: use `rounded-fillet` (2px) on cards and image containers for near-imperceptible rounding. Use `rounded-md` (6px) on interactive controls — buttons, inputs, dropdowns. These are intentionally different.

**`scrollbar-hide`**: Tailwind v4 does not include this utility. It is defined manually in `globals.css` under `@layer utilities`. Do not try to install a plugin for it.

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

## Responsive
- Mobile-first; primary breakpoint is `md` (768px)
- Use `sm` only when necessary; avoid `lg`/`xl` — max content width is `max-w-4xl`

## Conventions
- Files: kebab-case
- Components: PascalCase
- Functions/hooks: camelCase
- Constants: UPPER_SNAKE_CASE
- Tailwind class order: layout → spacing → typography → color → border → effects
