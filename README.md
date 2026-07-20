# katie-chai

Personal portfolio site. See `.claude/CLAUDE.md` for full conventions.

## Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router), [React 19](https://react.dev)
- **Language:** TypeScript, strict mode
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com), design tokens defined in an `@theme` block in `app/globals.css` (colors, radii, z-index — no raw hex/gray values in components)
- **Icons:** [Lucide React](https://lucide.dev), plus a few hand-built brand icons (`github-icon.tsx`, `linkedin-icon.tsx`, `x-icon.tsx`, `figma-icon.tsx`, `youtube-icon.tsx`) for logos Lucide doesn't cover
- **Analytics:** [Vercel Web Analytics](https://vercel.com/docs/analytics) — see [Analytics](#analytics) below
- **Data:** no database — all content is static TypeScript in `app/work/data.ts` and `app/play/data.ts`
- **Hosting:** [Vercel](https://vercel.com)

## Component architecture

Components in `app/components/` follow [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) (Brad Frost) — no external UI kit, everything is hand-built:

- **atoms/** — indivisible pieces (icons, tags, tooltips, search input)
- **molecules/** — atoms combined into one unit (cards, section headers, dropdown filters)
- **organisms/** — full page sections (nav, footer, filterable project grid, the Instagram-parody section)

Import direction is strictly one-way: organisms → molecules → atoms. Page-specific components that aren't reused live next to their page instead (e.g. `app/readme/readme-card.tsx`).

## Commands

- `npm run dev` — start the dev server (port 3001)
- `npm run build` — production build
- `npx tsc --noEmit` — type check

## Analytics

Page views are tracked automatically via [Vercel Web Analytics](https://vercel.com/docs/analytics) (`<Analytics />` in `app/layout.tsx`).

Custom events fire on high-intent clicks — project links, resume, socials, contact — so we can see what visitors (e.g. recruiters) actually engage with. Event names live in `app/lib/analytics.ts`, the single source of truth for what's tracked:

| Event | Fires on | Data |
| --- | --- | --- |
| `project_link_click` | Clicking a project's GitHub/demo/site icon on a card | `project`, `type` |
| `project_preview_click` | Clicking a project card itself | `project` |
| `social_click` | Clicking a GitHub/LinkedIn/X icon (nav or footer) | `platform`, `location` |
| `resume_click` | Clicking a resume link (footer or README page) | `location` |
| `contact_email_click` | Clicking a `mailto:` link | `location` |

View results in the Vercel dashboard under **Analytics → Events**.

> **Note:** Custom events require the project to be on a Vercel **Pro** plan. On **Hobby**, page views still track, but `track()` calls are silently dropped from the Events panel. See [limits & pricing](https://vercel.com/docs/analytics/limits-and-pricing).
