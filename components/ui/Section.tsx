import type { HTMLAttributes } from "react";

type Tone = "paper" | "surface" | "night";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: Tone;
  spacious?: boolean;
}

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  surface: "bg-surface text-ink",
  night: "bg-night text-on-night",
};

export function Section({
  tone = "paper",
  spacious = false,
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={[toneClasses[tone], spacious ? "py-8 md:py-10" : "py-8 md:py-9", className].join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}
