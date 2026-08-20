"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site, SectionProps, HeroBannerData } from "@/data";

export default function HeroBanner({
  data: propData,
}: SectionProps<HeroBannerData> = {}) {
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

  const activeSlide = slides[activeIndex] || slides[0];
  if (!activeSlide) return null;

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-slate-900 font-[family-name:var(--font-poppins)]">
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-[72%_center] sm:object-[62%_center] lg:object-center"
            />
          </div>
        ))}
      </div>
      <div className="page-container relative z-10 flex min-h-[100svh] w-full flex-col justify-center pb-28 pt-[6.75rem] sm:pt-32 md:pt-36 lg:pb-24 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex w-full max-w-xl flex-col gap-5 sm:max-w-2xl sm:gap-6 lg:w-[58%] lg:max-w-none xl:w-[50%]"
        >
          <div className="inline-flex w-fit max-w-full items-stretch overflow-hidden rounded-full border border-white/20 bg-white/95 shadow-[0_8px_24px_rgba(15,23,42,0.18)]">
            <span className="shrink-0 bg-[#2563eb] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-black sm:px-4 sm:text-xs">
              {data.pretitle.split("·")[0]?.trim()}
            </span>
            <span className="truncate px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-600 sm:px-4 sm:text-xs">
              {data.pretitle.split("·")[1]?.trim()}
            </span>
          </div>
          <h1 className="text-[40px] font-bold leading-[1.08] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[64px] lg:leading-[1.1]">
            {hasHighlight ? (
              <>
                {beforeHighlight}
                <span className="text-[#60a5fa]">
                  {data.highlightedTitleText}
                </span>
                {afterHighlight}
              </>
            ) : (
              data.title
            )}
          </h1>

          <p className="max-w-md text-[15px] leading-relaxed text-black/85 sm:max-w-lg sm:text-base md:text-[17px] lg:text-lg">
            {data.desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
