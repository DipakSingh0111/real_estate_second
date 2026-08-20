"use client";

import React from "react";
import Image from "next/image";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { site, SectionProps, AboutPageData } from "@/data";

const roundedHexagonMask = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 230' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M108.6,15 L178.6,55.4 Q186.6,60 186.6,70 L186.6,160 Q186.6,170 178.6,174.6 L108.6,215 Q100,220 91.4,215 L21.4,174.6 Q13.4,170 13.4,160 L13.4,70 Q13.4,60 21.4,55.4 L91.4,15 Q100,10 108.6,15 Z' fill='black'/%3E%3C/svg%3E")`;

export default function About({ data: propData, className }: SectionProps<AboutPageData> = {}) {
  const sectionData = propData || site.AboutPage.variants.RealEstateAboutPage1;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="lg:col-span-6 relative flex justify-center lg:justify-start py-4 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-0"
      >
        <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[460px] aspect-[4/4.6]">
          {/* Main Image */}
          <div
            className="absolute inset-0 z-10"
            style={{
              WebkitMaskImage: roundedHexagonMask,
              WebkitMaskSize: "100% 100%",
              maskImage: roundedHexagonMask,
              maskSize: "100% 100%",
            }}
          >
            <Image
              src={sectionData.backgroundImage}
              alt={sectionData.backgroundImageTitle}
              fill
              className="object-cover"
            />
          </div>

          {/* Hexagon Badge */}
          <div
            className="absolute -left-6 sm:-left-14 lg:-left-16 top-[45%] -translate-y-1/2 w-[100px] sm:w-[150px] lg:w-[180px] aspect-[4/4.6] bg-[#1B36B0] text-white flex flex-col items-center justify-center text-center p-2 sm:p-4 z-20"
            style={{
              WebkitMaskImage: roundedHexagonMask,
              WebkitMaskSize: "100% 100%",
              maskImage: roundedHexagonMask,
              maskSize: "100% 100%",
            }}
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-none mb-1 sm:mb-2 mt-1 sm:mt-2">
              {sectionData.stats[0]?.value}
            </span>
            <span className="text-[9px] sm:text-[11px] lg:text-[13px] font-semibold text-white leading-tight mb-2 sm:mb-3 px-1 sm:px-2">
              {sectionData.pretitle.split(" ").slice(0, 2).join(" ")} <br />{" "}
              {sectionData.pretitle.split(" ").slice(2).join(" ")}
            </span>
            <span className="w-5 sm:w-6 h-[2px] bg-white mb-2 sm:mb-3 inline-block" />
            <Home className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5] text-white mb-1 sm:mb-2" />
          </div>

          {/* Secondary Image with White Border */}
          <div
            className="absolute -right-4 sm:-right-10 lg:-right-12 -bottom-4 sm:-bottom-10 lg:-bottom-12 w-[110px] sm:w-[170px] lg:w-[210px] aspect-[4/4.6] z-30 bg-white"
            style={{
              WebkitMaskImage: roundedHexagonMask,
              WebkitMaskSize: "100% 100%",
              maskImage: roundedHexagonMask,
              maskSize: "100% 100%",
            }}
          >
            {/* Inner Image Mask */}
            <div
              className="absolute inset-[8px] sm:inset-[10px] overflow-hidden"
              style={{
                WebkitMaskImage: roundedHexagonMask,
                WebkitMaskSize: "100% 100%",
                maskImage: roundedHexagonMask,
                maskSize: "100% 100%",
              }}
            >
              <Image
                src={sectionData.sideImage}
                alt={"About Us Image"}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="lg:col-span-6 flex flex-col justify-center lg:pr-4 xl:pr-10"
      >
        <div className="mb-3 sm:mb-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1B36B0] block mb-2">
            {sectionData.pretitle || "ABOUT US"}
          </span>
          <span className="w-12 h-[3px] bg-[#1B36B0] block mb-4 sm:mb-6" />
        </div>

        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-black text-[#0B132A] leading-[1.15] mb-4 sm:mb-6 tracking-tight">
          {sectionData.title} <br />
          <span className="text-[#1B36B0]">{sectionData.titleHighlight}</span>
        </h2>

        <div className="space-y-4 sm:space-y-6 text-[#4F5B73] text-sm sm:text-[15px] md:text-[16px] leading-[1.8] font-medium max-w-[95%]">
          {[sectionData.desc].map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
