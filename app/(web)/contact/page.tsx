import Canvas from "@/components/Canvas";
import data from "@/data/site.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact • ${data.site.name}`,
  description: "Get in touch",
};

export default function ContactPage() {
  const c = data.contact;
  return (
    <Canvas>
      <section className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold">Contact</h1>
          <dl className="mt-4 space-y-2 text-chocolate-900">
            <div>
              <dt className="font-medium inline">Email: </dt>
              <dd className="inline">{c.email}</dd>
            </div>
            <div>
              <dt className="font-medium inline">Location: </dt>
              <dd className="inline">{c.location}</dd>
            </div>
          </dl>
          <p className="mt-4 text-chocolate-900/80">{c.note}</p>
        </div>
        <div>
          <form
            className="rounded-2xl border border-vanilla-300 p-6 shadow-soft bg-white"
            onSubmit={(e) => e.preventDefault()}
            aria-describedby="note"
          >
            <div className="grid gap-4">
              <label className="block">
                <span className="text-sm font-medium">Name</span>
                <input className="mt-1 w-full rounded-xl border border-vanilla-300 px-3 py-2 bg-vanilla-50" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-vanilla-300 px-3 py-2 bg-vanilla-50"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-vanilla-300 px-3 py-2 bg-vanilla-50"
                ></textarea>
              </label>
              <button className="inline-flex items-center rounded-xl bg-mint-600 text-white px-4 py-2 hover:bg-mint-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint-700">
                Send (demo)
              </button>
            </div>
            <p id="note" className="sr-only">
              {c.note}
            </p>
          </form>
        </div>
      </section>
    </Canvas>
  );
}
