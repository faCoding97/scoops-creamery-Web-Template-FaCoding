import Canvas from "./Canvas";
import data from "@/data/site.json";

export default function Bottom() {
  const year = data.footer.year;
  return (
    <footer className="mt-16 border-t border-vanilla-200 bg-vanilla-50">
      <Canvas>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-chocolate-900/80">© {year} {data.site.name}</p>
          <p className="text-xs text-chocolate-900/60">Handcrafted scoops & smiles.</p>
        </div>
      </Canvas>
    </footer>
  );
}
