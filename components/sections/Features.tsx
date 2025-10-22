import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Reveal from "../widgets/Reveal.client";

type Item = { title: string; description: string };
export default function Features({ title, id, items }: { title: string; id: string; items: Item[] }) {
  return (
    <>
      <SectionTitle title={title} id={id} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0,3).map((i) => (
          <Reveal key={i.title}>
            <Card className="fx-card h-full">
              <h3 className="font-semibold text-lg">{i.title}</h3>
              <p className="text-gray-600 mt-2">{i.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </>
  );
}
