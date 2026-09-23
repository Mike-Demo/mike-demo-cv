import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { ROOMS, EXAMINE, HELP, PLAYER, MAP_POS, type Room } from "@/lib/game-data";
import { MapPanel } from "@/components/MapPanel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mike Demopoulos — Partnerships CV as a Text Adventure" },
      {
        name: "description",
        content:
          "Play through the career of Mike \u201CDemo\u201D Demopoulos: strategic partnerships, alliances, and go-to-market leadership across cloud, hosting, and open source.",
      },
      { property: "og:title", content: "Mike Demopoulos — Partnerships CV as a Text Adventure" },
      {
        property: "og:description",
        content:
          "A playable resume: type commands to explore partner go-to-market wins across hosting.com, Codeable, InMotion/BoldGrid, Joomla, and Forbes Agency Council.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://mikedemo.work/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mikedemo.work/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: "https://mikedemo.work/",
          mainEntity: {
            "@type": "Person",
            name: "Mike Demopoulos",
            alternateName: "Mike \u201CDemo\u201D Demopoulos",
            jobTitle: "Partnerships Lead, North America",
            worksFor: { "@type": "Organization", name: "hosting.com" },
            address: {
              "@type": "Place",
              name: "Hudson, Wisconsin, USA",
            },
            sameAs: [
              "https://www.linkedin.com/in/mikedemopoulos",
              "https://mikedemo.work",
            ],
          },
        }),
      },
    ],
  }),
  component: Game,
});


type Line = { text: string; tone?: "sys" | "cmd" | "head" | "loot" | "err" };

const DIRS: Record<string, string> = {
  n: "north", north: "north",
  s: "south", south: "south",
  e: "east", east: "east",
  w: "west", west: "west",
  u: "up", up: "up",
  d: "down", down: "down",
};

const TOTAL_LOOT = Object.values(ROOMS).filter((r) => r.loot).length;

function roomLines(room: Room, taken: string[]): Line[] {
  const out: Line[] = [
    { text: "" },
    { text: `== ${room.name} ==`, tone: "head" },
    ...room.desc.map((text) => ({ text })),
  ];
  if (room.loot && !taken.includes(room.loot)) {
    out.push({ text: `You notice an artifact here: ${room.loot}. (TAKE ${room.loot.split(" ")[0]!})`, tone: "loot" });
  }
  out.push({
    text: `EXITS: ${Object.keys(room.exits).join(", ").toUpperCase()}`,
    tone: "sys",
  });
  return out;
}

function Game() {
  const [roomId, setRoomId] = useState("lobby");
  const [taken, setTaken] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const [visited, setVisited] = useState<string[]>(["lobby"]);
  const [showMap, setShowMap] = useState(true);
  const [lines, setLines] = useState<Line[]>([
    { text: "MIKEDEMO SYSTEMS v2.026 — 64K CORE READY", tone: "sys" },
    { text: "LOADING CURRICULUM VITAE ......... OK", tone: "sys" },
    { text: "" },
    { text: `${PLAYER.name} — ${PLAYER.title}`, tone: "head" },
    { text: "A TEXT ADVENTURE THROUGH A CAREER.", tone: "head" },
    { text: "" },
    { text: "Type HELP for commands. Collect all artifacts to win.", tone: "sys" },
    ...roomLines(ROOMS["lobby"]!, []),
  ]);

  const room = ROOMS[roomId]!;
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const won = useMemo(() => taken.length === TOTAL_LOOT, [taken]);

  function push(newLines: Line[]) {
    setLines((prev) => [...prev, ...newLines]);
  }

  function move(dir: string) {
    const dest = room.exits[dir];
    if (!dest) return push([{ text: `You can't go ${dir} from here.`, tone: "err" }]);
    setRoomId(dest);
    const firstVisit = !visited.includes(dest);
    if (firstVisit) setVisited((v) => [...v, dest]);
    push(roomLines(ROOMS[dest]!, taken));
    if (firstVisit) {
      push([
        {
          text: `MAP UPDATED — ${visited.length + 1}/${Object.keys(MAP_POS).length} sectors charted.`,
          tone: "sys",
        },
      ]);
    }
  }

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    push([{ text: `> ${raw}`, tone: "cmd" }]);
    if (!cmd) return;
    const [verb, ...rest] = cmd.split(/\s+/);
    const arg = rest.join(" ");

    if (DIRS[verb!] && verb !== "go") return move(DIRS[verb!]!);

    switch (verb) {
      case "go":
      case "move":
      case "walk":
        if (DIRS[arg]) return move(DIRS[arg]!);
        return push([{ text: "Go where? Try GO NORTH.", tone: "err" }]);
      case "look":
      case "l":
        return push(roomLines(room, taken));
      case "examine":
      case "x":
      case "inspect": {
        const key = Object.keys(EXAMINE).find((k) => arg.includes(k));
        if (key && room.items?.includes(key)) return push([{ text: EXAMINE[key]! }]);
        return push([{ text: `You see nothing special about "${arg || "that"}".`, tone: "err" }]);
      }
      case "take":
      case "get":
      case "grab": {
        if (!room.loot) return push([{ text: "There's nothing to take here.", tone: "err" }]);
        if (taken.includes(room.loot))
          return push([{ text: "You already have it.", tone: "err" }]);
        if (!arg || room.loot.toLowerCase().includes(arg.split(" ")[0]!)) {
          const next = [...taken, room.loot];
          setTaken(next);
          push([{ text: `Acquired: ${room.loot}  [${next.length}/${TOTAL_LOOT}]`, tone: "loot" }]);
          if (next.length === TOTAL_LOOT) {
            push([
              { text: "" },
              { text: "*** ALL ARTIFACTS RECOVERED ***", tone: "head" },
              { text: "You have assembled a full career: partnerships, platforms,", tone: "loot" },
              { text: "open source stewardship, and a Forbes byline.", tone: "loot" },
              { text: `Hire the player: ${PLAYER.email}`, tone: "loot" },
            ]);
          }
          return;
        }
        return push([{ text: `No "${arg}" here.`, tone: "err" }]);
      }
      case "inventory":
      case "inv":
      case "i":
        return push(
          taken.length
            ? [
                { text: `INVENTORY [${taken.length}/${TOTAL_LOOT}]:`, tone: "sys" },
                ...taken.map((t) => ({ text: `  · ${t}` })),
              ]
            : [{ text: "Your pack is empty. Artifacts await.", tone: "sys" }],
        );
      case "map":
        setShowMap((v) => !v);
        return push([
          { text: `SECTOR MAP ${showMap ? "HIDDEN" : "SHOWN"}.`, tone: "sys" },
          { text: "CHARTED SECTORS:", tone: "sys" },
          ...Object.values(ROOMS).map((r) =>
            visited.includes(r.id)
              ? { text: `  ${r.id === roomId ? "»" : " "} ${r.name}` }
              : { text: "    ?????? (unexplored)", tone: "sys" as const },
          ),
        ]);
      case "contact":
      case "hire":
        return push([
          { text: "TRANSMISSION CHANNELS:", tone: "sys" },
          { text: `  EMAIL     ${PLAYER.email}` },
          { text: `  PHONE     ${PLAYER.phone}` },
          { text: `  LINKEDIN  ${PLAYER.linkedin}` },
          { text: `  WEB       ${PLAYER.site}` },
          { text: `  BASE      ${PLAYER.location}` },
        ]);
      case "resume":
      case "cv":
        return push([
          { text: "FULL DUMP:", tone: "sys" },
          ...Object.values(ROOMS).flatMap((r) => [
            { text: "" },
            { text: `== ${r.name} ==`, tone: "head" as const },
            ...r.desc.map((text) => ({ text })),
          ]),
        ]);
      case "clear":
      case "cls":
        return setLines([{ text: "Screen cleared.", tone: "sys" }]);
      case "help":
      case "?":
        return push(HELP.map((text) => ({ text, tone: "sys" as const })));
      default:
        return push([
          { text: `I don't know how to "${verb}". Type HELP.`, tone: "err" },
        ]);
    }
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const raw = input;
    setHistory((h) => [raw, ...h].slice(0, 50));
    setHIdx(-1);
    setInput("");
    run(raw);
  }

  return (
    <main
      className="crt-shell min-h-screen px-3 py-4 sm:px-6 sm:py-8"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="mx-auto flex h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col crt-frame">
        <header className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-b border-[var(--phos-dim)] px-3 py-2 text-[0.65rem] tracking-[0.2em] sm:text-xs">
          <h1 className="m-0 min-w-0 text-[0.65rem] font-normal tracking-[0.2em] sm:text-xs">
            Mike Demopoulos — Interactive CV &amp; Text Adventure
          </h1>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline">{room.name}</span>
            <a
              href="/Mike_Demopoulos_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="crt-key pdf-key inline-flex items-center gap-1"
              aria-label="Open PDF version of CV"
            >
              <FontAwesomeIcon icon={faFilePdf} size="sm" />
              <span>PDF CV</span>
            </a>
            <span>{taken.length}/{TOTAL_LOOT} {won ? "· COMPLETE" : ""}</span>
          </div>
        </header>

        {showMap ? (
          <section aria-labelledby="map-heading">
            <h2 id="map-heading" className="sr-only">Explored sector map</h2>
            <MapPanel current={roomId} visited={visited} onTravel={(dir) => run(dir)} />
          </section>
        ) : null}

        <h2 className="sr-only">Terminal output</h2>
        <div ref={scrollRef} className="crt-screen flex-1 overflow-y-auto px-3 py-3 sm:px-5">
          {lines.map((l, i) => (
            <p key={i} data-tone={l.tone ?? "body"} className="crt-line">
              {l.text || "\u00A0"}
            </p>
          ))}
        </div>

        <form onSubmit={submit} className="flex items-center gap-2 border-t border-[var(--phos-dim)] px-3 py-2 sm:px-5">
          <span aria-hidden className="crt-prompt">&gt;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                const n = Math.min(hIdx + 1, history.length - 1);
                if (n >= 0) { setHIdx(n); setInput(history[n] ?? ""); }
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                const n = hIdx - 1;
                setHIdx(n);
                setInput(n >= 0 ? (history[n] ?? "") : "");
              }
            }}
            aria-label="Enter a command"
            autoFocus
            autoComplete="off"
            spellCheck={false}
            className="crt-input flex-1"
            placeholder="type a command…"
          />
        </form>

        <h2 className="sr-only">Command shortcuts and navigation</h2>
        <nav className="flex flex-wrap gap-1.5 border-t border-[var(--phos-dim)] px-3 py-2 sm:px-5">
          {["look", "help", "map", "inventory", "contact", "resume"].map((c) => (
            <button key={c} type="button" className="crt-key" onClick={() => run(c)}>
              {c.toUpperCase()}
            </button>
          ))}
          {Object.keys(room.exits).map((d) => (
            <button key={d} type="button" className="crt-key" onClick={() => run(d)}>
              {d.toUpperCase()}
            </button>
          ))}
        </nav>
      </div>
    </main>
  );
}
