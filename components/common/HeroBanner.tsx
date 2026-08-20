"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site, SectionProps, HeroBannerData } from "@/data";



export default function HeroBanner({ data: propData, className }: SectionProps<HeroBannerData> = {}) {
  const data = propData || site.Banner.variants.RealEstateBanner1;
  const [beforeHighlight, afterHighlight] = data.title.split(
    data.highlightedTitleText,
  );
  const hasHighlight = afterHighlight !== undefined;

  const slides = data.bannerSlides || [];

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
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen w-full overflow-hidden bg-slate-900 font-['Times_New_Roman',_Times,_serif]">
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
        {/* Mobile white overlay for readability since the image's baked-in curve shrinks */}
        <div className="absolute inset-0 bg-white/80 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:hidden" />
      </div>

      <div className="page-container relative z-10 flex min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen w-full flex-col justify-center pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-20 lg:pt-32">
        <div className="w-full lg:w-[60%] xl:w-[50%]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="rounded-full bg-blue-600 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                {data.pretitle.split("·")[0]}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600">
                {data.pretitle.split("·")[1]}
              </span>
            </div>

            <h1 className="mt-3 sm:mt-4 text-[28px] font-extrabold tracking-tight text-[#0B132A] sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.15]">
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

            <p className="mt-3 sm:mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
              {data.desc}
            </p>
          </motion.div>
        </div>
        {/* Slide dots indicators */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 sm:gap-3">
          {slides.map((slide, index) => (
            <button
              key={`dot-${slide.title}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                ? "w-8 sm:w-10 bg-[#3b55ce]"
                : "w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}