"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Slide = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  image: string;
  alt: string;
};

export default function Carousel({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  // Auto-play
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused && !isDragging) setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, [paused, slides.length, isDragging]);

  // Scroll to current slide
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * index, behavior: "smooth" });
  }, [index]);

  // Touch and drag handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    setPaused(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;

    const clientX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX - clientX;

    // Minimum drag distance to trigger slide change
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        go(1); // Swipe left - next
      } else {
        go(-1); // Swipe right - previous
      }
    }

    setIsDragging(false);
    setTimeout(() => setPaused(false), 1000);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div
        ref={trackRef}
        className="carousel w-full overflow-x-hidden flex snap-x snap-mandatory scroll-smooth"
        aria-roledescription="carousel"
        aria-label="Hero slides"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}>
        {slides.map((s, i) => (
          <div
            key={i}
            className="shrink-0 w-full relative"
            style={{ height: "68vh", minHeight: "400px", maxHeight: "600px" }}>
            <img
              src={s.image}
              alt={s.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 h-full flex items-center">
              <div className="container text-white">
                {s.eyebrow ? (
                  <p className="text-sm uppercase tracking-wide text-white/90">
                    {s.eyebrow}
                  </p>
                ) : null}
                <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
                  {s.title}
                </h1>
                {s.description ? (
                  <p className="mt-3 max-w-xl text-white/90">{s.description}</p>
                ) : null}
                {s.primaryCta ? (
                  <div className="mt-6">
                    <Link
                      href={s.primaryCta.href}
                      className="btn-gradient inline-flex px-5 py-2 rounded-lg font-medium shadow">
                      {s.primaryCta.label}
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bullets only - removed buttons */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index
                ? "bg-white scale-110"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
