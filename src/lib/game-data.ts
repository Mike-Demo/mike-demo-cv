export type Room = {
  id: string;
  name: string;
  desc: string[];
  exits: Record<string, string>;
  items?: string[];
  loot?: string;
};

export const PLAYER = {
  name: 'MIKE "DEMO" DEMOPOULOS (they/them)',
  title: "Strategic Partnerships & Go-To-Market Leader",
  location: "Hudson, Wisconsin, USA",
  email: "hey.demo@mikedemo.email",
  phone: "612.807.3601",
  linkedin: "in/mikedemopoulos",
  site: "mikedemo.com",
};

export const ROOMS: Record<string, Room> = {
  lobby: {
    id: "lobby",
    name: "THE ATRIUM",
    desc: [
      "A dim lobby lit by a single amber CRT. A brass plaque reads:",
      '  "Strategic partnerships, alliances, and go-to-market leader across',
      '   cloud infrastructure, hosting, SaaS, and open-source ecosystems."',
      "> Builds partner motions, opens new channels, and converts executive",
      "  relationships, ecosystem credibility, and technical insight into",
      "  revenue growth, market expansion, and faster execution.",
      "> Known for identifying new markets, leading cross-functional",
      "  initiatives, and aligning commercial, product, technical, and",
      "  customer teams around scalable partner-led growth.",
      "Corridors lead in every direction. A humming server rack sits north.",
    ],
    exits: {
      north: "cloud",
      east: "guild",
      south: "forge",
      west: "academy",
      up: "council",
    },
    items: ["plaque", "crt"],
    loot: "BUSINESS CARD",
  },
  cloud: {
    id: "cloud",
    name: "THE CLOUD DECK — hosting.com",
    desc: [
      "Apr 2025 - Present · Remote · PARTNERSHIPS LEAD, NORTH AMERICA",
      "High-performance clouds hum overhead, carrying business-critical apps.",
      "> Manage 500+ VIP and enterprise accounts across North America, closing",
      "  five-figure MRR growth through renewals, upgrades, and expansion.",
      "> Maintain roughly 90% success across quoted renewal, upgrade, and",
      "  expansion opportunities within six months of quote delivery.",
      "> Built a targeted partner outreach motion around major international",
      "  events, converting agency and MSP outreach into meetings or replies",
      "  with clear next steps at roughly an 80% rate.",
      "> Translate between clients, partners, and technical stakeholders to",
      "  unblock complex issues and move opportunities toward expansion.",
      "> Trained 19 incoming CSMs during restructuring, transferring account",
      "  knowledge and documenting processes across teams.",
      "> Integrated AI-enabled workflows into research, meeting prep, follow-up,",
      "  and account planning to scale partner and enterprise management.",
    ],
    exits: { south: "lobby", east: "guild" },
    items: ["rack"],
    loot: "AGENCY LEDGER",
  },
  guild: {
    id: "guild",
    name: "THE PARTNER GUILD — Codeable",
    desc: [
      "Jun 2021 - Dec 2024 · Remote · HEAD OF PARTNERSHIPS",
      "A vast hall of partner banners, each stitched with a hosting logo.",
      "> Opened access to new customer segments and shifted company go-to-market",
      "  direction by identifying web hosting as a strategic market beyond an",
      "  initial base of major WordPress hosts.",
      "> Expanded distribution through native WP Toolkit integrations inside",
      "  cPanel and Plesk, reaching ecosystems serving millions of sites.",
      "> Led the cPanel / Plesk partner initiative from business case and RFP",
      "  through agency selection, testing, rollout, and launch across both",
      "  major hosting control panel ecosystems.",
      "> Translated a new-market concept into an executable partner motion by",
      "  aligning internal stakeholders, partners, and technical workstreams.",
      "> Cut applicant-to-approval time from ~10 months to 3 weeks on a flow",
      "  handling ~1,000-2,000 applications per month, without losing quality.",
    ],
    exits: { west: "lobby", north: "cloud", south: "treasury" },
    items: ["banners"],
    loot: "TUNE KEY",
  },
  treasury: {
    id: "treasury",
    name: "THE TREASURY — Open Source Matters (Joomla)",
    desc: [
      "Jan 2013 - Dec 2018 · Global / Remote",
      "OPEN SOURCE GOVERNANCE, FUNDRAISING & FINANCIAL STEWARDSHIP",
      "Ledgers stacked to the ceiling behind a worn boardroom table.",
      "> Led fundraising efforts that raised more than $1M for the Joomla project.",
      "> Directed sponsorship strategy across 5 Joomla conferences, securing",
      "  30+ sponsors over three consecutive years.",
      "> Served on the board during a governance transition, steering fundraising",
      "  and financial planning for an international open-source community with",
      "  an annual budget of nearly $700K at the time.",
    ],
    exits: { north: "guild", west: "forge" },
    items: ["ledgers"],
    loot: "TREASURER SEAL",
  },
  forge: {
    id: "forge",
    name: "THE EVANGELIST'S FORGE — InMotion Hosting / BoldGrid",
    desc: [
      "Oct 2016 - Jun 2021 · Remote",
      "BUSINESS DEVELOPMENT SPECIALIST – PRODUCT EVANGELIST",
      "A stage, a mic, and a wall of conference badges from a dozen countries.",
      "> Directly sourced roughly 80% of qualified M&A opportunities that",
      "  ultimately closed, including six- and seven-figure deal values.",
      "> Turned major industry events into go-to-market campaigns rather than",
      "  passive sponsorships, often booking 85+ meetings around a single event",
      "  such as CloudFest to reach decision-makers and improve event ROI.",
      "> Extended that event and ecosystem strategy across dozens of",
      "  international events annually.",
      "> Built trusted relationships across hosts, agencies, partners, and",
      "  community stakeholders that opened pipeline and market visibility.",
      "> Drove product adoption through speaking and partner engagement for",
      "  native Plesk and cPanel integrations.",
    ],
    exits: { north: "lobby", east: "treasury", west: "studio" },
    items: ["mic", "badges"],
    loot: "EVANGELIST MIC",
  },
  studio: {
    id: "studio",
    name: "THE WORKSHOP — Projects & Community",
    desc: [
      "Half lab, half green room. Agents hum on one bench, pride flags on the other.",
      "",
      "APPLIED AI WORKFLOWS / AGENT TOOLING · MikeDemo.dev · Aug 2026 - Present",
      "> Built practical AI workflow tools for day-to-day business use, including",
      "  forks of 16 open-source AI libraries for execution and experimentation.",
      "> Designed browser-based and local workflow paths across 6 use cases,",
      "  weighing lower-cost and privacy-first deployment options.",
      "> Applied human-in-the-loop safeguards and orchestration across 10 agents.",
      "  (skills.mikedemo.dev)",
      "",
      "BUGLE CROWNS — AWS AGENTIC FOOTBALL CUP · Sep 2026 - Present",
      "> Designed a 5-agent system to test multi-agent orchestration, efficiency,",
      "  and decision-quality tradeoffs under competitive constraints.",
      "  (mikedemo.dev/bugle-crowns)",
      "",
      "COMMUNITY: Out in Tech volunteer since 2021 (2 Digital Corps projects as",
      "project manager) · CloudFest Hackathon contributor, 6 events 2021-2025,",
      "one overall winning accessibility project · Lead Organizer of the Global",
      "Pride Parties at WordCamp Asia, Europe & US, growing a recurring series",
      "from ~75 to 700 registrations in two years.",
    ],
    exits: { east: "forge", north: "academy" },
    items: ["terminal"],
    loot: "LEGACY CODEBASE",
  },
  academy: {
    id: "academy",
    name: "THE ACADEMY — Education & Certifications",
    desc: [
      "Chalk dust and neural nets.",
      "> The Art Institutes Minnesota, 2005 — Web Page, Digital/Multimedia",
      "  and Information Resources Design.",
      "",
      "CERTIFICATIONS:",
      "> MIT Professional Education, Jan-Apr 2025 — No Code AI and Machine",
      "  Learning: Building Data Science Solutions. Top 1% of cohort.",
      "> Out in Tech Leadership Institute, Sep 2026 — LGBTQ+ technology",
      "  leadership development, New York City.",
      "> The Community MBA, CMX, Feb 2021 — community and ecosystem building.",
      "> Disney's Approach to Leadership Excellence, Disney Institute, Oct 2020.",
      "> Presentation Advantage, FranklinCovey, Dec 2016.",
      "",
      "SKILLS unlocked:",
      "> Strategic Partnerships · Strategic Alliances · Channel Partnerships ·",
      "  Partner Go-to-Market Strategy.",
      "> Business Development · Executive Stakeholder Management ·",
      "  Cross-Functional Leadership · Technical-Commercial Translation.",
      "> Cloud Infrastructure · Hosting · WordPress · AI-Enabled Workflows.",
    ],
    exits: { east: "lobby", south: "studio", up: "council" },
    items: ["diploma"],
    loot: "MIT CREDENTIAL",
  },
  council: {
    id: "council",
    name: "THE COUNCIL CHAMBER — Forbes Agency Council",
    desc: [
      "Jan 2026 - Present · COUNCIL MEMBER; LEAD, WEB HOSTING & INFRASTRUCTURE GROUP",
      "A high round table above the clouds. Printing presses churn below.",
      "> Leads the Web Hosting & Infrastructure Group within the invite-only",
      "  Forbes Agency Council, shaping discussions on hosting, infrastructure,",
      "  and agency trends.",
      "> Published 2 bylined Forbes.com articles and contributed to 18 additional",
      "  Forbes Agency Council pieces.",
      "> Strengthened personal and company visibility through ongoing industry",
      "  commentary and executive peer engagement.",
      "",
      "PUBLISHED (Forbes, 2026):",
      '  "The Lifespan Of SSL Certificates Is Shrinking, And Agencies Must Adapt"',
      '  "Green Website Hosting: What Agencies Should Know, And Where To Start"',
    ],
    exits: { down: "lobby" },
    items: ["press"],
    loot: "FORBES PEN",
  },
};

export const EXAMINE: Record<string, string> = {
  plaque: "Brass, well polished. Partnerships, alliances, go-to-market. Still going.",
  crt: "An amber monitor showing a blinking cursor. It's waiting for you, too.",
  rack: "Blade servers for business-critical workloads. Uptime is a love language.",
  banners: "Partner banners for cPanel and Plesk, hung the week WP Toolkit shipped.",
  ledgers: "Joomla fundraising records. More than $1M raised, every line balanced.",
  mic: "Worn foam windscreen. It has told the BoldGrid story on many stages.",
  badges: "Lanyards from CloudFest, WordCamps, and Joomla World Conferences.",
  terminal: "A local agent swarm, ten of them, arguing politely about a football match.",
  diploma: "MIT Professional Education, 2025. Top 1% of the cohort.",
  press: "A Forbes press proof, ink still wet on an SSL certificate op-ed.",
};

export const HELP = [
  "COMMANDS:",
  "  LOOK              re-read the current room",
  "  GO <dir>          n / s / e / w / up / down",
  "  <dir>             shortcut, e.g. NORTH or N",
  "  EXAMINE <thing>   inspect an object",
  "  TAKE <thing>      pick up the artifact here",
  "  INVENTORY / I     list artifacts collected",
  "  MAP               show known locations",
  "  CONTACT           reach the real human",
  "  RESUME            full career summary dump",
  "  CLEAR             wipe the screen",
  "  HELP              this list",
];

/** Grid coordinates + short labels used by the live map overlay. */
export const MAP_POS: Record<string, { x: number; y: number; short: string }> = {
  council: { x: 0, y: 0, short: "FORBES" },
  cloud: { x: 1, y: 0, short: "CLOUD" },
  academy: { x: 0, y: 1, short: "ACADEMY" },
  lobby: { x: 1, y: 1, short: "ATRIUM" },
  guild: { x: 2, y: 1, short: "GUILD" },
  studio: { x: 0, y: 2, short: "WORKSHOP" },
  forge: { x: 1, y: 2, short: "FORGE" },
  treasury: { x: 2, y: 2, short: "TREASURY" },
};

/** Unique undirected links between rooms, derived from exits. */
export const MAP_LINKS: Array<[string, string]> = (() => {
  const seen = new Set<string>();
  const links: Array<[string, string]> = [];
  for (const room of Object.values(ROOMS)) {
    for (const dest of Object.values(room.exits)) {
      const key = [room.id, dest].sort().join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      links.push([room.id, dest]);
    }
  }
  return links;
})();
