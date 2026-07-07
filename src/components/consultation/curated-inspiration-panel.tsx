import { InspirationThumbnailGrid } from "@/components/inspiration/inspiration-thumbnail-grid";
import type { InspirationItem } from "@/data/inspiration-items";

type CuratedInspirationPanelProps = {
  items: InspirationItem[];
};

export function CuratedInspirationPanel({
  items,
}: CuratedInspirationPanelProps) {
  return (
    <aside className="glass-panel grid gap-8 border border-white/30 p-8">
      <h2 className="font-display text-3xl font-medium">Your Curated Inspiration</h2>
      <p className="text-sm leading-7 tracking-[0.03em] text-muted-foreground">
        Selected items from your moodboard attached to this inquiry.
      </p>
      <InspirationThumbnailGrid items={items} />
    </aside>
  );
}
