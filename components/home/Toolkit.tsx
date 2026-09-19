import { Reveal } from "@/components/motion/Reveal";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { toolkit } from "@/content/home";

export function Toolkit() {
  return (
    <section className="bg-paper py-8 md:py-9">
      <Container>
        <Reveal className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{toolkit.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-h1">{toolkit.headline}</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              {toolkit.chips.map((chip) => (
                <Chip key={chip} size="large">
                  {chip}
                </Chip>
              ))}
            </div>
            <p className="mt-4 text-body text-ink-muted">{toolkit.line}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
