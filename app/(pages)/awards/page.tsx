"use client";

import React from "react";
import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";
import PageBanner from "@/components/common/PageBanner";
interface AwardItem {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  icon: string;
}

const awardsData: AwardItem[] = [
  // Row 1
  {
    id: 1,
    year: "2024",
    title: "Real Estate Excellence Awards",
    subtitle: "Excellence in Residential Development",
    icon: "🏆",
  },
  {
    id: 2,
    year: "2024",
    title: "Asia Property Awards",
    subtitle: "Best Commercial Development",
    icon: "🗿",
  },
  {
    id: 3,
    year: "2023",
    title: "Business Leadership Award",
    subtitle: "Outstanding Leadership in Real Estate",
    icon: "⭐",
  },
  {
    id: 4,
    year: "2023",
    title: "National Quality Excellence Award",
    subtitle: "For Quality Construction and Innovation",
    icon: "🥇",
  },
  {
    id: 5,
    year: "2023",
    title: "Customer Satisfaction Award",
    subtitle: "Highest Customer Satisfaction in Real Estate",
    icon: "🏅",
  },

  // Row 2
  {
    id: 6,
    year: "2022",
    title: "Top Developers Award",
    subtitle: "Recognized Among Top Real Estate Developers",
    icon: "🌟",
  },
  {
    id: 7,
    year: "2022",
    title: "Industry Innovation Award",
    subtitle: "For Innovative Design and Technology",
    icon: "🛡️",
  },
  {
    id: 8,
    year: "2022",
    title: "Sustainable Building Award",
    subtitle: "For Commitment to Sustainability",
    icon: "💎",
  },
  {
    id: 9,
    year: "2021",
    title: "Best Luxury Project Award",
    subtitle: "For Excellence in Luxury Residential Projects",
    icon: "👑",
  },
  {
    id: 10,
    year: "2021",
    title: "Trusted Brand Award",
    subtitle: "Most Trusted Real Estate Brand",
    icon: "📜",
  },

  // Row 3
  {
    id: 11,
    year: "2020",
    title: "Emerging Developer Award",
    subtitle: "For Fastest Growth and Market Impact",
    icon: "✨",
  },
  {
    id: 12,
    year: "2020",
    title: "Design Excellence Award",
    subtitle: "For Architectural Design Excellence",
    icon: "🔹",
  },
  {
    id: 13,
    year: "2019",
    title: "Excellence in Delivery Award",
    subtitle: "Timely Delivery with Highest Standards",
    icon: "🗽",
  },
  {
    id: 14,
    year: "2019",
    title: "Community Impact Award",
    subtitle: "For Contribution to Communities",
    icon: "🏛️",
  },
  {
    id: 15,
    year: "2018",
    title: "Rising Star Award",
    subtitle: "For Outstanding Performance and Potential",
    icon: "🌠",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners.awards} />

      <div className="page-container pt-12 space-y-10">
        {/* 2. SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Honors That Reflect Our Commitment
          </h2>
          <div className="w-8 h-0.5 bg-red-500 mx-auto rounded-full" />
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
            These awards are a testament to our dedication, innovation, and the
            trust our clients place in us.
          </p>
        </motion.div>

        {/* 3. AWARDS GRID (5 COLUMNS) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {awardsData.map((award) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-3"
            >
              {/* Trophy/Icon Container */}
              <div className="w-20 h-20 flex items-center justify-center text-4xl select-none pt-2">
                {award.icon}
              </div>

              {/* Year */}
              <span className="text-xs font-bold text-red-500 tracking-wider">
                {award.year}
              </span>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 leading-snug">
                  {award.title}
                </h3>
                <p className="text-[10px] text-slate-400 leading-tight">
                  {award.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. SUPPORT BANNER */}
      </div>
    </div>
  );
}
