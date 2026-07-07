"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MobileMenu() {
  return (
    <Button aria-label="Open menu" className="md:hidden" size="icon" variant="ghost">
      <Menu className="h-5 w-5" />
    </Button>
  );
}
