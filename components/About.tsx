import React from "react";
import Image from "next/image";
import { Home } from "lucide-react";
import homeData from "@/data/homeData.json";
import type { AboutPageData } from "@/types/home";

export default function About() {
  const sectionData: AboutPageData = homeData.aboutPage;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-7 relative flex justify-start py-6">
        <div className="relative w-full max-w-170 h-105 sm:h-125">
          <div
            className="absolute inset-0 overflow-hidden shadow-2xl z-10"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          >
            <Image
              src={sectionData.mainImage}
              alt={sectionData.mainImageAlt}
              fill
              className="object-cover"
            />
          </div>

          <div
            className="absolute -left-4 sm:-left-6 top-1/4 w-35 sm:w-40 h-40 sm:h-45 bg-[#1A43BF] text-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-20"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          >
            <span className="text-2xl sm:text-3xl font-extrabold leading-none mb-1">
              {sectionData.badgeValue}
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-blue-100 leading-tight mb-2">
              {sectionData.badgeLabel.split(" ").slice(0, 2).join(" ")} <br />{" "}
              {sectionData.badgeLabel.split(" ").slice(2).join(" ")}
            </span>
            <span className="w-5 h-[1.5px] bg-blue-300 mb-2 inline-block" />
            <Home className="w-5 h-5 stroke-[1.8] text-white" />
          </div>

          <div
            className="absolute -right-2 sm:-right-4 bottom-6 w-[130px] sm:w-[150px] h-[140px] sm:h-[160px] shadow-2xl z-20 overflow-hidden border-2 border-white"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          >
            <Image
              src={sectionData.secondaryImage}
              alt={sectionData.secondaryImageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 lg:pl-10 flex flex-col justify-center">
        <div className="mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1A43BF] block mb-1">
            {sectionData.eyebrow}
          </span>
          <span className="w-8 h-[2px] bg-[#1A43BF] block mb-4" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132A] leading-tight mb-6">
          {sectionData.heading} <br />
          <span className="text-[#1A43BF]">{sectionData.headingHighlight}</span>
        </h2>

        <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
          {sectionData.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
