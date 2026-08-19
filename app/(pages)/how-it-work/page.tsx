"use client";

import { site } from "@/data";
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  TbHomeSearch,
  TbFilePencil,
  TbFileCheck,
  TbHomeHeart,
  TbSearch,
  TbMessageCircle,
  TbCalendarEvent,
  TbShieldCheck,
  TbKey,
} from "react-icons/tb";
import { Headphones, ArrowRight, Handshake } from "lucide-react";
import PageBanner from "@/components/common/PageBanner";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "home-search": TbHomeSearch,
  "file-pencil": TbFilePencil,
  handshake: Handshake,
  "file-check": TbFileCheck,
  "home-heart": TbHomeHeart,
  search: TbSearch,
  "message-circle": TbMessageCircle,
  "calendar-event": TbCalendarEvent,
  "shield-check": TbShieldCheck,
  key: TbKey,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  const sectionData = site.howItWork;

  const getIcon = (iconName: string, sizeClass: string) => {
    const IconComponent = iconMap[iconName] || TbSearch;
    return <IconComponent className={sizeClass} />;
  };

  return (
    <div className="w-full bg-[#F8FAFC] font-sans text-gray-800 overflow-hidden">
      {/* Page Banner with Breadcrumb */}
      <PageBanner />

      <div className="page-container py-16">
        {/* 2. Sub-Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="h-px w-10 bg-[#1A43BF]/30"></span>
            <span className="text-[11px] font-bold tracking-widest text-[#1A43BF] uppercase">
              {sectionData.eyebrow}
            </span>
            <span className="h-px w-10 bg-[#1A43BF]/30"></span>
          </div>
          <h2 className="text-[34px] sm:text-[42px] font-extrabold text-[#0B132A] tracking-tight leading-tight mb-4">
            {sectionData.heading}
          </h2>
          <p className="text-[#4F5B73] text-[15px] max-w-xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>

        {/* 3. Steps Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-20"
        >
          {sectionData.steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center w-full"
            >
              {/* Horizontal line to next */}
              {index < sectionData.steps.length - 1 && (
                <div className="hidden md:flex absolute top-[40px] left-[50%] w-full items-center z-[-1]">
                  <div className="w-full border-t-[2px] border-dotted border-[#B4C6FC]" />
                  <div className="absolute left-1/2 -translate-x-1/2 text-[#1A43BF] bg-[#F8FAFC] px-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </div>
                </div>
              )}

              {/* Circle Badge */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 bg-[#1A43BF] text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center z-20">
                  {step.number}
                </div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(26,67,191,0.08)] text-[#1A43BF] z-10 relative border-2 border-white">
                  {getIcon(step.iconName, "w-10 h-10 stroke-[1.5]")}
                </div>
              </div>

              {/* Vertical Dotted Line */}
              <div className="hidden md:block h-6 border-l-[2px] border-dotted border-[#B4C6FC] my-2" />

              {/* White Card */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] text-left flex flex-col w-full h-full mt-3 md:mt-0">
                <div className="w-6 h-[2px] bg-[#1A43BF] mb-4" />
                <h3 className="font-bold text-[#0B132A] mb-2 text-[15px]">
                  {step.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-[1.6] mb-6 flex-1">
                  {step.desc}
                </p>

                <div className="w-9 h-9 rounded-full bg-[#F0F4FF] flex items-center justify-center text-[#1A43BF] mt-auto">
                  {getIcon((step as any).bottomIconName || step.iconName, "w-[20px] h-[20px] stroke-[1.5]")}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. "Ready to get started?" Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#F4F7FF] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center min-h-[220px]"
        >
          {/* Background image on the right */}
          <div
            className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] bg-cover bg-center z-0"
            style={{ backgroundImage: "url('/images/hero-banner.png')" }}
          >
            {/* Gradient mask to blend with left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FF] from-0% to-transparent to-[40%]" />
          </div>

          {/* Dot pattern */}
          <div
            className="absolute bottom-4 left-4 w-24 h-24 z-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle, #1A43BF 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-8 md:p-12 w-full">
            <div className="w-[72px] h-[72px] rounded-full bg-[#1A43BF] flex items-center justify-center text-white shrink-0 shadow-lg">
              <Headphones className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-[22px] font-extrabold text-[#0B132A] mb-1.5">
                {sectionData.ctaCard.title}
              </h3>
              <p className="text-[14px] text-[#4F5B73] leading-relaxed mb-5 max-w-xs">
                {sectionData.ctaCard.description}
              </p>
              <button
                className="px-6 py-2.5 bg-[#1A43BF] hover:bg-blue-800 text-white font-semibold text-[13px] rounded-lg flex items-center gap-2 shadow-md transition"
              >
                {sectionData.ctaCard.buttonText} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
