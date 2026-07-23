"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio-items";
import { useMoodboard } from "@/lib/moodboard";

type GalleryCardProps = {
  item: PortfolioItem;
};

export function GalleryCard({ item }: GalleryCardProps) {
  const { isSaved, toggle } = useMoodboard();
  const saved = isSaved(item.id);

  return (
    <article className="group relative break-inside-avoid overflow-hidden bg-muted">
      <Image
        src={item.image}
        alt={item.alt}
        width={900}
        height={1200}
        className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <button
        type="button"
        aria-pressed={saved}
        onClick={() => toggle(item.id)}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 sm:opacity-0"
        style={saved ? { opacity: 1 } : undefined}
      >
        <Heart
          className="h-4 w-4"
          fill={saved ? "#d4af37" : "none"}
          stroke={saved ? "#d4af37" : "#fdf9f4"}
        />
      </button>
    </article>
  );
}