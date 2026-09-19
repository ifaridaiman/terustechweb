import type { Metadata } from "next";

import { InfoSection } from "@/components/marketing/InfoSection";
import { PageHero } from "@/components/marketing/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { customSoftwarePage } from "@/content/pages/custom-software";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: customSoftwarePage.meta.title,
  description: customSoftwarePage.meta.description,
  path: "/services/custom-software",
});

export default function CustomSoftwarePage() {
  return (
    <main id="main">
      <PageHero
        eyebrow={customSoftwarePage.eyebrow}
        headline={customSoftwarePage.headline}
        subCopy={customSoftwarePage.subCopy}
      />

      <section className="bg-surface py-8 md:py-9">
        <Container className="max-w-container-narrow">
          {customSoftwarePage.sections.map((section) => (
            <InfoSection key={section.heading} {...section} />
          ))}
          <div className="pt-7">
            <Button href={customSoftwarePage.cta.href}>{customSoftwarePage.cta.label}</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
