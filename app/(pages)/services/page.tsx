"use client";

import { site } from "@/data";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHome,
  FaHandHoldingUsd,
  FaFileContract,
  FaUserCog,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import PageBanner from "@/components/common/PageBanner";
import PropertyCard from "@/components/PropertyCard";

const serviceIcons: Record<string, React.ReactNode> = {
  home: <FaHome className="text-xl" />,
  handHoldingUsd: <FaHandHoldingUsd className="text-xl" />,
  fileContract: <FaFileContract className="text-xl" />,
  userCog: <FaUserCog className="text-xl" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export default function ServicesPage() {
  const sectionData = site.Service.variants.RealEstateServicePage1;
  const featured =
    site.ServicesOverview.variants.RealEstateServicesOverview1.featured;
  const [slides, setSlides] = useState(featured.properties);

  const handleNext = () => {
    setSlides((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setSlides((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ]);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-0">
      <PageBanner />

      <div className="page-container pt-8 sm:pt-10 space-y-10 sm:space-y-12 lg:space-y-14 pb-8">
        {/* 2. SERVICES SECTION */}
        <div className="space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-1.5"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="w-5 h-[2px] bg-[#1d4ed8]"></span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#1d4ed8] uppercase">
                {sectionData.pretitle}
              </span>
              <span className="w-5 h-[2px] bg-[#1d4ed8]"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {sectionData.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed px-1">
              {sectionData.desc}
            </p>
          </motion.div>

          {/* SERVICE CARDS GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {sectionData.productSlides.map((service) => {
              const href = `/services/${service.slug}`;

              return (
                <Link
                  href={href}
                  key={service.slug}
                  className="block h-full group/link cursor-pointer"
                >
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl p-6 border transition-all duration-300 flex flex-col items-center text-center relative h-full group bg-white border-slate-100 text-slate-800 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.05)] group-hover/link:bg-[#1d4ed8] group-hover/link:border-[#1d4ed8] group-hover/link:text-white group-hover/link:shadow-lg group-hover/link:shadow-blue-500/20"
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover/link:scale-110 bg-blue-50 text-[#1d4ed8] group-hover/link:bg-white/20 group-hover/link:text-white">
                      {serviceIcons[service.icon] ?? (
                        <FaHome className="text-xl" />
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold mb-2 text-slate-900 group-hover/link:text-white">
                      {service.productTitle}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed mb-6 text-slate-400 group-hover/link:text-blue-100 line-clamp-3">
                      {service.productInfoDesc}
                    </p>

                    <div className="mt-auto w-12 h-12 rounded-full border flex items-center justify-center text-xs transition-all duration-300 border-blue-200 text-[#1d4ed8] group-hover/link:bg-white group-hover/link:text-[#1d4ed8] group-hover/link:border-white">
                      <FaArrowRight className="text-sm" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>

        {/* 3. FEATURED PROPERTIES */}
        <section className="bg-[#f2f6fd] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-slate-100 space-y-6 sm:space-y-8">
          <div className="relative flex flex-col items-center text-center space-y-2">
            <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-bold text-[#1d4ed8] tracking-widest uppercase">
              <span>·</span>
              <span>{featured.eyebrow}</span>
              <span>·</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-tight px-8 sm:px-0">
              {featured.heading}
            </h2>

            <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed px-1">
              {featured.desc}
            </p>

            <div className="flex sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 items-center space-x-2 mt-2 sm:mt-0">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#1e3a8a] shadow-sm border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <FaChevronLeft className="text-xs" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1d4ed8] text-white shadow-md flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaChevronRight className="text-xs" />
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {slides.map((item) => (
              <PropertyCard key={item.slug} data={item} />
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
