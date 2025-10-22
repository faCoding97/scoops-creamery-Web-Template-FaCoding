import SectionTitle from "../ui/SectionTitle";
import Accordion from "../widgets/Accordion";

type QA = { q: string; a: string };
export default function FAQ({ title, id, items }: { title: string; id: string; items: QA[] }) {
  return (
    <>
      <SectionTitle title={title} id={id} />
      <div className="divide-y divide-black/10 rounded-2xl overflow-hidden">
        {items.slice(0,6).map((qa, idx) => (
          <Accordion key={idx} question={qa.q} answer={qa.a} />
        ))}
      </div>
      <p className="text-xs text-gray-600 mt-4">
        * Allergen note: We prepare with care, but traces of milk, eggs, gluten, soy, or nuts may remain as we use shared equipment.
      </p>
    </>
  );
}
