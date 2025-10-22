import { cn } from "../../lib/utils";
type Props = React.InputHTMLAttributes<HTMLInputElement>;
export default function Input({ className, ...props }: Props) {
  return <input className={cn("w-full rounded-lg border border-black/10 px-3 py-2 bg-white/90", className)} {...props} />;
}
