import { CheckCircle2 } from "lucide-react";

import { LuxuryButton } from "@/components/brand/luxury-button";

type ConfirmationPanelProps = {
  whatsappUrl: string;
};

export function ConfirmationPanel({ whatsappUrl }: ConfirmationPanelProps) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <div className="mb-12 flex h-24 w-24 items-center justify-center rounded-full border border-border">
        <CheckCircle2 className="h-9 w-9 text-primary" />
      </div>
      <h1 className="font-display text-6xl font-semibold">Merci.</h1>
      <p className="mt-8 font-display text-3xl text-muted-foreground">
        Votre moodboard a été préparé.
      </p>
      <LuxuryButton href={whatsappUrl} className="mt-16">
        Continuer sur WhatsApp
      </LuxuryButton>
    </section>
  );
}
