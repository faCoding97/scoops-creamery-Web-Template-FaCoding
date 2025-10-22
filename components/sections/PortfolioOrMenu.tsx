import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Reveal from "../widgets/Reveal.client";
import { formatZAR } from "../../lib/utils";

type Item = {
  id: string;
  title: string;
  category: string;
  priceZAR: number;
  tags?: string[];
  allergens?: string[];
  description: string;
  image: string;
};

export default function PortfolioOrMenu({ title, id, items, ctaHref }: { title: string; id: string; items: Item[]; ctaHref: string }) {
  return (
    <>
      <SectionTitle title={title} id={id} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <Reveal key={i.id}>
            <Card className="fx-card h-full">
              <img src={i.image} alt={i.title} className="w-full h-40 object-cover rounded-xl" />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{i.title}</h3>
                  <span className="font-semibold">{formatZAR(i.priceZAR)}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{i.description}</p>
                {i.tags?.length ? (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {i.tags.map((t) => (<span key={t} className="px-2 py-1 rounded-full text-xs bg-rose-50 text-rose-700 border border-rose-200">{t}</span>))}
                  </div>
                ) : null}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <a href={ctaHref}><button className="btn-gradient px-4 py-2 rounded-lg font-medium shadow hover:opacity-95">Browse full menu</button></a>
      </div>
    </>
  );
}
