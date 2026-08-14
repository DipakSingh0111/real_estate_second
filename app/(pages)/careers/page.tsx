"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import PageBanner from "@/components/common/PageBanner";
import homeData from "@/data/homeData.json";
import type { CareersPageData } from "@/types/home";

const careerIcons: Record<string, React.ReactNode> = {
  building: <FaBuilding className="text-blue-600 text-lg" />,
  chartLine: <FaChartLine className="text-blue-600 text-lg" />,
  users: <FaUsers className="text-blue-600 text-lg" />,
  shield: <FaShieldAlt className="text-blue-600 text-lg" />,
};

export default function CareerPage() {
  const sectionData: CareersPageData = homeData.careersPage;
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners.careers} />

      <div className="page-container pt-10 space-y-12">
        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            {/* HERO CARD WITH SMOOTH FADE BLEND OVERLAY */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 min-h-[290px] bg-[#07132b] flex items-center"
            >
              {/* Background Image */}
              <img
                src={sectionData.heroImage}
                alt={sectionData.heroImageAlt}
                className="w-full h-full object-cover absolute inset-0 z-0 object-right"
              />

              {/* Smooth Dark Blue to Transparent Fade Layer */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#03112c] via-[#08224d]/95 via-45% to-transparent" />

              {/* Card Content */}
              <div className="relative z-20 w-full sm:w-[65%] lg:w-[58%] p-6 sm:p-8 flex flex-col justify-center space-y-3 text-white">
                {/* Dots Pattern Top-Left */}
                <div className="absolute top-4 left-4 grid grid-cols-4 gap-1 opacity-15 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
                </div>

                {/* Dots Pattern Top-Right (Blue Section) */}
                <div className="absolute top-4 right-8 grid grid-cols-4 gap-1 opacity-20 pointer-events-none hidden sm:grid">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
                </div>

                {/* White Circle Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#1d4ed8] shadow-md">
                  <FaHome className="text-2xl" />
                </div>

                {/* Title */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                    {sectionData.titleLine1}
                  </h2>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3b82f6] tracking-tight leading-tight">
                    {sectionData.titleLine2}
                  </h2>
                  <div className="w-10 h-1 bg-[#3b82f6] mt-2 rounded-full" />
                </div>

                {/* Subtext */}
                <p className="text-[11px] text-slate-300 leading-relaxed max-w-xs sm:max-w-sm pt-1">
                  {sectionData.description}
                </p>
              </div>
            </motion.div>

            {/* ACCORDION FEATURES LIST */}
            <div className="space-y-3.5">
              {sectionData.features.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center space-x-4 pr-3">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50/80 flex items-center justify-center shrink-0">
                        {careerIcons[item.iconName]}
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-blue-600 shrink-0 ml-2">
                      {openAccordion === item.id ? (
                        <FaMinus className="text-xs" />
                      ) : (
                        <FaPlus className="text-xs" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-[11px] text-slate-500 border-t border-slate-50 pt-3"
                      >
                        {item.details}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - CONTACT CARD (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-between space-y-6"
          >
            {/* Header */}
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FaEnvelope className="text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {sectionData.contactTitle}
                </h3>
                <div className="w-8 h-0.5 bg-blue-600 my-2 rounded-full" />
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {sectionData.contactText}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100" />

            {/* Contact Details */}
            <div className="space-y-5">
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <FaEnvelope className="text-xs" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Email
                  </span>
                  <a
                    href={`mailto:${sectionData.email}`}
                    className="text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    {sectionData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Phone
                  </span>
                  <a
                    href={sectionData.phoneHref}
                    className="text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    {sectionData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-xs" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Office Address
                  </span>
                  <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                    {sectionData.addressLines[0]}
                    <br />
                    {sectionData.addressLines[1]}
                    <br />
                    {sectionData.addressLines[2]}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={sectionData.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d4ed8] hover:bg-blue-700 text-white rounded-xl p-3.5 flex items-center justify-between text-xs font-bold shadow-md transition-all duration-300 group mt-4"
            >
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-base" />
                <span>Chat on WhatsApp</span>
              </div>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Bottom City Watermark Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none opacity-10 bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:8px_8px]" />
          </motion.div>
        </div>

        {/* BOTTOM SCROLL BUTTON & DOTS */}
        <div className="relative flex justify-between items-center pt-2">
          <div className="grid grid-cols-5 gap-1.5 opacity-30">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors ml-auto"
          >
            <FaArrowUp className="text-xs" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
