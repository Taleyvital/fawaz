"use client";

import { ConsultationForm } from "@/components/consultation/consultation-form";
import { CuratedInspirationPanel } from "@/components/consultation/curated-inspiration-panel";
import { useMoodboard } from "@/lib/moodboard";
import type { PortfolioItem } from "@/data/portfolio-items";

type ConsultationExperienceProps = {
  allItems: PortfolioItem[];
};

export function ConsultationExperience({ allItems }: ConsultationExperienceProps) {
  const { ids } = useMoodboard();
  const selectedItems = allItems.filter((item) => ids.includes(item.id));

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div>
        <ConsultationForm selectedItems={selectedItems} />
      </div>
      {selectedItems.length > 0 && (
        <CuratedInspirationPanel items={selectedItems} />
      )}
    </div>
  );
}