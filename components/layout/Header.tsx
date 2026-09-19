"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNav } from "@/content/site";

import { MobileNav } from "./MobileNav";

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="group relative py-2 text-[15px] text-on-night"
    >
      {label}
      <span
        className={[
          "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-accent transition-transform duration-[250ms] ease-soft",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        ].join(" ")}
        aria-hidden="true"
      />
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 flex items-center transition-[height,background-color] duration-200 ease-soft",
        scrolled ? "border-on-night/10 h-14 border-b bg-night" : "h-[72px] bg-transparent",
      ].join(" ")}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-h3 font-semibold text-on-night">
          Terus Tech
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="small" night>
            Start a project
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-md p-2 text-on-night focus-visible:shadow-focus-ring focus-visible:outline-none lg:hidden"
        >
          {menuOpen ? (
            <X className="size-6" strokeWidth={1.75} />
          ) : (
            <Menu className="size-6" strokeWidth={1.75} />
          )}
        </button>
      </Container>

      <div id="mobile-nav">
        <MobileNav
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          navLinks={primaryNav}
          triggerRef={menuButtonRef}
        />
      </div>
    </header>
  );
}
