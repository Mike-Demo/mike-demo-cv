# Environment variables

**This project requires none.** There is no `.env` file, no `.env.example`, and
no secret of any kind in the repository. `bun install && bun run dev` and
`bun run build` work on a fresh clone with no configuration.

Why: the site has no backend — no database, authentication, server functions,
payment provider, email sender, analytics key or third-party API. All content is
hard-coded in `src/lib/game-data.ts` and the static files under `public/`.

## Values that behave like configuration

These are committed constants, not secrets. Update them in source if they change.

| Value | Where | What it controls |
| --- | --- | --- |
| `https://mikedemo.work/` | `src/routes/index.tsx` (canonical, `og:url`, JSON-LD), `public/sitemap.xml`, `public/robots.txt` | The canonical production domain used by search engines and social previews. |
| `google-site-verification` meta tag | `src/routes/__root.tsx` | Google Search Console ownership proof. Public by design; removing it breaks verification. |
| Prerendered route list | `vite.config.ts` (`tanstackStart.pages`) | Which routes are written as static HTML. |

## If a backend is ever added

Follow these conventions so nothing leaks into the browser bundle:

- **Browser-visible values** must be prefixed `VITE_` and read via
  `import.meta.env.VITE_X`. Anything with this prefix ends up in the shipped
  JavaScript — never put a private key there. Publishable/anon keys are fine.
- **Server-only values** are read with `process.env['X']` **inside** a handler
  (`createServerFn(...).handler()` or a server route), never at module scope —
  environment injection happens at call time, and module-scope reads are
  `undefined`.
- Add each new variable to this table with a description, and to the hosting
  provider's environment settings. Never commit real values.
