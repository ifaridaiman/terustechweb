import { ClosingCta } from "@/components/home/ClosingCta";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { HowWeDoIt } from "@/components/home/HowWeDoIt";
import { Promise } from "@/components/home/Promise";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Services } from "@/components/home/Services";
import { ThirtyDays } from "@/components/home/ThirtyDays";
import { Toolkit } from "@/components/home/Toolkit";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Team } from "@/components/home/Team";

export default function Home() {
  return (
    <main id="main">
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
