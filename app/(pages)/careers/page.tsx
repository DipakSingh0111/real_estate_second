"use client";

import { site } from "@/data";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import PageBanner from "@/components/common/PageBanner";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Link as LinkIcon,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const careerIcons: Record<string, React.ReactNode> = {
  building: <FaBuilding className="text-blue-600 text-lg" />,
  chartLine: <FaChartLine className="text-blue-600 text-lg" />,
  users: <FaUsers className="text-blue-600 text-lg" />,
  shield: <FaShieldAlt className="text-blue-600 text-lg" />,
};

export default function CareerPage() {
  const sectionData = site.careersPage;
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner />

      <div className="page-container pt-10 space-y-12">
        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-6">
            {/* HERO CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 min-h-[290px] bg-[#07132b] flex items-center"
            >
              {/* Background Image */}
              <img
                src={sectionData.heroImage}
                alt={sectionData.heroImageAlt}
                className="w-full h-full object-cover absolute inset-0 z-0 object-right"
              />

              {/* Smooth Dark Blue to Transparent Fade Layer */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#03112c] via-[#08224d]/95 via-45% to-transparent" />

              {/* Card Content */}
              <div className="relative z-20 w-full sm:w-[65%] lg:w-[58%] p-6 sm:p-8 flex flex-col justify-center space-y-3 text-white">
                {/* Dots Pattern Top-Left */}
                <div className="absolute top-4 left-4 grid grid-cols-4 gap-1 opacity-15 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
                </div>

                {/* Dots Pattern */}
                <div className="absolute top-4 right-8 grid grid-cols-4 gap-1 opacity-20 pointer-events-none hidden sm:grid">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
                </div>

                {/* White Circle Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#1d4ed8] shadow-md">
                  <FaHome className="text-2xl" />
                </div>

                {/* Title */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    {sectionData.titleLine1}
                  </h2>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3b82f6] tracking-tight leading-tight">
                    {sectionData.titleLine2}
                  </h2>
                  <div className="w-10 h-1 bg-[#3b82f6] mt-2 rounded-full" />
                </div>

                {/* Subtext */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xs sm:max-w-sm pt-1">
                  {sectionData.description}
                </p>
              </div>
            </motion.div>

            {/* ACCORDION FEATURES LIST */}
            <div className="space-y-3.5">
              {sectionData.features.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center space-x-4 pr-3">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50/80 flex items-center justify-center shrink-0">
                        {careerIcons[item.iconName]}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-tight">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-blue-600 shrink-0 ml-2">
                      {openAccordion === item.id ? (
                        <FaMinus className="text-xs" />
                      ) : (
                        <FaPlus className="text-xs" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-[11px] text-slate-500 border-t border-slate-50 pt-3"
                      >
                        {item.details}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          {/* RIGHT COLUMN  */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-between space-y-6"
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {sectionData.contactTitle}
                  </h3>
                  <div className="w-8 h-0.5 bg-blue-600 my-2 rounded-full" />
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {sectionData.contactText}
                  </p>
                </div>
              </div>
              <div className="border-t border-slate-100" />
              {/* Contact Details */}
            {/* Contact Details */}
            <div className="space-y-4 pt-2 pb-2 pl-4">
              {/* Address */}
              <div className="relative ml-4">
                <div className="bg-[#eef1f6] rounded-xl py-4 pr-4 pl-10 w-full min-h-[64px] flex items-center">
                  <p className="text-[13px] font-medium text-slate-700 leading-relaxed">
                    {sectionData.addressLines.map((line: string, i: number) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < sectionData.addressLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#274abc] text-white flex items-center justify-center shadow-sm">
                  <FaBuilding className="text-[18px]" />
                </div>
              </div>

              {/* Phone */}
              <div className="relative ml-4">
                <div className="bg-[#eef1f6] rounded-xl py-4 pr-4 pl-10 w-full min-h-[64px] flex items-center">
                  <a
                    href={sectionData.phoneHref}
                    className="text-[13px] font-medium text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {sectionData.phone}
                  </a>
                </div>
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#274abc] text-white flex items-center justify-center shadow-sm">
                  <FaPhoneAlt className="text-[16px]" />
                </div>
              </div>

              {/* Email */}
              <div className="relative ml-4">
                <div className="bg-[#eef1f6] rounded-xl py-4 pr-4 pl-10 w-full min-h-[64px] flex items-center">
                  <a
                    href={`mailto:${sectionData.email}`}
                    className="text-[13px] font-medium text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {sectionData.email}
                  </a>
                </div>
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#274abc] text-white flex items-center justify-center shadow-sm">
                  <FaEnvelope className="text-[16px]" />
                </div>
              </div>
            </div>  {/* WhatsApp Button */}
              <a
                href={sectionData.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1d4ed8] hover:bg-blue-700 text-white rounded-xl p-3.5 flex items-center justify-between text-xs font-bold shadow-md transition-all duration-300 group mt-4"
              >
                <div className="flex items-center space-x-2">
                  <FaWhatsapp className="text-base" />
                  <span>Chat on WhatsApp</span>
                </div>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </a>
              {/* Bottom City Watermark Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none opacity-10 bg-[radial-gradient(#1d4ed8_1px,transparent_1px)] [background-size:8px_8px]" />
            </motion.div>

            {/* JOB APPLICATION FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Apply Now
                </h3>
                <div className="w-8 h-0.5 bg-blue-600 my-2 rounded-full" />
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Fill out the form below and attach your resume.
                </p>
              </div>

              {/* Form */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center space-y-3 bg-blue-50/50 rounded-2xl border border-blue-100"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-1">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Application Submitted!</h3>
                  <p className="text-slate-500 text-[11px]">
                    We will review your application soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-blue-600 font-semibold text-[11px] hover:underline"
                  >
                    Submit another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-[15px] h-[15px] stroke-[2]" />
                      <input
                        type="text"
                        name="fullName"
                        placeholder="e.g. John Doe"
                        className="w-full pl-9 pr-3 py-2.5 text-[12px] rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-slate-50/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-[15px] h-[15px] stroke-[2]" />
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. john@example.com"
                        className="w-full pl-9 pr-3 py-2.5 text-[12px] rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-slate-50/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-[15px] h-[15px] stroke-[2]" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. +1 234 567 890"
                        className="w-full pl-9 pr-3 py-2.5 text-[12px] rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-slate-50/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-slate-700">
                      Resume File <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-[15px] h-[15px] stroke-[2]" />
                      <input
                        type="file"
                        name="resumeFile"
                        accept=".pdf,.doc,.docx"
                        className="w-full pl-9 pr-3 py-2 text-[12px] rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-slate-50/50 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-[10px] file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1d4ed8] hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-xl px-4 py-3 text-[13px] font-bold shadow-md transition-all duration-300 flex items-center justify-center space-x-2 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
