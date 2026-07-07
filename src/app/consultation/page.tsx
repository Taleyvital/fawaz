import { ConsultationForm } from "@/components/consultation/consultation-form";
import { CuratedInspirationPanel } from "@/components/consultation/curated-inspiration-panel";
import { LuxuryButton } from "@/components/brand/luxury-button";
import { defaultInspirationItems } from "@/data/inspiration-items";

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-background pt-[110px]">
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24">
        <div className="mb-12 text-center sm:mb-16">
          <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Consultation
          </h1>
          <p className="mt-4 text-muted-foreground sm:mt-6">
            Créons ensemble votre événement de rêve
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <ConsultationForm />
            <div className="mt-8 text-center">
              <LuxuryButton href="/">Envoyer la demande</LuxuryButton>
            </div>
          </div>
          {defaultInspirationItems.length > 0 && (
            <CuratedInspirationPanel items={defaultInspirationItems} />
          )}
        </div>
      </section>
    </main>
  );
}
