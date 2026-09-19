import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getAllCaseStudies, getCaseStudy } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function loadVisibleCaseStudy(slug: string) {
  const study = await getCaseStudy(slug);
  if (!study) return null;
  if (!study.frontmatter.published && process.env.NODE_ENV === "production") return null;
  return study;
}

export async function generateStaticParams() {
  const all = await getAllCaseStudies();
  return all.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await loadVisibleCaseStudy(slug);
  if (!study) return {};
  return { title: study.frontmatter.title, description: study.frontmatter.summary };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await loadVisibleCaseStudy(slug);
  if (!study) notFound();

  const { content, frontmatter } = study;

  return (
    <main id="main">
      <section className="bg-paper py-8 md:py-9">
        <Container className="max-w-container-narrow">
          <Reveal>
            <Eyebrow>
              {frontmatter.serviceType} · {frontmatter.year}
            </Eyebrow>
            <h1 className="mt-3 font-display text-display-lg">{frontmatter.title}</h1>

            <dl className="mt-7 grid grid-cols-2 gap-5 border-y border-line py-5 sm:grid-cols-4">
              <div>
                <dt className="font-mono text-label uppercase text-ink-muted">Client</dt>
                <dd className="mt-1 text-body text-ink">{frontmatter.client}</dd>
              </div>
              <div>
                <dt className="font-mono text-label uppercase text-ink-muted">Service</dt>
                <dd className="mt-1 text-body text-ink">{frontmatter.serviceType}</dd>
              </div>
              <div>
                <dt className="font-mono text-label uppercase text-ink-muted">Time to first release</dt>
                <dd className="mt-1 text-body text-ink">{frontmatter.timeToFirstRelease}</dd>
              </div>
              <div>
                <dt className="font-mono text-label uppercase text-ink-muted">Stack</dt>
                <dd className="mt-1 text-body text-ink">{frontmatter.stack.join(", ")}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="mt-8">{content}</Reveal>

          <div className="mt-9">
            <Button href="/contact">Start something like this</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
