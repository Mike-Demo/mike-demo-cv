Add a PDF fallback button to the CV text adventure

Goal: Give visitors a quick way to switch from the interactive game to the static PDF version of the CV, styled to match the retro CRT terminal.

## What will be built

1. **Serve the PDF from the site**
   - Copy the uploaded `Mike_Demopoulos_-_Partnerships_-_2026.pdf` into `public/Mike_Demopoulos_CV.pdf` so it is served at `https://mikedemo.work/Mike_Demopoulos_CV.pdf`.

2. **Add a PDF button in the terminal header**
   - In `src/routes/index.tsx`, add a small link/button in the top header bar (next to the room name and artifact count) labeled something like `PDF CV` or `STATIC CV`.
   - It will open the PDF in a new tab (`target="_blank"`, `rel="noopener noreferrer"`) so users don't lose the game.

3. **Match the CRT terminal style**
   - Use the existing phosphor green / amber accents and compact header typography.
   - Keep the button unobtrusive but easy to find for someone who is confused by the terminal interface.

## Files to change

- `src/routes/index.tsx` — add the header link.
- No new CSS file needed; will reuse existing `.crt-key` or a small inline-style header link.

## Out of scope

- Regenerating or editing the PDF content.
- Changing the favicon or SEO metadata.
- Adding a download-as-PDF feature from the game data.
