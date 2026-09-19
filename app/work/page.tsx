import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { workPage } from "@/content/pages/work";
import { WorkGrid } from "@/components/work/WorkGrid";
import { getPublishedCaseStudies } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: workPage.meta.title,
  description: workPage.meta.description,
  path: "/work",
});

export default async function WorkPage() {
  const caseStudies = await getPublishedCaseStudies();

  return (
    <main id="main">
      <PageHero eyebrow={workPage.eyebrow} headline={workPage.headline} subCopy={workPage.subCopy} />

      <section className="bg-surface py-8 md:py-9">
        <Container>
          {caseStudies.length > 0 ? (
            <WorkGrid caseStudies={caseStudies} filters={workPage.filters} />
          ) : (
            <Reveal className="rounded-lg border border-dashed border-line bg-paper p-9 text-center">
              <p className="mx-auto max-w-container-narrow text-body-lg text-ink-muted">
                {workPage.emptyState.text}
              </p>
              <div className="mt-5 flex justify-center">
                <Button href={workPage.emptyState.cta.href}>{workPage.emptyState.cta.label}</Button>
              </div>
            </Reveal>
          )}
        </Container>
      </section>
    </main>
  );
}
