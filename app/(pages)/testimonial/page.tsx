"use client";

import { site } from "@/data";
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import PageBanner from "@/components/common/PageBanner";
export default function TestimonialsPage() {
  const sectionData = site.Testimonial.variants.RealEstateTestimonial1;
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-10 sm:pb-14">
      <PageBanner />

      {/* MAIN CONTAINER */}
      <div className="page-container pt-8 sm:pt-10 md:pt-12 space-y-6 sm:space-y-8 md:space-y-10">
        {/* 2. SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <span className="text-[11px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest">
            {sectionData.pretitle}
          </span>
          <div className="w-8 h-0.5 bg-blue-600 mx-auto rounded-full" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight pt-1">
            {sectionData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed px-1">
            {sectionData.desc}
          </p>
        </motion.div>

        {/* 3. TESTIMONIAL CARDS */}
        <div className="space-y-4 sm:space-y-6">
          {sectionData.testimonialItems.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-md transition-all duration-300 border border-slate-100"
            >
              <div
                className={`flex flex-col md:flex-row items-stretch gap-4 sm:gap-6 md:gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Image Box */}
                <div className="relative w-full md:w-[40%] h-52 sm:h-64 md:min-h-[300px] md:h-auto rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-cover object-top rounded-xl"
                  />
                </div>

                {/* Content Box */}
                <div className="w-full md:w-[60%] flex flex-col justify-center space-y-3 sm:space-y-3.5 py-1">
                  <FaQuoteLeft className="text-blue-600 text-2xl sm:text-3xl opacity-90" />

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.quote}
                  </p>

                  {/* Star Rating */}
                  <div className="flex space-x-1 text-blue-600 pt-0.5">
                    {[...Array(Math.round(Number(item.rating) || 5))].map((_, i) => (
                      <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* User Profile */}
                  <div className="border-l-2 border-blue-600 pl-3 pt-0.5">
                    <h4 className="text-base sm:text-lg font-bold text-slate-800 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
