import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type LuxuryButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "outline" | "champagne" | "inverse";
};

export function LuxuryButton({
  className,
  variant = "primary",
  ...props
}: LuxuryButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex h-12 items-center justify-center border px-8 font-sans text-sm uppercase tracking-[0.15em] transition-colors duration-300",
        variant === "primary" &&
          "border-foreground text-foreground hover:bg-foreground hover:text-background",
        variant === "outline" &&
          "border-foreground text-foreground hover:bg-foreground hover:text-background",
        variant === "champagne" &&
          "border-accent text-accent hover:bg-accent hover:text-accent-foreground",
        variant === "inverse" &&
          "border-background text-background hover:bg-background hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
