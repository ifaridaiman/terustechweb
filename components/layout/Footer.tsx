import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { footerColumns, siteConfig } from "@/content/site";

import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-night text-on-night">
      <Container className="py-9">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-h3">{siteConfig.name}</p>
            <p className="text-on-night/70 mt-3 max-w-xs text-body">{siteConfig.tagline}</p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <p className="text-on-night/70 mb-4 font-mono text-label uppercase">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-on-night/90 text-body hover:text-on-night">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <p className="text-on-night/70 mb-4 font-mono text-label uppercase">Contact</p>
            <ul className="text-on-night/90 space-y-3 text-body">
              <li>
                <Placeholder>{siteConfig.contact.email}</Placeholder>
              </li>
              <li>
                WhatsApp <Placeholder>{siteConfig.contact.whatsappNumber}</Placeholder>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-on-night/15 text-on-night/70 mt-9 flex flex-col gap-4 border-t pt-6 text-small sm:flex-row sm:items-center sm:justify-between">
          <p>
            {siteConfig.legal.copyright} · <Placeholder>{siteConfig.legal.registration}</Placeholder> ·{" "}
            <Link href="/privacy" className="hover:text-on-night">
              Privacy policy
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="hover:text-on-night">
              Terms
            </Link>
          </p>
          <ThemeToggle />
        </div>
      </Container>
    </footer>
  );
}
