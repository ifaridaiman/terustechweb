import { Bell, CalendarCheck, Gift, KeyRound, LayoutDashboard, MapPin } from "lucide-react";

import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { howWeDoIt, scaffoldTiles } from "@/content/home";

const tileIcons = [KeyRound, LayoutDashboard, CalendarCheck, Gift, MapPin, Bell];

export function HowWeDoIt() {
  return (
    <section className="bg-surface py-8 md:py-9">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>{howWeDoIt.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-h1">{howWeDoIt.headline}</h2>
            <p className="mt-4 text-body text-ink-muted">{howWeDoIt.body}</p>

            <ol className="mt-7 space-y-5">
              {howWeDoIt.steps.map((step) => (
                <li key={step.number}>
                  <span className="font-mono text-label text-ink-muted">{step.number}</span>
                  <h3 className="mt-1 font-display text-h3">{step.title}</h3>
                  <p className="mt-1 text-body text-ink-muted">{step.body}</p>
                </li>
              ))}
            </ol>

            <a
              href={howWeDoIt.cta.href}
              className="group mt-7 inline-flex items-center gap-2 text-body font-medium text-ink"
            >
              {howWeDoIt.cta.label}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 ease-soft group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {scaffoldTiles.map((tile, index) => {
              const Icon = tileIcons[index];
              if (tile.accent) {
                return (
                  <Card key={tile.title} variant="tile-accent" className="sm:col-span-2">
                    <h3 className="font-display text-h3">{tile.title}</h3>
                    <p className="mt-2 text-body">{tile.body}</p>
                  </Card>
                );
              }
              return (
                <Card key={tile.title} variant="paper" className="flex gap-4">
                  {Icon && (
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-accent-tint text-accent">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-display text-h3">{tile.title}</h3>
                    <p className="mt-1 text-body text-ink-muted">{tile.body}</p>
                  </div>
                </Card>
              );
            })}
          </RevealGroup>
        </div>

        <p className="mt-9 max-w-container-narrow text-body text-ink-muted">{howWeDoIt.foundationLine}</p>
        <p className="mt-4 font-mono text-label uppercase text-ink-muted">{howWeDoIt.proofStrip}</p>
      </Container>
    </section>
  );
}
