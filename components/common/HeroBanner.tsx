"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { HeroBannerData } from "@/types/home";

type HeroBannerProps = { data: HeroBannerData };

export default function HeroBanner({ data }: HeroBannerProps) {
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
    <section className="relative min-h-screen w-full overflow-hidden bg-white font-[family-name:var(--font-poppins)]">
      <div className="flex min-h-screen w-full flex-col lg:flex-row lg:items-stretch">
        {/* Left column: Text content */}
        <div className="relative z-10 flex w-full flex-col justify-center pb-12 pl-[var(--site-gutter)] pr-[var(--site-gutter)] pt-32 lg:w-[44%] lg:pb-20 lg:pt-32 lg:pr-8 xl:w-[42%] xl:pr-12 2xl:w-[40%]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3">
              <span className="rounded-full bg-[#1e40af] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                {data.badgeTag}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {data.badgeLocation}
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              {hasHighlight ? (
                <>
                  {beforeHighlight}
                  <span className="text-[#1e40af]">
                    {data.highlightedTitleText}
                  </span>
                  {afterHighlight}
                </>
              ) : (
                data.title
              )}
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
              {data.description}
            </p>
          </motion.div>
        </div>

        {/* Right column: Image starts aligned with navbar Home and extends full right edge */}
        <div className="relative h-[380px] w-full lg:h-auto lg:min-h-screen lg:w-[56%] xl:w-[58%] 2xl:w-[60%]">
          <div className="absolute inset-0 overflow-hidden shadow-2xl lg:rounded-l-[40px]">
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
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            ))}

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A33]/75 via-[#0B1A33]/25 to-[#0B1A33]/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A33]/40 via-transparent to-[#0B1A33]/30" />
          </div>

          {/* Price badge */}
          <div className="absolute right-6 top-24 z-20 rounded-2xl border border-white/15 bg-[#1e3fb8]/90 px-5 py-3.5 text-right text-white shadow-xl backdrop-blur-md sm:top-28 lg:right-10 lg:top-36">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
              {activeSlide.priceLabel}
            </span>
            <span className="mt-1 block text-2xl font-extrabold tracking-tight sm:text-3xl">
              {activeSlide.price}
            </span>
          </div>

          {/* Explore action button */}
          <div className="absolute bottom-8 left-6 z-20 flex items-center gap-3 lg:left-10">
            <button
              type="button"
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d4ed8] text-2xl font-bold text-white shadow-[0_18px_35px_-10px_rgba(29,78,216,0.7)] transition duration-200 hover:scale-105 hover:bg-[#173eb7]"
              aria-label="Explore more"
            >
              →
            </button>
          </div>


          {/* Slide dots indicators */}
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={`dot-${slide.title}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
