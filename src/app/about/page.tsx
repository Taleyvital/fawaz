import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-[110px]">
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24">
        <div className="mb-12 text-center sm:mb-16">
          <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            À propos
          </h1>
          <p className="mt-4 text-muted-foreground sm:mt-6">
            {"L'art de créer des moments extraordinaires"}
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="leading-relaxed text-muted-foreground text-lg">
                {"Reda Fawaz est un créateur d'événements de luxe, spécialisé dans la conception de mariages, de galas d'entreprise et de célébrations privées exceptionnelles."}
              </p>
              <p className="leading-relaxed text-muted-foreground text-lg">
                {"Avec une approche artistique et un souci du détail inégalé, chaque projet est une œuvre d'art unique, reflétant la vision et la personnalité de nos clients."}
              </p>
              <p className="leading-relaxed text-muted-foreground text-lg">
                Notre philosophie : transformer chaque événement en une expérience inoubliable, où chaque détail compte et chaque moment est précieux.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <p className="font-display text-4xl font-medium text-accent">150+</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Événements</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-medium text-accent">10</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{"Années d'expérience"}</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-medium text-accent">100%</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/wedding-1.jpg"
              alt="Mariage Royal - Château de Versailles"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
