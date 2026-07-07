import Link from "next/link";

import { footerNavigation } from "@/data/navigation";
import { brand } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-6 py-20 text-center md:px-20">
        <Link href="/" className="font-display text-5xl font-semibold uppercase">
          {brand.name}
        </Link>
        <nav className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          {footerNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © 2024 {brand.name}. {brand.tagline}.
        </p>
      </div>
    </footer>
  );
}
