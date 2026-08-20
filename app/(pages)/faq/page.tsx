"use client";

import Image from "next/image";
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
  const sectionData = site.FAQ.variants.RealEstateFAQ1;
  const [openId, setOpenId] = useState<number | null>(0);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-hidden">
      <PageBanner />

      <div className="page-container pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
          {/* LEFT: FAQ CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  {sectionData.pretitle}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                {sectionData.title}{" "}
                <span className="text-blue-600">
                  {sectionData.titleHighlight}
                </span>
              </h2>

              <div className="w-12 h-1 bg-blue-600 mt-3 mb-3 sm:mt-4 sm:mb-4 rounded-full" />

              <p className="text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
                {sectionData.desc}
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {sectionData.faqItems.map((item, index) => {
                const isOpen = openId === index;
                return (
                  <motion.div
                    key={`${item.question}-${index}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className={`bg-white rounded-xl overflow-hidden transition-all duration-200 ${
                      isOpen
                        ? "border-l-4 border-l-blue-600 border border-slate-100 shadow-md"
                        : "border border-slate-100 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-3.5 sm:p-5 flex items-start sm:items-center justify-between text-left font-bold text-slate-800 text-sm sm:text-[15px] hover:text-blue-600 transition-colors gap-2"
                    >
                      <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0">
                        <span
                          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-colors mt-0.5 sm:mt-0 ${
                            isOpen
                              ? "bg-blue-600 text-white shadow-sm"
                              : "bg-blue-50 text-blue-600"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={3} />
                          ) : (
                            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={3} />
                          )}
                        </span>
                        <span className={`leading-snug ${isOpen ? "text-blue-700" : ""}`}>
                          {item.question}
                        </span>
                      </div>

                      <span className="shrink-0 ml-2 mt-1 sm:mt-0">
                        {isOpen ? (
                          <Minus
                            className="w-4 h-4 text-slate-400"
                            strokeWidth={2}
                          />
                        ) : (
                          <ChevronDown
                            className="w-4 h-4 text-slate-400"
                            strokeWidth={2}
                          />
                        )}
                      </span>
                    </button>

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
                          <div className="pl-12 sm:pl-[68px] pr-4 sm:pr-5 pb-4 sm:pb-5 text-slate-500 text-[13px] sm:text-sm leading-relaxed">
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

          {/* RIGHT: IMAGE + STATS */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-6 xl:col-span-5 lg:sticky lg:top-24 order-1 lg:order-2"
          >
            <div className="relative w-full min-h-[280px] sm:min-h-[380px] lg:min-h-[560px] rounded-2xl sm:rounded-[24px] overflow-hidden shadow-lg">
              {/* Decorative dots */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 grid grid-cols-4 gap-1.5 sm:gap-2 z-20">
                {[...Array(16)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 bg-blue-600 rounded-full inline-block"
                  />
                ))}
              </div>

              <Image
                src={sectionData.image}
                alt={sectionData.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
                priority
              />

              {/* Stats bar */}
              {sectionData.stats?.length > 0 && (
                <div className="absolute bottom-0 inset-x-0 z-20 bg-blue-600/80 backdrop-blur-md rounded-b-2xl sm:rounded-b-[24px] px-2 sm:px-4 py-4 sm:py-6 shadow-[0_8px_24px_rgba(37,99,235,0.35)]">
                  <div className="grid grid-cols-3 divide-x divide-white/30">
                    {sectionData.stats.map((stat) => {
                      const Icon =
                        faqStatIcons[
                          stat.iconName as keyof typeof faqStatIcons
                        ] ?? Home;
                      return (
                        <div
                          key={stat.value}
                          className="flex flex-col items-center text-center gap-1 sm:gap-1.5 px-1.5 sm:px-3"
                        >
                          <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-white/80 flex items-center justify-center text-white">
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                          </span>
                          <div className="text-sm sm:text-xl font-extrabold text-white leading-none">
                            {stat.value}
                          </div>
                          <div className="text-[9px] sm:text-xs text-white/90 font-medium leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
