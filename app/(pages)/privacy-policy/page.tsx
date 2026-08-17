"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import homeData from "@/data/homeData.json";
import type { PrivacyPolicyPageData } from "@/types/home";

export default function TermsAndConditions() {
  const sectionData: PrivacyPolicyPageData = homeData.privacyPolicyPage;
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-hidden">
      <PageBanner data={homeData.pageBanners.privacyPolicy} />

      {/* Main Content Area */}
      <div className="page-container py-12">
        {/* Last Updated Date */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-6 pb-4 border-b border-slate-200"
        >
          <Calendar className="w-4 h-4 text-blue-600" />
          <span>
            Last Updated:{" "}
            <span className="text-blue-600">{sectionData.lastUpdated}</span>
          </span>
        </motion.div>

        {/* Introduction Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 text-sm leading-relaxed mb-8"
        >
          {sectionData.intro}
        </motion.p>

        {/* Terms Sections List */}
        <div className="space-y-6">
          {sectionData.sections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="pb-6 border-b border-slate-100 last:border-b-0"
            >
              <h2 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Questions Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-blue-50/60 border border-blue-100 rounded-xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-slate-900">
                {sectionData.ctaTitle}
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">
                {sectionData.ctaText}
              </p>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs md:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              {sectionData.ctaButton} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
