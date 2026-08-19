"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site, SectionProps, CtaSectionData } from "@/data";

export default function CtaSection({ data: propData, className }: SectionProps<CtaSectionData> = {}) {
  const data = propData || site.ctaSection;
  return (
    <motion.section
      id="services"
      className="relative w-full pt-10 pb-0 lg:pt-16 lg:pb-4 font-sans overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="page-container relative z-10">
        <div className="relative text-white bg-[#050b1a] rounded-[40px] sm:rounded-[60px] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Background Waves Line Accent */}
        <div className="absolute inset-0 pointer-events-none opacity-20 flex items-end justify-start">
          <svg className="w-full h-[60%] sm:h-full max-w-4xl" viewBox="0 0 1000 400" fill="none" preserveAspectRatio="none">
            <path d="M-100,380 C150,300 350,420 600,280 C850,140 950,220 1100,180" stroke="#2563EB" strokeWidth="1" />
            <path d="M-100,390 C150,310 350,430 600,290 C850,150 950,230 1100,190" stroke="#3B82F6" strokeWidth="0.5" />
            <path d="M-100,400 C150,320 350,440 600,300 C850,160 950,240 1100,200" stroke="#F97316" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Side Text Content */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Dot Grid Matrix (Top Right of Text area) */}
            <div className="absolute -top-4 right-10 sm:right-20 grid grid-cols-7 gap-2.5 opacity-50">
              {[...Array(28)].map((_, i) => (
                <span key={i} className="w-1 h-1 bg-[#F97316] rounded-full inline-block" />
              ))}
            </div>

            {/* Subtitle / Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[2px] bg-[#F97316] inline-block"></span>
              <span className="text-[13px] font-bold tracking-widest text-[#F97316] uppercase">
                {data.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.15] tracking-tight mb-6">
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
            <p className="text-slate-300 text-sm sm:text-base leading-loose max-w-lg mb-10 font-normal">
              {data.description}
            </p>

            {/* Primary Orange Button */}
            <div>
              <Link
                href={data.buttonLink}
                className="bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-3.5 rounded-lg text-sm tracking-wide uppercase inline-flex w-fit items-center gap-3 transition-colors duration-200"
              >
                {data.buttonLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side Image Block */}
          <motion.div
            className="lg:col-span-6 relative flex justify-center lg:justify-end mt-10 lg:mt-0 pr-4 pb-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[550px] aspect-[4/3] sm:aspect-[4/3]">
              {/* Custom Asymmetric Orange Outer Border Frame */}
              <div className="absolute inset-0 border-2 border-[#F97316] rounded-tl-[100px] rounded-br-[100px] rounded-tr-[30px] rounded-bl-[30px] pointer-events-none transform translate-x-4 translate-y-4" />

              {/* Image Box */}
              <div className="relative w-full h-full rounded-tl-[100px] rounded-br-[100px] rounded-tr-[30px] rounded-bl-[30px] overflow-hidden z-10 border-4 border-transparent shadow-[0_0_30px_rgba(0,0,0,0.5)]">
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
                className="absolute top-1/2 -translate-y-1/2 -left-8 sm:-left-12 bg-white text-gray-900 rounded-[24px] shadow-2xl flex flex-col items-center justify-center z-20 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              >
                <span className="text-4xl sm:text-[42px] font-bold text-[#F97316] leading-none mb-2">
                  {data.stat.value}
                </span>
                <span className="w-8 h-[2px] bg-[#F97316] my-2 inline-block rounded-full" />
                <span className="text-sm font-semibold text-slate-800 text-center leading-tight">
                  Years of<br />Experience
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
