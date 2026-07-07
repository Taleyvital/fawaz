import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Reda Fawaz",
    template: "%s | Reda Fawaz",
  },
  description:
    "Art événementiel de luxe, direction de mode, design floral et expériences sur mesure par Reda Fawaz.",
  openGraph: {
    title: "Reda Fawaz",
    description:
      "Art événementiel de luxe, direction de mode, design floral et expériences sur mesure par Reda Fawaz.",
    siteName: "Reda Fawaz",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
