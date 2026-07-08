import Image from "next/image";

import { LuxuryButton } from "@/components/brand/luxury-button";
import { Reveal } from "@/components/brand/reveal";

export function ClosingInvitation() {
  return (
    <section className="relative overflow-hidden bg-foreground">
      <Image
        src="/images/event-2.jpg"
        alt="Soirée privée d'exception mise en scène par Reda Fawaz"
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-4 py-28 text-center text-[#fdf9f4] sm:px-6 sm:py-36 md:px-20 md:py-48">
        <Reveal>
          <p className="mb-8 font-sans text-xs uppercase tracking-[0.3em] text-[#d4af37]">
            Commençons votre histoire
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-[72px]">
            Donnons vie à votre
            <br />
            événement d&apos;exception
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl font-sans text-sm font-light leading-7 text-[#fdf9f4]/80 sm:text-base">
            Partagez-nous votre vision. Nous concevons une proposition sur-mesure,
            pensée dans le moindre détail pour un résultat inoubliable.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <LuxuryButton href="/consultation" variant="inverse">
              Réserver une consultation
            </LuxuryButton>
            <LuxuryButton href="/portfolio" variant="champagne">
              Créer un moodboard
            </LuxuryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
