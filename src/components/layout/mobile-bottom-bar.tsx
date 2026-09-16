import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { getCallLink, getWhatsAppLink } from "@/lib/site-config";

export function MobileBottomBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-gold/30 bg-surface shadow-[0_-4px_16px_rgba(94,26,31,0.10)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={getCallLink()}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-heading active:bg-maroon/5"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span className="font-devanagari text-xs">कॉल करें</span>
      </a>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 border-x border-gold/20 py-2.5 text-[#1fb958] active:bg-[#25D366]/5"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="font-devanagari text-xs">WhatsApp</span>
      </a>
      <Link
        href="/contact"
        className="flex flex-col items-center justify-center gap-1 bg-saffron py-2.5 text-white active:bg-saffron-dark"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        <span className="font-devanagari text-xs">पूजा बुक करें</span>
      </Link>
    </div>
  );
}
