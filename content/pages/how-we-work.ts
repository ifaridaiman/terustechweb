import type { TimelineStep } from "@/components/marketing/StepTimeline";

export const howWeWorkPage = {
  meta: {
    title: "How we work",
    description:
      "Lean scope, agile sprints and reusable scaffolds: how Terus Tech ships a first phase in 30 days.",
  },
  eyebrow: "How we work",
  headline: "How we ship in 30 days.",
  subCopy: "Three things make it possible: lean scope, agile sprints and scaffolds we've already built.",
  pillars: [
    {
      title: "Lean.",
      body: "We ask one question: does this move the needle in phase one? If not, it waits. Less scope means faster feedback and fewer wasted weeks.",
    },
    {
      title: "Agile.",
      body: "Work happens in two-week sprints. Each ends with a demo. Your feedback shapes the next sprint, not a report at the end.",
    },
    {
      title: "Scaffolds.",
      body: "We keep a codebase of common use cases (sign-in, roles, dashboards, bookings, memberships, maps, alerts). Battle-tested and reused, so we start far down the road.",
    },
  ],
  timelineEyebrow: "Your 30 days",
  timeline: [
    {
      range: "Days 1–3",
      title: "Frame it.",
      body: "We agree the goal, cut the scope and pick the closest scaffold.",
      extra: "You leave with a clear scope and a ranked backlog.",
    },
    {
      range: "Days 4–14",
      title: "Sprint 1.",
      body: "We tailor the scaffold and build your core. Demo on day 14.",
      extra: "You see the core working on day 14.",
    },
    {
      range: "Days 15–27",
      title: "Sprint 2.",
      body: "We finish, test and sharpen. Demo again.",
      extra: "You test it, we sharpen it.",
    },
    {
      range: "Days 28–30",
      title: "Ship it.",
      body: "Release, handover and a plan for phase two.",
      extra: "You go live with a plan for what's next.",
    },
  ] satisfies TimelineStep[],
  loop: {
    heading: "How we keep you in the loop",
    body: "Weekly status reports. Demos every two weeks. Changes agreed in the open. You never wonder where things stand.",
  },
  needs: {
    heading: "What we need from you",
    body: "A clear goal. A decision-maker who can answer quickly. A few hours each week for demos and feedback.",
  },
  afterPhaseOne: {
    heading: "After phase one",
    body: "We plan phase two together, or hand over cleanly. Managed services are there if you want us to keep it running.",
  },
  cta: { label: "Start a project", href: "/contact" },
};
