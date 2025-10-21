import Splash from "@/components/Splash";
import Canvas from "@/components/Canvas";
import Stripe from "@/components/Stripe";
import FlavorCard from "@/components/FlavorCard";
import QRPanel from "@/components/QRPanel";
import data from "@/data/site.json";

export default function Home() {
  const featured = data.flavors.slice(0, 3);
  return (
    <>
      <Splash />
      <Canvas>
        <div className="mt-10">
          <QRPanel />
        </div>
        <Stripe
          title="Customer Favorites"
          description="A few bestsellers from our rotating menu."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((f) => (
              <FlavorCard key={f.slug} item={f} />
            ))}
          </div>
        </Stripe>
      </Canvas>
    </>
  );
}
