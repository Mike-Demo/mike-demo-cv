# Fix the Spacefast build failure

## What happened

The build produced the site correctly, then crashed at the very last step. The
page-generation step followed every link on the page, including the "PDF CV"
link, tried to render the PDF as if it were a web page, got a "not found", and
stopped the whole build with an error.

Inside Lovable this never happens: the Lovable build turns link-following off
and treats such errors as non-fatal. Outside Lovable (Spacefast's build
machine) those safeguards are not applied, so the defaults take over — follow
links, fail hard.

## The fix

In `vite.config.ts`, state the two settings explicitly instead of relying on
Lovable's environment to supply them:

- `crawlLinks: false` — only the routes listed in `pages` get generated; links
  such as the PDF are left alone.
- `failOnError: false` — a page that cannot be generated falls back instead of
  killing the build.

These sit alongside the existing `enabled: true` and
`autoStaticPathsDiscovery: false`. They match exactly what the Lovable build
already forces, so preview behaviour is unchanged.

## Verification

- Run the typecheck and the full build the same way Spacefast does
  (`bun install --frozen-lockfile`, then the build command).
- Confirm the build exits cleanly with no prerender error and that the PDF is
  no longer crawled.
- Confirm `dist/client` contains `index.html`, `sitemap.xml`, `robots.txt`,
  `_redirects`, the favicon and `Mike_Demopoulos_CV.pdf`.
- Serve `dist/client` and open the page to confirm the terminal renders, the
  PDF link opens the file, and no console errors appear.

## Note

The build log also shows two harmless warnings that do not need changes: a
notice that `vite-tsconfig-paths` is now built into Vite, and a chunk-size
warning about the design-system bundle.
