import Carousel from "../widgets/Carousel.client";
import QrCode from "../widgets/QrCode.client";

type Slide = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  image: string;
  alt: string;
};

export default function Hero({ slides }: { slides: Slide[] }) {
  return (
    <section className="relative" aria-label="Hero">
      <Carousel slides={slides} />
      <div className="absolute bottom-4 right-4 hidden md:block">
        <div className="rounded-2xl bg-white/90 backdrop-blur border border-black/10 p-3 shadow">
          <p className="text-xs mb-2">Scan for full menu</p>
          <QrCode value="/menu" size={112} />
        </div>
      </div>
    </section>
  );
}
