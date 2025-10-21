"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "./Drawer";
import data from "@/data/site.json";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-vanilla-50/80 backdrop-blur border-b border-vanilla-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src={data.site.logo} alt={`${data.site.name} Logo`} width={36} height={36} className="rounded-xl border border-vanilla-200" />
          <span className="font-semibold tracking-tight">{data.site.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          {data.nav.map((n)=> (
            <Link key={n.href} href={n.href}
              className="text-chocolate-900 hover:text-chocolate-900/80 border-b-2 border-transparent hover:border-strawberry-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint-600">
              {n.label}
            </Link>
          ))}
        </nav>
        <button onClick={()=>setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="drawer"
          className="md:hidden rounded-xl border border-vanilla-300 px-3 py-2">☰</button>
      </div>
      <div id="drawer">
        <Drawer open={open} onClose={()=>setOpen(false)} items={data.nav} />
      </div>
    </header>
  );
}
