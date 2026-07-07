"use client";

import { useMemo, useState } from "react";

import { GalleryCard } from "@/components/portfolio/gallery-card";
import { GalleryFilterBar } from "@/components/portfolio/gallery-filter-bar";
import {
  portfolioCategories,
  type PortfolioItem,
} from "@/data/portfolio-items";

type MasonryGalleryProps = {
  items: PortfolioItem[];
};

export function MasonryGallery({ items }: MasonryGalleryProps) {
  const [activeCategory, setActiveCategory] =
    useState<(typeof portfolioCategories)[number]>("All");

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <div className="space-y-10">
      <GalleryFilterBar activeCategory={activeCategory} onChange={setActiveCategory} />
      <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
        {visibleItems.map((item) => (
          <div key={item.id} className="mb-6">
            <GalleryCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
