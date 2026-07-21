export default function PressPage() {
  return (
    <main className="min-h-screen bg-background pt-[110px]">
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24">
        <div className="mb-12 text-center sm:mb-16">
          <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Dossier de presse
          </h1>
          <p className="mt-4 text-muted-foreground sm:mt-6">
            Reda Fawaz dans les médias
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="leading-relaxed text-muted-foreground text-lg">
              Reda Fawaz est reconnu pour son approche artistique unique de l&apos;événementiel de luxe, alliant élégance intemporelle et créativité audacieuse.
            </p>
            <p className="leading-relaxed text-muted-foreground text-lg">
              Pour toute demande presse, interview ou collaboration médiatique, notre équipe se tient à votre disposition pour vous fournir photos, biographie complète et éléments visuels de marque.
            </p>
            <p className="leading-relaxed text-muted-foreground text-lg">
              Contactez-nous directement via notre formulaire de consultation pour toute demande relative à la presse.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}