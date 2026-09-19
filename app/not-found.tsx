import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[60vh] items-center bg-paper py-10">
      <Container className="max-w-container-narrow text-center">
        <p className="font-mono text-label uppercase text-ink-muted">404</p>
        <h1 className="mt-3 font-display text-display-lg">Wrong turn.</h1>
        <p className="mt-4 text-body-lg text-ink-muted">
          This page took off without us. Let&apos;s get you back on track.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="ghost">
            Start a project
          </Button>
        </div>
      </Container>
    </main>
  );
}
