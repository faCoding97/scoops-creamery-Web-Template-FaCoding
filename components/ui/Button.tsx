import { cn } from "../../lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "ghost" };
export default function Button({ className, variant = "solid", ...props }: Props) {
  const styles = variant === "solid"
    ? "btn-gradient px-4 py-2 rounded-lg font-medium shadow hover:opacity-95"
    : "px-4 py-2 rounded-lg font-medium border border-black/10 bg-white/80 hover:bg-white";
  return <button className={cn(styles, className)} {...props} />;
}
