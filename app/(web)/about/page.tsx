import Canvas from "@/components/Canvas";
import data from "@/data/site.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About • ${data.site.name}`,
  description: data.about.content,
};

export default function AboutPage() {
  return (
    <Canvas>
      <section className="py-12 sm:py-16">
        <h1 className="text-3xl font-bold">{data.about.heading}</h1>
        <p className="mt-4 text-chocolate-900/90 max-w-3xl">
          {data.about.content}
        </p>
      </section>
    </Canvas>
  );
}
