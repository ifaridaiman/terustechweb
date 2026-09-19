import { Plus } from "lucide-react";
import type { ReactNode } from "react";

interface AccordionItemProps {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ question, children, defaultOpen = false }: AccordionItemProps) {
  return (
    <details
      className="group border-b border-line py-4 [&_summary::-webkit-details-marker]:hidden"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-h3 text-ink focus-visible:shadow-focus-ring focus-visible:outline-none">
        {question}
        <Plus
          className="size-5 shrink-0 text-accent transition-transform duration-200 ease-soft group-open:rotate-45"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </summary>
      <div className="pt-3 text-body text-ink-muted">{children}</div>
    </details>
  );
}

export function Accordion({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
