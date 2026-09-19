import { promises as fs } from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import readingTime from "reading-time";
import { z } from "zod";

import { mdxComponents } from "@/components/mdx/mdxComponents";

const caseStudySchema = z.object({
  title: z.string(),
  client: z.string(),
  serviceType: z.string(),
  year: z.string(),
  timeToFirstRelease: z.string(),
  stack: z.array(z.string()),
  outcome: z.string(),
  summary: z.string(),
  published: z.boolean(),
});

export type CaseStudyFrontmatter = z.infer<typeof caseStudySchema>;

const articleSchema = z.object({
  title: z.string(),
  date: z.string().optional(),
  category: z.enum(["Delivery", "Engineering", "GIS", "Case notes"]),
  published: z.boolean(),
});

export type ArticleFrontmatter = z.infer<typeof articleSchema>;

const WORK_DIR = path.join(process.cwd(), "content/work");
const INSIGHTS_DIR = path.join(process.cwd(), "content/insights");

async function listSlugs(dir: string): Promise<string[]> {
  try {
    const files = await fs.readdir(dir);
    return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getAllCaseStudies(): Promise<{ slug: string; frontmatter: CaseStudyFrontmatter }[]> {
  const slugs = await listSlugs(WORK_DIR);
  const all = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await fs.readFile(path.join(WORK_DIR, `${slug}.mdx`), "utf8");
      const { data } = matter(raw);
      return { slug, frontmatter: caseStudySchema.parse(data) };
    }),
  );
  return all.sort((a, b) => b.frontmatter.year.localeCompare(a.frontmatter.year));
}

export async function getPublishedCaseStudies() {
  const all = await getAllCaseStudies();
  return all.filter((study) => study.frontmatter.published);
}

export async function getCaseStudy(slug: string) {
  const filePath = path.join(WORK_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8").catch(() => null);
  if (!raw) return null;

  const { content, frontmatter } = await compileMDX<Record<string, unknown>>({
    source: raw,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  return { content, frontmatter: caseStudySchema.parse(frontmatter) };
}

export async function getAllArticles(): Promise<
  { slug: string; frontmatter: ArticleFrontmatter; readingTimeText: string }[]
> {
  const slugs = await listSlugs(INSIGHTS_DIR);
  const all = await Promise.all(
    slugs.map(async (slug) => {
      const raw = await fs.readFile(path.join(INSIGHTS_DIR, `${slug}.mdx`), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: articleSchema.parse(data),
        readingTimeText: readingTime(content).text,
      };
    }),
  );
  return all.sort((a, b) => (b.frontmatter.date ?? "").localeCompare(a.frontmatter.date ?? ""));
}

export async function getPublishedArticles() {
  const all = await getAllArticles();
  return all.filter((article) => article.frontmatter.published);
}

export async function getArticle(slug: string) {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8").catch(() => null);
  if (!raw) return null;

  const { content: rawBody } = matter(raw);
  const { content, frontmatter } = await compileMDX<Record<string, unknown>>({
    source: raw,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  return {
    content,
    frontmatter: articleSchema.parse(frontmatter),
    readingTimeText: readingTime(rawBody).text,
  };
}
