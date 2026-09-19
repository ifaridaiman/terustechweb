import { notFound } from "next/navigation";

import { HeroTimeline } from "@/components/home/HeroTimeline";
import { DrawBar } from "@/components/motion/DrawBar";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Placeholder } from "@/components/ui/Placeholder";

export const metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colorTokens = [
  { name: "paper", className: "bg-paper text-ink" },
  { name: "surface", className: "bg-surface text-ink" },
  { name: "ink", className: "bg-ink text-paper" },
  { name: "ink-muted", className: "bg-ink-muted text-paper" },
  { name: "line", className: "bg-line text-ink" },
  { name: "night", className: "bg-night text-on-night" },
  { name: "on-night (on night)", className: "bg-night text-on-night" },
  { name: "accent", className: "bg-accent text-on-accent" },
  { name: "accent-tint", className: "bg-accent-tint text-ink" },
  { name: "danger", className: "bg-danger text-on-accent" },
];

const typeStyles = [
  { name: "display-xl", className: "font-display text-display-xl" },
  { name: "display-lg", className: "font-display text-display-lg" },
  { name: "h1", className: "font-display text-h1" },
  { name: "h2", className: "font-display text-h2" },
  { name: "h3", className: "font-display text-h3" },
  { name: "body-lg", className: "font-body text-body-lg" },
  { name: "body", className: "font-body text-body" },
  { name: "small", className: "font-body text-small" },
  { name: "label", className: "font-mono text-label uppercase" },
  { name: "code", className: "font-mono text-code" },
];

const spacingSteps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const radiusSteps = [
  { name: "sm", className: "rounded-sm" },
  { name: "md", className: "rounded-md" },
  { name: "lg", className: "rounded-lg" },
  { name: "full", className: "rounded-full" },
];

function ThemePanel({ theme }: { theme: "light" | "dark" }) {
  return (
    <div data-theme={theme} className="rounded-lg border border-line bg-paper p-6 text-ink">
      <p className="mb-6 font-mono text-label uppercase text-ink-muted">{theme} theme</p>

      <section className="mb-9">
        <h2 className="mb-4 font-display text-h2">Colour</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {colorTokens.map((token) => (
            <div key={token.name} className="overflow-hidden rounded-md border border-line">
              <div className={`flex h-16 items-end p-2 ${token.className}`}>
                <span className="font-mono text-[11px]">{token.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-9">
        <h2 className="mb-4 font-display text-h2">Type</h2>
        <div className="space-y-4">
          {typeStyles.map((style) => (
            <div key={style.name} className="border-b border-line pb-4">
              <p className="mb-1 font-mono text-[11px] uppercase text-ink-muted">{style.name}</p>
              <p className={style.className}>Terus Tech</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-9">
        <h2 className="mb-4 font-display text-h2">Spacing</h2>
        <div className="space-y-2">
          {spacingSteps.map((step) => (
            <div key={step} className="flex items-center gap-3">
              <span className="w-16 font-mono text-[11px] text-ink-muted">space-{step}</span>
              <div className={`h-4 bg-accent`} style={{ width: `var(--space-${step})` }} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-9">
        <h2 className="mb-4 font-display text-h2">Radius</h2>
        <div className="flex flex-wrap gap-4">
          {radiusSteps.map((r) => (
            <div key={r.name} className="text-center">
              <div className={`mb-2 size-16 border-2 border-accent ${r.className}`} />
              <span className="font-mono text-[11px] text-ink-muted">{r.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-9">
        <h2 className="mb-4 font-display text-h2">Button</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" size="small">
            Primary small
          </Button>
          <Button variant="ghost" size="small">
            Ghost small
          </Button>
        </div>
        <div className="mt-4 rounded-md bg-night p-5">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">On night</Button>
            <Button variant="ghost" night>
              Ghost on night
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-9">
        <h2 className="mb-4 font-display text-h2">Chip</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Chip>Web apps</Chip>
          <Chip>APIs</Chip>
          <Chip size="large">Next.js</Chip>
        </div>
      </section>

      <section className="mb-9">
        <h2 className="mb-4 font-display text-h2">Card</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card variant="surface" hover>
            <Eyebrow>Surface</Eyebrow>
            <p className="mt-2 font-display text-h3">Surface card</p>
          </Card>
          <Card variant="paper" hover>
            <Eyebrow>Paper</Eyebrow>
            <p className="mt-2 font-display text-h3">Paper card</p>
          </Card>
          <Card variant="tile-accent">
            <p className="font-display text-h3">Your idea, built on top</p>
          </Card>
        </div>
      </section>

      <section className="mb-9">
        <h2 className="mb-4 font-display text-h2">Accordion</h2>
        <Accordion>
          <AccordionItem question="What counts as a first phase?" defaultOpen>
            A working, usable release of an agreed scope. Not a mock-up.
          </AccordionItem>
          <AccordionItem question="Is this just a template?">
            No. Scaffolds are foundations, not finished products.
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-9">
        <h2 className="mb-4 font-display text-h2">Focus ring</h2>
        <p className="mb-3 text-small text-ink-muted">Tab to the button below to see :focus-visible.</p>
        <button className="rounded-md border border-ink px-5 py-2 focus-visible:shadow-focus-ring focus-visible:outline-none">
          Focus me
        </button>
      </section>

      <section>
        <h2 className="mb-4 font-display text-h2">Placeholder</h2>
        <p className="text-body">
          Contact us at <Placeholder>[EMAIL]</Placeholder>.
        </p>
      </section>
    </div>
  );
}

export default function DesignSystemPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <main id="main" className="bg-surface py-9">
      <Container>
        <h1 className="mb-2 font-display text-display-lg">Design system</h1>
        <p className="mb-9 max-w-container-narrow text-body-lg text-ink-muted">
          Every colour, type style, spacing step, radius and core component, in both themes. Development only.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          <ThemePanel theme="light" />
          <ThemePanel theme="dark" />
        </div>

        <section className="mt-9">
          <h2 className="mb-4 font-display text-h2">Motion</h2>

          <div className="mb-6">
            <p className="mb-3 text-small text-ink-muted">
              Reveal — a single element, fades up 16px into view.
            </p>
            <Reveal>
              <Card variant="surface" className="mb-4">
                <p className="font-display text-h3">Fades up once, on scroll into view</p>
              </Card>
            </Reveal>

            <p className="mb-3 text-small text-ink-muted">
              RevealGroup — siblings stagger in 70ms apart, scroll down and back up to replay.
            </p>
            <RevealGroup className="grid gap-4 sm:grid-cols-3">
              <Card variant="surface">
                <Eyebrow>01</Eyebrow>
                <p className="mt-2 font-display text-h3">Lean</p>
              </Card>
              <Card variant="surface">
                <Eyebrow>02</Eyebrow>
                <p className="mt-2 font-display text-h3">Agile</p>
              </Card>
              <Card variant="surface">
                <Eyebrow>03</Eyebrow>
                <p className="mt-2 font-display text-h3">Open</p>
              </Card>
            </RevealGroup>
          </div>

          <div className="mb-9">
            <p className="mb-3 text-small text-ink-muted">DrawBar — mount-triggered (hero headline style)</p>
            <div className="rounded-lg bg-night p-6">
              <p className="relative inline-block font-display text-h1 text-on-night">
                30 days
                <DrawBar
                  trigger="mount"
                  delay={0.4}
                  duration={0.9}
                  className="absolute -bottom-1 h-1 w-full bg-accent"
                />
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-small text-ink-muted">
              HeroTimeline — the accent progress line draws, holds, fades and loops (mascot-free)
            </p>
            <div className="rounded-lg bg-night p-6">
              <HeroTimeline />
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
