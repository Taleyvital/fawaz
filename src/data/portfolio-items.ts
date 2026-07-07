export type PortfolioCategory =
  | "Wedding"
  | "Decoration"
  | "Flowers"
  | "Fashion"
  | "Perfume"
  | "Luxury Events";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  alt: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
};

export const portfolioCategories = [
  "All",
  "Wedding",
  "Decoration",
  "Flowers",
  "Fashion",
  "Perfume",
  "Luxury Events",
] as const;

export const portfolioItems: PortfolioItem[] = [];
