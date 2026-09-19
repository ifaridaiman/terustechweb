import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getAllArticles, getArticle } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function loadVisibleArticle(slug: string) {
  const article = await getArticle(slug);
  if (!article) return null;
  if (!article.frontmatter.published && process.env.NODE_ENV === "production") return null;
  return article;
}

export async function generateStaticParams() {
  const all = await getAllArticles();
  return all.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await loadVisibleArticle(slug);
  if (!article) return {};
  return { title: article.frontmatter.title };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await loadVisibleArticle(slug);
  if (!article) notFound();

  const { content, frontmatter, readingTimeText } = article;

  return (
    <main id="main">
      <section className="bg-paper py-8 md:py-9">
        <Container className="max-w-container-narrow">
          <Reveal>
            <Eyebrow>
              {frontmatter.category}
              {frontmatter.date ? ` · ${frontmatter.date}` : ""} · {readingTimeText}
            </Eyebrow>
            <h1 className="mt-3 font-display text-display-lg">{frontmatter.title}</h1>
          </Reveal>

          <Reveal className="mt-8">{content}</Reveal>

          <div className="mt-9">
            <Button href="/contact">Start a project</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
