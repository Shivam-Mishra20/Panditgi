import * as React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, getCallLink, getEmailLink } from "@/lib/site-config";
import { LotusDivider } from "@/components/shared/decorative";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.36C16.3 4.25 15.36 4.15 14.27 4.15c-2.28 0-3.84 1.39-3.84 3.95V10.5H8v3h2.43V21h3.07Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        d="M22 12s0-3.3-.42-4.86a2.78 2.78 0 0 0-1.95-1.97C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.63.42a2.78 2.78 0 0 0-1.95 1.97C2 8.7 2 12 2 12s0 3.3.42 4.86a2.78 2.78 0 0 0 1.95 1.97c1.73.42 7.63.42 7.63.42s5.9 0 7.63-.42a2.78 2.78 0 0 0 1.95-1.97C22 15.3 22 12 22 12Z"
        opacity="0.15"
      />
      <path
        d="M22 12s0-3.3-.42-4.86a2.78 2.78 0 0 0-1.95-1.97C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.63.42a2.78 2.78 0 0 0-1.95 1.97C2 8.7 2 12 2 12s0 3.3.42 4.86a2.78 2.78 0 0 0 1.95 1.97c1.73.42 7.63.42 7.63.42s5.9 0 7.63-.42a2.78 2.78 0 0 0 1.95-1.97C22 15.3 22 12 22 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M10 9.5v5l4.5-2.5Z" />
    </svg>
  );
}

const footerLinks = [
  {
    heading: "सेवाएं",
    links: [
      { href: "/puja", label: "पूजा" },
      { href: "/sanskar", label: "संस्कार" },
      { href: "/vivah", label: "विवाह" },
      { href: "/katha", label: "कथा एवं पाठ" },
      { href: "/jyotish", label: "ज्योतिष" },
      { href: "/puja-samagri-list", label: "पूजा सामग्री लिस्ट (PDF)" },
    ],
  },
  {
    heading: "कंपनी",
    links: [
      { href: "/about", label: "हमारे बारे में" },
      { href: "/blog", label: "ब्लॉग" },
      { href: "/contact", label: "संपर्क करें" },
    ],
  },
  {
    heading: "कानूनी जानकारी",
    links: [
      { href: "/privacy-policy", label: "प्राइवेसी पॉलिसी" },
      { href: "/terms", label: "नियम एवं शर्तें" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-maroon text-oncolor/90">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-devanagari text-2xl font-semibold text-gold-light">
                ॐ
              </span>
              <span className="font-devanagari text-xl font-semibold">
                PanditGi
              </span>
            </div>
            <p className="font-devanagari mt-3 text-sm text-oncolor/70">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-oncolor/60">
              {siteConfig.description}
            </p>
            {/* <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.links.facebook}
                aria-label="Facebook"
                className="rounded-full border border-oncolor/20 p-2 text-oncolor/70 hover:border-gold-light hover:text-gold-light"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.instagram}
                aria-label="Instagram"
                className="rounded-full border border-oncolor/20 p-2 text-oncolor/70 hover:border-gold-light hover:text-gold-light"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.youtube}
                aria-label="YouTube"
                className="rounded-full border border-oncolor/20 p-2 text-oncolor/70 hover:border-gold-light hover:text-gold-light"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div> */}
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="font-devanagari text-sm font-semibold text-gold-light">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-devanagari text-sm text-oncolor/70 hover:text-oncolor"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-devanagari text-sm font-semibold text-gold-light">
              संपर्क
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-oncolor/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={getCallLink()} className="hover:text-oncolor">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href={getEmailLink()}
                  className="hover:text-oncolor break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="font-devanagari">
                  {siteConfig.city}, {siteConfig.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <LotusDivider className="mx-auto mt-10 h-8 w-28 text-gold-light/50" />

        <div className="mt-4 flex flex-col items-center justify-between gap-3 text-xs text-oncolor/50 sm:flex-row">
          <p className="font-devanagari">
            © {new Date().getFullYear()} PanditGi — {siteConfig.legalName}।
            सर्वाधिकार सुरक्षित।
          </p>
          <p className="font-devanagari">परंपरा, संस्कार और श्रद्धा के साथ</p>
        </div>
      </div>
    </footer>
  );
}
