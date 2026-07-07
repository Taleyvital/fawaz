import Image from "next/image";

import type { InspirationItem } from "@/data/inspiration-items";

type InspirationThumbnailGridProps = {
  items: InspirationItem[];
};

export function InspirationThumbnailGrid({ items }: InspirationThumbnailGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.id} className="relative aspect-square overflow-hidden bg-muted">
          <Image src={item.image} alt={item.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
