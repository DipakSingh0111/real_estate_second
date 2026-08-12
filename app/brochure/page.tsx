"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import homeData from "@/data/homeData.json";
import PageBanner from "@/components/common/PageBanner";
interface BrochureItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  year: string;
  bgImage: string;
  pdfUrl: string;
}

const brochuresData: BrochureItem[] = [
  {
    id: 1,
    title: "REALLOW RESIDENCY",
    tag: "RESIDENCY",
    subtitle: "Luxury Living Redefined",
    description:
      "Premium residential apartments designed for comfortable living.",
    year: "2024 Brochure",
    bgImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    pdfUrl: "#",
  },
  {
    id: 2,
    title: "REALLOW COMMERCIAL HUB",
    tag: "COMMERCIAL HUB",
    subtitle: "Where Business Meets Growth",
    description: "Modern commercial spaces for our growing business community.",
    year: "2024 Brochure",
    bgImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    pdfUrl: "#",
  },
  {
    id: 3,
    title: "REALLOW VILLAS",
    tag: "VILLAS",
    subtitle: "Exclusive Villas For Exclusive You",
    description:
      "Spacious and elegant villas crafted for a luxurious lifestyle.",
    year: "2024 Brochure",
    bgImage:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
    pdfUrl: "#",
  },
  {
    id: 4,
    title: "INTERIOR SOLUTIONS",
    tag: "INTERIOR SOLUTIONS",
    subtitle: "Designing Spaces, Elevating Lives",
    description:
      "Innovative interior designs tailored to your personality and needs.",
    year: "2024 Brochure",
    bgImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    pdfUrl: "#",
  },
  {
    id: 5,
    title: "CONSTRUCTION SERVICES",
    tag: "CONSTRUCTION SERVICES",
    subtitle: "Building Dreams With Precision",
    description:
      "End-to-end construction solutions with quality and transparency.",
    year: "2024 Brochure",
    bgImage:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop",
    pdfUrl: "#",
  },
  {
    id: 6,
    title: "LAND DEVELOPMENT",
    tag: "LAND DEVELOPMENT",
    subtitle: "Building Better Communities",
    description: "Prime plots and integrated townships for a better tomorrow.",
    year: "2024 Brochure",
    bgImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    pdfUrl: "#",
  },
];

export default function BrochurePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners.brochure} />

      <div className="page-container pt-10 space-y-12">
        {/* SECTION TITLE */}
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl font-bold text-slate-900">Our Brochures</h2>
          <div className="w-8 h-0.5 bg-red-500 mx-auto rounded-full" />
          <p className="text-xs text-slate-400 pt-1">
            Select a brochure to view more details and download.
          </p>
        </div>

        {/* BROCHURES GRID (3 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brochuresData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* CARD TOP GRAPHIC BANNER */}
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className="w-full h-full object-cover absolute inset-0 z-0"
                  />

                  {/* Diagonal White/Red Split Mask */}
                  <div className="absolute inset-0 z-10 bg-white [clip-path:polygon(0_0,_65%_0,_45%_100%,_0%_100%)]" />

                  {/* Red Accent Line */}
                  <div className="absolute inset-0 z-15 bg-red-600 w-1.5 [clip-path:polygon(0_0,_100%_0,_100%_100%,_0%_100%)] left-[45%] top-0 bottom-0 -skew-x-[20deg]" />

                  {/* Left Text Content inside Mask */}
                  <div className="relative z-20 p-5 w-[60%] h-full flex flex-col justify-between text-slate-900">
                    <div>
                      {/* Red Dash Accent */}
                      <div className="w-3 h-0.5 bg-red-500 mb-1" />
                      <h3 className="text-xs font-black tracking-wider leading-tight text-slate-900">
                        RE<span className="text-red-600">ALLOW</span>
                      </h3>
                      <p className="text-[10px] font-bold tracking-tight text-slate-800 uppercase">
                        {item.tag}
                      </p>
                    </div>

                    <div className="my-auto">
                      <p className="text-[11px] font-bold text-slate-700 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold text-slate-400">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CARD LOWER DETAILS */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                      <FaFilePdf className="text-sm" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {item.title
                          .split(" ")
                          .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
                          .join(" ")}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD BOTTOM ACTION */}
              <div className="px-5 pb-5 pt-1">
                <a
                  href={item.pdfUrl}
                  download
                  className="w-full py-2.5 px-4 rounded-xl border border-red-200 bg-red-50/30 text-red-600 font-bold text-xs flex items-center justify-center space-x-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-sm"
                >
                  <FaDownload className="text-xs" />
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SUPPORT BANNER */}
      </div>
    </div>
  );
}
