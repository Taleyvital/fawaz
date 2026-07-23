"use client";

import Image from "next/image";
import { Suspense, useEffect, useMemo, useState } from "react";
import { Heart } from "lucide-react";
import { useMoodboard } from "@/lib/moodboard";
import { useSearchParams } from "next/navigation";

import { EditorialHeading } from "@/components/brand/editorial-heading";
import { Reveal } from "@/components/brand/reveal";
import { GalleryFilterBar } from "@/components/portfolio/gallery-filter-bar";
import {
  portfolioCategories,
  type PortfolioItem,
} from "@/data/portfolio-items";

type PortfolioShowcaseProps = {
  items: PortfolioItem[];
};

function PortfolioShowcaseContent({ items }: PortfolioShowcaseProps) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] =
    useState<(typeof portfolioCategories)[number]>("Tous");

  useEffect(() => {
    const categorie = searchParams.get("categorie");
    const match = portfolioCategories.find((c) => c === categorie);
    if (match) {
      setActiveCategory(match);
    }
  }, [searchParams]);
  const { isSaved, toggle } = useMoodboard();

  const visibleItems = useMemo(() => {
    if (activeCategory === "Tous") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <div className="space-y-16 md:space-y-24">
      <Reveal>
        <GalleryFilterBar
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </Reveal>

      <div className="space-y-24 md:space-y-40">
        {visibleItems.map((item, index) => {
          const reversed = index % 2 === 1;

          return (
            <article
              key={item.id}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
            >
              <Reveal
                className={reversed ? "md:order-2" : ""}
                delay={0.05}
              >
                <div className="group relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-6 top-6 font-display text-5xl font-light text-[#fdf9f4] mix-blend-difference md:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    aria-pressed={isSaved(item.id)}
                    onClick={() => toggle(item.id)}
                    className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm"
                  >
                    <Heart
                      className="h-4 w-4"
                      fill={isSaved(item.id) ? "#d4af37" : "none"}
                      stroke={isSaved(item.id) ? "#d4af37" : "#fdf9f4"}
                    />
                  </button>
                </div>
              </Reveal>

              <Reveal
                className={reversed ? "md:order-1" : ""}
                delay={0.15}
              >
                <div className="max-w-xl">
                  <p className="mb-5 font-sans text-xs uppercase tracking-[0.28em] text-accent">
                    {item.category}
                  </p>
                  <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl md:text-[44px] md:leading-[1.1]">
                    {item.title}
                  </h2>
                  {item.description ? (
                    <p className="mt-6 font-sans text-base font-light leading-8 text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}

                  {item.details && item.details.length > 0 ? (
                    <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8">
                      {item.details.map((detail) => (
                        <div key={detail.label}>
                          <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            {detail.label}
                          </dt>
                          <dd className="mt-2 font-display text-lg font-medium">
                            {detail.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </div>
              </Reveal>
            </article>
          );
        })}
      </div>

      {visibleItems.length === 0 ? (
        <p className="py-20 text-center font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Aucune réalisation dans cette catégorie.
        </p>
      ) : null}
    </div>
  );
}
export function PortfolioShowcase(props: PortfolioShowcaseProps) {
  return (
    <Suspense fallback={null}>
      <PortfolioShowcaseContent {...props} />
    </Suspense>
  );
}
