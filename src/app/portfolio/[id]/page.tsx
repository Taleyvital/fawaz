import { notFound } from "next/navigation";
import Image from "next/image";
import { getPortfolioItems } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";

type PortfolioDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { id } = await params;
  const portfolioItems = await getPortfolioItems();
  const item = portfolioItems.find((i) => i.id === id);
  if (!item) {
    notFound();
  }
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Image Section */}
      <section className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] md:h-[75vh]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover"
          priority
        />
      </section>
      {/* Content Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left Column - Title and Description */}
          <div className="md:col-span-8">
            {/* Category Label */}
            <p className="mb-3 text-[10px] tracking-[0.4em] text-muted-foreground uppercase sm:mb-4 sm:text-xs sm:tracking-[0.5em]">
              {item.category}
            </p>
            {/* Title */}
            <h1 className="mb-6 font-display text-2xl font-normal leading-tight sm:mb-8 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {item.title}
            </h1>
            {/* Description */}
            <p className="leading-relaxed text-muted-foreground text-base sm:text-lg">
              {item.description}
            </p>
          </div>
          {/* Right Column - Details */}
          {item.details && (
            <div className="md:col-span-4">
              <div className="space-y-6 border-l border-border pl-6 sm:space-y-8 sm:pl-8">
                {item.details.map((detail, index) => (
                  <div key={index}>
                    <p className="mb-1 text-[10px] tracking-widest text-muted-foreground uppercase sm:mb-2 sm:text-xs">
                      {detail.label}
                    </p>
                    <p className="font-display text-base sm:text-lg">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}