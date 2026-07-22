import Image from "next/image";
import type { PortfolioItem } from "@/data/portfolio-items";

type GalleryCardProps = {
  item: PortfolioItem;
};

export function GalleryCard({ item }: GalleryCardProps) {
  return (
    <article className="group relative break-inside-avoid overflow-hidden bg-muted">
      <Image
        src={item.image}
        alt={item.alt}
        width={900}
        height={1200}
        className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </article>
  );
}