import samagriData from "@/data/samagri.json";

export interface SamagriEntry {
  slug: string;
  title: string;
  items: string[];
}

const DATA = samagriData as Record<string, { title: string; items: string[] }>;

export const samagriList: SamagriEntry[] = Object.entries(DATA).map(
  ([slug, entry]) => ({ slug, ...entry })
);

export function getSamagriBySlug(slug: string): SamagriEntry | undefined {
  const entry = DATA[slug];
  return entry ? { slug, ...entry } : undefined;
}

export function getSamagriDownloadUrl(slug: string): string {
  return `/downloads/samagri/${slug}.pdf`;
}
