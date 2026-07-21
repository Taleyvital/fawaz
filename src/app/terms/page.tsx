export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-[110px]">
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24">
        <div className="mb-12 text-center sm:mb-16">
          <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Conditions d&apos;utilisation
          </h1>
          <p className="mt-4 text-muted-foreground sm:mt-6">
            Les règles régissant l&apos;utilisation de ce site
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="leading-relaxed text-muted-foreground text-lg">
              En accédant à ce site et en utilisant nos services, vous acceptez les présentes conditions d&apos;utilisation. Merci de les lire attentivement.
            </p>
            <p className="leading-relaxed text-muted-foreground text-lg">
              Le contenu de ce site (textes, images, identité visuelle) est la propriété de Reda Fawaz et ne peut être reproduit sans autorisation préalable.
            </p>
            <p className="leading-relaxed text-muted-foreground text-lg">
              Les informations fournies via le formulaire de consultation servent uniquement à l&apos;établissement d&apos;un premier contact et à l&apos;évaluation de votre demande d&apos;événement.
            </p>
            <p className="leading-relaxed text-muted-foreground text-lg">
              Nous nous réservons le droit de modifier ces conditions à tout moment. Dernière mise à jour : 2026.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}