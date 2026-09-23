# Roadmap

Consolidated from the archived plans in `.lovable/plan/`.

## Completed

- [x] **Terminal adventure engine** — command parser, history, scrollback,
      inventory and help (`src/routes/index.tsx`, `src/lib/game-data.ts`).
- [x] **CRT presentation** — green-phosphor theme with scan lines, flicker and
      glow (`src/styles.css`).
- [x] **Dynamic map** — SVG panel with visited-room reveal, connection lines,
      current-room pulse and click-to-travel (`src/components/MapPanel.tsx`).
- [x] **Custom favicon** — pixel terminal `>_` icon in phosphor green
      (`public/favicon.png`).
- [x] **PDF CV button** — header link with a Font Awesome PDF icon, readable on
      mobile.
- [x] **SEO pass** — heading structure, route `head()` metadata, canonical URL,
      Open Graph/Twitter tags, ProfilePage + Person JSON-LD, `robots.txt` and
      `sitemap.xml`.
- [x] **Google Search Console** — ownership verified via meta tag, property
      added, sitemap submitted.
- [x] **CV content refresh** — all rooms rewritten from Rezi master resume
      v3.5.1, plus a new Workshop room for AI projects and community work.
- [x] **Dependency security** — `js-yaml` resolved to a patched version; scan
      clean.
- [x] **Static hosting prep** — homepage prerendered, `dist/client` output,
      `_redirects`, static sitemap, `SPACEFAST.md` build spec.
- [x] **Spacefast build fix** — explicit `crawlLinks: false` and
      `failOnError: false` so external CI stops crawling the PDF link.
- [x] **Hand-off documentation** — `README.md`, `docs/architecture.md`,
      `docs/deployment.md`, `docs/environment.md`, this roadmap.

## Open

- [x] **Swap in the v3.5.1 PDF export** — `public/Mike_Demopoulos_CV.pdf`
      replaced with the v3.5.1 master resume.
- [ ] **Publish the latest build** — the live site serves the last published
      deployment, so recent fixes reach visitors on the next publish.
- [ ] **Trim the design-system bundle** — the vendored Web Awesome chunk is
      ~790 kB and triggers a chunk-size warning. Optional; only worth doing if
      load time becomes a concern.

## Ideas (not scheduled)

- Shareable deep links that restore a specific room via a validated route
  search param.
- Sound effects / typing cadence toggle for the terminal.
- Additional rooms for new roles as the CV grows (add to
  `src/lib/game-data.ts` and `MAP_POS`).
