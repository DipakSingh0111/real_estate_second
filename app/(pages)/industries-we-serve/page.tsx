"use client";

import { site } from "@/data";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  ShoppingBag,
  Factory,
  Hospital,
  GraduationCap,
  ConciergeBell,
} from "lucide-react";
import PageBanner from "@/components/common/PageBanner";

const industryIcons: Record<string, React.ReactNode> = {
  briefcase: <Briefcase className="text-blue-600 w-6 h-6" strokeWidth={1.5} />,
  shoppingBag: <ShoppingBag className="text-blue-600 w-6 h-6" strokeWidth={1.5} />,
  industry: <Factory className="text-blue-600 w-6 h-6" strokeWidth={1.5} />,
  hospital: <Hospital className="text-blue-600 w-6 h-6" strokeWidth={1.5} />,
  graduationCap: <GraduationCap className="text-blue-600 w-6 h-6" strokeWidth={1.5} />,
  hotel: <ConciergeBell className="text-blue-600 w-6 h-6" strokeWidth={1.5} />,
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
  const sectionData = site.Industries.variants.RealEstateIndustries1;
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-10 sm:pb-14">
      <PageBanner />

      <div className="page-container pt-8 sm:pt-10 md:pt-12 space-y-10">
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
            {sectionData.desc}
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
                className="bg-white rounded-[20px] overflow-hidden border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col group h-full relative"
              >
                {/* Image Section */}
                <div className="h-[220px] w-full overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Round Icon Badge - Absolute positioned over the boundary */}
                <div className="absolute top-[220px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-[#eef4ff] border-[6px] border-white flex items-center justify-center z-10">
                  {industryIcons[item.iconName]}
                </div>

                {/* Text Content */}
                <div className="pt-12 pb-10 px-8 text-center space-y-2 flex-1 flex flex-col justify-start">
                  <h3 className="text-[17px] font-extrabold text-[#0a1b4d] group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        

        {/* 5. SUPPORT BANNER */}
      </div>
    </div>
  );
}
