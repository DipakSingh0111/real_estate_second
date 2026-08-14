"use client";

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
import homeData from "@/data/homeData.json";
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners["get-a-quotes"]} />

      <div className="page-container pt-10 space-y-10">
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
                Tell Us What You Need
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 pt-0.5 leading-relaxed">
                Please fill in the details below and our team will contact you
                with the best quote.
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
                    <option value="phone">Phone Call</option>
                    <option value="email">Email</option>
                    <option value="whatsapp">WhatsApp</option>
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
                    <option value="apartment">Apartment / Flat</option>
                    <option value="villa">Luxury Villa</option>
                    <option value="commercial">Commercial Office</option>
                    <option value="plot">Plot / Land</option>
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
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi NCR</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="pune">Pune</option>
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
                    <option value="under-50l">Under ₹50 Lakhs</option>
                    <option value="50l-1cr">₹50 Lakhs - ₹1 Crore</option>
                    <option value="1cr-3cr">₹1 Crore - ₹3 Crores</option>
                    <option value="above-3cr">Above ₹3 Crores</option>
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
                    <option value="end-use">Personal Use (Living)</option>
                    <option value="investment">Investment</option>
                    <option value="rental">Rental Income</option>
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
              <h3 className="text-lg font-bold text-slate-900">
                Why Get a Quote
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
                  <h4 className="text-xs font-bold text-slate-900">
                    Best Property Options
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    We provide you handpicked properties that match your needs.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-red-500 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaTag className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Competitive Pricing
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    Get the best deals and transparent pricing with no hidden
                    charges.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-red-500 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaUserCheck className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Expert Consultation
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    Our real estate experts guide you at every step of your
                    journey.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-red-500 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaShieldAlt className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Hassle-Free Process
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    We make the process smooth, simple and time-saving for you.
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-white text-red-500 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <FaClock className="text-base" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Save Time & Effort
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    Tell us your requirements and we'll do the search for you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE NEED HELP & EXPERT CONTACT STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          {/* Left: Building Image + Need Help (7 Cols) */}
          <div className="md:col-span-7 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:border-r border-slate-100 md:pr-6">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400&auto=format&fit=crop"
              alt="Building"
              className="w-full sm:w-32 h-24 rounded-2xl object-cover shrink-0"
            />
            <div className="space-y-1.5 w-full">
              <h4 className="text-sm font-bold text-slate-900">Need Help?</h4>
              <p className="text-[11px] text-slate-400">
                Our team is here to assist you with any questions you may have.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] font-bold text-slate-800">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-1.5 hover:text-red-500 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-[10px]">
                    <FaPhoneAlt />
                  </div>
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="mailto:info@reallow.com"
                  className="flex items-center space-x-1.5 hover:text-red-500 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-[10px]">
                    <FaEnvelope />
                  </div>
                  <span>info@reallow.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Talk to Our Expert Button (5 Cols) */}
          <div className="md:col-span-5 flex flex-col sm:flex-row items-center justify-between sm:pl-4 gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100">
                <FaHeadset className="text-xl" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Talk to Our Expert
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Mon – Sat (10:00 AM – 7:00 PM)
                </p>
              </div>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2.5 rounded-xl border border-red-200 bg-white text-red-600 font-bold text-[11px] flex items-center space-x-1.5 hover:bg-red-50 transition-all shrink-0"
              >
                <span>Contact Us Now</span>
                <FaArrowRight className="text-[9px]" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* BOTTOM SUPPORT BANNER */}
      </div>
    </div>
  );
}
