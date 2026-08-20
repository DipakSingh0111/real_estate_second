"use client";

import { site } from "@/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  ChevronDown,
  Users,
  Star,
  Home,
  HelpCircle,
} from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
const faqStatIcons = { users: Users, star: Star, home: Home };

export default function FaqSection() {
  const sectionData = site.faqPage;
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-hidden">
      <PageBanner />

      {/* Main Content - Space reduced with pt-12 pb-4 */}
      <div className="page-container pt-12 pb-4 flex flex-col lg:flex-row gap-10">
        {/* Left Side: Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {sectionData.heading}{" "}
            <span className="text-blue-600 block">{sectionData.headingHighlight}</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-5 mb-5 rounded-full" />

          <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-md leading-relaxed">
            {sectionData.description}
          </p>

          {/* Accordion List */}
          <div className="space-y-3">
            {sectionData.items.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`bg-white rounded-lg border overflow-hidden transition-colors duration-200 ${isOpen
                      ? "border-l-4 border-l-blue-600 border-y-slate-100 border-r-slate-100 shadow-md"
                      : "border-slate-100 shadow-sm"
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full p-5 flex items-center justify-between text-left font-bold text-slate-800 text-[15px] hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${isOpen
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-blue-50 text-blue-600"
                          }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" strokeWidth={3} />
                        ) : (
                          <Plus className="w-4 h-4" strokeWidth={3} />
                        )}
                      </motion.span>
                      {item.question}
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 ml-4"
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-blue-600" strokeWidth={2} />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600" strokeWidth={2} />
                      )}
                    </motion.div>
                  </button>

                  {/* Smooth Expand/Collapse Content Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: {
                              duration: 0.3,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            },
                            opacity: { duration: 0.25, delay: 0.05 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: {
                              duration: 0.25,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            },
                            opacity: { duration: 0.15 },
                          },
                        }}
                      >
                        <div className="pl-[68px] pr-5 pb-5 text-slate-500 text-[13px] leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: Image Banner Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-[480px] shrink-0"
        >
          <div className="bg-white rounded-[24px] shadow-2xl overflow-hidden relative border border-slate-100 h-[600px]">
            {/* Dotted Grid Background */}
            <div className="absolute top-6 left-6 grid grid-cols-4 gap-3 z-10">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-700/80 rounded-full"
                ></div>
              ))}
            </div>

            {/* Main Image */}
            <img
              src={sectionData.sideImage}
              alt={sectionData.sideImageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Bottom Stats Footer with Glassmorphism */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#1839a8]/80 backdrop-blur-md pt-[56px] pb-8 flex text-center text-white z-10 divide-x divide-white/20">
              {sectionData.stats.map((stat) => {
                const Icon =
                  faqStatIcons[stat.iconName as keyof typeof faqStatIcons];
                return (
                  <div
                    key={stat.value}
                    className="relative flex flex-1 flex-col items-center justify-start h-full px-2"
                  >
                    {/* The overlapping circle wrapper for the bump effect */}
                    <div className="absolute -top-[94px] flex items-center justify-center w-[76px] h-[76px] rounded-full bg-[#1839a8]/80 backdrop-blur-md">
                      <div className="w-[52px] h-[52px] rounded-full bg-white text-[#1839a8] flex items-center justify-center shadow-lg shrink-0">
                        <Icon
                          className={`w-[22px] h-[22px]${stat.iconName === "star" ? " fill-[#1839a8]" : ""}`}
                        />
                      </div>
                    </div>
                    
                    <span className="font-extrabold text-[24px] leading-tight mb-2">
                      {stat.value}
                    </span>
                    <span className="text-[12px] text-blue-100 leading-[1.3] font-medium max-w-[90px]">
                      {stat.label.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
