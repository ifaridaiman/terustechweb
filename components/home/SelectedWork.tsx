import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { selectedWork } from "@/content/home";

export function SelectedWork() {
  return (
    <section className="bg-surface py-8 md:py-9">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-container-narrow">
            <Eyebrow>{selectedWork.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-h1">{selectedWork.headline}</h2>
            <p className="mt-4 text-body-lg text-ink-muted">{selectedWork.subCopy}</p>
          </div>
          <Button href={selectedWork.cta.href} variant="ghost" size="small">
            {selectedWork.cta.label}
          </Button>
        </div>

        <Reveal className="mt-8 rounded-lg border border-dashed border-line bg-paper p-9 text-center">
          <p className="mx-auto max-w-container-narrow text-body-lg text-ink-muted">
            {selectedWork.emptyState.text}
          </p>
          <div className="mt-5 flex justify-center">
            <Button href={selectedWork.emptyState.cta.href}>{selectedWork.emptyState.cta.label}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
