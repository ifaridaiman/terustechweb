import { DrawBar } from "@/components/motion/DrawBar";
import { RevealGroup } from "@/components/motion/Reveal";

export interface TimelineStep {
  range: string;
  title: string;
  body: string;
  extra?: string;
}

interface StepTimelineProps {
  steps: TimelineStep[];
}

/** The accent crossbar timeline shared by the home "Your 30 days" section and How we work. */
export function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="relative mt-8">
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
        {steps.map((step, index) => (
          <div key={step.range} className="flex flex-col items-start sm:items-center sm:text-center">
            <span
              className={[
                "mb-4 size-6 rounded-full border-4",
                index === steps.length - 1 ? "border-accent bg-accent" : "border-accent bg-night",
              ].join(" ")}
              aria-hidden="true"
            />
            <span className="text-on-night/60 font-mono text-label uppercase">{step.range}</span>
            <h3 className="mt-2 font-display text-h3">{step.title}</h3>
            <p className="text-on-night/70 mt-2 text-body">{step.body}</p>
            {step.extra && <p className="text-on-night/60 mt-2 text-small">{step.extra}</p>}
          </div>
        ))}
      </RevealGroup>
    </div>
  );
}
