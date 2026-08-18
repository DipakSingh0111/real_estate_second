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
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners["our-partners"]} />

      <div className="page-container pt-16 space-y-12">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {sectionData.heading}
          </h2>
          <div className="w-12 h-[3px] bg-[#1B36B0] mx-auto" />
          <p className="text-sm sm:text-[15px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>

        {/* PARTNERS LOGO GRID (5 COLUMNS) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[15px]"
        >
          {sectionData.items.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden p-2.5 border border-[#F0F0F0] hover:border-[#1B36B0]/30 hover:shadow-[0_8px_24px_rgba(27,54,176,0.08)] transition-all duration-300 flex items-center justify-center h-[110px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[72px] max-w-[90%] object-contain rounded-lg"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
