import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Placeholder } from "@/components/ui/Placeholder";
import { closingCta } from "@/content/home";
import { siteConfig } from "@/content/site";

export function ClosingCta() {
  return (
    <section id="contact" className="bg-night py-10 text-on-night md:py-10">
      <Container>
        <Reveal className="max-w-[760px]">
          <Eyebrow night>{closingCta.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-display-lg">{closingCta.headline}</h2>
          <p className="text-on-night/80 mt-4 text-body-lg">{closingCta.body}</p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Button href={closingCta.cta.href} size="default">
              {closingCta.cta.label}
            </Button>
            <p className="text-on-night/80 text-body">
              <Placeholder>{siteConfig.contact.email}</Placeholder> · WHATSAPP{" "}
              <Placeholder>{siteConfig.contact.whatsappNumber}</Placeholder>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
