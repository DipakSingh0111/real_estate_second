"use client";

import Image from "next/image";
import {
  Home,
  UserCheck,
  ShieldCheck,
  Award,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import { site, SectionProps, AboutPageData } from "@/data";

const whyIcons = {
  home: Home,
  userCheck: UserCheck,
  shieldCheck: ShieldCheck,
  award: Award,
  headphones: Headphones,
};

export default function WhyUsChoose({ data: propData, className }: SectionProps<AboutPageData> = {}) {
  const sectionData = propData || site.aboutPage;

  return (
    <div className="mt-12 pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 relative flex flex-col h-full min-h-[500px] lg:min-h-[580px]"
        >
          <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-md border border-gray-100 bg-gray-50">
            <Image
              src={sectionData.whyImage}
              alt={sectionData.whyImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />

            <div className="absolute top-6 left-6 grid grid-cols-4 gap-2 z-20">
              {[...Array(16)].map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 bg-[#1A43BF] rounded-full inline-block"
                />
              ))}
            </div>

            <div className="absolute bottom-6 left-6 bg-[#1A43BF] text-white px-6 py-5 rounded-[24px] shadow-xl z-20 min-w-[150px] text-center flex flex-col items-center">
              <Home className="w-6 h-6 mb-1.5 stroke-[1.8]" />
              <span className="text-2xl font-extrabold tracking-tight leading-none mb-1">
                {sectionData.whyStatValue}
              </span>
              <span className="text-[11px] font-medium opacity-90">
                {sectionData.whyStatLabel}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-between py-2"
        >
          <div>
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A43BF] block mb-1">
                {sectionData.whyEyebrow}
              </span>
              <span className="w-8 h-[2px] bg-[#1A43BF] block mb-3" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132A] leading-tight tracking-tight mb-3">
              {sectionData.whyHeading} <br />
              <span className="text-[#1A43BF]">{sectionData.whyHeadingHighlight}</span>
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              {sectionData.whyDescription}
            </p>
          </div>

          <div className="space-y-6">
            {sectionData.whyFeatures.map((feature, index) => {
              const Icon =
                whyIcons[feature.iconName as keyof typeof whyIcons] ?? Home;
              const isLast = index === sectionData.whyFeatures.length - 1;
              return (
                <div
                  key={feature.title}
                  className={`flex items-start gap-5 ${isLast ? "" : "pb-5 border-b border-gray-200/60"
                    }`}
                >
                  <div
                    className="w-[52px] h-[58px] bg-[#EEF2FF] flex items-center justify-center shrink-0"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    <Icon className="w-[22px] h-[22px] text-[#1A43BF] stroke-[1.8]" />
                  </div>
                  <div className="flex-1 mt-0.5">
                    <h4 className="text-[15px] font-bold text-[#0B132A] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-[13px] leading-[1.6]">
                      {feature.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
