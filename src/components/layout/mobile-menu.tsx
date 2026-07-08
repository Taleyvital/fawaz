"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { LuxuryButton } from "@/components/brand/luxury-button";
import { Button } from "@/components/ui/button";
import { mainNavigation } from "@/data/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Le portail n'est disponible qu'après le montage côté client.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Referme le menu à chaque changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloque le scroll de la page et gère la touche Échap quand le menu est ouvert.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <Button
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="md:hidden"
        size="icon"
        variant="ghost"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {open && mounted
        ? createPortal(
            <div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[60] flex flex-col bg-background md:hidden"
            >
          <div className="flex h-20 min-h-[80px] items-center justify-end px-4 sm:px-6">
            <Button
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              size="icon"
              variant="ghost"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
            {mainNavigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "font-display text-3xl font-medium uppercase tracking-[0.12em] transition-colors sm:text-4xl",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <LuxuryButton
              href="/portfolio"
              variant="outline"
              onClick={() => setOpen(false)}
              className="mt-4"
            >
              Inspiration
            </LuxuryButton>
          </nav>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
