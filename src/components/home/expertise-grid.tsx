import { Reveal } from "@/components/brand/reveal";
import { EditorialHeading } from "@/components/brand/editorial-heading";

const disciplines = [
  {
    index: "01",
    title: "Design de Mariage",
    description:
      "De la scénographie à la mise en scène du grand jour, nous composons des mariages d'exception, fidèles à votre histoire.",
  },
  {
    index: "02",
    title: "Stylisme Événementiel",
    description:
      "Galas, lancements et célébrations privées pensés comme des expériences immersives, jusqu'au moindre détail.",
  },
  {
    index: "03",
    title: "Design Floral",
    description:
      "Installations florales sur-mesure, des orchidées rares aux arches monumentales, pour sublimer chaque espace.",
  },
  {
    index: "04",
    title: "Direction de Mode",
    description:
      "Une sensibilité haute couture appliquée à l'événementiel, où la matière et la silhouette deviennent décor.",
  },
];

export function ExpertiseGrid() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-28 md:px-20 md:py-36">
        <Reveal>
          <EditorialHeading
            eyebrow="Nos Savoir-Faire"
            title="Une expertise à 360°"
            description="Quatre disciplines réunies sous une même signature, pour orchestrer chaque instant de votre événement."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 md:mt-24">
          {disciplines.map((discipline, index) => (
            <Reveal
              key={discipline.index}
              delay={index * 0.08}
              className="group flex flex-col gap-6 bg-card p-8 transition-colors duration-500 hover:bg-background sm:p-10 md:p-14"
            >
              <span className="font-display text-2xl font-light text-accent">
                {discipline.index}
              </span>
              <h3 className="font-display text-2xl font-medium leading-tight sm:text-3xl md:text-[34px]">
                {discipline.title}
              </h3>
              <p className="font-sans text-sm font-light leading-7 text-muted-foreground md:text-base">
                {discipline.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
