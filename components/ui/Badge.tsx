type Props = { children: React.ReactNode };
export default function Badge({ children }: Props) {
  return <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs bg-rose-50 text-rose-700 border border-rose-200">{children}</span>;
}
