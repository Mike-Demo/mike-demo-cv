# personalized-cv

Static production build of **mikedemo.work** as cut over on 2026-09-29.

- `/` — personalized CV experience ("Hello, {name}." via URL slug; "Hello, traveler." on root)
- `/adventure/` — the text-adventure CV (previously the whole site)
- `/files/Mike_Demopoulos_Resume.pdf` — downloadable résumé
- `sitemap.xml`, `robots.txt`, `llms.txt`, `carbon.txt` included

## Provenance

This branch is a snapshot of exactly what is served in production. On 2026-09-29
it was published directly to the `mike-demo-cv` SpaceFast space as a
direct-upload version (v20), replacing the previous build.

## Notes

- `main` still holds the original Lovable/Vite source of the text adventure.
  This branch is **not** intended to be merged back into `main` — it is a
  standalone static snapshot.
- The SpaceFast space currently serves a direct-upload version. If the space is
  ever re-pointed at git, pointing it at this branch will serve these files;
  pushing to `main` would rebuild the old adventure-only site and overwrite
  production.
