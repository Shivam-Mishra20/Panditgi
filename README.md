# PanditGi — Premium Hindu Pandit / Puja Services Website

A production-ready Next.js (App Router) website for **Pandit Ramnarayan Mishra**,
built with TypeScript, Tailwind CSS v4, and a custom shadcn-style UI kit.

## Tech stack
- **Next.js 16** (App Router, React Server Components, `next/image`, Metadata API)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` config — no `tailwind.config.js` needed)
- **shadcn/ui-style primitives** (hand-rolled: Button, Input, Textarea, Select, Label, Card, Accordion)
- **lucide-react** icons
- **React Hook Form + Zod** for the booking form
- SEO: Metadata API, JSON-LD (`ProfessionalService`, `Person`, `Service`, `FAQPage`,
  `BreadcrumbList`, `BlogPosting`), `sitemap.ts`, `robots.ts`, canonical URLs, Open Graph

## Getting started

```bash
npm install
cp .env.example .env.local   # then edit values
npm run dev
```

Visit `http://localhost:3000`.

To build and run in production mode locally:

```bash
npm run build
npm run start
```

## What's new in this update

- **Dark mode** — a full light/dark theme system (`next-themes`, class-based),
  toggled via the Sun/Moon button in the header (desktop and mobile). Colors
  are driven entirely by CSS variables in `globals.css`, so components rarely
  need `dark:` overrides — see "Theming" below.
- **Refined header interactions** — animated underline on nav links, an
  active-page indicator, a subtle logo hover animation, and a scroll-aware
  header shadow.
- **Premium hero treatment** — the hero illustration now sits inside a
  gold-bordered "portrait frame" with a soft glow and a floating trust badge,
  closer to how a real photograph would be presented once you add one.
- **Downloadable Puja Samagri (ritual items) checklists** — 13 branded PDF
  checklists (one per puja type, plus a general one), generated from a single
  JSON source of truth, downloadable from each puja/vivah page and from a new
  dedicated `/puja-samagri-list` page built for search traffic.
- **Deeper SEO** — dynamic branded Open Graph image, generated favicon/Apple
  touch icon, `manifest.webmanifest`, and `HowTo` structured data for the
  booking process, in addition to everything from the original build.

## Theming (light/dark)

All colors are CSS custom properties defined once in `src/app/globals.css`:

- `:root` — light-mode values (cream background, maroon headings, etc.)
- `.dark` — dark-mode overrides (near-black background, gold headings, etc.)
- `@theme inline` maps each variable to a Tailwind color (`bg-cream`,
  `text-heading`, `border-gold/30`, …), so any component using these
  semantic utilities adapts automatically — no `dark:` prefix needed in most
  places.

A few tokens are deliberately **not** theme-dependent:
- `oncolor` — always-light text/borders for permanently-dark surfaces (the
  maroon footer, CTA bands, and the solid "maroon" button variant).
- `error` — form validation text, kept legibly red in both themes.

`next-themes` persists the user's choice in `localStorage` and respects
`prefers-color-scheme` on first visit. The toggle lives in
`src/components/theme-toggle.tsx`.

## Puja Samagri (ritual items) PDFs

- Source data: `src/data/samagri.json` — one entry per puja slug, each with a
  `title` and an `items` array (plain Hindi strings).
- Generator: `scripts/generate-samagri-pdfs.py` (Python + reportlab) reads
  that JSON and writes branded, checkbox-style PDFs to
  `public/downloads/samagri/<slug>.pdf`.
- To regenerate after editing the JSON (or the branding constants at the top
  of the script):
  ```bash
  pip install reportlab --break-system-packages
  sudo apt-get install fonts-lohit-deva   # Devanagari-capable TTF, Debian/Ubuntu
  python3 scripts/generate-samagri-pdfs.py
  ```
  The PDFs are plain static files in `public/`, so they ship with the site
  and don't require Python at runtime or in production — it's a
  content-authoring tool only.
- `src/lib/samagri.ts` reads the same JSON to power the on-page download
  cards (`src/components/shared/samagri-download.tsx`) and the
  `/puja-samagri-list` resource page, so the website and the PDFs can never
  drift out of sync.
- Add a new puja's checklist by adding a new key to `samagri.json` (ideally
  matching a slug in `lib/services.ts`) and re-running the script.

## Generated icons & OG image

`src/app/icon.tsx`, `src/app/apple-icon.tsx`, and `src/app/opengraph-image.tsx`
render branded images on the fly at build time using `next/og` — no image
files to keep in sync. They embed a bundled Devanagari font
(`src/assets/fonts/Lohit-Devanagari.ttf`) so Hindi text renders correctly in
link previews and browser tabs. If you'd rather use hand-designed artwork,
replace these files with static `icon.png` / `apple-icon.png` /
`opengraph-image.png` files in `src/app/` — Next.js picks them up
automatically, and you can delete the `.tsx` versions.

## Project structure

```
src/
  app/
    page.tsx                    Homepage
    layout.tsx                  Root layout (fonts, header/footer, JSON-LD)
    globals.css                 Design tokens (colors, fonts) + Tailwind v4 theme
    sitemap.ts / robots.ts      SEO files, auto-generated from your data
    not-found.tsx                Custom 404
    puja/page.tsx                 /puja listing
    puja/[slug]/page.tsx          /puja/:slug detail (from lib/services.ts)
    sanskar/page.tsx              /sanskar listing
    sanskar/[slug]/page.tsx       /sanskar/:slug detail (from lib/sanskar.ts)
    vivah/page.tsx                /vivah (single page, ritual list)
    katha/page.tsx                /katha (single page, list)
    jyotish/page.tsx              /jyotish (single page, list)
    about/page.tsx
    contact/page.tsx              Booking form + call/WhatsApp/email
    blog/page.tsx, blog/[slug]/page.tsx
    privacy-policy/page.tsx, terms/page.tsx

  components/
    layout/     Header, Footer, MobileBottomBar, Breadcrumbs
    sections/   Hero, ServiceCard/Grid, FAQ, WhyChoose, HowItWorks,
                BookingForm, CTA, RelatedServices
    shared/     WhatsAppButton, decorative SVG motifs (mandala/lotus/hero art)
    ui/         Button, Input, Textarea, Label, Select, Card, Accordion

  lib/
    site-config.ts   Business info, env-var driven (phone/WhatsApp/email/city)
    services.ts      Puja services data (11 items)
    sanskar.ts       Sanskar data (6 items)
    vivah.ts / katha.ts / jyotish.ts   Content for those pages
    faqs.ts          Homepage FAQ
    blog.ts          Sample blog posts
    types.ts         Shared TypeScript types
    utils.ts         `cn()` class-merge helper
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in your real details:

```
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
NEXT_PUBLIC_PHONE_NUMBER=+91 98765 43210
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210   # digits only, country code, no + or spaces
NEXT_PUBLIC_EMAIL=you@yourdomain.com
NEXT_PUBLIC_BUSINESS_CITY=Varanasi
NEXT_PUBLIC_BUSINESS_STATE=Uttar Pradesh
```

These flow into the header, footer, contact page, mobile bottom bar, WhatsApp
links, and the JSON-LD schema automatically — you don't need to edit any
component code to change contact details.

## How to change things

### Phone / WhatsApp / email / city
Edit `.env.local` (see above). Everything reads from `src/lib/site-config.ts`.

### Services, Sanskar, Vivah, Katha, Jyotish content
All copy lives in `src/lib/*.ts` as plain arrays/objects — edit text, add or
remove entries, and pages/routes update automatically (Puja and Sanskar use
`generateStaticParams`, so new slugs become new pages with no extra code).

**Important:** the current copy is realistic *placeholder* content written to
avoid inventing real qualifications, years of experience, prices, or reviews.
Replace it with your own verified details before going live.

### Images
No real photography was available for this build, so the hero and other
imagery use elegant hand-drawn SVG illustrations
(`src/components/shared/decorative.tsx`) as tasteful placeholders — not
generic stock photos or AI-generated people.

To use real photos of Pandit Ramnarayan Mishra:
1. Add images to `public/images/` (e.g. `public/images/hero-pandit.jpg`).
2. In `src/components/sections/hero.tsx` (and `about/page.tsx`), replace
   `<PujaHeroIllustration />` with:
   ```tsx
   import Image from "next/image";
   <Image src="/images/hero-pandit.jpg" alt="Pandit Ramnarayan Mishra" width={480} height={560} priority className="rounded-2xl" />
   ```
3. Do the same for service card images referenced in `lib/services.ts` /
   `lib/sanskar.ts` (`image` field) once you have real photos for each ritual.

### Fonts
Fonts are currently loaded via a `<link>` tag in `src/app/layout.tsx`
(Inter + Noto Serif Devanagari from Google Fonts) rather than `next/font/google`,
because this build environment's network sandbox couldn't reach
`fonts.googleapis.com`. On your own machine or on Vercel (which has normal
internet access), you can switch to the more performant, self-hosted
`next/font/google` approach:

```tsx
import { Inter, Noto_Serif_Devanagari } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const hindi = Noto_Serif_Devanagari({ subsets: ["devanagari"], variable: "--font-hindi" });
// then add `${inter.variable} ${hindi.variable}` to the <body> className
// and set --font-sans / --font-devanagari in globals.css to var(--font-inter) / var(--font-hindi)
```
This removes the runtime Google Fonts request and eliminates layout shift.

### Colors / theme
All design tokens (cream, saffron, maroon, gold, ink) are defined once in
`src/app/globals.css` under `@theme inline`. Change the hex values there to
re-theme the entire site.

## SEO features included

- Per-page `generateMetadata` / `metadata` exports (unique title, description, canonical)
- Open Graph + Twitter card metadata
- `robots.ts` → `/robots.txt`
- `sitemap.ts` → `/sitemap.xml` (auto-includes every puja/sanskar/blog slug)
- JSON-LD: `ProfessionalService` + `Person` (root layout), `Service` (puja/sanskar/vivah/katha/jyotish),
  `FAQPage` (every FAQ accordion), `BreadcrumbList` (every breadcrumb), `BlogPosting` (blog posts)
- Semantic HTML, one `<h1>` per page, logical heading hierarchy
- Internal linking between related services
- Mobile-first, responsive from 320px, no horizontal overflow
- `prefers-reduced-motion` support in `globals.css`

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no build settings need to change.
4. Add the environment variables from `.env.example` in
   **Project Settings → Environment Variables**.
5. Deploy. Your site will be live at `*.vercel.app`, and you can attach a
   custom domain in **Project Settings → Domains**.
6. After attaching your real domain, update `NEXT_PUBLIC_SITE_URL` to match
   it (this feeds canonical URLs, Open Graph, and the sitemap).

## Notes on content accuracy

Per the brief, this build does **not** invent:
- Years of experience / qualifications
- Customer reviews or testimonials
- Prices
- A physical address (only city/state are used)
- Awards or specific service areas

All religious/astrological copy uses respectful, non-guaranteeing language
("परंपरा के अनुसार" — "according to tradition") rather than asserting outcomes.
Please review and replace placeholder content with verified, accurate
information before publishing.
