import type { Metadata } from "next";

export const SITE_URL = "https://terustech.my";
export const SITE_NAME = "Terus Tech";
export const DEFAULT_TITLE = "Terus Tech | Custom software, first phase live in 30 days";
export const DEFAULT_DESCRIPTION =
  "First phase of your software live in 30 days. Lean, agile custom software, managed services and GIS from Puncak Alam, Malaysia.";

interface BuildMetadataOptions {
  /** Page title without the " | Terus Tech" suffix. Omit for the home page. */
  title?: string;
  description?: string;
  path: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  noIndex,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_MY",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
