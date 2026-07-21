export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-[110px]">
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24">
        <div className="mb-12 text-center sm:mb-16">
          <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-muted-foreground sm:mt-6">
            Comment nous protégeons vos données
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="leading-relaxed text-muted-foreground text-lg">
              Chez Reda Fawaz, nous accordons une importance particulière à la protection de vos données personnelles. Cette page décrit les informations que nous collectons et la manière dont nous les utilisons.
            </p>
            <p className="leading-relaxed text-muted-foreground text-lg">
              Les informations transmises via notre formulaire de consultation (nom, coordonnées, détails de votre événement) sont utilisées uniquement dans le cadre du traitement de votre demande et ne sont jamais partagées avec des tiers sans votre consentement.
            </p>
            <p className="leading-relaxed text-muted-foreground text-lg">
              Vous disposez à tout moment d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous directement.
            </p>
            <p className="leading-relaxed text-muted-foreground text-lg">
              Cette politique est susceptible d&apos;être mise à jour. Dernière mise à jour : 2026.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}