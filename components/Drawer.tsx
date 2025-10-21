"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Drawer({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
}) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panel.current?.querySelector("a") as HTMLElement | null;
    first?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" onClick={(e)=>{ if (e.target===e.currentTarget) onClose(); }}>
      <div className="absolute inset-0 bg-black/25" />
      <div ref={panel} className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-vanilla-50 border-l border-vanilla-200 p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} aria-label="Close menu" className="rounded px-3 py-2 hover:bg-vanilla-100">✕</button>
        </div>
        <nav className="mt-6 grid">
          {items.map((it) => (
            <Link key={it.href} href={it.href}
              onClick={onClose}
              className="rounded px-3 py-2 hover:bg-vanilla-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint-600">
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
