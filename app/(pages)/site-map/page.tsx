"use client";

import { site } from "@/data";
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
  const sectionData = site.SitemapPage.variants.RealEstateSitemapLinks1;
  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans pb-8">
      <PageBanner />

      {/* MAIN CONTAINER */}
      <div className="page-container pt-8 sm:pt-10 space-y-12">
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
            {sectionData.desc}
          </p>
        </div>

        {/* SITEMAP GRID (3 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionData.groups.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] space-y-4"
            >
              {/* Card Header */}
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  {sitemapIcons[section.iconName]}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {section.title}
                </h3>
              </div>

              {/* Card Bullet Links */}
              <ul className="space-y-3 text-sm text-slate-600 font-medium pt-2">
                {section.links.map((link, idx) => (
                  <li key={idx} className="flex items-center space-x-3 group">
                    <span className="w-2 h-2 rounded-full bg-red-400 group-hover:scale-125 transition-transform shrink-0" />
                    <Link
                      href={link.href}
                      className="hover:text-red-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
