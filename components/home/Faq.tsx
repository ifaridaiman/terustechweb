import { Reveal } from "@/components/motion/Reveal";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { faq } from "@/content/home";

export function Faq() {
  return (
    <section className="bg-paper py-8 md:py-9">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-h1">{faq.headline}</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion>
              {faq.items.map((item, index) => (
                <AccordionItem key={item.question} question={item.question} defaultOpen={index === 0}>
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
