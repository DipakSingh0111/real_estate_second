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
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners.brochure} />

      <div className="page-container pt-10 space-y-12">
        {/* SECTION TITLE */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {sectionData.heading}
          </h2>
          <div className="w-8 h-0.5 bg-red-500 mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 pt-1 leading-relaxed max-w-lg mx-auto">
            {sectionData.description}
          </p>
        </div>

        {/* BROCHURES GRID (3 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionData.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* CARD TOP GRAPHIC BANNER */}
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className="w-full h-full object-cover absolute inset-0 z-0"
                  />

                  {/* Diagonal White/Red Split Mask */}
                  <div className="absolute inset-0 z-10 bg-white [clip-path:polygon(0_0,_65%_0,_45%_100%,_0%_100%)]" />

                  {/* Red Accent Line */}
                  <div className="absolute inset-0 z-15 bg-red-600 w-1.5 [clip-path:polygon(0_0,_100%_0,_100%_100%,_0%_100%)] left-[45%] top-0 bottom-0 -skew-x-[20deg]" />

                  {/* Left Text Content inside Mask */}
                  <div className="relative z-20 p-5 w-[60%] h-full flex flex-col justify-between text-slate-900">
                    <div>
                      {/* Red Dash Accent */}
                      <div className="w-3 h-0.5 bg-red-500 mb-1" />
                      <h3 className="text-xs font-black tracking-wider leading-tight text-slate-900">
                        RE<span className="text-red-600">ALLOW</span>
                      </h3>
                      <p className="text-[10px] font-bold tracking-tight text-slate-800 uppercase">
                        {item.tag}
                      </p>
                    </div>

                    <div className="my-auto">
                      <p className="text-[11px] font-bold text-slate-700 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold text-slate-400">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CARD LOWER DETAILS */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                      <FaFilePdf className="text-sm" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {item.title
                          .split(" ")
                          .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
                          .join(" ")}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD BOTTOM ACTION */}
              <div className="px-5 pb-5 pt-1">
                <a
                  href={item.pdfUrl}
                  download
                  className="w-full py-2.5 px-4 rounded-xl border border-red-200 bg-red-50/30 text-red-600 font-bold text-xs flex items-center justify-center space-x-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-sm"
                >
                  <FaDownload className="text-xs" />
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
