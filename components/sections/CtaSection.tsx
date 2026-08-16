"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CtaSectionData } from "@/types/home";

type CtaSectionProps = { data: CtaSectionData };

export default function CtaSection({ data }: CtaSectionProps) {
  return (
    <motion.section
      id="services"
      className="w-full bg-[#EAEAEA] py-10 lg:py-14 font-sans"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Main Banner Container */}
      <div className="page-container">
      <div className="relative w-full overflow-hidden rounded-4xl bg-[#03091E] p-5 text-white shadow-2xl sm:p-8 md:p-12 lg:p-16">
        {/* Background Waves Line Accent */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none">
            <path
              d="M-100,380 C150,300 350,420 600,280 C850,140 950,220 1100,180"
              stroke="#2563EB"
              strokeWidth="2"
            />
            <path
              d="M-100,390 C150,310 350,430 600,290 C850,150 950,230 1100,190"
              stroke="#3B82F6"
              strokeWidth="1.5"
            />
            <path
              d="M-100,400 C150,320 350,440 600,300 C850,160 950,240 1100,200"
              stroke="#F97316"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Side Text Content */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Subtitle & Dot Grid Container */}
            <div className="relative mb-4">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#F97316] inline-block"></span>
                <span className="text-[11px] font-bold tracking-widest text-[#F97316] uppercase">
                  {data.eyebrow}
                </span>
              </div>

              {/* Dot Grid Matrix */}
              <div className="absolute -top-3 left-96  grid-cols-8 gap-2 opacity-30 hidden sm:grid">
                {[...Array(32)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1 h-1 bg-[#F97316] rounded-full inline-block"
                  />
                ))}
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
              {data.headingLines.map((line, index) => (
                <span key={line} className="block">
                  {line}{" "}
                  {index === data.headingLines.length - 1 && (
                    <span className="text-[#F97316]">
                      {data.highlightedWord}
                    </span>
                  )}
                </span>
              ))}
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              {data.description}
            </p>

            {/* Primary Orange Button */}
            <div>
              <Link
                href={data.buttonLink}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold px-7 py-3.5 rounded-xl text-xs tracking-wider uppercase flex items-center gap-3 transition-colors duration-200 shadow-lg shadow-orange-500/20"
              >
                {data.buttonLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side Image Block with Orange Outline Frame */}
          <motion.div
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[480px] h-[360px] sm:h-[400px]">
              {/* Custom Asymmetric Orange Outer Border Frame */}
              <div className="absolute -inset-2 rounded-[45px] rounded-tl-[95px] border-2 border-[#F97316] shadow-[0_0_20px_rgba(249,115,22,0.4)] pointer-events-none transform translate-x-2 translate-y-2" />

              {/* Image Box */}
              <div className="relative w-full h-full rounded-[40px] rounded-tl-[90px] overflow-hidden z-10 border border-white/10">
                <Image
                  src={data.imageUrl}
                  alt={data.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating 25+ Experience Badge */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-8 bg-white text-gray-900 px-6 py-5 rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-gray-100 z-20 min-w-[125px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F97316] leading-none mb-1">
                  {data.stat.value}
                </span>
                <span className="w-6 h-[2px] bg-[#F97316] my-1 rounded-full inline-block" />
                <span className="text-[11px] font-bold text-gray-600 text-center leading-tight">
                  {data.stat.label}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </motion.section>
  );
}
