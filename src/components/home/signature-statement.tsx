import { Reveal } from "@/components/brand/reveal";

const stats = [
  { value: "150+", label: "Événements signés" },
  { value: "10", label: "Années d'expertise" },
  { value: "12", label: "Pays d'intervention" },
  { value: "100%", label: "Sur-mesure" },
];

export function SignatureStatement() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28 md:px-20 md:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="mb-8 font-sans text-xs uppercase tracking-[0.3em] text-accent">
              La Maison Reda Fawaz
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-2xl font-light leading-[1.4] tracking-[0.01em] sm:text-3xl md:text-[40px] md:leading-[1.35]">
              Chaque célébration est une œuvre unique. Nous orchestrons
              l&apos;espace, la lumière et la matière pour transformer une vision
              en un souvenir <span className="text-accent">inoubliable</span>.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-border pt-12 sm:mt-20 md:mt-28 md:grid-cols-4 md:gap-8 md:pt-16">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} className="text-center">
              <p className="font-display text-4xl font-medium text-accent sm:text-5xl md:text-[56px]">
                {stat.value}
              </p>
              <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:text-xs">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
