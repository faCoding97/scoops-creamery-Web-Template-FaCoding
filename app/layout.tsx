import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "../components/layout/Header.client";
import Footer from "../components/layout/Footer";
import site from "../data/site.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://scoops.elixflare.com"),
  title: {
    default: "Scoops Creamery — Port Elizabeth",
    template: "%s | Scoops Creamery",
  },
  description: "Small-batch ice cream, vegan sorbets, milkshakes & sundaes in Port Elizabeth (Gqeberha).",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Scoops Creamery",
    description: "Small-batch ice cream and desserts in Gqeberha.",
    url: "/",
    siteName: "Scoops Creamery",
    locale: "en_ZA",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scoops Creamery",
    description: "Small-batch ice cream and desserts in Gqeberha.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: site.theme.brand || "#e11d48",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme } = site as any;
  return (
    <html lang="en" dir="ltr">
      <body style={{ ['--brand' as any]: theme.brand, ['--accent' as any]: theme.accent, ['--bg' as any]: theme.bg, ['--fg' as any]: theme.fg }}>
        <Header />
        <main className="min-h-dvh pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
