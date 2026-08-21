"use client";

import { Binoculars, Target } from "lucide-react";
import { motion } from "framer-motion";
import { site, SectionProps, AboutPageData } from "@/data";

export default function VisionMission({ data: propData, className }: SectionProps<AboutPageData> = {}) {
  const sectionData = propData || site.AboutPage.variants.RealEstateAboutPage1;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center shrink-0">
            <Binoculars className="w-6 h-6 sm:w-8 sm:h-8 text-[#1A43BF] stroke-[1.5]" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0B132A] mb-1">{sectionData.mission.title}</h3>
            <span className="w-8 h-[3px] bg-[#1A43BF] block mt-1" />
          </div>
        </div>
        <p className="text-[#4F5B73] text-sm sm:text-base leading-[1.8] text-justify">
          {sectionData.mission.text}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center shrink-0">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#1A43BF] stroke-[1.5]" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0B132A] mb-1">{sectionData.philosophyTitle}</h3>
            <span className="w-8 h-[3px] bg-[#1A43BF] block mt-1" />
          </div>
        </div>
        <p className="text-[#4F5B73] text-sm sm:text-base leading-[1.8] text-justify">
          {sectionData.philosophyDesc}
        </p>
      </motion.div>
    </div>
  );
}
