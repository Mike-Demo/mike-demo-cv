import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/licenses")({
  head: () => ({
    meta: [
      { title: "Licenses \u2014 CV Adventure" },
      {
        name: "description",
        content:
          "Third-party software licenses and digital carbon disclosure for mikedemo.work, the playable CV of Mike Demopoulos.",
      },
      { property: "og:title", content: "Licenses \u2014 CV Adventure" },
      {
        property: "og:description",
        content:
          "Third-party software licenses and digital carbon disclosure for mikedemo.work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mikedemo.work/licenses" },
    ],
    links: [{ rel: "canonical", href: "https://mikedemo.work/licenses" }],
  }),
  component: LicensesPage,
});

const LIBRARIES: { name: string; href: string; note: string }[] = [
  { name: "React", href: "https://github.com/facebook/react", note: "UI library" },
  { name: "TanStack Router", href: "https://github.com/TanStack/router", note: "Routing" },
  { name: "TanStack Start", href: "https://github.com/TanStack/router", note: "Server framework" },
  { name: "Tailwind CSS", href: "https://github.com/tailwindlabs/tailwindcss", note: "Styling" },
  { name: "Font Awesome", href: "https://github.com/FortAwesome/Font-Awesome", note: "Icons" },
  { name: "Lucide", href: "https://github.com/lucide-icons/lucide", note: "Icons" },
  { name: "Web Awesome", href: "https://github.com/shoelace-style/webawesome", note: "Design system" },
  { name: "Radix UI", href: "https://github.com/radix-ui/primitives", note: "Accessible UI primitives" },
  { name: "Zod", href: "https://github.com/colinhacks/zod", note: "Schema validation" },
];

function LicensesPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <Link
        to="/"
        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
      >
        \u2190 Back to the adventure
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Licenses</h1>

      <section aria-label="Site content" className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">Site content</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          The text, game design, and career narrative on mikedemo.work are \u00a9 Mike
          Demopoulos.
        </p>
      </section>

      <section aria-label="Third-party software" className="mt-8">
        <h2 className="text-xl font-semibold text-foreground">Third-party software</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          This site is built with open-source libraries. See each project&apos;s repository
          for its license terms.
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {LIBRARIES.map((lib) => (
            <li
              key={lib.name}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <a
                href={lib.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-4"
              >
                {lib.name}
              </a>
              <span className="text-muted-foreground"> \u2014 {lib.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="wa-licenses-group mt-8" aria-label="Digital carbon">
        <h2 className="text-xl font-semibold text-foreground">Digital carbon</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Homepage transfer is about 160.9 KB, roughly 0.024 g of CO2 per visit. Estimated
          with CO2.js using the Sustainable Web Design Model v4, measured 2026-09-27.
          Hosting: SpaceFast, not currently listed in the Green Web Foundation dataset.
          Machine-readable disclosure: <a href="/carbon.txt" className="underline underline-offset-4">/carbon.txt</a>.
        </p>
      </section>
    </main>
  );
}
