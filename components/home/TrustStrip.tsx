import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { trustStrip } from "@/content/home";

export function TrustStrip() {
  return (
    <section className="bg-surface py-10">
      <Container>
        <Reveal>
          <div className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {trustStrip.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-wrap items-baseline gap-3 px-0 py-4 sm:justify-center sm:px-6"
              >
                <span className="font-display text-display-lg text-ink">{stat.value}</span>
                <span className="text-body text-ink-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
