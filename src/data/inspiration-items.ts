import type { PortfolioItem } from "@/data/portfolio-items";

export type InspirationItem = Pick<
  PortfolioItem,
  "id" | "title" | "category" | "image" | "alt"
>;

export const defaultInspirationItems: InspirationItem[] = [];
