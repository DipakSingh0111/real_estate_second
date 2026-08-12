"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaShoppingBag,
  FaIndustry,
  FaHospital,
  FaGraduationCap,
  FaHotel,
  FaArrowRight,
} from "react-icons/fa";
import homeData from "@/data/homeData.json";
import PageBanner from "@/components/common/PageBanner";
interface IndustryCard {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const industriesData: IndustryCard[] = [
  {
    id: 1,
    title: "Corporate & Office",
    description:
      "Modern workspaces designed for productivity, collaboration, and growth.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    icon: <FaBriefcase className="text-blue-600 text-lg" />,
  },
  {
    id: 2,
    title: "Retail & Commercial",
    description:
      "Spaces that attract, engage, and deliver exceptional customer experiences.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    icon: <FaShoppingBag className="text-blue-600 text-lg" />,
  },
  {
    id: 3,
    title: "Industrial & Warehousing",
    description:
      "Robust and efficient spaces built for operations and long-term performance.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    icon: <FaIndustry className="text-blue-600 text-lg" />,
  },
  {
    id: 4,
    title: "Healthcare",
    description:
      "Functional and compliant spaces that support better care and healthier communities.",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop",
    icon: <FaHospital className="text-blue-600 text-lg" />,
  },
  {
    id: 5,
    title: "Education",
    description:
      "Learning environments that inspire curiosity, collaboration, and long-term success.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
    icon: <FaGraduationCap className="text-blue-600 text-lg" />,
  },
  {
    id: 6,
    title: "Hospitality & Leisure",
    description:
      "Welcoming spaces that create memorable experiences for guests and communities.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    icon: <FaHotel className="text-blue-600 text-lg" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function IndustryWeServePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners["industries-we-serve"]} />

      <div className="page-container pt-12 space-y-10">
        {/* 2. SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Solutions for Every Industry
          </h2>
          <div className="w-8 h-0.5 bg-blue-600 mx-auto rounded-full" />
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
            From commercial spaces to specialized facilities, we create real
            estate that supports your goals today and grows with you tomorrow.
          </p>
        </motion.div>

        {/* 3. INDUSTRY CARDS GRID (3 COLUMNS) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {industriesData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06)] hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Section with Overlapping Floating Badge */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Round Icon Badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-blue-50 border-2 border-white shadow-md flex items-center justify-center z-10">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="pt-8 pb-6 px-6 text-center space-y-2 flex-1 flex flex-col justify-start">
                <h3 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. CALL TO ACTION BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50/70 border border-blue-100/80 rounded-2xl p-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-4 text-center sm:text-left">
            {/* Building Icon Graphic */}
            <div className="hidden sm:flex shrink-0 text-blue-500 opacity-80">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Have a project in mind?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Let's build the right solution for your industry.
              </p>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg flex items-center space-x-2 shadow-sm transition-all duration-300 shrink-0">
            <span>Contact Us</span>
            <FaArrowRight className="text-[10px]" />
          </button>
        </motion.div>

        {/* 5. SUPPORT BANNER */}
      </div>
    </div>
  );
}
