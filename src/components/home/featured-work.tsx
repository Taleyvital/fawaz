import Image from "next/image";
import Link from "next/link";

import { EditorialHeading } from "@/components/brand/editorial-heading";
import { LuxuryButton } from "@/components/brand/luxury-button";
import { Reveal } from "@/components/brand/reveal";
import { portfolioItems } from "@/data/portfolio-items";

const featuredIds = ["wedding-1", "flowers-1", "event-1", "haute-couture-gown"];

const featured = featuredIds
  .map((id) => portfolioItems.find((item) => item.id === id))
  .filter((item): item is (typeof portfolioItems)[number] => Boolean(item));

export function FeaturedWork() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28 md:px-20 md:py-36">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <EditorialHeading
              eyebrow="Créations Sélectionnées"
              title="Le Portfolio"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <LuxuryButton href="/portfolio" variant="champagne">
              Voir tout le portfolio
            </LuxuryButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {featured.map((item, index) => (
            <Reveal
              key={item.id}
              delay={(index % 2) * 0.1}
              className={index === 0 || index === 3 ? "md:row-span-1" : ""}
            >
              <Link
                href="/portfolio"
                className="group relative block aspect-[4/5] overflow-hidden bg-card sm:aspect-[3/4] md:aspect-[16/11]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-[#fdf9f4] sm:p-8">
                  <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#fdf9f4]/80">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-medium leading-snug sm:text-2xl md:text-[28px]">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
