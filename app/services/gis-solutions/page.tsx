import type { Metadata } from "next";

import { InfoSection } from "@/components/marketing/InfoSection";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { gisSolutionsPage } from "@/content/pages/gis-solutions";

export const metadata: Metadata = {
  title: gisSolutionsPage.meta.title,
  description: gisSolutionsPage.meta.description,
};

export default function GisSolutionsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow={gisSolutionsPage.eyebrow}
        headline={gisSolutionsPage.headline}
        subCopy={gisSolutionsPage.subCopy}
      />

      <section className="bg-surface py-8 md:py-9">
        <Container className="max-w-container-narrow">
          {gisSolutionsPage.sections.map((section) => (
            <InfoSection key={section.heading} {...section} />
          ))}
        </Container>
      </section>

      <section className="bg-paper py-8 md:py-9">
        <Container>
          <Reveal>
            <h2 className="font-display text-h2">{gisSolutionsPage.process.heading}</h2>
          </Reveal>
          <RevealGroup className="mt-6 grid gap-5 md:grid-cols-3">
            {gisSolutionsPage.process.steps.map((step, index) => (
              <div key={step.title} className="rounded-md border border-line bg-surface p-5">
                <span className="font-mono text-label text-ink-muted">0{index + 1}</span>
                <h3 className="mt-2 font-display text-h3">{step.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{step.body}</p>
              </div>
            ))}
          </RevealGroup>
          <div className="mt-8">
            <Button href={gisSolutionsPage.cta.href}>{gisSolutionsPage.cta.label}</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
