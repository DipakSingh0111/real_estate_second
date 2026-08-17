"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaShoppingBag,
  FaIndustry,
  FaHospital,
  FaGraduationCap,
  FaHotel,
  FaArrowRight,
} from "react-icons/fa";
import homeData from "@/data/homeData.json";
import type { IndustriesPageData } from "@/types/home";
import PageBanner from "@/components/common/PageBanner";

const industryIcons: Record<string, React.ReactNode> = {
  briefcase: <FaBriefcase className="text-blue-600 text-lg" />,
  shoppingBag: <FaShoppingBag className="text-blue-600 text-lg" />,
  industry: <FaIndustry className="text-blue-600 text-lg" />,
  hospital: <FaHospital className="text-blue-600 text-lg" />,
  graduationCap: <FaGraduationCap className="text-blue-600 text-lg" />,
  hotel: <FaHotel className="text-blue-600 text-lg" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function IndustryWeServePage() {
  const sectionData: IndustriesPageData = homeData.industriesPage;
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners["industries-we-serve"]} />

      <div className="page-container pt-12 space-y-10">
        {/* 2. SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {sectionData.heading}
          </h2>
          <div className="w-8 h-0.5 bg-blue-600 mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>

        {/* 3. INDUSTRY CARDS GRID (3 COLUMNS) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {sectionData.items.map((item) => (
            <Link key={item.id} href={`/industries-we-serve/${item.slug}`} className="block">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06)] hover:shadow-md transition-all duration-300 flex flex-col group h-full"
              >
                {/* Image Section with Overlapping Floating Badge */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Round Icon Badge */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-blue-50 border-2 border-white shadow-md flex items-center justify-center z-10">
                    {industryIcons[item.iconName]}
                  </div>
                </div>

                {/* Text Content */}
                <div className="pt-8 pb-6 px-6 text-center space-y-2 flex-1 flex flex-col justify-start">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* 4. CALL TO ACTION BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#f2f6fc] rounded-2xl p-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative"
        >
          <div className="flex items-center space-x-6 text-center sm:text-left">
            {/* Custom Illustration */}
            <div className="hidden sm:flex shrink-0 relative w-24 h-24 items-end justify-center">
              {/* Light blue circular background */}
              <div className="absolute bottom-0 w-20 h-20 bg-[#e5effa] rounded-full translate-y-2"></div>
              {/* Cityline SVG Illustration */}
              <svg
                className="w-full h-full relative z-10 text-[#1e4ed8]"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Base line */}
                <line x1="5" y1="80" x2="95" y2="80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Left Tree */}
                <path d="M15 80 V68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M11 65 C11 60, 19 60, 19 65 C19 70, 11 70, 11 65 Z" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Right Tree */}
                <path d="M85 80 V66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M81 63 C81 57, 89 57, 89 63 C89 69, 81 69, 81 63 Z" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Left Building */}
                <path d="M22 80 V55 C22 52, 28 50, 32 50 C36 50, 42 52, 42 55 V80" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <rect x="27" y="55" width="2" height="2" fill="currentColor" />
                <rect x="33" y="55" width="2" height="2" fill="currentColor" />
                <rect x="27" y="62" width="2" height="2" fill="currentColor" />
                <rect x="33" y="62" width="2" height="2" fill="currentColor" />
                <rect x="27" y="69" width="2" height="2" fill="currentColor" />
                <rect x="33" y="69" width="2" height="2" fill="currentColor" />
                
                {/* Right Building */}
                <path d="M58 80 V52 C58 49, 63 47, 68 47 C73 47, 78 49, 78 52 V80" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <rect x="63" y="54" width="3" height="2" fill="currentColor" />
                <rect x="69" y="54" width="3" height="2" fill="currentColor" />
                <rect x="63" y="61" width="3" height="2" fill="currentColor" />
                <rect x="69" y="61" width="3" height="2" fill="currentColor" />
                <rect x="63" y="68" width="3" height="2" fill="currentColor" />
                <rect x="69" y="68" width="3" height="2" fill="currentColor" />

                {/* Center Main Building */}
                <path d="M38 80 V30 L45 27 H55 L62 30 V80" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M47 80 V72 C47 69, 53 69, 53 72 V80" stroke="currentColor" strokeWidth="1.5" />
                <rect x="42" y="35" width="3" height="3" fill="currentColor" />
                <rect x="48" y="35" width="4" height="3" fill="currentColor" />
                <rect x="55" y="35" width="3" height="3" fill="currentColor" />
                <rect x="42" y="44" width="3" height="3" fill="currentColor" />
                <rect x="48" y="44" width="4" height="3" fill="currentColor" />
                <rect x="55" y="44" width="3" height="3" fill="currentColor" />
                <rect x="42" y="53" width="3" height="3" fill="currentColor" />
                <rect x="48" y="53" width="4" height="3" fill="currentColor" />
                <rect x="55" y="53" width="3" height="3" fill="currentColor" />
                <rect x="42" y="62" width="3" height="3" fill="currentColor" />
                <rect x="48" y="62" width="4" height="3" fill="currentColor" />
                <rect x="55" y="62" width="3" height="3" fill="currentColor" />
              </svg>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-[#0c2242] mb-1">
                {sectionData.ctaTitle}
              </h4>
              <p className="text-sm font-medium text-slate-500">
                {sectionData.ctaText}
              </p>
            </div>
          </div>

          <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-6 py-2.5 rounded-lg flex items-center space-x-2 shadow-sm transition-all duration-300 shrink-0">
            <span>{sectionData.ctaButton}</span>
            <FaArrowRight className="text-xs font-normal" />
          </button>
        </motion.div>

        {/* 5. SUPPORT BANNER */}
      </div>
    </div>
  );
}
