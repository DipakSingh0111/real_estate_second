"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
  }, [selectedIndex, galleryImages.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
  }, [selectedIndex, galleryImages.length]);

  const handleClose = () => setSelectedIndex(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrevious, handleNext]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);
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
            {galleryImages.slice(0, 3).map((image, i) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                onClick={() => setSelectedIndex(i)}
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
            {galleryImages.slice(3, 7).map((image, i) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                onClick={() => setSelectedIndex(i + 3)}
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
            {galleryImages.slice(7, 12).map((image, i) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                onClick={() => setSelectedIndex(i + 7)}
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
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-[210]"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 sm:left-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-[210] hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-[210] hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Container */}
            <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center px-4 sm:px-20">
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Mobile Controls (Visible only on small screens) */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6 sm:hidden z-[210]">
              <button
                onClick={handlePrevious}
                className="p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
