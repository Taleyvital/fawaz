import { ClosingInvitation } from "@/components/home/closing-invitation";
import { ExpertiseGrid } from "@/components/home/expertise-grid";
import { FeaturedWork } from "@/components/home/featured-work";
import { HeroParallax } from "@/components/home/hero-parallax";
import { SignatureStatement } from "@/components/home/signature-statement";

export default function Home() {
  return (
    <>
      <HeroParallax />
      <SignatureStatement />
      <ExpertiseGrid />
      <FeaturedWork />
      <ClosingInvitation />
    </>
  );
}
