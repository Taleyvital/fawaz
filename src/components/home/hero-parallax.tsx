"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const layers = {
  ballroom: "/images/hero/ballroom.jpg",
  florals: "/images/hero/florals.png",
  tablescape: "/images/hero/tablescape.png",
};

export function HeroParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollY(window.scrollY));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const contentOpacity = Math.max(1 - scrollY / 520, 0);
  const ctaScale = Math.max(1 - scrollY * 0.001, 0.82);
  const overlayOpacity = Math.min(1, 0.64 + scrollY / 1000);

  return (
    <section className="relative flex h-screen min-h-[820px] w-full items-center justify-center overflow-hidden bg-foreground">
      <Image
        src={layers.ballroom}
        alt="Grand luxury ballroom dressed for an opulent celebration"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 h-full w-full object-cover object-[26%_center] opacity-95 sm:object-[36%_center] md:object-center"
      />

      <div
        className="hero-soft-overlay absolute inset-0 z-30"
        style={{ opacity: overlayOpacity }}
      />

      <div
        className="relative z-40 mx-auto mt-16 flex w-full max-w-[1440px] flex-col items-center justify-center px-6 text-center text-[#fdf9f4] md:px-20"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${scrollY * -0.2}px)`,
        }}
      >
        <h1
          className="fade-in-up max-w-6xl font-display text-[32px] font-semibold leading-[0.95] sm:text-[42px] md:text-[54px] lg:text-[80px] xl:text-[116px]"
          style={{
            animationDelay: "300ms",
            textShadow: "0 4px 14px rgb(0 0 0 / 12%)",
          }}
        >
          Créer des Moments
          <br />
          Extraordinaires
        </h1>

        <p
          className="fade-in-up mt-8 max-w-4xl border-b border-[#fdf9f4]/35 pb-4 font-sans text-[10px] font-medium uppercase leading-5 tracking-[0.2em] sm:mt-10 sm:text-[11px] sm:tracking-[0.24em] md:mt-12 md:text-[13px] md:leading-6 md:tracking-[0.28em] md:pb-5"
          style={{ animationDelay: "900ms" }}
        >
          Designer de Mariage <span className="mx-2 sm:mx-3">•</span> Styliste Événementiel{" "}
          <span className="mx-2 sm:mx-3">•</span> Designer Floral{" "}
          <span className="mx-2 sm:mx-3">•</span> Créateur de Mode
        </p>

        <div className="mt-12 sm:mt-14 md:mt-16" style={{ transform: `scale(${ctaScale})` }}>
          <div
            className="fade-in-up flex flex-col gap-4 sm:gap-5"
            style={{ animationDelay: "1200ms" }}
          >
          <Link
            href="/portfolio"
            className="inline-flex h-14 min-h-14 w-full min-w-full items-center justify-center border border-[#fdf9f4] bg-[#fdf9f4] px-8 font-sans text-xs uppercase tracking-[0.18em] text-foreground transition-colors duration-500 hover:bg-transparent hover:text-[#fdf9f4] sm:h-16 sm:min-h-16 sm:w-auto sm:min-w-[325px] sm:px-10 sm:text-sm sm:tracking-[0.2em]"
          >
            Explorer les Créations
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex h-14 min-h-14 w-full min-w-full items-center justify-center border border-[#d4af37] px-8 font-sans text-xs uppercase tracking-[0.18em] text-[#d4af37] transition-colors duration-500 hover:bg-[#d4af37] hover:text-foreground sm:h-16 sm:min-h-16 sm:w-auto sm:min-w-[395px] sm:px-10 sm:text-sm sm:tracking-[0.2em]"
          >
            Commencer le Moodboard
          </Link>
          </div>
        </div>
      </div>

      <div
        className="fade-in absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center text-[#fdf9f4]/75 sm:bottom-8 md:bottom-10"
        style={{ animationDelay: "1500ms", transform: `translateX(-50%) scale(${ctaScale})` }}
      >
        <span className="mb-2 font-sans text-[9px] uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.26em]">
          Défiler
        </span>
        <ChevronDown className="scroll-indicator h-6 w-6 stroke-1 text-[#fdf9f4] sm:h-7 sm:w-7" />
      </div>
    </section>
  );
}
