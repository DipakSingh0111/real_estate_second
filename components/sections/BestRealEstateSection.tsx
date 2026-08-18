"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, SectionProps, BestRealEstateSectionData } from "@/data";



export default function BestRealEstateSection({ data: propData, className }: SectionProps<any>) {
  const data = propData || site.bestRealEstateSection;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = data.images[activeImageIndex];

  return (
    <section
      id="featured-property"
      className="bg-white py-10 lg:py-14 overflow-hidden"
    >
      <div className="page-container grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative pt-8 pl-8 sm:pt-10 sm:pl-10"
        >
          {/* Blue Dots Grid */}
          <div className="absolute left-0 top-0 z-0 grid grid-cols-4 gap-[10px]">
            {Array.from({ length: 16 }, (_, index) => (
              <span
                key={index}
                className="h-[6px] w-[6px] rounded-full bg-[#1243c6]"
              />
            ))}
          </div>

          <div className="relative z-10 w-full aspect-[4/3] max-w-[550px] mx-auto lg:mx-0">
            {/* Gray box underneath */}
            <div className="absolute left-[8%] right-[8%] -bottom-6 h-1/2 rounded-b-[40px] bg-[#e8e8e8]" />
            <div className="absolute left-[14%] right-[14%] -bottom-9 h-1/2 rounded-b-[40px] bg-[#f2f2f2] -z-10" />

            {/* Main Image */}
            <div className="relative z-10 w-full h-full overflow-hidden rounded-[40px] bg-slate-100 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators inside image */}
              <div className="absolute right-5 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 z-20">
                {data.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Show image ${index + 1}`}
                    aria-current={index === activeImageIndex}
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-3 w-3 rounded-full border border-white transition-all ${
                      index === activeImageIndex
                        ? "bg-white shadow-md"
                        : "bg-transparent hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full"
        >
          <div className="mb-4">
            <p className="text-[13px] font-bold text-[#1243c6] mb-1.5">
              {data.eyebrow}
            </p>
            <div className="w-8 h-[2px] bg-[#1243c6]" />
          </div>

          <h2 className="mb-6 text-3xl sm:text-[42px] font-extrabold leading-[1.2] tracking-tight text-[#071b47]">
            {data.headingLines.join(" ")}
          </h2>

          <div className="mb-6 w-8 h-[2px] bg-[#1243c6]" />

          <p className="mb-8 text-sm sm:text-[15px] leading-relaxed text-gray-500">
            {data.description}
          </p>

          <div className="flex items-center gap-6">
            <button
              aria-label={data.playButtonLabel}
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#1243c6] text-white shadow-[0_8px_20px_rgba(18,67,198,0.3)] transition-transform hover:scale-105"
            >
              <Play className="ml-1 h-5 w-5 fill-white stroke-white" />
            </button>
            <a
              href={data.learnMoreLink}
              className="text-[15px] font-medium text-[#1243c6] underline decoration-1 underline-offset-4 hover:text-[#0d36a5]"
            >
              {data.learnMoreLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
