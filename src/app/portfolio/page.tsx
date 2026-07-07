import { MasonryGallery } from "@/components/portfolio/masonry-gallery";
import { portfolioItems } from "@/data/portfolio-items";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background pt-[110px]">
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24">
        <div className="mb-12 text-center sm:mb-16">
          <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Portfolio
          </h1>
          <p className="mt-4 text-muted-foreground sm:mt-6">
            Découvrez nos créations exceptionnelles
          </p>
        </div>
        <MasonryGallery items={portfolioItems} />
      </section>
    </main>
  );
}
