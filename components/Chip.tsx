export default function Chip({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-strawberry-200 bg-white text-chocolate-900 text-xs px-3 py-1">
      {label}
    </span>
  );
}
