"use client";

import { site } from "@/data";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SquarePen,
  User,
  Mail,
  Phone,
  MapPin,
  Send,
  Users,
  Home,
  Tag,
  UserCog,
  FileCheck,
  Clock,
  Headset,
} from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "",
    enquiryFor: "",
    propertyType: "",
    budget: "",
    location: "",
    message: "",
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
      setFormData((prev) => ({ ...prev, [value]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner />

      <div className="page-container pt-10 space-y-10">
        {/* TWO COLUMN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: ENQUIRY FORM (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-6"
          >
            {/* Form Header */}
            <div className="space-y-1">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                  <SquarePen className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {site.enquiryPage.formHeader.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 pt-1 leading-relaxed">
                {site.enquiryPage.formHeader.description}
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
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-[18px] h-[18px] stroke-[1.5]" />
                    <input
                      type="text"
                      name="fullName"
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
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-[18px] h-[18px] stroke-[1.5]" />
                    <input
                      type="email"
                      name="email"
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
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-[18px] h-[18px] stroke-[1.5]" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Preferred Contact Method
                  </label>
                  <select
                    name="contactMethod"
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 text-slate-600"
                  >
                    <option value="">Select an option</option>
                    {site.formOptions.contactMethod.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Enquiry For & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Enquiry For <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="enquiryFor"
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 text-slate-600"
                    required
                  >
                    <option value="">Select enquiry type</option>
                    {site.formOptions.enquiryFor.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 text-slate-600"
                  >
                    <option value="">Select property type</option>
                    {site.formOptions.propertyType.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Budget Range & Preferred Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 text-slate-600"
                  >
                    <option value="">Select your budget</option>
                    {site.formOptions.budget.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Preferred Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-[18px] h-[18px] stroke-[1.5]" />
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter city / locality"
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30"
                    />
                  </div>
                </div>
              </div>

              {/* Row 5: Message */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-700">
                  Your Message / Requirements{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Tell us more about your requirement..."
                  className="w-full p-3 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-slate-50/30 resize-none"
                  required
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  className="w-3.5 h-3.5 rounded text-red-500 focus:ring-red-500 border-slate-300 cursor-pointer"
                  required
                />
                <label
                  htmlFor="agreed"
                  className="text-[11px] text-slate-500 cursor-pointer"
                >
                  {site.formOptions.agreement.prefix}
                  <a
                    href={site.formOptions.agreement.privacyPolicyUrl}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    {site.formOptions.agreement.privacyPolicyText}
                  </a>
                  {site.formOptions.agreement.middleText}
                  <a
                    href={site.formOptions.agreement.termsUrl}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    {site.formOptions.agreement.termsText}
                  </a>
                  {site.formOptions.agreement.suffix}
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#e11d48] hover:bg-red-700 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all duration-300 mt-2"
              >
                <Send className="w-[18px] h-[18px] stroke-[1.5]" />
                <span>Submit Enquiry</span>
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-6 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 mx-auto flex items-center justify-center">
                <Users className="w-[28px] h-[28px] stroke-[1.5]" />
              </div>
              <h3 className="text-[28px] font-bold text-slate-900">
                {site.enquiryPage.whyEnquire.title}
              </h3>
              <div className="w-8 h-0.5 bg-red-500 mx-auto rounded-full" />
            </div>

            {/* List Features */}
            <div className="space-y-5">
              {/* Feature 1 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Home className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900">
                    {site.enquiryPage.whyEnquire.features[0].title}
                  </h4>
                  <p className="text-[13px] text-slate-400 mt-0.5 leading-relaxed">
                    {site.enquiryPage.whyEnquire.features[0].description}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Tag className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900">
                    {site.enquiryPage.whyEnquire.features[1].title}
                  </h4>
                  <p className="text-[13px] text-slate-400 mt-0.5 leading-relaxed">
                    {site.enquiryPage.whyEnquire.features[1].description}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <UserCog className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900">
                    {site.enquiryPage.whyEnquire.features[2].title}
                  </h4>
                  <p className="text-[13px] text-slate-400 mt-0.5 leading-relaxed">
                    {site.enquiryPage.whyEnquire.features[2].description}
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <FileCheck className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900">
                    {site.enquiryPage.whyEnquire.features[3].title}
                  </h4>
                  <p className="text-[13px] text-slate-400 mt-0.5 leading-relaxed">
                    {site.enquiryPage.whyEnquire.features[3].description}
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-[28px] h-[28px] stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900">
                    {site.enquiryPage.whyEnquire.features[4].title}
                  </h4>
                  <p className="text-[13px] text-slate-400 mt-0.5 leading-relaxed">
                    {site.enquiryPage.whyEnquire.features[4].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE QUESTIONS*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          {/* Left: Still*/}
          <div className="flex items-center space-x-4 sm:pr-6 md:border-r border-slate-100">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
              <Headset className="w-[28px] h-[28px] stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-[20px] font-bold text-slate-900">
                {site.enquiryPage.questions.title}
              </h4>
              <p className="text-[15px] text-slate-400">
                {site.enquiryPage.questions.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[15px] font-bold text-slate-800">
                <a
                  href={site.enquiryPage.questions.phoneHref}
                  className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                >
                  <Phone className="text-red-500 w-4 h-4 stroke-[1.5]" />
                  <span>{site.enquiryPage.questions.phone}</span>
                </a>
                <a
                  href={site.enquiryPage.questions.emailHref}
                  className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                >
                  <Mail className="text-red-500 w-4 h-4 stroke-[1.5]" />
                  <span>{site.enquiryPage.questions.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Office Hours */}
          <div className="flex items-center space-x-4 sm:pl-4">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
              <Clock className="w-[28px] h-[28px] stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-[18px] font-bold text-slate-900">
                {site.enquiryPage.officeHours.title}
              </h4>
              <p className="text-[15px] font-semibold text-slate-700 mt-0.5">
                {site.enquiryPage.officeHours.weekdays}
              </p>
              <p className="text-[15px] text-slate-400 mt-0.5">
                {site.enquiryPage.officeHours.sunday}
              </p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM SUPPORT BANNER */}
      </div>
    </div>
  );
}
