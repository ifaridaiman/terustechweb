import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { contactPage } from "@/content/pages/contact";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: contactPage.meta.title,
  description: contactPage.meta.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero eyebrow={contactPage.eyebrow} headline={contactPage.headline} subCopy={contactPage.subCopy} />

      <section className="bg-surface py-8 md:py-9">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <h2 className="font-display text-h2">{contactPage.whatsNext.heading}</h2>
              <ol className="mt-4 space-y-5">
                {contactPage.whatsNext.steps.map((step, index) => (
                  <li key={step.title}>
                    <span className="font-mono text-label text-ink-muted">0{index + 1}</span>
                    <h3 className="mt-1 font-display text-h3">{step.title}</h3>
                    <p className="mt-1 text-body text-ink-muted">{step.body}</p>
                  </li>
                ))}
              </ol>

              <h2 className="mt-9 font-display text-h2">{contactPage.direct.heading}</h2>
              <ul className="mt-4 space-y-2 text-body text-ink-muted">
                <li>
                  <Placeholder>{siteConfig.contact.email}</Placeholder>
                </li>
                <li>
                  WhatsApp <Placeholder>{siteConfig.contact.whatsappNumber}</Placeholder>
                </li>
                <li>{siteConfig.contact.address}</li>
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
