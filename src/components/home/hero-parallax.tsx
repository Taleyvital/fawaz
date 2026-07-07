"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const layers = {
  ballroom: "/images/hero/ballroom.png",
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
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-95"
        style={{
          transform: `translateY(${scrollY * 0.15}px) scale(${1.02 + scrollY * 0.0001})`,
        }}
      />

      <Image
        src={layers.tablescape}
        alt="Refined tablescape detail with crystal glassware"
        fill
        sizes="100vw"
        className="mask-bottom absolute inset-0 z-10 h-full w-full object-cover opacity-35 mix-blend-overlay"
        style={{
          transform: `translateY(${scrollY * 0.25}px) scale(1.06)`,
        }}
      />

      <Image
        src={layers.florals}
        alt="White orchids and roses layered as foreground florals"
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-20 h-full w-full scale-110 object-cover opacity-50 mix-blend-screen"
        style={{
          objectPosition: "center",
          transform: `translateY(${scrollY * 0.4}px) scale(1.12)`,
        }}
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
          className="fade-in-up max-w-6xl font-display text-[54px] font-semibold leading-[0.95] md:text-[116px]"
          style={{
            animationDelay: "300ms",
            textShadow: "0 4px 14px rgb(0 0 0 / 12%)",
          }}
        >
          Creating Extraordinary
          <br />
          Moments
        </h1>

        <p
          className="fade-in-up mt-12 max-w-4xl border-b border-[#fdf9f4]/35 pb-5 font-sans text-[13px] font-medium uppercase leading-6 tracking-[0.28em] md:text-[15px]"
          style={{ animationDelay: "900ms" }}
        >
          Wedding Designer <span className="mx-3">•</span> Event Stylist{" "}
          <span className="mx-3">•</span> Floral Designer{" "}
          <span className="mx-3">•</span> Fashion Creator
        </p>

        <div className="mt-16" style={{ transform: `scale(${ctaScale})` }}>
          <div
            className="fade-in-up flex flex-col gap-5 sm:flex-row"
            style={{ animationDelay: "1200ms" }}
          >
          <Link
            href="/portfolio"
            className="inline-flex min-h-16 min-w-[325px] items-center justify-center border border-[#fdf9f4] bg-[#fdf9f4] px-10 font-sans text-sm uppercase tracking-[0.2em] text-foreground transition-colors duration-500 hover:bg-transparent hover:text-[#fdf9f4]"
          >
            Explore Creations
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex min-h-16 min-w-[395px] items-center justify-center border border-[#d4af37] px-10 font-sans text-sm uppercase tracking-[0.2em] text-[#d4af37] transition-colors duration-500 hover:bg-[#d4af37] hover:text-foreground"
          >
            Start Inspiration Board
          </Link>
          </div>
        </div>
      </div>

      <div
        className="fade-in absolute bottom-10 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center text-[#fdf9f4]/75"
        style={{ animationDelay: "1500ms", transform: `translateX(-50%) scale(${ctaScale})` }}
      >
        <span className="mb-2 font-sans text-[10px] uppercase tracking-[0.26em]">
          Scroll
        </span>
        <ChevronDown className="scroll-indicator h-7 w-7 stroke-1 text-[#fdf9f4]" />
      </div>
    </section>
  );
}
