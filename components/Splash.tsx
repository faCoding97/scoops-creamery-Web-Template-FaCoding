import Image from "next/image";
import Link from "next/link";
import data from "@/data/site.json";
import Canvas from "./Canvas";

export default function Splash() {
  const h = data.hero;
  return (
    <section className="pt-8 sm:pt-12 sprinkles">
      <Canvas>
        <div className="rounded-2xl bg-white p-6 sm:p-10 border border-vanilla-200 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div>
              <span className="inline-flex items-center rounded-full bg-strawberry-100 text-chocolate-900 px-3 py-1 text-xs border border-strawberry-200">
                Fresh • Small-batch • Daily
              </span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                {h.title}
              </h1>
              <p className="mt-4 text-lg text-chocolate-900/90">{h.subtitle}</p>
              <div className="mt-6 flex items-center gap-3">
                <Link href={h.ctaHref} className="inline-flex items-center rounded-xl bg-strawberry-500 px-5 py-3 text-white shadow-sweet hover:bg-strawberry-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint-600">
                  {h.ctaLabel}
                </Link>
                <Link href="/about" className="inline-flex items-center rounded-xl border border-vanilla-300 px-5 py-3 text-chocolate-900 hover:bg-vanilla-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint-600">
                  About us
                </Link>
              </div>
            </div>
            {h.image ? (
              <div className="relative w-full h-64 sm:h-80 md:h-[420px]">
                <Image src={h.image} alt="Ice cream sundae" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-2xl border border-vanilla-200" priority />
              </div>
            ) : null}
          </div>
        </div>
      </Canvas>
    </section>
  );
}
