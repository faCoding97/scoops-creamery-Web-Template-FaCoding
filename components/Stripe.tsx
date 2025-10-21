import { ReactNode } from "react";

export default function Stripe({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight inline-flex items-baseline gap-3">
          <span>{title}</span>
          <span className="h-1.5 w-16 bg-strawberry-400 rounded-full align-baseline"></span>
        </h2>
        {description ? <p className="mt-3 text-chocolate-900/80">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
