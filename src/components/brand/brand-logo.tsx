import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
};

/**
 * Monogramme "RF" rendu via CSS mask : la calligraphie prend la couleur
 * courante (`currentColor`), et s'adapte donc automatiquement au thème
 * clair/sombre selon la couleur de texte héritée.
 */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <span
      aria-hidden
      className={cn("block aspect-[577/367] bg-current", className)}
      style={{
        WebkitMaskImage: "url(/images/logo/logo-RF.svg)",
        maskImage: "url(/images/logo/logo-RF.svg)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
