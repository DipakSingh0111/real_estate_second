"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import type { BestRealEstateSectionData } from "@/types/home";

type BestRealEstateSectionProps = { data: BestRealEstateSectionData };

export default function BestRealEstateSection({
  data,
}: BestRealEstateSectionProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = data.images[activeImageIndex];

  return (
    <section
      id="featured-property"
      className="bg-white py-14 lg:py-20"
    >
      <div className="page-container grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.16fr_0.84fr] lg:gap-[78px]">
        <div className="relative pb-10 pl-9 pt-3 sm:pl-12">
          <div className="pointer-events-none absolute -left-1 top-7 z-20 grid grid-cols-4 gap-x-[19px] gap-y-[17px]">
            {Array.from({ length: 16 }, (_, index) => (
              <span
                key={index}
                className="h-[6px] w-[6px] rounded-full bg-[#1243c6] shadow-[0_1px_2px_rgba(18,67,198,0.15)]"
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-[16%] right-3 h-[80px] rounded-b-[52px] bg-[#e6e6e6] shadow-[0_30px_0_rgba(235,235,235,0.85)]" />

          <div className="relative z-10 aspect-[1.14/1] w-full overflow-hidden rounded-[50px] bg-slate-100 sm:rounded-[56px]">
            <Image
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="animate-in fade-in duration-500 object-cover"
              priority
            />
            <div className="absolute right-[22px] top-1/2 flex -translate-y-1/2 flex-col items-center gap-[10px]">
              {data.images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  aria-current={index === activeImageIndex}
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-[17px] w-[17px] rounded-full border-2 border-white transition-all ${index === activeImageIndex ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.25)]" : "bg-transparent hover:bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[490px] lg:pb-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-[#1243c6] inline-block"></span>
            <p className="text-xs font-bold uppercase tracking-wider text-[#1243c6]">
              {data.eyebrow}
            </p>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-[#071b47]">
            {data.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-4 w-10 h-0.5 bg-[#1243c6] rounded-full" />
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-500">
            {data.description}
          </p>
          <div className="mt-8 flex items-center gap-6">
            <button
              aria-label={data.playButtonLabel}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1243c6] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#0d36a5]"
            >
              <Play className="ml-1 h-6 w-6 fill-white stroke-white" />
            </button>
            <a
              href={data.learnMoreLink}
              className="text-sm font-semibold text-[#1243c6] underline decoration-1 underline-offset-4 transition-colors hover:text-[#0d36a5]"
            >
              {data.learnMoreLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
