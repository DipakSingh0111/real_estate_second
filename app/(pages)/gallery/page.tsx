"use client";

import React from "react";
import { motion } from "framer-motion";

import PageBanner from "@/components/common/PageBanner";
import homeData from "@/data/homeData.json";
import type { GalleryPageData } from "@/types/home";

// Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function GalleryPage() {
  const sectionData: GalleryPageData = homeData.galleryPage;
  const galleryImages = sectionData.images;
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners.gallery} />

      {/* MAIN CONTAINER */}
      <div className="page-container pt-12 space-y-12">
        {/* 2. SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            {sectionData.eyebrow}
          </span>
          <div className="w-8 h-0.5 bg-blue-600 mx-auto rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight pt-1">
            {sectionData.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </motion.div>

        {/* 3. GALLERY GRID WITH MOTION */}
        <div className="space-y-4">
          {/* Row 1: 3 Columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {galleryImages.slice(0, 3).map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="overflow-hidden rounded-2xl shadow-sm border border-slate-100/80 group h-56 sm:h-64 cursor-pointer bg-slate-200"
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2: 4 Columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            {galleryImages.slice(3, 7).map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="overflow-hidden rounded-2xl shadow-sm border border-slate-100/80 group h-48 sm:h-52 cursor-pointer bg-slate-200"
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 3: 5 Columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {galleryImages.slice(7, 12).map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="overflow-hidden rounded-2xl shadow-sm border border-slate-100/80 group h-36 sm:h-44 cursor-pointer bg-slate-200"
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 4. SUPPORT BANNER COMPONENT */}
      </div>
    </div>
  );
}
