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
    "Luxury event artistry, fashion direction, floral design, and bespoke experiences by Reda Fawaz.",
  openGraph: {
    title: "Reda Fawaz",
    description:
      "Luxury event artistry, fashion direction, floral design, and bespoke experiences by Reda Fawaz.",
    siteName: "Reda Fawaz",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
