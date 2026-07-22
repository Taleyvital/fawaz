import { ClosingInvitation } from "@/components/home/closing-invitation";
import { ExpertiseGrid } from "@/components/home/expertise-grid";
import { FeaturedWork } from "@/components/home/featured-work";
import { HeroParallax } from "@/components/home/hero-parallax";
import { SignatureStatement } from "@/components/home/signature-statement";
import { getPortfolioItems } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const portfolioItems = await getPortfolioItems();

  return (
    <>
      <HeroParallax />
      <SignatureStatement />
      <ExpertiseGrid />
      <FeaturedWork items={portfolioItems} />
      <ClosingInvitation />
    </>
  );
}
