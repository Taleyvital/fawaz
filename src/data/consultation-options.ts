export const eventTypeOptions = [
  { value: "wedding", label: "Luxury Wedding" },
  { value: "corporate", label: "Corporate Gala" },
  { value: "private", label: "Private Celebration" },
] as const;

export const budgetOptions = [
  { value: "tier-1", label: "$50,000 - $100,000" },
  { value: "tier-2", label: "$100,000 - $250,000" },
  { value: "tier-3", label: "$250,000+" },
] as const;
