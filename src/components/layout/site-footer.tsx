import Link from "next/link";

import { footerNavigation } from "@/data/navigation";
import { brand } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 py-12 text-center sm:gap-6 sm:px-6 sm:py-16 md:px-20 md:py-20">
        <Link href="/" className="font-display text-3xl font-semibold uppercase sm:text-4xl md:text-5xl">
          {brand.name}
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground sm:gap-6 sm:text-sm">
          {footerNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
          © 2024 {brand.name}. {brand.tagline}.
        </p>
      </div>
    </footer>
  );
}
