import type { Metadata } from "next";
import Canvas from "@/components/Canvas";
import data from "@/data/site.json";
import Link from "next/link";

export async function generateStaticParams() {
  return data.flavors.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const item = data.flavors.find((f) => f.slug === params.slug);
  if (!item)
    return {
      title: `Flavor • ${data.site.name}`,
      description: "Flavor not found",
    };
  return {
    title: `${item.name} • ${data.site.name}`,
    description: item.shortDescription,
    openGraph: {
      title: item.name,
      description: item.shortDescription,
      images: [item.image],
    },
    twitter: {
      title: item.name,
      description: item.shortDescription,
      images: [item.image],
    },
  };
}

export default function FlavorPage({ params }: { params: { slug: string } }) {
  const item = data.flavors.find((f) => f.slug === params.slug);
  if (!item) {
    return (
      <Canvas>
        <section className="py-12 sm:py-16">
          <h1 className="text-2xl font-semibold">Flavor not found</h1>
          <Link
            href="/menu"
            className="mt-4 inline-block text-mint-700 underline"
          >
            Back to menu
          </Link>
        </section>
      </Canvas>
    );
  }
  return (
    <Canvas>
      <section className="py-12 sm:py-16 max-w-3xl">
        <h1 className="text-3xl font-bold">{item.name}</h1>
        <p className="mt-2 text-chocolate-900/90">{item.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded bg-vanilla-100 border border-vanilla-300 px-2 py-1">
            Category: {item.category}
          </span>
          <span className="rounded bg-vanilla-100 border border-vanilla-300 px-2 py-1">
            Price: {item.price}
          </span>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        {item.image ? (
          <img
            src={item.image}
            alt={`${item.name} image`}
            className="mt-6 w-full rounded-2xl border border-vanilla-300"
          />
        ) : null}

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Ingredients</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            {item.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>

        <Link
          href="/menu"
          className="mt-8 inline-flex items-center rounded-xl border border-vanilla-400 px-4 py-2 hover:bg-vanilla-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint-600"
        >
          ← Back to menu
        </Link>
      </section>
    </Canvas>
  );
}
