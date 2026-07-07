"use client";

import { portfolioCategories } from "@/data/portfolio-items";

type GalleryFilterBarProps = {
  activeCategory: (typeof portfolioCategories)[number];
  onChange: (category: (typeof portfolioCategories)[number]) => void;
};

export function GalleryFilterBar({
  activeCategory,
  onChange,
}: GalleryFilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-4 sm:gap-4">
      {portfolioCategories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className="border-b border-transparent pb-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground data-[active=true]:border-foreground data-[active=true]:text-foreground sm:text-xs sm:tracking-[0.2em]"
          data-active={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
