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
    "Hello Reda Fawaz team, I would like to prepare a bespoke consultation.",
    name ? `Name: ${name}` : null,
    eventType ? `Event type: ${eventType}` : null,
    date ? `Event date: ${date}` : null,
    inspirationTitles.length
      ? `Inspiration: ${inspirationTitles.join(", ")}`
      : null,
  ].filter(Boolean);

  return `https://wa.me/?text=${encodeURIComponent(lines.join("\n"))}`;
}
