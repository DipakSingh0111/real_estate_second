"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, SectionProps, BestRealEstateSectionData } from "@/data";

export default function BestRealEstateSection({
  data: propData,
  className,
}: SectionProps<BestRealEstateSectionData>) {
  const data = propData || site.CitiesWeServe.variants.RealEstateCitiesWeServe1;
  const images = data.images ?? [];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    if (!images.length) return;
    const timer = setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="featured-property"
      className={`bg-white section-y overflow-hidden ${className ?? ""}`}
    >
      <div className="page-container grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative pt-6 sm:pt-8"
        >
          <div className="relative z-10 w-full aspect-[4/3] max-w-[550px] mx-auto lg:mx-0">
            <div className="absolute left-[8%] right-[8%] -bottom-6 h-1/2 rounded-b-[40px] bg-[#e8e8e8]" />
            <div className="absolute left-[14%] right-[14%] -bottom-9 h-1/2 rounded-b-[40px] bg-[#f2f2f2] -z-10" />

            <div className="relative z-10 w-full h-full overflow-hidden rounded-[28px] sm:rounded-[40px] bg-slate-100 shadow-sm">
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === activeImageIndex
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              <div className="absolute right-5 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 z-20">
                {images.map((image, index) => (
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

          <div className="absolute left-2 top-2 sm:left-4 sm:top-4 z-30 grid grid-cols-4 gap-[10px] pointer-events-none">
            {Array.from({ length: 16 }, (_, index) => (
              <span
                key={index}
                className="h-[6px] w-[6px] rounded-full bg-[#1243c6] shadow-sm"
              />
            ))}
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
              {data.pretitle}
            </p>
            <div className="w-8 h-[2px] bg-[#1243c6]" />
          </div>

          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-[42px] font-extrabold leading-[1.2] tracking-tight text-[#071b47]">
            {data.title}
          </h2>

          <div className="mb-4 sm:mb-6 w-8 h-[2px] bg-[#1243c6]" />

          <p className="mb-6 sm:mb-8 text-sm sm:text-[15px] leading-relaxed text-gray-500 text-justify">
            {data.desc}
          </p>

          <div className="flex items-center gap-6">
            <button
              aria-label="Play video"
              onClick={() => setIsVideoModalOpen(true)}
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#1243c6] text-white shadow-[0_8px_20px_rgba(18,67,198,0.3)] transition-transform hover:scale-105"
            >
              <Play className="ml-1 h-5 w-5 fill-white stroke-white" />
            </button>
            <a
              href={data.button.href}
              className="text-[15px] font-medium text-[#1243c6] underline decoration-1 underline-offset-4 hover:text-[#0d36a5]"
            >
              {data.button.label}
            </a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                aria-label="Close video"
              >
                <X className="h-6 w-6" />
              </button>

              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
              >
                <source src="/images/video.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
