import { StepTimeline } from "@/components/marketing/StepTimeline";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { thirtyDays } from "@/content/home";

export function ThirtyDays() {
  return (
    <section id="how-30" className="bg-night py-8 text-on-night md:py-9">
      <Container>
        <Reveal className="max-w-container-narrow">
          <Eyebrow night>{thirtyDays.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-h1">{thirtyDays.headline}</h2>
          <p className="text-on-night/70 mt-4 text-body-lg">{thirtyDays.subCopy}</p>
        </Reveal>

        <StepTimeline steps={thirtyDays.steps} />

        <p className="text-on-night/70 mt-9 text-body">{thirtyDays.closingLine}</p>
      </Container>
    </section>
  );
}
