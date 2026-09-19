import type { Metadata } from "next";

import { InfoSection } from "@/components/marketing/InfoSection";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { managedServicesPage } from "@/content/pages/managed-services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: managedServicesPage.meta.title,
  description: managedServicesPage.meta.description,
  path: "/services/managed-services",
});

export default function ManagedServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow={managedServicesPage.eyebrow}
        headline={managedServicesPage.headline}
        subCopy={managedServicesPage.subCopy}
      />

      <section className="bg-surface py-8 md:py-9">
        <Container className="max-w-container-narrow">
          {managedServicesPage.sections.map((section) => (
            <InfoSection key={section.heading} {...section} />
          ))}

          <Reveal className="border-b border-line py-7">
            <h2 className="font-display text-h2">Plans</h2>
            <p className="mt-3 text-body text-ink-muted">
              <Placeholder>{managedServicesPage.plansPlaceholder}</Placeholder>
            </p>
          </Reveal>

          <div className="pt-7">
            <Button href={managedServicesPage.cta.href}>{managedServicesPage.cta.label}</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
