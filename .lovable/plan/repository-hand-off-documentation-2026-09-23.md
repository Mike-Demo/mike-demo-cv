# Repository hand-off documentation

Goal: anyone can clone this repo, understand it, build it, and host it without Lovable. No application code changes.

## Audit findings (already confirmed)

- TanStack Start v1 (React 19, TanStack Router file-based routing, TanStack Query available), Vite 8, Tailwind CSS v4, Bun as package manager.
- **No backend at all**: no Lovable Cloud/Supabase, no database, no auth, no server functions, no third-party APIs. The adventure game runs entirely in the browser; content is hard-coded in `src/lib/game-data.ts`.
- **No environment variables** are used anywhere; there is no `.env` file.
- Build: `vite build && node scripts/copy-static-output.mjs`, output `dist/client`, homepage prerendered to static HTML.
- Design system: Web Awesome / Font Awesome Free copied under `src/design-system/`; shadcn-style Radix components also present.

## What gets written

### `README.md` (rewritten)
Project overview and live URLs (https://mikedemo.work/, https://mike-demo-cv.lovable.app), key features (retro CRT terminal resume, command parser, dynamic SVG map with room reveal and click-to-travel, PDF CV link, SEO/structured data, fully static prerendered output), tech stack, attribution (Web Awesome 3.12.0 + Font Awesome Free 7.3.1, MIT; Radix/shadcn; built with Lovable), local development (Bun 1.3+/Node 20+, `bun install`, `bun run dev`, note that no `.env` is needed), build & deployment summary, and a documentation index.

### `docs/architecture.md`
Folder map (`src/routes`, `src/lib/game-data.ts` as the single content source, `src/components/MapPanel.tsx`, `src/design-system/`, `src/styles.css`, `scripts/`, `public/`). Design decisions: all game state is local React state in the index route, no router search params or global store; client vs server boundary (SSR renders the shell, the game is client-interactive after hydration); CRT styling done with hand-written CSS rather than the design system, deliberately. Gotchas: design-system elements must load through `WebAwesomeLoader` client-side (never imported at SSR module scope), `routeTree.gen.ts` is generated, Cloudflare Worker runtime constraints on any future server code, and the prerender crawler must stay off so the PDF link is not fetched as a page.

### `docs/deployment.md`
Static hosting on Spacefast: install/build commands, `dist/client` output, `public/_redirects` SPA fallback, static `sitemap.xml`/`robots.txt`, the `crawlLinks: false` / `failOnError: false` prerender pins and why they exist, Lovable publish as the alternative path, and domain/DNS notes for mikedemo.work. `SPACEFAST.md` stays and is linked from here.

### `docs/environment.md`
States plainly that the project requires no environment variables or secrets, lists the only build-time inputs (none), and documents where to add variables if a backend is ever introduced (`VITE_*` for browser, server-only vars read inside handlers).

### `roadmap.md`
Completed milestones checked off from the archived plans in `.lovable/plan/` (game build, dynamic map, favicon, SEO fixes, Rezi v3.5.1 content refresh, PDF button, static hosting prep, Spacefast build fix). Open items: swap in the v3.5.1 PDF export, publish so the latest fixes reach the live site, optional design-system bundle size trim.

## Verification

- Check every markdown link resolves to a committed file.
- Grep the docs for keys, tokens, phone/email leakage beyond what the public CV already shows.
- Run the typecheck and lint (`bun run lint`; there is no `check` script) plus a full build to confirm nothing broke.
