import { Reveal } from "@/components/motion/Reveal";

interface InfoSectionProps {
  heading: string;
  body?: string;
  items?: string[];
}

/** A heading with either prose or a bulleted list beneath it, used on the service detail pages. */
export function InfoSection({ heading, body, items }: InfoSectionProps) {
  return (
    <Reveal className="border-b border-line py-7 last:border-b-0">
      <h2 className="font-display text-h2">{heading}</h2>
      {body && <p className="mt-3 max-w-container-narrow text-body text-ink-muted">{body}</p>}
      {items && (
        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-body text-ink-muted">
              <span aria-hidden="true" className="text-accent">
                ·
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}
