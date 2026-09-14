# Refresh the CV site from Rezi Master Resume v3.5.1

Goal: bring the text adventure, the downloadable CV, and the page's search/social wording in line with the newest Rezi resume.

## What changes

1. **Game content rewritten from v3.5.1**
   - Keep the same eight rooms and the same map, artifacts, and commands — only the wording inside them changes.
   - Name and identity: "Mike 'Demo' Demopoulos (they/them)", Hudson, Wisconsin; email, phone, LinkedIn and website as listed in the resume.
   - hosting.com room: 500+ VIP/enterprise accounts, five-figure MRR growth, ~90% success on quoted renewals/upgrades, event-based partner outreach, training 19 incoming CSMs.
   - Codeable room: hosting identified as a new strategic market, WP Toolkit integrations in cPanel and Plesk, leading the partner initiative from business case to launch, onboarding time cut from ~10 months to 3 weeks at ~1,000–2,000 applications a month.
   - InMotion / BoldGrid room: ~80% of closed M&A opportunities sourced, 85+ meetings booked around major events like CloudFest, dozens of international events a year, Plesk and cPanel integration advocacy.
   - Remaining rooms (Joomla treasury, studio/earlier roles, academy, Forbes council) updated from the corresponding resume entries.
   - Academy room: Art Institutes Minnesota 2005; certifications MIT Professional Education 2025 (top 1% of cohort), Out in Tech Leadership Institute 2026, The Community MBA (CMX), Disney's Approach to Leadership Excellence, FranklinCovey Presentation Advantage. Skills list refreshed from the resume's skills section.

2. **Downloadable CV**
   - Replace the file behind the "PDF CV" button with the v3.5.1 export. Rezi's connection lets me read the resume text but not download its PDF, so I need you to upload the exported PDF; until then the button keeps serving the current file.

3. **Page title and description**
   - Update the homepage title, description, and social preview wording to match the new positioning, and refresh the name and job title in the page's structured data.

## Technical notes

- `src/lib/game-data.ts` — `PLAYER`, `ROOMS`, and `EXAMINE` text rewritten; room ids, exits, `MAP_POS`, and loot names unchanged so the map and game logic keep working.
- `src/routes/index.tsx` — `head()` meta and the ProfilePage/Person JSON-LD updated.
- `public/Mike_Demopoulos_CV.pdf` — replaced once the new export is provided.
- No layout, styling, or component changes.

## Out of scope

- Changing the game mechanics, map layout, or CRT styling.
- Editing anything in Rezi.
