import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { promise } from "@/content/home";

export function Promise() {
  return (
    <section className="bg-paper py-8 md:py-9">
      <Container>
        <Reveal className="max-w-container-narrow">
          <Eyebrow>{promise.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-h1">{promise.headline}</h2>
          <p className="mt-4 text-body-lg text-ink-muted">{promise.body}</p>
        </Reveal>

        <RevealGroup className="mt-7 grid gap-5 md:grid-cols-3">
          {promise.cards.map((card) => (
            <Card key={card.number} variant="surface">
              <span className="font-mono text-label text-ink-muted">{card.number}</span>
              <h3 className="mt-2 font-display text-h3">{card.title}</h3>
              <p className="mt-2 text-body text-ink-muted">{card.body}</p>
            </Card>
          ))}
        </RevealGroup>

        <p className="mt-6 text-small text-ink-muted">{promise.smallPrint}</p>
      </Container>
    </section>
  );
}
