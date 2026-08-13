"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalendarAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import homeData from "@/data/homeData.json";
import PageBanner from "@/components/common/PageBanner";
interface TermSection {
  id: number;
  title: string;
  content: string;
}

const termsData: TermSection[] = [
  {
    id: 1,
    title: "1. Use of Our Website",
    content:
      "You agree to use our website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the website.",
  },
  {
    id: 2,
    title: "2. Property Information",
    content:
      "We strive to provide accurate property information, but we do not warrant that all details, prices, or availability are error-free. Information is subject to change without notice.",
  },
  {
    id: 3,
    title: "3. User Responsibilities",
    content:
      "You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.",
  },
  {
    id: 4,
    title: "4. Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the content or practices of these websites.",
  },
  {
    id: 5,
    title: "5. Limitation of Liability",
    content:
      "We shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services.",
  },
  {
    id: 6,
    title: "6. Changes to Terms",
    content:
      "We reserve the right to update or modify these terms at any time. Changes will be effective immediately upon posting.",
  },
  {
    id: 7,
    title: "7. Governing Law",
    content:
      "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners["terms-and-conditions"]} />

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
                May 20, 2024
              </strong>
            </span>
          </div>

          {/* INTRO PARAGRAPH */}
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Welcome to our website. By accessing or using our website and
            services, you agree to be bound by the following terms and
            conditions.
          </p>

          {/* TERMS SECTIONS LIST */}
          <div className="space-y-6">
            {termsData.map((item, index) => (
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
                  Questions About These Terms?
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  If you have any questions, feel free to contact us.
                </p>
              </div>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#2563eb] hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all flex items-center space-x-2 shrink-0"
              >
                <span>Contact Us</span>
                <FaArrowRight className="text-[10px]" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* BOTTOM SUPPORT BANNER */}
      </div>
    </div>
  );
}
