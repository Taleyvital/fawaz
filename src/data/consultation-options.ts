export const eventTypeOptions = [
  { value: "wedding", label: "Mariage de luxe" },
  { value: "corporate", label: "Gala d'entreprise" },
  { value: "private", label: "Célébration privée" },
] as const;

export const budgetOptions = [
  { value: "tier-1", label: "$50,000 - $100,000" },
  { value: "tier-2", label: "$100,000 - $250,000" },
  { value: "tier-3", label: "$250,000+" },
] as const;
