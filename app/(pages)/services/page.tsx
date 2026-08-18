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
  FaBed,
  FaBath,
  FaRulerCombined,
  FaPhoneAlt,
} from "react-icons/fa";
import PageBanner from "@/components/common/PageBanner";

const serviceIcons: Record<string, React.ReactNode> = {
  home: <FaHome className="text-xl" />,
  handHoldingUsd: <FaHandHoldingUsd className="text-xl" />,
  fileContract: <FaFileContract className="text-xl" />,
  userCog: <FaUserCog className="text-xl" />,
};

// ================= ANIMATION VARIANTS =================
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
  const sectionData = site.servicesPage;
  const [properties, setProperties] = useState(sectionData.properties);

  const handleNext = () => {
    setProperties((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setProperties((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ]);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner />

      <div className="page-container pt-10 space-y-16">
        {/* 2. SERVICES SECTION */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-1.5"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="w-5 h-[2px] bg-[#1d4ed8]"></span>
              <span className="text-xs font-bold tracking-widest text-[#1d4ed8] uppercase">
                {sectionData.eyebrow}
              </span>
              <span className="w-5 h-[2px] bg-[#1d4ed8]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {sectionData.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
              {sectionData.description}
            </p>
          </motion.div>

          {/* 8 CARDS GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {sectionData.items.map((service) => {
              // Determine destination based on service title
              const isContact = service.title.toLowerCase() === "service";
              const slug = service.title.toLowerCase().replace(/ /g, "-");
              const href = isContact ? "/enquiry" : `/services/${slug}`;

              return (
                <Link href={href} key={service.id} className="block h-full group/link cursor-pointer">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col items-center text-center relative h-full group ${service.isActive
                      ? "bg-[#1d4ed8] border-[#1d4ed8] text-white shadow-lg shadow-blue-500/20"
                      : "bg-white border-slate-100 text-slate-800 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.05)] group-hover/link:shadow-md group-hover/link:border-blue-100"
                      }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${service.isActive
                        ? "bg-white/20 text-white"
                        : "bg-blue-50 text-[#1d4ed8]"
                        }`}
                    >
                      {serviceIcons[service.iconName]}
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold mb-2 ${service.isActive ? "text-white" : "text-slate-900"}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed mb-6 ${service.isActive ? "text-blue-100" : "text-slate-400"}`}
                    >
                      {service.description}
                    </p>

                    <div
                      className={`mt-auto w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-all duration-300 ${service.isActive
                        ? "border-white bg-white text-[#1d4ed8]"
                        : "border-blue-200 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white group-hover:border-[#1d4ed8]"
                        }`}
                    >
                      <FaArrowRight className="text-[10px]" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>

        {/* 3. FEATURED PROPERTIES SECTION */}
        <section className="bg-[#f2f6fd] rounded-3xl p-6 sm:p-10 border border-slate-100 space-y-8">
          {/* Header */}
          <div className="relative flex flex-col items-center text-center space-y-1.5">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#1d4ed8] tracking-widest uppercase">
              <span>&rarr;</span>
              <span>{sectionData.featuredEyebrow}</span>
              <span>&larr;</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              {sectionData.featuredHeading}
            </h2>

            <p className="text-sm sm:text-base text-slate-500 max-w-md leading-relaxed">
              {sectionData.featuredDescription}
            </p>

            {/* Carousel Navigation */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:flex items-center space-x-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white text-slate-500 shadow-sm border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <FaChevronLeft className="text-xs" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#1d4ed8] text-white shadow-md flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaChevronRight className="text-xs" />
              </motion.button>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {properties.map((item) => (
              <Link key={item.id} href={`/property-listing/${item.slug}`} className="block">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col h-full group"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#1d4ed8] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-md shadow-sm uppercase z-10">
                      {sectionData.saleLabel}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-[#1d4ed8] text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm z-10">
                      {item.price}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h3>
                      {item.builder && (
                        <p className="text-[11px] font-semibold text-[#1d4ed8] mt-1">
                          {item.builder}
                        </p>
                      )}
                    </div>

                    <div className="border-t border-slate-100 pt-3 grid grid-cols-3 gap-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-md bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
                          <FaBed className="text-xs" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">
                            {item.bedrooms}
                          </div>
                          <div className="text-[10px] text-slate-400 -mt-0.5">
                            Bedrooms
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-md bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
                          <FaBath className="text-xs" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">
                            {item.bathrooms}
                          </div>
                          <div className="text-[10px] text-slate-400 -mt-0.5">
                            Bathrooms
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-md bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
                          <FaRulerCombined className="text-xs" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800">
                            {item.sqft}
                          </div>
                          <div className="text-[10px] text-slate-400 -mt-0.5">
                            Sq Ft
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Need Help Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-4 sm:px-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center space-x-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
                <FaPhoneAlt className="text-lg" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{sectionData.helpTitle}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {sectionData.helpText}
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1d4ed8] hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl flex items-center space-x-2 shadow-sm transition-all shrink-0"
            >
              <span>{sectionData.helpButton}</span>
              <FaArrowRight className="text-[10px]" />
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
