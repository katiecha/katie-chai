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
               section, page-header, pin, row, dropdown-filter, card
  organisms/   Complex, self-contained sections composed of molecules and atoms.
               nav, filterable-projects
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
--color-border, --color-border-hover
--color-link                          /* GitHub blue #0969da — project name links */
--color-text-primary, --color-text-muted, --color-text-subtle, --color-text-disabled
--color-surface, --color-surface-hover
--radius-fillet                       /* 2px — very slight rounding on cards/images */
--z-nav, --z-tooltip, --z-modal
```

Never use raw Tailwind gray values (`gray-500`, `gray-100`, etc.) — always use semantic tokens.

**`rounded-fillet` vs `rounded-md`**: use `rounded-fillet` (2px) on cards and image containers for near-imperceptible rounding. Use `rounded-md` (6px) on interactive controls — buttons, inputs, dropdowns. These are intentionally different.

**`scrollbar-hide`**: Tailwind v4 does not include this utility. It is defined manually in `globals.css` under `@layer utilities`. Do not try to install a plugin for it.

## Patterns

### Stretched link (clickable cards/rows)
When an entire card or row should be clickable but also contain independent icon links, use the stretched link pattern:
- Place an `<a>` with `position: absolute; inset: 0` as the first child of a `position: relative` container
- Give **only** the interactive inner links `relative z-10` — not the description, title, or other non-interactive content
- Non-positioned content sits below the absolute `<a>` in the stacking order and click passes through to it correctly
- `z-10` on non-interactive elements breaks this — clicks hit the element, not the link underneath

### Preview link resolution
Use `previewHref()` from `app/lib/links.ts` to pick the primary click target for a project: the first non-GitHub link (live site/demo), falling back to the first link if only GitHub exists. Never duplicate this logic inline.

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
