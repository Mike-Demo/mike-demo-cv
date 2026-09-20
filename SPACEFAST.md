# Spacefast build spec

Static hosting configuration for this site.

| Setting          | Value                                               |
| ---------------- | --------------------------------------------------- |
| Install command  | `bun install`                                        |
| Build command    | `vite build && node scripts/copy-static-output.mjs`  |
| Output directory | `dist/client`                                        |
| Node version     | 20 or newer                                          |

## Notes

- The build prerenders every public route to static HTML. Routes are listed in
  `vite.config.ts` under `tanstackStart.pages`; add new public routes there.
- `.output/public` is the raw build output. The post-build script copies it to
  `dist/client`, which is the directory to serve.
- `public/_redirects` sends unknown paths to `/index.html` with a 200 so deep
  links work on static hosts.
- `public/sitemap.xml` and `public/robots.txt` are plain static files and are
  copied verbatim into the output.
- The site has no backend: no database, login, server functions, webhooks, or
  scheduled jobs. Everything runs in the browser.
