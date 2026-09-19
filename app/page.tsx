import type { Metadata } from "next";

import { ClosingCta } from "@/components/home/ClosingCta";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { HowWeDoIt } from "@/components/home/HowWeDoIt";
import { Promise } from "@/components/home/Promise";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Services } from "@/components/home/Services";
import { Team } from "@/components/home/Team";
import { ThirtyDays } from "@/components/home/ThirtyDays";
import { Toolkit } from "@/components/home/Toolkit";
import { TrustStrip } from "@/components/home/TrustStrip";
import { faq } from "@/content/home";
import { buildMetadata } from "@/lib/seo";
import { faqPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({ path: "/" });

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faq.items)) }}
      />
      <Hero />
      <TrustStrip />
      <Promise />
      <HowWeDoIt />
      <Services />
      <SelectedWork />
      <ThirtyDays />
      <Toolkit />
      <Team />
      <Faq />
      <ClosingCta />
    </main>
  );
}
