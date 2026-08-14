"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHome,
  FaUserFriends,
  FaBuilding,
  FaBriefcase,
  FaIndustry,
  FaProjectDiagram,
  FaQuoteRight,
  FaAward,
  FaNewspaper,
  FaUserTie,
  FaPhoneAlt,
  FaHeadset,
  FaSitemap,
  FaArrowRight,
} from "react-icons/fa";
import homeData from "@/data/homeData.json";
import type { SitemapPageData } from "@/types/home";
import PageBanner from "@/components/common/PageBanner";

const sitemapIcons: Record<string, React.ReactNode> = {
  home: <FaHome className="text-red-500 text-base" />,
  userFriends: <FaUserFriends className="text-red-500 text-base" />,
  building: <FaBuilding className="text-red-500 text-base" />,
  briefcase: <FaBriefcase className="text-red-500 text-base" />,
  industry: <FaIndustry className="text-red-500 text-base" />,
  projectDiagram: <FaProjectDiagram className="text-red-500 text-base" />,
  quoteRight: <FaQuoteRight className="text-red-500 text-base" />,
  award: <FaAward className="text-red-500 text-base" />,
  newspaper: <FaNewspaper className="text-red-500 text-base" />,
  userTie: <FaUserTie className="text-red-500 text-base" />,
  phone: <FaPhoneAlt className="text-red-500 text-base" />,
  headset: <FaHeadset className="text-red-500 text-base" />,
};

export default function SitemapPage() {
  const sectionData: SitemapPageData = homeData.sitemapPage;
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners["site-map"]} />

      {/* MAIN CONTAINER */}
      <div className="page-container pt-10 space-y-12">
        {/* SECTION HEADER */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 mx-auto flex items-center justify-center">
            <FaSitemap className="text-xl" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {sectionData.heading}
          </h2>
          <div className="w-8 h-0.5 bg-red-500 mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 pt-1 leading-relaxed max-w-lg mx-auto">
            {sectionData.description}
          </p>
        </div>

        {/* SITEMAP GRID (3 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionData.sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] space-y-4"
            >
              {/* Card Header */}
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  {sitemapIcons[section.iconName]}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {section.title}
                </h3>
              </div>

              {/* Card Bullet Links */}
              <ul className="space-y-2 text-[11px] text-slate-500 font-medium">
                {section.links.map((link, idx) => (
                  <li key={idx} className="flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 group-hover:scale-125 transition-transform" />
                    <Link
                      href={link.href}
                      className="hover:text-red-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CAN'T FIND WHAT YOU'RE LOOKING FOR STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-red-50/50 rounded-3xl p-6 sm:p-8 border border-red-100 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-white text-red-500 shadow-sm flex items-center justify-center shrink-0 border border-red-100">
              <FaHeadset className="text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {sectionData.ctaTitle}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {sectionData.ctaText}
              </p>
            </div>
          </div>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e11d48] hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-md transition-all flex items-center space-x-2 shrink-0"
            >
              <span>{sectionData.ctaButton}</span>
              <FaArrowRight className="text-[10px]" />
            </motion.button>
          </Link>
        </motion.div>

        {/* BOTTOM SUPPORT BANNER */}
      </div>
    </div>
  );
}
