import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/PageHero";
import { TeamGrid } from "@/components/marketing/TeamGrid";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { aboutPage } from "@/content/pages/about";
import { team } from "@/content/home";

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero eyebrow={aboutPage.eyebrow} headline={aboutPage.headline} subCopy={aboutPage.story} />

      <section className="bg-surface py-8 md:py-9">
        <Container>
          <Reveal>
            <h2 className="font-display text-h1">What we believe</h2>
          </Reveal>
          <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2">
            {aboutPage.beliefs.map((belief) => (
              <div key={belief.title} className="rounded-md border border-line bg-paper p-5">
                <h3 className="font-display text-h3">{belief.title}</h3>
                <p className="mt-2 text-body text-ink-muted">{belief.body}</p>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-paper py-8 md:py-9">
        <Container>
          <Reveal>
            <h2 className="font-display text-h1">{aboutPage.teamHeadline}</h2>
          </Reveal>
          <TeamGrid members={team.members} className="mt-8" />
        </Container>
      </section>

      <section className="bg-night py-8 text-on-night md:py-9">
        <Container className="flex flex-wrap items-center justify-between gap-5">
          <p className="font-display text-h2">{aboutPage.closing.question}</p>
          <Button href={aboutPage.closing.cta.href}>{aboutPage.closing.cta.label}</Button>
        </Container>
      </section>
    </main>
  );
}
