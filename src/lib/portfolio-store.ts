import { put, list } from "@vercel/blob";
import { portfolioItems as fallbackItems, type PortfolioItem } from "@/data/portfolio-items";

const DATA_FILE_NAME = "portfolio-data.json";

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const { blobs } = await list({ prefix: DATA_FILE_NAME });
    const dataBlob = blobs.find((b) => b.pathname === DATA_FILE_NAME);

    if (!dataBlob) {
      // Aucune donnée encore sauvegardée : on part des items par défaut
      return fallbackItems;
    }

    const response = await fetch(dataBlob.url, { cache: "no-store" });
    const items: PortfolioItem[] = await response.json();
    return items;
  } catch (error) {
    console.error("Erreur lecture portfolio:", error);
    return fallbackItems;
  }
}

export async function savePortfolioItems(items: PortfolioItem[]): Promise<void> {
  const json = JSON.stringify(items, null, 2);
  await put(DATA_FILE_NAME, json, {
    access: "public",
    contentType: "application/json",
    allowOverwrite: true,
  });
}