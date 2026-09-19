import { ClipboardList, Compass, HardHat, Headphones, Laptop } from "lucide-react";

import { RevealGroup } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Placeholder } from "@/components/ui/Placeholder";
import { team, type TeamMember } from "@/content/home";

const badgeIcons: Record<TeamMember["badge"], typeof Headphones> = {
  headphones: Headphones,
  hardHat: HardHat,
  compass: Compass,
  clipboard: ClipboardList,
  laptop: Laptop,
};

export function Team() {
  return (
    <section className="bg-surface py-8 md:py-9">
      <Container>
        <div className="max-w-container-narrow">
          <Eyebrow>{team.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-h1">{team.headline}</h2>
          <p className="mt-4 text-body-lg text-ink-muted">{team.subCopy}</p>
        </div>

        <RevealGroup className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {team.members.map((member) => {
            const Icon = badgeIcons[member.badge];
            return (
              <div key={member.badge} className="text-center">
                <div className="mx-auto flex size-[120px] items-center justify-center rounded-full bg-accent-tint text-accent">
                  <Icon className="size-10" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <p className="mt-4 font-display text-h3">
                  <Placeholder>{member.name}</Placeholder>
                </p>
                <p className="mt-1 text-body text-ink-muted">
                  <Placeholder>{member.role}</Placeholder>
                </p>
                <p className="mt-1 text-small text-ink-muted">
                  <Placeholder>{member.funFact}</Placeholder>
                </p>
              </div>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
