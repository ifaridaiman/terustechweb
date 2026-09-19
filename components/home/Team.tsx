import { TeamGrid } from "@/components/marketing/TeamGrid";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { team } from "@/content/home";

export function Team() {
  return (
    <section className="bg-surface py-8 md:py-9">
      <Container>
        <div className="max-w-container-narrow">
          <Eyebrow>{team.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-h1">{team.headline}</h2>
          <p className="mt-4 text-body-lg text-ink-muted">{team.subCopy}</p>
        </div>

        <TeamGrid members={team.members} className="mt-8" />
      </Container>
    </section>
  );
}
