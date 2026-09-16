"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { getCallLink, siteConfig } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "/", label: "होम" },
  { href: "/puja", label: "पूजा" },
  { href: "/sanskar", label: "संस्कार" },
  { href: "/vivah", label: "विवाह" },
  { href: "/katha", label: "कथा" },
  { href: "/jyotish", label: "ज्योतिष" },
  { href: "/about", label: "हमारे बारे में" },
  { href: "/contact", label: "संपर्क" },
];

export function Header() {
  const pathname = usePathname();
  return <HeaderInner key={pathname} />;
}

function HeaderInner() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-cream/90 backdrop-blur transition-shadow duration-300 supports-[backdrop-filter]:bg-cream/75",
        scrolled
          ? "border-gold/25 shadow-[0_2px_16px_rgba(94,26,31,0.08)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.35)]"
          : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-devanagari text-2xl font-semibold text-heading transition-transform duration-300 group-hover:rotate-[12deg]">
            ॐ
          </span>
          <span className="font-devanagari text-xl font-semibold tracking-tight text-heading">
            PanditGi
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="मुख्य मेनू">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "font-devanagari group relative rounded-full px-3.5 py-2 text-[15px] transition-colors duration-200",
                  active ? "text-heading font-medium" : "text-ink-soft hover:text-heading"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "pointer-events-none absolute inset-x-3 -bottom-0.5 h-[2px] scale-x-0 rounded-full bg-saffron transition-transform duration-300 ease-out origin-left group-hover:scale-x-100",
                    active && "scale-x-100 bg-saffron-dark"
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={getCallLink()}
            className="flex items-center gap-1.5 text-sm font-medium text-heading transition-colors hover:text-saffron-dark"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "primary" }),
              "font-devanagari transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            )}
          >
            पूजा बुक करें
          </Link>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-heading"
            aria-label={open ? "मेनू बंद करें" : "मेनू खोलें"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-gold/20 bg-cream px-4 pb-6 pt-2 lg:hidden"
          aria-label="मोबाइल मेनू"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-devanagari block rounded-lg px-3 py-2.5 text-base text-ink-soft transition-colors hover:bg-maroon/5 hover:text-heading"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={cn(buttonVariants({ variant: "primary" }), "font-devanagari mt-4 w-full")}
          >
            पूजा बुक करें
          </Link>
        </nav>
      )}
    </header>
  );
}
