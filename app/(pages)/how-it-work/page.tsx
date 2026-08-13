"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Search,
  FileEdit,
  Handshake,
  FileCheck,
  Home,
  MessageSquare,
  Calendar,
  ShieldCheck,
  Key,
  Headphones,
  ArrowRight,
} from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
import homeData from "@/data/homeData.json";

// Icon mapping from string names to Lucide icons
const iconMap: Record<string, React.ComponentType<{ className: string }>> = {
  search: Search,
  "file-edit": FileEdit,
  handshake: Handshake,
  "file-check": FileCheck,
  home: Home,
  "message-square": MessageSquare,
  calendar: Calendar,
  "shield-check": ShieldCheck,
  key: Key,
  headphones: Headphones,
};

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  const { howItWork, pageBanners } = homeData;
  const pageBannerData = pageBanners["how-it-work"];

  // Get the icon component for a given icon name
  const getIcon = (iconName: string, sizeClass: string) => {
    const IconComponent = iconMap[iconName] || Search;
    return <IconComponent className={sizeClass} />;
  };

  return (
    <div className="w-full bg-white font-sans text-gray-800 overflow-hidden">
      {/* Page Banner with Breadcrumb */}
      <PageBanner data={pageBannerData} />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 2. Sub-Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-px w-8 bg-blue-500"></span>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
              {howItWork.eyebrow}
            </span>
            <span className="h-px w-8 bg-blue-500"></span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-3">
            {howItWork.heading}
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            {howItWork.description}
          </p>
        </motion.div>

        {/* 3. Steps Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative grid grid-cols-1 md:grid-cols-5 gap-6 mb-16"
        >
          {/* Connecting dashed line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] border-t-2 border-dashed border-blue-200 z-0" />

          {howItWork.steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Circular Badge */}
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 bg-blue-700 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow">
                  {step.number}
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 bg-white rounded-full border-2 border-blue-100 flex items-center justify-center shadow-md cursor-pointer text-blue-600"
                >
                  {getIcon(step.iconName, "w-8 h-8")}
                </motion.div>
              </div>

              {/* White Card */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm text-center flex flex-col justify-between items-center w-full min-h-55 hover:shadow-xl transition-shadow"
              >
                <div>
                  <div className="w-6 h-0.5 bg-blue-600 mx-auto mb-3"></div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Icon Tag */}
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  {getIcon(step.iconName, "w-5 h-5")}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. "Ready to get started?" Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-linear-to-r from-blue-50 via-indigo-50 to-white rounded-2xl p-6 md:p-8 mb-8 border border-blue-100 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-5 z-10 max-w-md">
            <motion.div
              whileHover={{ rotate: 15 }}
              className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md"
            >
              <Headphones className="w-7 h-7" />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Ready to get started?
              </h3>
              <p className="text-xs text-gray-500">
                Contact our real estate experts today and find the perfect
                property for you.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-lg flex items-center gap-2 shadow-sm transition"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Luxury House Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full md:w-1/2 h-48 md:h-56 rounded-xl overflow-hidden shadow-inner"
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-xl"
              style={{ backgroundImage: "url('/images/hero-banner.png')" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
