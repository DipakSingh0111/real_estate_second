"use client";

import { Binoculars, Target } from "lucide-react";
import { motion } from "framer-motion";
import { site, SectionProps, AboutPageData } from "@/data";

export default function VisionMission({ data: propData, className }: SectionProps<AboutPageData> = {}) {
  const sectionData = propData || site.aboutPage;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 sm:p-10 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center shrink-0">
            <Binoculars className="w-8 h-8 text-[#1A43BF] stroke-[1.5]" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B132A] mb-1">{sectionData.visionTitle}</h3>
            <span className="w-8 h-[3px] bg-[#1A43BF] block mt-1" />
          </div>
        </div>
        <p className="text-[#4F5B73] text-sm sm:text-base leading-[1.8]">
          {sectionData.visionText}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="bg-white p-8 sm:p-10 rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center shrink-0">
            <Target className="w-8 h-8 text-[#1A43BF] stroke-[1.5]" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B132A] mb-1">{sectionData.missionTitle}</h3>
            <span className="w-8 h-[3px] bg-[#1A43BF] block mt-1" />
          </div>
        </div>
        <p className="text-[#4F5B73] text-sm sm:text-base leading-[1.8]">
          {sectionData.missionText}
        </p>
      </motion.div>
    </div>
  );
}
