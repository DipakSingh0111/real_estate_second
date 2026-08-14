"use client";

import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";
import type { PartnersPageData } from "@/types/home";
import PageBanner from "@/components/common/PageBanner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function PartnersPage() {
  const sectionData: PartnersPageData = homeData.partnersPage;
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners["our-partners"]} />

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

        {/* 3. PARTNERS LOGO GRID (5 COLUMNS) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5"
        >
          {sectionData.items.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              className="bg-white rounded-xl p-3 sm:p-4 border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 flex items-center justify-center h-20 sm:h-24"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-[85%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
