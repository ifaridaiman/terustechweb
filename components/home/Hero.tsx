import { DrawBar } from "@/components/motion/DrawBar";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/content/home";

import { HeroTimeline } from "./HeroTimeline";

export function Hero() {
  return (
    <section className="bg-night pb-8 pt-8 text-on-night md:pb-24 md:pt-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <RevealGroup>
            <Eyebrow night>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-display-xl">
              {hero.headlinePrefix}
              <span className="relative inline-block">
                {hero.headlineAccent}
                <DrawBar
                  trigger="mount"
                  delay={0.7}
                  duration={0.9}
                  className="absolute -bottom-1 left-0 h-1 w-full bg-accent"
                />
              </span>
              {hero.headlineSuffix}
            </h1>
            <p className="text-on-night/80 mt-4 max-w-container-narrow text-body-lg">{hero.subCopy}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="ghost" night>
                {hero.secondaryCta.label}
              </Button>
            </div>
            <p className="text-on-night/60 mt-6 font-mono text-label uppercase">{hero.monoLine}</p>
          </RevealGroup>

          <Reveal delay={0.3} className="flex justify-center lg:justify-end">
            <HeroTimeline />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
