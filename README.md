# Mike Demopoulos — CV Adventure

An interactive, retro green-phosphor terminal that turns Mike "Demo" Demopoulos'
CV into a playable text adventure. Visitors type commands (`look`, `go north`,
`examine plaque`, `map`) to explore rooms that represent roles, projects,
education and community work.

- **Live site:** https://mikedemo.work/
- **Lovable-hosted build:** https://mike-demo-cv.lovable.app
- **Editor:** [Lovable project](https://lovable.dev/projects/69b88db2-c987-4c15-896d-eff52770ff69)

## Key features

- **Terminal game engine** — command parser, command history (arrow keys),
  scrollback, inventory/loot, and contextual help.
- **Dynamic map** — an SVG panel that reveals rooms as they are visited, draws
  connections, pulses the current room, and lets you click an adjacent room to
  travel there.
- **CRT presentation** — scan lines, flicker and phosphor glow implemented in
  hand-written CSS (`src/styles.css`).
- **PDF fallback** — a header link to the plain PDF CV for anyone who would
  rather not play.
- **SEO** — per-route `head()` metadata, canonical URL, Open Graph/Twitter tags,
  and ProfilePage + Person JSON-LD; static `sitemap.xml` and `robots.txt`.
- **Fully static output** — the homepage is prerendered to HTML at build time;
  no server is required at runtime.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | TanStack Start v1 (React 19) |
| Router | TanStack Router (file-based, `src/routes/`) |
| Build tool | Vite 8 (`@lovable.dev/vite-tanstack-config`) |
| Styling | Tailwind CSS v4 + custom CRT CSS |
| Components | Web Awesome design system, Radix/shadcn-style UI primitives |
| Icons | Font Awesome Free |
| Data fetching | TanStack Query (available; unused — no remote data) |
| Package manager | Bun |

There is **no backend**: no database, authentication, server functions,
scheduled jobs, or third-party APIs. All CV content lives in
`src/lib/game-data.ts`.

## Attribution & licenses

- [Web Awesome](https://webawesome.com) 3.12.0 — MIT. Vendored under
  `src/design-system/font-awsome-web-awesome-171158/`; treat it as vendor code.
- [Font Awesome Free](https://fontawesome.com) 7.3.1 — icons CC BY 4.0, code MIT.
- [Radix UI](https://www.radix-ui.com/) primitives and shadcn/ui patterns — MIT.
- TanStack Router / Start / Query — MIT.
- Originally built with [Lovable](https://lovable.dev); the code is plain
  open-source tooling and runs anywhere.

CV content and copy are © Mike Demopoulos.

## Local development

Prerequisites: **Bun 1.3+** (recommended) or **Node.js 20+**.

```sh
git clone <this-repository-url>
cd <repository-name>
bun install
bun run dev
```

The dev server runs on http://localhost:8080.

**No `.env` file is required** — the project uses zero environment variables.
See [docs/environment.md](docs/environment.md).

Useful scripts:

| Command | Purpose |
| --- | --- |
| `bun run dev` | Dev server with HMR |
| `bun run build` | Production build + static copy step |
| `bun run preview` | Serve the production build locally |
| `bun run lint` | ESLint |
| `bun run format` | Prettier |
| `bunx tsc --noEmit` | Typecheck |

## Build & deployment

```sh
bun install
bun run build     # vite build && node scripts/copy-static-output.mjs
```

Output directory: **`dist/client`** — a complete static site (prerendered
`index.html`, assets, `sitemap.xml`, `robots.txt`, `_redirects`, the PDF CV and
the favicon). Serve that folder from any static host; no Node process is needed
in production.

Details, including the Spacefast configuration and DNS notes, are in
[docs/deployment.md](docs/deployment.md) and [SPACEFAST.md](SPACEFAST.md).

## Documentation index

- [docs/architecture.md](docs/architecture.md) — codebase layout, design
  decisions, gotchas.
- [docs/deployment.md](docs/deployment.md) — hosting, redirects, domain setup.
- [docs/environment.md](docs/environment.md) — environment variables (none today).
- [roadmap.md](roadmap.md) — completed milestones and open work.
- [SPACEFAST.md](SPACEFAST.md) — build spec for the Spacefast static host.
