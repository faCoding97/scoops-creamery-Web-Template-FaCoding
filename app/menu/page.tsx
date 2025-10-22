import site from "../../data/site.json";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Card from "../../components/ui/Card";
import { formatZAR } from "../../lib/utils";

export const metadata = {
  title: "Menu",
  description: "All flavours, sundaes and shakes at Scoops Creamery.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  const items = site.menu;
  return (
    <Container className="py-10 md:py-16">
      <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm p-6 md:p-8">
        <SectionTitle title="All Flavors & Menu" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <Card key={i.id} className="fx-card">
              <img src={i.image} alt={i.title} className="w-full h-44 object-cover rounded-xl" />
              <div className="mt-4 space-y-1">
                <h3 className="font-semibold text-lg">{i.title}</h3>
                <p className="text-sm text-gray-600">{i.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold">{formatZAR(i.priceZAR)}</span>
                  <span className="text-xs text-gray-600">{i.category}</span>
                </div>
                {i.tags?.length ? (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {i.tags.map((t) => (<span key={t} className="px-2 py-1 rounded-full text-xs bg-rose-50 text-rose-700 border border-rose-200">{t}</span>))}
                  </div>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-6">
          * Allergen note: We prepare with care, but traces of milk, eggs, gluten, soy, or nuts may remain as we use shared equipment.
        </p>
      </div>
    </Container>
  );
}
