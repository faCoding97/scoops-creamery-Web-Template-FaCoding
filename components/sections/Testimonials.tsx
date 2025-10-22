import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Reveal from "../widgets/Reveal.client";

type Item = { quote: string; name: string; role?: string; avatar?: string };
export default function Testimonials({ title, id, items }: { title: string; id: string; items: Item[] }) {
  return (
    <>
      <SectionTitle title={title} id={id} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0,3).map((i, idx) => (
          <Reveal key={idx}>
            <Card className="fx-card h-full">
              <p className="text-gray-800 italic">“{i.quote}”</p>
              <p className="mt-3 font-medium">{i.name}{i.role ? ` · ${i.role}` : ""}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </>
  );
}
