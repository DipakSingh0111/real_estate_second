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
      className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.16fr_0.84fr] lg:gap-[78px]">
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
          <p className="text-[18px] font-bold tracking-[-0.02em] text-[#1243c6]">
            {data.eyebrow}
          </p>
          <span className="mt-4 block h-[4px] w-[37px] rounded-full bg-[#1243c6]" />
          <h2 className="mt-7 text-[42px] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#071b47] sm:text-[50px] lg:text-[51px]">
            {data.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <span className="mt-7 block h-[4px] w-[37px] rounded-full bg-[#1243c6]" />
          <p className="mt-7 text-[16px] leading-[1.78] text-[#626262]">
            {data.description}
          </p>
          <div className="mt-9 flex items-center gap-6">
            <button
              aria-label={data.playButtonLabel}
              className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#1243c6] text-white shadow-[0_7px_14px_rgba(18,67,198,0.2)] transition-colors hover:bg-[#0d36a5]"
            >
              <Play className="ml-1 h-7 w-7 fill-white stroke-white" />
            </button>
            <a
              href={data.learnMoreLink}
              className="text-[17px] font-medium text-[#1243c6] underline decoration-1 underline-offset-4 transition-colors hover:text-[#0d36a5]"
            >
              {data.learnMoreLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
