# Static hosting prep for Spacefast

## Step 0 — Static check: PASSES

The site is a single public page. There is no database, no login, no per-user
content, no webhooks or scheduled jobs, and no server function that has to run
when a visitor loads the page. The adventure game runs entirely in the browser.
The only server-side piece is the sitemap route, which is replaced by a plain
file. So a fully static build is safe.

## Step 1 — Prerender the public route

In `vite.config.ts`, list the one public route and turn prerendering on:

- `pages: [{ path: "/" }]`
- `prerender: { enabled: true, autoStaticPathsDiscovery: false }`

The build toolchain already resolves to 2.22.0, above the 2.20.0 minimum, so
prerendering actually runs. Nothing in the app arms a module-scope timer and the
query client uses default settings, so the build should exit cleanly; if it
hangs after writing the page, add the prerender-time timer guard.

## Step 2 — Build output

Keep the normal build (no static Nitro preset). Add
`scripts/copy-static-output.mjs`, which copies `.output/public` into
`dist/client`, cleans `dist/client` first, and exits quietly if the output is
already there. Change the build command to
`vite build && node scripts/copy-static-output.mjs`.

## Step 3 — Static files

- Add `public/sitemap.xml` listing `https://mikedemo.work/`.
- Delete the server-generated sitemap route (`src/routes/sitemap[.]xml.ts`).
- `public/robots.txt` already points at `/sitemap.xml`; leave it as is.
- Add `public/_redirects` with `/*  /index.html  200`.
- Page title, description, social preview tags and the structured data are
  already declared in the route's `head()`, so they bake into the prerendered
  HTML. No change needed.

## Step 4 — Build spec

Create `SPACEFAST.md` recording: install command (`bun install`), build command
(`vite build && node scripts/copy-static-output.mjs`), output directory
`dist/client`, and a note that `.output/public` is the raw build output.

## Step 5 — Verification

- Run the type check and the full build.
- Confirm `dist/client/index.html` exists alongside `sitemap.xml`,
  `robots.txt`, `_redirects`, the PDF and the favicon.
- Serve `dist/client` locally and open the page in a browser: confirm the
  terminal renders, commands work after hydration, and the map panel behaves.
- Report anything that works in preview but not in the built output.

## Notes

Nothing here touches GitHub, DNS, or publishing. Preview inside Lovable keeps
working exactly as now — prerendering only affects the production build.
