"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/brand/brand-logo";
import { LuxuryButton } from "@/components/brand/luxury-button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { mainNavigation } from "@/data/navigation";
import { brand } from "@/lib/constants";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-h-[110px] min-h-[80px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-20">
        <Link
          href="/"
          aria-label={brand.name}
          className="text-foreground transition-opacity hover:opacity-70"
        >
          <BrandLogo className="h-11 sm:h-12 md:h-14" />
          <span className="sr-only">{brand.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:gap-8 md:flex">
          {mainNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={[
                "border-b pb-2 font-sans text-xs font-light uppercase tracking-[0.2em] transition-colors hover:text-foreground sm:text-sm sm:tracking-[0.26em]",
                isActive
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground",
              ].join(" ")}
            >
              {item.label}
            </Link>
            );
          })}
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
