"use client";

import { site } from "@/data";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaHome,
  FaTag,
  FaUserCheck,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import PageBanner from "@/components/common/PageBanner";
export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "",
    propertyType: "",
    location: "",
    budget: "",
    purpose: "",
    requirements: "",
    agreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote Request Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-8">
      <PageBanner />

      <div className="page-container pt-8 sm:pt-10 pb-8">
        {/* TWO COLUMN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: QUOTE FORM (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-6"
          >
            {/* Form Header */}
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {site.GetQuotePage.variants.RealEstateGetQuotePage1.formHeader.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 pt-0.5 leading-relaxed">
                {site.GetQuotePage.variants.RealEstateGetQuotePage1.formHeader.description}
              </p>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 text-xs" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 text-xs" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Phone & Contact Method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaPhoneAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 text-xs" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Preferred Contact
                  </label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 text-slate-600"
                  >
                    <option value="">Select an option</option>
                    {site.FormOptions.variants.RealEstateFormOptions1.contactMethod.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Property Type & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Property Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 text-slate-600"
                    required
                  >
                    <option value="">Select property type</option>
                    {site.FormOptions.variants.RealEstateFormOptions1.propertyType.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Location / City <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 text-slate-600"
                    required
                  >
                    <option value="">Select location</option>
                    {site.FormOptions.variants.RealEstateFormOptions1.location.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Budget Range & Purpose */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 text-slate-600"
                  >
                    <option value="">Select budget range</option>
                    {site.FormOptions.variants.RealEstateFormOptions1.budget.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Purpose
                  </label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 text-slate-600"
                  >
                    <option value="">Select purpose</option>
                    {site.FormOptions.variants.RealEstateFormOptions1.purpose.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Requirements */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-700">
                  Requirements / More Details
                </label>
                <textarea
                  rows={4}
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements..."
                  className="w-full p-3 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="w-3.5 h-3.5 rounded text-red-500 focus:ring-red-500 border-slate-300 cursor-pointer"
                  required
                />
                <label
                  htmlFor="agreed"
                  className="text-[11px] text-slate-500 cursor-pointer"
                >
                  {site.FormOptions.variants.RealEstateFormOptions1.agreement.prefix}
                  <a
                    href={site.FormOptions.variants.RealEstateFormOptions1.agreement.privacyPolicyUrl}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    {site.FormOptions.variants.RealEstateFormOptions1.agreement.privacyPolicyText}
                  </a>
                  {site.FormOptions.variants.RealEstateFormOptions1.agreement.middleText}
                  <a
                    href={site.FormOptions.variants.RealEstateFormOptions1.agreement.termsUrl}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    {site.FormOptions.variants.RealEstateFormOptions1.agreement.termsText}
                  </a>
                  {site.FormOptions.variants.RealEstateFormOptions1.agreement.suffix}
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#d92323] hover:bg-red-700 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all duration-300 mt-2"
              >
                <FaPaperPlane className="text-xs" />
                <span>Get My Quote</span>
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN: WHY GET A QUOTE (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#fdf8f8] rounded-3xl p-6 sm:p-8 border border-red-50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] space-y-6 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.title}
              </h3>
              <div className="w-8 h-0.5 bg-red-500 rounded-full" />
            </div>

            {/* List Features */}
            <div className="space-y-5">
              {/* Feature 1 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-red-500 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaHome className="text-base" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.features[0].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.features[0].description}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-red-500 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaTag className="text-base" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.features[1].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.features[1].description}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-red-500 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaUserCheck className="text-base" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.features[2].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.features[2].description}
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-red-500 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaShieldAlt className="text-base" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.features[3].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.features[3].description}
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-red-500 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaClock className="text-base" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.features[4].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    {site.GetQuotePage.variants.RealEstateGetQuotePage1.whyGetQuote.features[4].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
