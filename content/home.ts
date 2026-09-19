export const hero = {
  eyebrow: "Terus Tech · Puncak Alam, Malaysia",
  headlinePrefix: "First phase live in ",
  headlineAccent: "30 days",
  headlineSuffix: ".",
  subCopy:
    "Lean scope. Agile sprints. Battle-tested foundations. Real software in your hands fast, then we keep it running.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "See how 30 days works", href: "#how-30" },
  monoLine: "LEAN · AGILE · BATTLE-TESTED",
};

export const trustStrip = [
  { value: "5", label: "projects delivered since 2025" },
  { value: "30", label: "days to your first phase" },
  { value: "1", label: "framework on every project" },
];

export const promise = {
  eyebrow: "The 30-day promise",
  headline: "Big ideas shouldn't wait months to become real.",
  body: "We cut your idea down to the smallest release that matters, build it in short sprints, and put it in your hands in 30 days. Then we grow it, phase by phase.",
  cards: [
    { number: "01", title: "Lean.", body: "We build what moves the needle and skip the rest." },
    {
      number: "02",
      title: "Agile.",
      body: "Two-week sprints, a demo at the end of each, and your feedback steering the next.",
    },
    { number: "03", title: "Open.", body: "Weekly updates. No surprises. Changes handled in the open." },
  ],
  smallPrint:
    "A first phase is a working release of an agreed scope. Bigger vision? We split it into phases and ship the first one fast.",
};

export const howWeDoIt = {
  eyebrow: "How we do it",
  headline: "Why 30 days? We never start from zero.",
  body: "Every project starts from our own scaffolds: ready-made foundations for the things almost every product needs. Built, broken, fixed and reused across real projects. You get a running start, and your budget goes on what makes your product different.",
  steps: [
    { number: "01", title: "Pick the scaffold.", body: "We match your use case to the closest foundation." },
    { number: "02", title: "Make it yours.", body: "We tailor it to your workflows, brand and data." },
    {
      number: "03",
      title: "Build the new stuff.",
      body: "The time we saved goes into features only you need.",
    },
  ],
  cta: { label: "Tell us your use case", href: "/contact" },
  foundationLine:
    "Under every scaffold: shared error handling, logging, automated testing and error monitoring. Boring to talk about. Brilliant when something goes wrong.",
  proofStrip: "5 PROJECTS DELIVERED · SINCE 2025 · SAME SCAFFOLDS, REUSED AND REFINED EVERY TIME",
};

export interface ScaffoldTile {
  title: string;
  body: string;
  accent?: boolean;
}

export const scaffoldTiles: ScaffoldTile[] = [
  { title: "Sign-in and roles", body: "Secure access and the right permissions for every user." },
  { title: "Admin dashboards", body: "Tables, filters and reports, ready to shape." },
  { title: "Booking and tracking", body: "Reservations with live status your customers can follow." },
  { title: "Memberships and loyalty", body: "Tiers, points and rewards." },
  { title: "Maps and spatial data", body: "Interactive maps with searchable records." },
  { title: "Alerts and notifications", body: "Rules, schedules and email alerts." },
  {
    title: "Your idea, built on top",
    body: "Everything above is the foundation. The features only you need are custom-built.",
    accent: true,
  },
];

export const services = {
  eyebrow: "What we do",
  headline: "Build it. Run it. Map it.",
  subCopy: "Every service starts with a 30-day first phase.",
  cards: [
    {
      title: "Custom software",
      body: "Built for you, not off the shelf. Web platforms and internal systems shaped around how your business really runs.",
      chips: ["Web apps", "APIs", "Integrations"],
      linkLabel: "Build with us",
      href: "/services/custom-software",
    },
    {
      title: "Managed services",
      body: "We don't ship and vanish. Hosting, monitoring, updates and support keep your software alive long after launch.",
      chips: ["Cloud hosting", "Monitoring", "Support"],
      linkLabel: "Keep it running",
      href: "/services/managed-services",
    },
    {
      title: "GIS solutions",
      body: "Turn maps into muscle. Click a plot, see the story. Spatial data becomes tools your team can act on.",
      chips: ["Interactive maps", "Spatial data", "Dashboards"],
      linkLabel: "Put it on the map",
      href: "/services/gis-solutions",
    },
  ],
};

export const selectedWork = {
  eyebrow: "Selected work",
  headline: "Proof, not promises.",
  subCopy: "Five projects delivered since 2025. Here are the ones we can show.",
  cta: { label: "See all work", href: "/work" },
  emptyState: {
    text: "Case studies are landing soon. Meanwhile, tell us your idea and we'll show you what a first phase looks like.",
    cta: { label: "Start a project", href: "/contact" },
  },
};

export const thirtyDays = {
  eyebrow: "Your 30 days",
  headline: "30 days. Four moves.",
  subCopy: "The same rhythm on every project, so you always know where you are.",
  steps: [
    {
      range: "Days 1–3",
      title: "Frame it.",
      body: "We agree the goal, cut the scope and pick the closest scaffold.",
    },
    {
      range: "Days 4–14",
      title: "Sprint 1.",
      body: "We tailor the scaffold and build your core. Demo on day 14.",
    },
    { range: "Days 15–27", title: "Sprint 2.", body: "We finish, test and sharpen. Demo again." },
    { range: "Days 28–30", title: "Ship it.", body: "Release, handover and a plan for phase two." },
  ],
  closingLine: "Weekly status reports throughout. No mystery, no jargon.",
};

export const toolkit = {
  eyebrow: "Our toolkit",
  headline: "Sharp tools. Serious craft.",
  chips: ["Next.js", "NestJS", "TypeScript", "Alibaba Cloud", "Sentry", "Playwright"],
  line: "Picked for your problem, and for shipping fast.",
};

export interface TeamMember {
  name: string;
  role: string;
  funFact: string;
  badge: "headphones" | "hardHat" | "compass" | "clipboard" | "laptop";
}

export const team = {
  eyebrow: "The team",
  headline: "Five people. Zero fluff.",
  subCopy: "A small crew with a big appetite.",
  members: [
    { name: "[NAME]", role: "[ROLE]", funFact: "[Fun fact]", badge: "headphones" },
    { name: "[NAME]", role: "[ROLE]", funFact: "[Fun fact]", badge: "hardHat" },
    { name: "[NAME]", role: "[ROLE]", funFact: "[Fun fact]", badge: "compass" },
    { name: "[NAME]", role: "[ROLE]", funFact: "[Fun fact]", badge: "clipboard" },
    { name: "[NAME]", role: "[ROLE]", funFact: "[Fun fact]", badge: "laptop" },
  ] satisfies TeamMember[],
};

export const faq = {
  eyebrow: "FAQ",
  headline: "Straight answers.",
  items: [
    {
      question: "What counts as a first phase?",
      answer: "A working, usable release of an agreed scope. Not a mock-up.",
    },
    {
      question: "What if my project is bigger than 30 days?",
      answer: "We plan it in phases. Phase one goes live in 30 days and the rest builds on it.",
    },
    {
      question: "Is this just a template?",
      answer:
        "No. Scaffolds are foundations, not finished products. Your workflows, design and data are custom-built on top.",
    },
    {
      question: "What do you need from us?",
      answer:
        "A clear goal, a decision-maker who answers quickly, and a few hours each week for demos and feedback.",
    },
    {
      question: "Do you look after it after launch?",
      answer: "Yes. That's what managed services are for.",
    },
  ],
};

export const closingCta = {
  eyebrow: "Start a project",
  headline: "Got a big idea? Let's have it live in 30 days.",
  body: "Tell us what you're building. We'll show you what a first phase looks like.",
  cta: { label: "Start a project", href: "/contact" },
};
