import Image from "next/image";
import Link from "next/link";
import Chip from "./Chip";
import type { Flavor } from "@/types/site";

export default function FlavorCard({ item }: { item: Flavor }) {
  return (
    <article className="group rounded-2xl bg-white border border-vanilla-200 shadow-soft overflow-hidden h-full flex flex-col">
      <div className="relative h-40 w-full">
        <Image src={item.image} alt={`${item.name} image`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold group-hover:text-strawberry-600 transition-colors">{item.name}</h3>
          <span className="text-xs rounded-full bg-vanilla-100 border border-vanilla-300 text-chocolate-900 px-2 py-1">
            {item.price}
          </span>
        </div>
        <p className="text-sm text-chocolate-900/90">{item.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.tags.map((t)=> <Chip key={t} label={t} />)}
        </div>
      </div>
      <div className="p-5 pt-0">
        <Link href={`/menu/${item.slug}`} className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-strawberry-300 px-4 py-2 hover:bg-strawberry-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint-600">
          View flavor
        </Link>
      </div>
    </article>
  );
}
