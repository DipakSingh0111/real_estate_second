"use client";

import React from "react";
import Image from "next/image";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";
import type { AboutPageData } from "@/types/home";

export default function About() {
  const sectionData: AboutPageData = homeData.aboutPage;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="lg:col-span-7 relative flex justify-start py-6"
      >
        <div className="relative w-full max-w-[500px] lg:max-w-[600px] h-[400px] sm:h-[500px] lg:h-[600px]">
          {/* Main Image */}
          <div
            className="absolute inset-0 overflow-hidden shadow-2xl z-10"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <Image
              src={sectionData.mainImage}
              alt={sectionData.mainImageAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Hexagon Badge */}
          <div
            className="absolute -left-2 sm:-left-8 top-1/3 w-32 sm:w-40 h-[140px] sm:h-[180px] bg-[#1A43BF] text-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-20"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          >
            <span className="text-3xl sm:text-[34px] font-bold leading-none mb-1">
              {sectionData.badgeValue}
            </span>
            <span className="text-[11px] sm:text-[12px] font-semibold text-blue-100 leading-tight mb-3 mt-1 px-2">
              {sectionData.badgeLabel.split(" ").slice(0, 2).join(" ")} <br />{" "}
              {sectionData.badgeLabel.split(" ").slice(2).join(" ")}
            </span>
            <span className="w-5 h-[1px] bg-blue-300 mb-3 inline-block opacity-50" />
            <Home className="w-5 h-5 stroke-[1.8] text-white" />
          </div>

          {/* Secondary Image */}
          <div
            className="absolute right-0 sm:-right-4 bottom-8 sm:bottom-12 w-[160px] sm:w-[200px] h-[180px] sm:h-[220px] shadow-2xl z-30 overflow-hidden bg-white p-1"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <Image
                src={sectionData.secondaryImage}
                alt={sectionData.secondaryImageAlt}
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
        className="lg:col-span-5 lg:pl-10 flex flex-col justify-center"
      >
        <div className="mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1A43BF] block mb-1">
            {sectionData.eyebrow}
          </span>
          <span className="w-8 h-[2px] bg-[#1A43BF] block mb-4" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132A] leading-tight mb-6">
          {sectionData.heading} <br />
          <span className="text-[#1A43BF]">{sectionData.headingHighlight}</span>
        </h2>

        <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
          {sectionData.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
