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
  "message-square": TbMessageCircle,
  "calendar-event": TbCalendarEvent,
  calendar: TbCalendarEvent,
  "shield-check": TbShieldCheck,
  key: TbKey,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
  const sectionData = site.PropertyProcess.variants.RealEstatePropertyProcess1;

  const getIcon = (iconName: string, sizeClass: string) => {
    const IconComponent = iconMap[iconName] || TbSearch;
    return <IconComponent className={sizeClass} />;
  };

  return (
    <div className="w-full bg-[#F8FAFC] font-sans text-gray-800 overflow-hidden">
      <PageBanner />

      <div className="page-container py-8 sm:py-12 lg:py-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#1A43BF]/30" />
            <span className="text-[11px] font-bold tracking-widest text-[#1A43BF] uppercase">
              {sectionData.pretitle}
            </span>
            <span className="h-px w-8 bg-[#1A43BF]/30" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold text-[#0B132A] tracking-tight leading-tight mb-3">
            {sectionData.title}
          </h2>
          <p className="text-[#4F5B73] text-[14px] sm:text-[15px] max-w-xl mx-auto leading-relaxed">
            {sectionData.desc}
          </p>
        </motion.div>

        {/* Steps Grid — 1 col mobile, 2 col tablet, 5 col desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-7 lg:gap-8 xl:gap-10 mb-10 sm:mb-14 lg:mb-20"
        >
          {sectionData.steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center w-full"
            >
              {/* Horizontal dotted connector + arrow (desktop) */}
              {index < sectionData.steps.length - 1 && (
                <div
                  className="pointer-events-none absolute top-10 left-[calc(50%+2.75rem)] right-[calc(-50%+2.75rem)] z-0 hidden items-center lg:flex"
                  aria-hidden
                >
                  <div
                    className="h-[2px] w-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #7B93E8 1.15px, transparent 1.2px)",
                      backgroundSize: "8px 2px",
                      backgroundRepeat: "repeat-x",
                      backgroundPosition: "center",
                    }}
                  />
                  <span className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 bg-[#F8FAFC] px-1.5">
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="#1A43BF"
                      aria-hidden
                    >
                      <path d="M1 1.5L8.5 6L1 10.5V1.5Z" />
                    </svg>
                  </span>
                </div>
              )}

              {/* Step number + icon circle */}
              <div className="relative z-10">
                <div className="absolute -top-2 -left-2 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-[#1A43BF] text-[10px] font-bold text-white">
                  {step.step}
                </div>
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-white text-[#1A43BF] shadow-[0_4px_20px_rgba(26,67,191,0.1)] sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20">
                  {getIcon(
                    step.iconName,
                    "w-8 h-8 lg:w-10 lg:h-10 stroke-[1.5]",
                  )}
                </div>
              </div>

              {/* Vertical dotted connector ending with solid blue dot */}
              <div
                className="relative z-0 my-2 flex flex-col items-center"
                aria-hidden
              >
                <div
                  className="h-5 w-[2px] sm:h-6"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #7B93E8 1.1px, transparent 1.15px)",
                    backgroundSize: "2px 7px",
                    backgroundRepeat: "repeat-y",
                    backgroundPosition: "center",
                  }}
                />
                <span className="mt-0.5 block h-1.5 w-1.5 rounded-full bg-[#1A43BF]" />
              </div>

              {/* Card */}
              <div className="mt-0 flex h-full w-full flex-col rounded-2xl border border-slate-100/80 bg-white p-4 text-left shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:p-5 lg:p-6">
                <div className="mb-3 h-[2px] w-5 bg-[#1A43BF]" />
                <h3 className="mb-1.5 text-[14px] font-bold text-[#0B132A] sm:text-[15px]">
                  {step.title}
                </h3>
                <p className="mb-4 flex-1 text-[12px] leading-[1.6] text-gray-500 sm:text-[13px]">
                  {step.desc}
                </p>
                <div className="mt-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F4FF] text-[#1A43BF] sm:h-11 sm:w-11">
                  {getIcon(
                    (step as any).bottomIconName || step.iconName,
                    "w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]",
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Card — fully responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#EEF3FF] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center min-h-[160px] sm:min-h-[180px]"
        >
          {/* House image — hidden on mobile, shown md+ */}
          <div
            className="hidden sm:block absolute right-0 top-0 bottom-0 w-[50%] md:w-[55%] bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#EEF3FF] from-[15%] to-transparent to-[40%]" />
          </div>

          {/* Dot pattern */}
          <div
            className="absolute bottom-3 left-3 w-16 h-16 z-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle, #1A43BF 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-row items-center gap-4 sm:gap-6 px-5 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 w-full sm:max-w-[55%]">
            {/* Icon */}
            <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] lg:w-[68px] lg:h-[68px] rounded-full bg-[#1A43BF] flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
              <Headphones className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[1.5]" />
            </div>
            {/* Text + button */}
            <div>
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-extrabold text-[#0B132A] mb-1 leading-tight">
                {sectionData.ctaCard.title}
              </h3>
              <p className="text-[12px] sm:text-[13px] text-[#4F5B73] leading-relaxed mb-3 sm:mb-4 max-w-[240px] sm:max-w-[260px]">
                {sectionData.ctaCard.description}
              </p>
              <button className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#1A43BF] hover:bg-blue-800 text-white font-semibold text-[12px] sm:text-[13px] rounded-lg flex items-center gap-2 shadow-md transition-all duration-200">
                {sectionData.ctaCard.buttonText} <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

