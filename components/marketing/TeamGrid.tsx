import { ClipboardList, Compass, HardHat, Headphones, Laptop } from "lucide-react";

import { RevealGroup } from "@/components/motion/Reveal";
import { Placeholder } from "@/components/ui/Placeholder";
import type { TeamMember } from "@/content/home";

const badgeIcons: Record<TeamMember["badge"], typeof Headphones> = {
  headphones: Headphones,
  hardHat: HardHat,
  compass: Compass,
  clipboard: ClipboardList,
  laptop: Laptop,
};

/** The five icon-badge team cards, shared by the home Team section and About. No mascot bust — icon only. */
export function TeamGrid({ members, className = "" }: { members: TeamMember[]; className?: string }) {
  return (
    <RevealGroup className={`grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 ${className}`}>
      {members.map((member) => {
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
  );
}
