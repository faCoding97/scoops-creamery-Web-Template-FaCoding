type Props = { title: string; id?: string; eyebrow?: string };
export default function SectionTitle({ title, id, eyebrow }: Props) {
  return (
    <div className="section-title mb-6">
      {eyebrow ? <p className="text-sm text-rose-700 font-medium">{eyebrow}</p> : null}
      <h2 id={id} className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <div className="divider" />
    </div>
  );
}
