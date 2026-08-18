"use client";

import { site } from "@/data";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalendarAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import PageBanner from "@/components/common/PageBanner";

export default function TermsAndConditionsPage() {
  const sectionData = site.termsPage;
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner />

      <div className="page-container pt-10 space-y-10">
        {/* WHITE DOCUMENT CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-8"
        >
          {/* LAST UPDATED BADGE */}
          <div className="flex items-center space-x-2 text-xs text-slate-500 border-b border-slate-100 pb-4">
            <FaCalendarAlt className="text-blue-600 text-sm" />
            <span>
              Last Updated:{" "}
              <strong className="text-blue-600 font-semibold">
                {sectionData.lastUpdated}
              </strong>
            </span>
          </div>

          {/* INTRO PARAGRAPH */}
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            {sectionData.intro}
          </p>

          {/* TERMS SECTIONS LIST */}
          <div className="space-y-6">
            {sectionData.sections.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="space-y-1.5 pb-6 border-b border-slate-100 last:border-b-0 last:pb-0"
              >
                <h3 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* QUESTIONS BANNER (BLUE ACCENT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#f0f4ff] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-100/50"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-white text-blue-600 shadow-sm flex items-center justify-center shrink-0 border border-blue-100">
                <FaEnvelope className="text-base" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  {sectionData.ctaTitle}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {sectionData.ctaText}
                </p>
              </div>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#2563eb] hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all flex items-center space-x-2 shrink-0"
              >
                <span>{sectionData.ctaButton}</span>
                <FaArrowRight className="text-[10px]" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
