"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import PageBanner from "@/components/common/PageBanner";
import homeData from "@/data/homeData.json";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  image: string;
  imagePosition: "left" | "right";
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Happy Homeowner",
    comment:
      "The team was incredibly helpful throughout my home buying journey. They understood my needs perfectly and helped me find the ideal home within my budget. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    imagePosition: "left",
  },
  {
    id: 2,
    name: "Carry Mint",
    role: "Happy Homeowner",
    comment:
      "Excellent service and great support! From property selection to final paperwork, everything was smooth and transparent. I truly appreciate their professional approach.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    imagePosition: "right",
  },
  {
    id: 3,
    name: "Sarah Albert",
    role: "Happy Homeowner",
    comment:
      "I had a wonderful experience working with them. They were patient, knowledgeable, and always available to answer my questions. I couldn't be happier with my new home!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    imagePosition: "left",
  },
  {
    id: 4,
    name: "Stevin Mark",
    role: "Happy Homeowner",
    comment:
      "Professional, trustworthy, and efficient! The entire process was hassle-free and exceeded my expectations. I will definitely recommend their services to my friends and family.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    imagePosition: "right",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners.testimonial} />

      {/* MAIN CONTAINER */}
      <div className="page-container pt-12 space-y-10">
        {/* 2. SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            TESTIMONIALS
          </span>
          <div className="w-8 h-0.5 bg-blue-600 mx-auto rounded-full" />
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight pt-1">
            What Our Clients Say
          </h2>
          <p className="text-xs text-slate-500 max-w-lg mx-auto">
            Real stories from real people who found their dream property with
            us.
          </p>
        </motion.div>

        {/* 3. TESTIMONIAL CARDS */}
        <div className="space-y-6">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-md transition-all duration-300 border border-slate-100"
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                  item.imagePosition === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Box */}
                <div className="w-full md:w-[46%] h-56 sm:h-64 rounded-xl overflow-hidden shrink-0">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Content Box */}
                <div className="w-full md:w-[54%] flex flex-col justify-center space-y-3.5">
                  <FaQuoteLeft className="text-blue-600 text-3xl opacity-90" />

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.comment}
                  </p>

                  {/* 5-Star Rating */}
                  <div className="flex space-x-1 text-blue-600 pt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* User Profile */}
                  <div className="border-l-2 border-blue-600 pl-3 pt-0.5">
                    <h4 className="text-sm font-bold text-slate-800 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. SUPPORT BANNER */}
      </div>
    </div>
  );
}
