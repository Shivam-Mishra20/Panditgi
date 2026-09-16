import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function WhatsAppButton({
  message,
  className,
  label = "WhatsApp पर बात करें",
}: {
  message?: string;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant: "whatsapp" }), "font-devanagari", className)}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
