import { EditorialHeading } from "@/components/brand/editorial-heading";
import { PortfolioShowcase } from "@/components/portfolio/portfolio-showcase";
import { getPortfolioItems } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems();

  return (
    <main className="min-h-screen bg-background pt-[110px]">
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24">
        <div className="mb-16 md:mb-24">
          <EditorialHeading
            eyebrow="Réalisations Signées"
            title="Portfolio"
            description="Une sélection de projets d'exception, présentés dans le détail — de la vision initiale à l'exécution la plus fine."
          />
        </div>
        <PortfolioShowcase items={portfolioItems} />
      </section>
    </main>
  );
}