import Canvas from "@/components/Canvas";
import Stripe from "@/components/Stripe";
import FlavorCard from "@/components/FlavorCard";
import data from "@/data/site.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Menu • ${data.site.name}`,
  description: "Browse all flavors",
};

export default function MenuPage() {
  return (
    <Canvas>
      <Stripe
        title="Our Flavors"
        description="Dairy, sorbets, and vegan scoops—all made in-house."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.flavors.map((f) => (
            <FlavorCard key={f.slug} item={f} />
          ))}
        </div>
      </Stripe>
    </Canvas>
  );
}
