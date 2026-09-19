import { DrawBar } from "@/components/motion/DrawBar";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
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

        <div className="relative mt-8 md:mt-8">
          <div
            className="bg-on-night/20 absolute inset-x-0 top-2 hidden h-2 rounded-full sm:block"
            aria-hidden="true"
          />
          <DrawBar
            trigger="inView"
            duration={1.6}
            className="absolute inset-x-0 top-2 hidden h-2 rounded-full bg-accent sm:block"
          />

          <RevealGroup className="relative grid grid-cols-1 gap-8 sm:grid-cols-4">
            {thirtyDays.steps.map((step, index) => (
              <div key={step.range} className="flex flex-col items-start sm:items-center sm:text-center">
                <span
                  className={[
                    "mb-4 size-6 rounded-full border-4",
                    index === thirtyDays.steps.length - 1
                      ? "border-accent bg-accent"
                      : "border-accent bg-night",
                  ].join(" ")}
                  aria-hidden="true"
                />
                <span className="text-on-night/60 font-mono text-label uppercase">{step.range}</span>
                <h3 className="mt-2 font-display text-h3">{step.title}</h3>
                <p className="text-on-night/70 mt-2 text-body">{step.body}</p>
              </div>
            ))}
          </RevealGroup>
        </div>

        <p className="text-on-night/70 mt-9 text-body">{thirtyDays.closingLine}</p>
      </Container>
    </section>
  );
}
