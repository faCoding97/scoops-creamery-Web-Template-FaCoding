import { cn } from "../../lib/utils";
type Props = { children: React.ReactNode; className?: string };
export default function Card({ children, className = "" }: Props) {
  return (
    <div className={cn("rounded-2xl border border-black/10 bg-white/90 backdrop-blur p-4", className)}>
      {children}
    </div>
  );
}
