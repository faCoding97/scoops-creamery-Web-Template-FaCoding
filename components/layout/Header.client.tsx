// 'use client' must be on line 1
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import site from "../../data/site.json";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const nav = site.nav.slice(0, 4); // enforce minimal nav (3-4 max)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="inline-flex items-center gap-2">
          <img
            src="/og-image.png"
            alt="Scoops logo"
            className="w-8 h-8 rounded"
          />
          <span className="font-semibold">Scoops</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-rose-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Open navigation menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10"
          onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">Menu</span>
          <div className="w-5 space-y-1.5">
            <span className="block h-0.5 bg-black" />
            <span className="block h-0.5 bg-black" />
            <span className="block h-0.5 bg-black" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="container py-2 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 border-b border-black/10 last:border-b-0"
                onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
