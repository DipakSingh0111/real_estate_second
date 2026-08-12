"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import homeData from "@/data/homeData.json";

const termsData = [
  {
    id: "1",
    title: "1. Use of Our Website",
    content:
      "You agree to use our website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the website.",
  },
  {
    id: "2",
    title: "2. Property Information",
    content:
      "We strive to provide accurate property information, but we do not warrant that all details, prices, or availability are error-free. Information is subject to change without notice.",
  },
  {
    id: "3",
    title: "3. User Responsibilities",
    content:
      "You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.",
  },
  {
    id: "4",
    title: "4. Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the content or practices of these websites.",
  },
  {
    id: "5",
    title: "5. Limitation of Liability",
    content:
      "We shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services.",
  },
  {
    id: "6",
    title: "6. Changes to Terms",
    content:
      "We reserve the right to update or modify these terms at any time. Changes will be effective immediately upon posting.",
  },
  {
    id: "7",
    title: "7. Governing Law",
    content:
      "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate.",
  },
];

export default function TermsAndConditions() {
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
            Last Updated: <span className="text-blue-600">May 20, 2024</span>
          </span>
        </motion.div>

        {/* Introduction Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 text-sm leading-relaxed mb-8"
        >
          Welcome to our website. By accessing or using our website and
          services, you agree to be bound by the following terms and conditions.
        </motion.p>

        {/* Terms Sections List */}
        <div className="space-y-6">
          {termsData.map((item, index) => (
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
                Questions About These Terms?
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">
                If you have any questions, feel free to contact us.
              </p>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs md:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Support Banner */}
    </div>
  );
}
