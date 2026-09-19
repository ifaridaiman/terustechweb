import type { MetadataRoute } from "next";

import { getPublishedArticles, getPublishedCaseStudies } from "@/lib/mdx";
import { SITE_URL } from "@/lib/seo";

const staticRoutes = [
  "",
  "/services",
  "/services/custom-software",
  "/services/managed-services",
  "/services/gis-solutions",
  "/how-we-work",
  "/work",
  "/about",
  "/insights",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [caseStudies, articles] = await Promise.all([getPublishedCaseStudies(), getPublishedArticles()]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${SITE_URL}/work/${study.slug}`,
    lastModified: new Date(),
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/insights/${article.slug}`,
    lastModified: article.frontmatter.date ? new Date(article.frontmatter.date) : new Date(),
  }));

  return [...staticEntries, ...caseStudyEntries, ...articleEntries];
}
