# Deployment

The production site is a **static bundle**. There is no server-side runtime, no
database and no API to provision — build the folder and serve it.

## Build

```sh
bun install            # or: bun install --frozen-lockfile in CI
bun run build          # vite build && node scripts/copy-static-output.mjs
```

| Setting | Value |
| --- | --- |
| Install command | `bun install` |
| Build command | `vite build && node scripts/copy-static-output.mjs` |
| Output directory | `dist/client` |
| Node version | 20 or newer (Bun 1.3+ recommended) |
| Environment variables | none |

`dist/client` contains the prerendered `index.html`, hashed JS/CSS assets,
`favicon.png`, `Mike_Demopoulos_CV.pdf`, `robots.txt`, `sitemap.xml` and
`_redirects`.

Some toolchain versions emit the build into `.output/public` instead; the
post-build script copies that into `dist/client` and skips silently when the
output already lives there.

## Prerendering

`vite.config.ts` lists every public route and pins the crawler off:

```ts
tanstackStart: {
  pages: [{ path: "/" }],
  prerender: {
    enabled: true,
    autoStaticPathsDiscovery: false,
    crawlLinks: false,
    failOnError: false,
  },
}
```

Add a `pages` entry for each new public route. Leave `crawlLinks: false` — with
crawling enabled the prerenderer follows the PDF link and fails the build with
`Failed to fetch /Mike_Demopoulos_CV.pdf: Not Found`.

## Static hosting (Spacefast — current production)

Point the host at the repository and use the table above. See
[../SPACEFAST.md](../SPACEFAST.md) for the same values in the host's own terms.

`public/_redirects` ships the SPA fallback:

```
/*  /index.html  200
```

On hosts that do not read `_redirects` (e.g. plain S3, nginx), configure the
equivalent rule: serve `index.html` with a 200 for unknown paths. The site is a
single page, so this only matters for stray deep links.

Other static hosts work unchanged:

- **Cloudflare Pages / Netlify** — build command and output dir as above;
  `_redirects` is read natively.
- **Vercel** — set the output directory to `dist/client` and add a rewrite of
  `/(.*)` to `/index.html`.
- **Any web server** — copy `dist/client` to the document root.

## Lovable publishing (alternative)

Publishing from the Lovable editor deploys the same app to
https://mike-demo-cv.lovable.app. Frontend changes go live only after clicking
Update in the publish dialog. Both paths build from the same source; pick one as
the canonical production target to avoid the two drifting.

## Domain & DNS

The canonical domain is **https://mikedemo.work/**. It is referenced in the
canonical link, Open Graph URL, JSON-LD and `sitemap.xml` — change all four if
the domain changes.

DNS requirements:

- Apex `mikedemo.work` → the host's A/ALIAS/ANAME target (or a CNAME flattening
  record where supported).
- `www` → CNAME to the host, redirecting to the apex.
- TLS is issued automatically by Spacefast/Cloudflare/Netlify once DNS resolves.

Google Search Console ownership is verified via the
`google-site-verification` meta tag in `src/routes/__root.tsx`. Keep that tag in
place or verification breaks. The sitemap submitted to Search Console is
`https://mikedemo.work/sitemap.xml`.
