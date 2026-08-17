"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import homeData from "@/data/homeData.json";
import type { BrochurePageData } from "@/types/home";
import PageBanner from "@/components/common/PageBanner";

export default function BrochurePage() {
  const sectionData: BrochurePageData = homeData.brochurePage;
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans pb-16">
      <PageBanner data={homeData.pageBanners.brochure} />

      <div className="page-container pt-12 space-y-10">
        {/* SECTION TITLE */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight">
            {sectionData.heading}
          </h2>
          <div className="w-10 h-[2px] bg-red-600 mx-auto" />
          <p className="text-sm sm:text-base text-slate-500 pt-2 max-w-xl mx-auto">
            {sectionData.description}
          </p>
        </div>

        {/* BROCHURES GRID (3 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionData.items.map((item, index) => {
            const firstWord = item.title.split(" ")[0];
            const restOfTitle = item.title.split(" ").slice(1).join(" ");
            const firstChar = firstWord.charAt(0);
            const restOfFirstWord = firstWord.slice(1);

            const yearPart1 = item.year.split(" ")[0];
            const yearPart2 = item.year.split(" ")[1];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* CARD TOP GRAPHIC BANNER */}
                  <div className="relative h-[200px] w-full bg-slate-900 overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={item.bgImage}
                      alt={item.title}
                      className="w-full h-full object-cover absolute inset-0 z-0"
                    />

                    {/* Mask layers */}
                    <div className="absolute inset-y-0 left-0 z-10 w-[70%]">
                      {/* Dark red shadow / depth (slightly offset right) */}
                      <div className="absolute inset-0 bg-[#7a0000] [clip-path:polygon(0_0,_88%_0,_58%_100%,_0%_100%)] translate-x-[3px]" />

                      {/* Bright red line */}
                      <div className="absolute inset-0 bg-red-600 [clip-path:polygon(0_0,_88%_0,_58%_100%,_0%_100%)]" />

                      {/* White mask */}
                      <div className="absolute inset-0 bg-white [clip-path:polygon(0_0,_84%_0,_54%_100%,_0%_100%)]" />
                    </div>

                    {/* Left Text Content inside Mask */}
                    <div className="relative z-20 p-5 pt-6 h-full flex flex-col justify-between w-[55%]">
                      <div>
                        {/* Red Dash Accent */}
                        <div className="w-3 h-[2px] bg-red-600 mb-2" />
                        <h3 className="text-[14px] font-black tracking-wider leading-none text-[#111827]">
                          <span className="text-red-600">{firstChar}</span>{restOfFirstWord}
                        </h3>
                        {restOfTitle && (
                          <h3 className="text-[14px] font-black tracking-wider leading-none text-[#111827] mt-1.5">
                            {restOfTitle}
                          </h3>
                        )}
                      </div>

                      <div className="my-auto pt-2">
                        <p className="text-[12px] font-medium text-slate-500 leading-snug pr-2">
                          {item.subtitle}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold text-[#111827] uppercase leading-tight">
                          {yearPart1} <br />
                          <span className="font-semibold text-slate-500">{yearPart2}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CARD LOWER DETAILS */}
                  <div className="p-6 space-y-4 bg-white">
                    <div className="flex items-start space-x-3">
                      <div className="text-red-500 mt-0.5 shrink-0">
                        <FaFilePdf className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[#111827]">
                          {item.title
                            .split(" ")
                            .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
                            .join(" ")}
                        </h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed mt-1.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD */}
                <div className="px-6 pb-6 bg-white">
                  <a
                    href={item.pdfUrl}
                    download
                    className="w-full py-2.5 px-4 rounded-md border border-red-300 bg-white text-red-600 font-bold text-sm flex items-center justify-center space-x-2 hover:bg-red-50 hover:border-red-400 transition-all duration-300"
                  >
                    <FaDownload className="text-sm" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
