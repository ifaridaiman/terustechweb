import { Code2, Map, ServerCog } from "lucide-react";
import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/PageHero";
import { RevealGroup } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/home";
import { servicesPage } from "@/content/pages/services";

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
};

const icons = [Code2, ServerCog, Map];

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow={servicesPage.eyebrow}
        headline={servicesPage.headline}
        subCopy={servicesPage.subCopy}
      />

      <section className="bg-surface py-8 md:py-9">
        <Container>
          <RevealGroup className="grid gap-5 md:grid-cols-3">
            {services.cards.map((card, index) => {
              const Icon = icons[index];
              return (
                <Card key={card.title} variant="surface" hover className="p-6">
                  {Icon && (
                    <span className="flex size-12 items-center justify-center rounded-sm bg-accent-tint text-accent">
                      <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  )}
                  <h2 className="mt-4 font-display text-h3">{card.title}</h2>
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

      <section className="bg-paper py-8 md:py-9">
        <Container className="rounded-lg border border-line bg-surface p-8 text-center">
          <p className="font-display text-h2">{servicesPage.closingStrip.question}</p>
          <p className="mt-2 text-body-lg text-ink-muted">{servicesPage.closingStrip.body}</p>
          <div className="mt-5 flex justify-center">
            <Button href={servicesPage.closingStrip.cta.href}>{servicesPage.closingStrip.cta.label}</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
