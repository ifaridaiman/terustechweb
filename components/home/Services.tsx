import { Code2, Map, ServerCog } from "lucide-react";

import { RevealGroup } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/content/home";

const icons = [Code2, ServerCog, Map];

export function Services() {
  return (
    <section className="bg-paper py-8 md:py-9">
      <Container>
        <div className="max-w-container-narrow">
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-h1">{services.headline}</h2>
          <p className="mt-4 text-body-lg text-ink-muted">{services.subCopy}</p>
        </div>

        <RevealGroup className="mt-8 grid gap-5 md:grid-cols-3">
          {services.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <Card key={card.title} variant="surface" hover className="p-6">
                {Icon && (
                  <span className="flex size-12 items-center justify-center rounded-sm bg-accent-tint text-accent">
                    <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                )}
                <h3 className="mt-4 font-display text-h3">{card.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{card.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.chips.map((chip) => (
                    <Chip key={chip}>{chip}</Chip>
                  ))}
                </div>
                <a
                  href={card.href}
                  className="group mt-5 inline-flex items-center gap-2 text-body font-medium text-ink"
                >
                  {card.linkLabel}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 ease-soft group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </Card>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
