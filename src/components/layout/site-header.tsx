import Link from "next/link";

import { LuxuryButton } from "@/components/brand/luxury-button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { mainNavigation } from "@/data/navigation";
import { brand } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-background/30 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-h-[110px] min-h-[80px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-20">
        <Link
          href="/"
          className="font-display text-2xl font-semibold uppercase text-foreground transition-opacity hover:opacity-70 sm:text-3xl md:text-[40px]"
        >
          {brand.name}
        </Link>
        <nav className="hidden items-center gap-6 sm:gap-8 md:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "border-b pb-2 font-sans text-xs font-light uppercase tracking-[0.2em] transition-colors hover:text-foreground sm:text-sm sm:tracking-[0.26em]",
                item.href === "/"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <LuxuryButton href="/portfolio" variant="outline">
            Inspiration
          </LuxuryButton>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
