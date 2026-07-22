import { MasonryGallery } from "@/components/portfolio/masonry-gallery";
import { getPortfolioItems } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const portfolioItems = await getPortfolioItems();

  return (
    <main className="min-h-screen bg-background pt-[110px]">
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24">
        <div className="mb-12 text-center sm:mb-16">
          <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Galerie
          </h1>
          <p className="mt-4 text-muted-foreground sm:mt-6">
            Explorez notre univers visuel
          </p>
        </div>
        <MasonryGallery items={portfolioItems} />
      </section>
    </main>
  );
}