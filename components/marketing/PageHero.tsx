import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  subCopy?: ReactNode;
  tone?: "paper" | "night";
}

/** The eyebrow + display-lg headline + sub-copy block that opens every inner page. */
export function PageHero({ eyebrow, headline, subCopy, tone = "paper" }: PageHeroProps) {
  const night = tone === "night";

  return (
    <section className={night ? "bg-night py-8 text-on-night md:py-9" : "bg-paper py-8 md:py-9"}>
      <Container>
        <Reveal className="max-w-container-narrow">
          <Eyebrow night={night}>{eyebrow}</Eyebrow>
          <h1 className="mt-3 font-display text-display-lg">{headline}</h1>
          {subCopy && (
            <p className={`mt-4 text-body-lg ${night ? "text-on-night/80" : "text-ink-muted"}`}>{subCopy}</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
