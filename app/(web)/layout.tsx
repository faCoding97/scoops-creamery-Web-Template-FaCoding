import "./globals.css";
import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Bottom from "@/components/Bottom";
import data from "@/data/site.json";

export const metadata: Metadata = {
  metadataBase: new URL(data.site.baseUrl),
  title: data.site.name,
  description: data.hero.subtitle,
  openGraph: {
    title: data.site.name,
    description: data.hero.subtitle,
    url: data.site.baseUrl,
    siteName: data.site.name,
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.site.name,
    description: data.hero.subtitle,
    images: ["/og.png"],
  },
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Topbar />
        <main>{children}</main>
        <Bottom />
      </body>
    </html>
  );
}
