"use client";

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
import homeData from "@/data/property.json";
import type { FaqPageData } from "@/types/home";

const faqStatIcons = { users: Users, star: Star, home: Home };

export default function FaqSection() {
  const sectionData: FaqPageData = homeData.faqPage;
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-hidden">
      <PageBanner data={homeData.pageBanners.faq} />

      {/* Main Content - Space reduced with pt-12 pb-4 */}
      <div className="page-container pt-12 pb-4 flex flex-col lg:flex-row gap-10">
        {/* Left Side: Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" /> {sectionData.eyebrow}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {sectionData.heading}{" "}
            <span className="text-blue-600 block">{sectionData.headingHighlight}</span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base mt-3 mb-8 max-w-md leading-relaxed">
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
                    className="w-full p-4 flex items-center justify-between text-left font-bold text-slate-800 text-sm hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-600"
                          }`}
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </motion.span>
                      {item.question}
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-blue-600" />
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
                        <div className="px-5 pb-5 text-slate-500 text-xs leading-relaxed">
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
          className="w-full lg:w-[420px] shrink-0"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
            {/* Dotted Grid Background */}
            <div className="absolute top-5 left-5 grid grid-cols-4 gap-2 z-10 opacity-60">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                ></div>
              ))}
            </div>

            {/* Main Image */}
            <img
              src={sectionData.sideImage}
              alt={sectionData.sideImageAlt}
              className="w-full h-96 object-cover"
            />

            {/* Bottom Stats Footer */}
            <div className="bg-blue-700 py-5 px-3 grid grid-cols-3 gap-2 text-center text-white">
              {sectionData.stats.map((stat) => {
                const Icon =
                  faqStatIcons[stat.iconName as keyof typeof faqStatIcons];
                return (
                  <motion.div
                    key={stat.value}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-9 h-9 rounded-full bg-white text-blue-700 flex items-center justify-center mb-2">
                      <Icon
                        className={`w-4 h-4${stat.iconName === "star" ? " fill-blue-700" : ""}`}
                      />
                    </div>
                    <span className="font-extrabold text-lg leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-blue-200 mt-1 leading-tight">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
