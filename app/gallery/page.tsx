"use client";

import React from "react";
import { motion } from "framer-motion";

import PageBanner from "@/components/common/PageBanner";
import homeData from "@/data/homeData.json";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// 12 Gallery Images structured exactly like the 3-row grid layout in the image
const galleryImages: GalleryImage[] = [
  // Row 1 (3 Large Images)
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    alt: "Modern Luxury Villa with Pool",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    alt: "Spacious Living Room",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    alt: "Modern Apartment Exterior",
  },

  // Row 2 (4 Medium Images)
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    alt: "Modern Open Kitchen",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury House Entrance",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
    alt: "Cozy Bedroom Interior",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    alt: "Elegant Living Lounge",
  },

  // Row 3 (5 Small Images)
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    alt: "Suburban House Lawn",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
    alt: "Bright Dining Room",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury Bathroom Interior",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop",
    alt: "Villa Poolside View",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=800&auto=format&fit=crop",
    alt: "Dark Modern Kitchen Bar",
  },
];

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
            OUR GALLERY
          </span>
          <div className="w-8 h-0.5 bg-blue-600 mx-auto rounded-full" />
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight pt-1">
            Explore Our Beautiful Properties
          </h2>
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
            Browse through our handpicked collection of stunning properties and
            elegant interiors.
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
