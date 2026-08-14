"use client";

import React from "react";
import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";
import type { AwardsPageData } from "@/types/home";
import PageBanner from "@/components/common/PageBanner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function AwardsPage() {
  const sectionData: AwardsPageData = homeData.awardsPage;
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners.awards} />

      <div className="page-container pt-12 space-y-10">
        {/* 2. SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {sectionData.heading}
          </h2>
          <div className="w-8 h-0.5 bg-red-500 mx-auto rounded-full" />
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>

        {/* 3. AWARDS GRID (5 COLUMNS) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {sectionData.items.map((award) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-3"
            >
              {/* Trophy/Icon Container */}
              <div className="w-20 h-20 flex items-center justify-center text-4xl select-none pt-2">
                {award.icon}
              </div>

              {/* Year */}
              <span className="text-xs font-bold text-red-500 tracking-wider">
                {award.year}
              </span>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 leading-snug">
                  {award.title}
                </h3>
                <p className="text-[10px] text-slate-400 leading-tight">
                  {award.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. SUPPORT BANNER */}
      </div>
    </div>
  );
}
