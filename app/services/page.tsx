"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaHandHoldingUsd,
  FaFileContract,
  FaUserCog,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaPhoneAlt,
} from "react-icons/fa";
import homeData from "@/data/homeData.json";
import PageBanner from "@/components/common/PageBanner";
// ================= TYPES =================
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

interface PropertyItem {
  id: number;
  title: string;
  builder: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
}

// ================= DATA =================
const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Home Selling",
    description:
      "We help you sell your property at the right price with expert marketing, staging and negotiation support.",
    icon: <FaHome className="text-xl" />,
  },
  {
    id: 2,
    title: "Rent Collection",
    description:
      "Hassle-free rent collection with timely payments, transparent reporting and dedicated tenant support.",
    icon: <FaHandHoldingUsd className="text-xl" />,
  },
  {
    id: 3,
    title: "Escrow Services",
    description:
      "Secure and transparent escrow solutions that protect both buyers and sellers in every transaction.",
    icon: <FaFileContract className="text-xl" />,
  },
  {
    id: 4,
    title: "Service",
    description:
      "Tailored solutions to address your unique real estate needs—from planning to execution and beyond.",
    icon: <FaUserCog className="text-xl" />,
  },
  {
    id: 5,
    title: "Rent Collection",
    description:
      "Hassle-free rent collection with timely payments, transparent reporting and dedicated tenant support.",
    icon: <FaHandHoldingUsd className="text-xl" />,
  },
  {
    id: 6,
    title: "Home Selling",
    description:
      "We help you sell your property at the right price with expert marketing, staging and negotiation support.",
    icon: <FaHome className="text-xl" />,
    isActive: true, // Blue active card from design
  },
  {
    id: 7,
    title: "Service",
    description:
      "Tailored solutions to address your unique real estate needs—from planning to execution and beyond.",
    icon: <FaUserCog className="text-xl" />,
  },
  {
    id: 8,
    title: "Escrow Services",
    description:
      "Secure and transparent escrow solutions that protect both buyers and sellers in every transaction.",
    icon: <FaFileContract className="text-xl" />,
  },
];

const propertiesData: PropertyItem[] = [
  {
    id: 1,
    title: "Splitting Luxury Villa in Rego Park",
    builder: "KB Home",
    price: "$34,500",
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1150,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Splitting Modern Apartments",
    builder: "D. R. Horton",
    price: "$34,500",
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1150,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Splitting Modern Apartments View",
    builder: "Toll Brothers",
    price: "$34,500",
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1150,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  },
];

// ================= ANIMATION VARIANTS =================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function ServicesPage() {
  const [properties, setProperties] = useState(propertiesData);

  const handleNext = () => {
    setProperties((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setProperties((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ]);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners.services} />

      <div className="page-container pt-10 space-y-16">
        {/* 2. SERVICES SECTION */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-1.5"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="w-5 h-[2px] bg-[#1d4ed8]"></span>
              <span className="text-[11px] font-bold tracking-widest text-[#1d4ed8] uppercase">
                WHAT WE DO
              </span>
              <span className="w-5 h-[2px] bg-[#1d4ed8]"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Real Estate Services
            </h2>
            <p className="text-[11px] text-slate-500 max-w-lg mx-auto">
              Professional solutions to help you buy, sell, rent, and manage
              properties with ease.
            </p>
          </motion.div>

          {/* 8 CARDS GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col items-center text-center relative group ${
                  service.isActive
                    ? "bg-[#1d4ed8] border-[#1d4ed8] text-white shadow-lg shadow-blue-500/20"
                    : "bg-white border-slate-100 text-slate-800 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.05)] hover:shadow-md"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    service.isActive
                      ? "bg-white/20 text-white"
                      : "bg-blue-50 text-[#1d4ed8]"
                  }`}
                >
                  {service.icon}
                </div>

                <h3
                  className={`text-sm font-bold mb-2 ${service.isActive ? "text-white" : "text-slate-900"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-[11px] leading-relaxed mb-6 ${service.isActive ? "text-blue-100" : "text-slate-400"}`}
                >
                  {service.description}
                </p>

                <div
                  className={`mt-auto w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-all duration-300 ${
                    service.isActive
                      ? "border-white bg-white text-[#1d4ed8]"
                      : "border-blue-200 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white group-hover:border-[#1d4ed8]"
                  }`}
                >
                  <FaArrowRight className="text-[10px]" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3. FEATURED PROPERTIES SECTION */}
        <section className="bg-[#f2f6fd] rounded-3xl p-6 sm:p-10 border border-slate-100 space-y-8">
          {/* Header */}
          <div className="relative flex flex-col items-center text-center space-y-1.5">
            <div className="flex items-center space-x-2 text-[11px] font-bold text-[#1d4ed8] tracking-widest uppercase">
              <span>&rarr;</span>
              <span>FEATURED PROPERTIES</span>
              <span>&larr;</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Top Deals Of The Week
            </h2>

            <p className="text-[12px] text-slate-500 max-w-md leading-relaxed">
              Handpicked properties with great locations and unbeatable value.
              <br className="hidden sm:inline" />
              Find your perfect place to call home.
            </p>

            {/* Carousel Navigation */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:flex items-center space-x-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white text-slate-500 shadow-sm border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <FaChevronLeft className="text-xs" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#1d4ed8] text-white shadow-md flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaChevronRight className="text-xs" />
              </motion.button>
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {properties.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#1d4ed8] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-md shadow-sm uppercase">
                    FOR SALE
                  </span>
                  <span className="absolute bottom-3 right-3 bg-[#1d4ed8] text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                    {item.price}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#1d4ed8] mt-1">
                      {item.builder}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-3 grid grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-md bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
                        <FaBed className="text-xs" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          {item.bedrooms}
                        </div>
                        <div className="text-[10px] text-slate-400 -mt-0.5">
                          Bedrooms
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-md bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
                        <FaBath className="text-xs" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          {item.bathrooms}
                        </div>
                        <div className="text-[10px] text-slate-400 -mt-0.5">
                          Bathrooms
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-md bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
                        <FaRulerCombined className="text-xs" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          {item.sqft}
                        </div>
                        <div className="text-[10px] text-slate-400 -mt-0.5">
                          Sq Ft
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Need Help Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-4 sm:px-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center space-x-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
                <FaPhoneAlt className="text-lg" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Need Help?</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Our real estate experts are here to help you find the right
                  solution.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1d4ed8] hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl flex items-center space-x-2 shadow-sm transition-all shrink-0"
            >
              <span>Contact Us Now</span>
              <FaArrowRight className="text-[10px]" />
            </motion.button>
          </motion.div>
          {/* 4. SUPPORT BANNER COMPONENT */}
        </section>
      </div>
    </div>
  );
}
