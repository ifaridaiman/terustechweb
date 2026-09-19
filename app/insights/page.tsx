import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { insightsPage } from "@/content/pages/insights";
import { getPublishedArticles } from "@/lib/mdx";

export const metadata: Metadata = {
  title: insightsPage.meta.title,
  description: insightsPage.meta.description,
};

export default async function InsightsPage() {
  const articles = await getPublishedArticles();

  return (
    <main id="main">
      <PageHero
        eyebrow={insightsPage.eyebrow}
        headline={insightsPage.headline}
        subCopy={insightsPage.subCopy}
      />

      <section className="bg-surface py-8 md:py-9">
        <Container>
          <div className="flex flex-wrap gap-2">
            {insightsPage.categories.map((category) => (
              <Chip key={category}>{category}</Chip>
            ))}
          </div>

          {articles.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {articles.map((article) => (
                <a key={article.slug} href={`/insights/${article.slug}`} className="block">
                  <Card variant="paper" hover>
                    <p className="font-mono text-label uppercase text-ink-muted">
                      {article.frontmatter.category}
                    </p>
                    <h2 className="mt-2 font-display text-h3">{article.frontmatter.title}</h2>
                    <p className="mt-2 text-small text-ink-muted">{article.readingTimeText}</p>
                  </Card>
                </a>
              ))}
            </div>
          ) : (
            <Reveal className="mt-8 rounded-lg border border-dashed border-line bg-paper p-9 text-center">
              <p className="text-body-lg text-ink-muted">{insightsPage.emptyState}</p>
            </Reveal>
          )}
        </Container>
      </section>
    </main>
  );
}
