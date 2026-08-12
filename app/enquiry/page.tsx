"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEdit,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUsers,
  FaHome,
  FaTag,
  FaUserCheck,
  FaFileAlt,
  FaClock,
  FaHeadset,
} from "react-icons/fa";
import homeData from "@/data/homeData.json";
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
      <PageBanner data={homeData.pageBanners.enquiry} />

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
                  <FaEdit className="text-lg" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Send Us Your Enquiry
                </h2>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Please provide your details below and we will get in touch with
                you.
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
                    <option value="phone">Phone Call</option>
                    <option value="email">Email</option>
                    <option value="whatsapp">WhatsApp</option>
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
                    <option value="buying">Buying Property</option>
                    <option value="selling">Selling Property</option>
                    <option value="renting">Renting Property</option>
                    <option value="consultation">General Consultation</option>
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
                    <option value="apartment">Apartment / Flat</option>
                    <option value="villa">Luxury Villa</option>
                    <option value="commercial">Commercial Office</option>
                    <option value="plot">Plot / Land</option>
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
                    <option value="under-50l">Under ₹50 Lakhs</option>
                    <option value="50l-1cr">₹50 Lakhs - ₹1 Crore</option>
                    <option value="1cr-3cr">₹1 Crore - ₹3 Crores</option>
                    <option value="above-3cr">Above ₹3 Crores</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700">
                    Preferred Location
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 text-xs" />
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
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Terms & Conditions
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#e11d48] hover:bg-red-700 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all duration-300 mt-2"
              >
                <FaPaperPlane className="text-xs" />
                <span>Submit Enquiry</span>
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN: WHY ENQUIRE WITH US? (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-6 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 mx-auto flex items-center justify-center">
                <FaUsers className="text-lg" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Why Enquire With Us?
              </h3>
              <div className="w-8 h-0.5 bg-red-500 mx-auto rounded-full" />
            </div>

            {/* List Features */}
            <div className="space-y-5">
              {/* Feature 1 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <FaHome className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Wide Range of Properties
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Access to the best residential and commercial properties.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <FaTag className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Best Deals & Prices
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    We ensure you get the most competitive prices.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <FaUserCheck className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Expert Consultation
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Get personalized advice from our real estate experts.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <FaFileAlt className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Hassle-Free Process
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    We make your property search smooth and stress-free.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <FaClock className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Timely Assistance
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Our team is always ready to assist you at every step.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE QUESTIONS & OFFICE HOURS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          {/* Left: Still Have Questions */}
          <div className="flex items-center space-x-4 sm:pr-6 md:border-r border-slate-100">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
              <FaHeadset className="text-xl" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-900">
                Still Have Questions?
              </h4>
              <p className="text-[10px] text-slate-400">
                Talk to our property experts today.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-bold text-slate-800">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                >
                  <FaPhoneAlt className="text-red-500 text-[10px]" />
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="mailto:info@realestate.com"
                  className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                >
                  <FaEnvelope className="text-red-500 text-[10px]" />
                  <span>info@realestate.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Office Hours */}
          <div className="flex items-center space-x-4 sm:pl-4">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
              <FaClock className="text-xl" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                Our Office Hours
              </h4>
              <p className="text-[11px] font-semibold text-slate-700 mt-0.5">
                Mon – Sat: 9:00 AM – 7:00 PM
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Sunday: By Appointment
              </p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM SUPPORT BANNER */}
      </div>
    </div>
  );
}
