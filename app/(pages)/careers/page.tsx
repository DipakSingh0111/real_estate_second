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
} from "react-icons/fa";
import PageBanner from "@/components/common/PageBanner";
import {
  User,
  Mail,
  Phone,
  Link as LinkIcon,
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
  const sectionData = site.CareerPage.variants.RealEstateCareerPage1;
  const titleWords = sectionData.title.trim().split(/\s+/);
  const titleHighlight = titleWords.pop() ?? "";
  const titleMain = titleWords.join(" ");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-10 sm:pb-14">
      <PageBanner />

      <div className="page-container pt-8 sm:pt-10 space-y-12">
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
                src={sectionData.sideImage}
                alt={sectionData.sideImageTitle}
                className="w-full h-full object-cover absolute inset-0 z-0 object-right"
              />

              {/* Smooth Dark Blue to Transparent Fade Layer */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#03112c] via-[#08224d]/95 via-45% to-transparent" />

              {/* Card Content */}
              <div className="relative z-20 w-full sm:w-[65%] lg:w-[58%] p-6 sm:p-8 flex flex-col justify-center space-y-3 text-white">
                <div className="absolute top-4 left-4 grid grid-cols-4 gap-1 opacity-15 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
                </div>

                <div className="absolute top-4 right-8 grid grid-cols-4 gap-1 opacity-20 pointer-events-none hidden sm:grid">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
                </div>

                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#1d4ed8] shadow-md">
                  <FaHome className="text-2xl" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                    {sectionData.pretitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mt-1">
                    {titleMain}
                  </h2>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3b82f6] tracking-tight leading-tight">
                    {titleHighlight}
                  </h2>
                  <div className="w-10 h-1 bg-[#3b82f6] mt-2 rounded-full" />
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xs sm:max-w-sm pt-1">
                  {sectionData.desc}
                </p>
              </div>
            </motion.div>

            {/* ACCORDION BENEFITS LIST */}
            <div className="space-y-3.5">
              {sectionData.benefits.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
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
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="text-blue-600 shrink-0 ml-2">
                      {openAccordion === index ? (
                        <FaMinus className="text-xs" />
                      ) : (
                        <FaPlus className="text-xs" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openAccordion === index && (
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
              className="bg-white rounded-[24px] p-8 lg:p-10 border border-slate-100 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#eef4ff] text-[#1d4ed8] flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-extrabold text-[#0a1b4d] leading-tight">
                      Interested in Joining<br />Our Team?
                    </h3>
                    <div className="w-10 h-0.5 bg-[#1d4ed8] mt-3" />
                  </div>
                </div>

                <p className="text-[13px] text-slate-500 font-medium leading-relaxed mt-6 mb-6">
                  {sectionData.desc}
                </p>

                <div className="border-t border-slate-100 mb-6" />

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#eef4ff] text-[#1d4ed8] flex items-center justify-center shrink-0">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-bold text-[#1d4ed8]">Email</span>
                      <a href={`mailto:${sectionData.email}`} className="text-[13px] font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                        {sectionData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#eef4ff] text-[#1d4ed8] flex items-center justify-center shrink-0">
                      <FaPhoneAlt className="text-lg" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-bold text-[#1d4ed8]">Phone</span>
                      <a href={sectionData.phoneHref} className="text-[13px] font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                        {sectionData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#eef4ff] text-[#1d4ed8] flex items-center justify-center shrink-0 mt-0.5">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-bold text-[#1d4ed8]">Office Address</span>
                      <div className="text-[13px] font-medium text-slate-600 leading-relaxed mt-1">
                        {sectionData.addressLines.map((line: string, i: number) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < sectionData.addressLines.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={sectionData.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#133ab8] hover:bg-[#0f2c90] text-white rounded-xl p-4 flex items-center justify-between text-[13.5px] font-bold shadow-[0_4px_12px_rgba(29,78,216,0.3)] transition-all duration-300 group mt-8"
                >
                  <div className="flex items-center space-x-3">
                    <FaWhatsapp className="text-xl" />
                    <span>Chat on WhatsApp</span>
                  </div>
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="absolute bottom-0 left-0 right-0 w-full z-0 opacity-80 pointer-events-none text-[#e8f0fe] pt-10">
                <svg viewBox="0 0 400 60" className="w-full h-auto fill-current" preserveAspectRatio="none">
                   <path d="M0,60 L0,30 L10,30 L10,25 L15,20 L20,25 L20,30 L30,30 L30,10 L45,10 L45,35 L60,35 L60,15 L70,10 L80,15 L80,35 L95,35 L95,40 L120,40 L120,20 L135,10 L150,20 L150,45 L170,45 L170,15 L190,15 L190,40 L210,40 L210,25 L225,25 L225,40 L240,40 L240,20 L260,20 L260,35 L280,35 L280,10 L300,10 L300,35 L320,35 L320,15 L340,15 L340,40 L360,40 L360,25 L380,25 L380,45 L400,45 L400,60 Z" />
                </svg>
              </div>
            </motion.div>

            {/* JOB APPLICATION FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Apply Now
                </h3>
                <div className="w-8 h-0.5 bg-blue-600 my-2 rounded-full" />
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Fill out the form below and attach your resume.
                </p>
              </div>

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
