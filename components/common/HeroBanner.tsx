"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site, SectionProps, HeroBannerData } from "@/data";



export default function HeroBanner({ data: propData, className }: SectionProps<HeroBannerData> = {}) {
  const data = propData || site.heroBanner;
  const [beforeHighlight, afterHighlight] = data.title.split(
    data.highlightedTitleText,
  );
  const hasHighlight = afterHighlight !== undefined;

  const slides = data.slides || [];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const goToNext = () =>
    setActiveIndex((current) => (current + 1) % slides.length);

  const activeSlide = slides[activeIndex] || slides[0];

  if (!activeSlide) return null;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900 font-[family-name:var(--font-poppins)]">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="page-container relative z-10 flex min-h-screen w-full flex-col justify-center pb-12 pt-32 lg:pb-20 lg:pt-32">
        <div className="w-full lg:w-[60%] xl:w-[50%]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3">
              <span className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                {data.badgeTag}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                {data.badgeLocation}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              {hasHighlight ? (
                <>
                  {beforeHighlight}
                  <span className="text-blue-500">
                    {data.highlightedTitleText}
                  </span>
                  {afterHighlight}
                </>
              ) : (
                data.title
              )}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
              {data.description}
            </p>
          </motion.div>
        </div>
        {/* Slide dots indicators */}
        <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={`dot-${slide.title}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                ? "w-10 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}