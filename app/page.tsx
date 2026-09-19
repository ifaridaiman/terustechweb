import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen items-center bg-night text-on-night">
      <Container>
        <Eyebrow night>Terus Tech · Puncak Alam, Malaysia</Eyebrow>
        <h1 className="mt-4 max-w-container-narrow font-display text-display-lg">
          First phase live in 30 days.
        </h1>
        <p className="text-on-night/80 mt-4 max-w-container-narrow text-body-lg">
          The full home page ships in a later phase. This is a foundation checkpoint — see{" "}
          <a href="/design-system" className="underline decoration-accent underline-offset-4">
            /design-system
          </a>{" "}
          for the token and component preview.
        </p>
      </Container>
    </main>
  );
}
