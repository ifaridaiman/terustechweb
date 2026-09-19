import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/PageHero";
import { StepTimeline } from "@/components/marketing/StepTimeline";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { howWeWorkPage } from "@/content/pages/how-we-work";

export const metadata: Metadata = {
  title: howWeWorkPage.meta.title,
  description: howWeWorkPage.meta.description,
};

export default function HowWeWorkPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow={howWeWorkPage.eyebrow}
        headline={howWeWorkPage.headline}
        subCopy={howWeWorkPage.subCopy}
      />

      <section className="bg-surface py-8 md:py-9">
        <Container>
          <RevealGroup className="grid gap-5 md:grid-cols-3">
            {howWeWorkPage.pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-md border border-line bg-paper p-6">
                <h2 className="font-display text-h3">{pillar.title}</h2>
                <p className="mt-2 text-body text-ink-muted">{pillar.body}</p>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-night py-8 text-on-night md:py-9">
        <Container>
          <Eyebrow night>{howWeWorkPage.timelineEyebrow}</Eyebrow>
          <StepTimeline steps={howWeWorkPage.timeline} />
        </Container>
      </section>

      <section className="bg-paper py-8 md:py-9">
        <Container className="max-w-container-narrow">
          {[howWeWorkPage.loop, howWeWorkPage.needs, howWeWorkPage.afterPhaseOne].map((block) => (
            <Reveal key={block.heading} className="border-b border-line py-7 last:border-b-0">
              <h2 className="font-display text-h2">{block.heading}</h2>
              <p className="mt-3 text-body text-ink-muted">{block.body}</p>
            </Reveal>
          ))}
          <div className="pt-7">
            <Button href={howWeWorkPage.cta.href}>{howWeWorkPage.cta.label}</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
