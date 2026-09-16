import { Download, FileText } from "lucide-react";
import { getSamagriBySlug, getSamagriDownloadUrl } from "@/lib/samagri";

export function SamagriDownload({
  slug,
  fallbackSlug = "general-puja",
}: {
  slug: string;
  fallbackSlug?: string;
}) {
  const entry = getSamagriBySlug(slug) ?? getSamagriBySlug(fallbackSlug);
  if (!entry) return null;

  const resolvedSlug = getSamagriBySlug(slug) ? slug : fallbackSlug;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gold/25 bg-surface p-6 shadow-[0_2px_16px_rgba(94,26,31,0.05)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron/10">
          <FileText className="h-5 w-5 text-saffron-dark" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-devanagari text-base font-semibold text-heading">
            {entry.title}
          </h3>
          <p className="font-devanagari mt-1 text-sm text-ink-soft">
            इस पूजा की संपूर्ण सामग्री सूची — प्रिंट कर के साथ रख सकते हैं
            (PDF, निःशुल्क)।
          </p>
        </div>
      </div>
      <a
        href={getSamagriDownloadUrl(resolvedSlug)}
        download
        className="font-devanagari inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-oncolor transition-transform duration-200 hover:scale-[1.03] hover:bg-maroon-light active:scale-[0.98]"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        सूची डाउनलोड करें
      </a>
    </div>
  );
}
