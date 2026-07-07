type WhatsAppMessageInput = {
  name?: string;
  eventType?: string;
  date?: string;
  inspirationTitles?: string[];
};

export function createWhatsAppUrl({
  name,
  eventType,
  date,
  inspirationTitles = [],
}: WhatsAppMessageInput) {
  const lines = [
    "Bonjour équipe Reda Fawaz, je souhaiterais préparer une consultation sur mesure.",
    name ? `Nom : ${name}` : null,
    eventType ? `Type d'événement : ${eventType}` : null,
    date ? `Date de l'événement : ${date}` : null,
    inspirationTitles.length
      ? `Inspiration : ${inspirationTitles.join(", ")}`
      : null,
  ].filter(Boolean);

  return `https://wa.me/?text=${encodeURIComponent(lines.join("\n"))}`;
}
