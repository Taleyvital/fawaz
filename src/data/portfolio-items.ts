export type PortfolioCategory =
  | "Mariage"
  | "Décoration"
  | "Fleurs"
  | "Mode"
  | "Parfum"
  | "Événements de luxe";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  alt: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
  description?: string;
  details?: Array<{
    label: string;
    value: string;
  }>;
};

export const portfolioCategories = [
  "Tous",
  "Mariage",
  "Décoration",
  "Fleurs",
  "Mode",
  "Parfum",
  "Événements de luxe",
] as const;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "haute-couture-gown",
    title: "Haute Couture Gown - Édition Limitée",
    category: "Mode",
    image: "/images/haute-couture-gown.jpg",
    alt: "Macro high fashion photography of a Reda Fawaz haute couture gown detail",
    aspectRatio: "portrait",
    description: "Une création exceptionnelle mettant en valeur l'artisanat français traditionnel. Cette robe de haute couture incarne l'essence même du luxe contemporain, avec des broderies réalisées à la main par les maisons d'art les plus prestigieuses de Paris.",
    details: [
      { label: "Collection", value: "Automne 2024" },
      { label: "Matière", value: "Soie Italianne" },
      { label: "Atelier", value: "Paris" },
      { label: "Heures de travail", value: "320+" },
    ],
  },
  {
    id: "wedding-1",
    title: "Mariage Royal - Château de Versailles",
    category: "Mariage",
    image: "/images/wedding-1.jpg",
    alt: "Luxury wedding ceremony at Château de Versailles",
    aspectRatio: "landscape",
    description: "Un mariage d'exception dans un cadre historique prestigieux, avec une décoration florale grandiose et un souci du détail absolu.",
  },
  {
    id: "wedding-2",
    title: "Noces de Diamant - Riviera",
    category: "Mariage",
    image: "/images/wedding-2.jpg",
    alt: "Elegant beach wedding on the French Riviera",
    aspectRatio: "landscape",
    description: "Une célébration romantique sur la Côte d'Azur, alliant l'élégance méditerranéenne à une sophistication moderne.",
  },
  {
    id: "decoration-1",
    title: "Décoration Salon - Gala d'Entreprise",
    category: "Décoration",
    image: "/images/decoration-1.jpg",
    alt: "Luxury event decoration with crystal chandeliers",
    aspectRatio: "landscape",
    description: "Une transformation spectaculaire d'un espace historique en un lieu de réception d'exception.",
  },
  {
    id: "decoration-2",
    title: "Tablescape Prestigieux - Dîner Privé",
    category: "Décoration",
    image: "/images/decoration-2.jpg",
    alt: "Elegant table setting with Baccarat crystal",
    aspectRatio: "landscape",
    description: "Un art de la table raffiné, avec des cristalleries Baccarat et une floraison exquise.",
  },
  {
    id: "event-1",
    title: "Gala de Charité - Opéra Garnier",
    category: "Événements de luxe",
    image: "/images/event-1.jpg",
    alt: "Grand charity gala at Opera Garnier Paris",
    aspectRatio: "landscape",
    description: "Un événement caritatif d'envergure dans l'un des plus beaux monuments parisiens.",
  },
  {
    id: "event-2",
    title: "Soirée Privée - Villa Médicis",
    category: "Événements de luxe",
    image: "/images/event-2.jpg",
    alt: "Exclusive private party at Villa Medici",
    aspectRatio: "landscape",
    description: "Une soirée privée exclusive dans un cadre d'exception, avec une ambiance feutrée et sophistiquée.",
  },
  {
    id: "flowers-1",
    title: "Installation Florale - Orchidées Rares",
    category: "Fleurs",
    image: "/images/flowers-1.jpg",
    alt: "Luxury floral arrangement with rare orchids",
    aspectRatio: "portrait",
    description: "Une installation florale monumentale composée d'orchidées rares et de roses blanches.",
  },
  {
    id: "flowers-2",
    title: "Arc Floral - Cérémonie",
    category: "Fleurs",
    image: "/images/flowers-2.jpg",
    alt: "Floral arch for wedding ceremony",
    aspectRatio: "portrait",
    description: "Un arc floral majestueux pour une cérémonie en plein air, créé avec des fleurs de saison.",
  },
  {
    id: "perfume-1",
    title: "Lancement de Parfum - Maison de Couture",
    category: "Parfum",
    image: "/images/perfume-1.jpg",
    alt: "Luxury perfume bottle on marble surface",
    aspectRatio: "portrait",
    description: "Le lancement exclusif d'un nouveau parfum pour une maison de couture parisienne.",
  },
];
