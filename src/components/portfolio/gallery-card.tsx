import Image from "next/image";

import type { PortfolioItem } from "@/data/portfolio-items";

type GalleryCardProps = {
  item: PortfolioItem;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
};

export function GalleryCard({ item, isSaved = false, onToggleSave }: GalleryCardProps) {
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
        aria-pressed={isSaved}
        onClick={() => onToggleSave?.(item.id)}
        className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100"
      >
        Save
      </button>
    </article>
  );
}
