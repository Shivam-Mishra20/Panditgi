import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <span className="font-devanagari text-5xl text-saffron-dark">ॐ</span>
      <h1 className="font-devanagari mt-4 text-3xl font-semibold text-heading">
        पृष्ठ नहीं मिला
      </h1>
      <p className="font-devanagari mt-3 text-ink-soft">
        क्षमा करें, आपके द्वारा खोजा गया पृष्ठ उपलब्ध नहीं है।
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ variant: "primary", size: "lg" }), "font-devanagari mt-6")}
      >
        होम पर जाएं
      </Link>
    </div>
  );
}
