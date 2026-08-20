"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { site, SectionProps, TopDealsSectionData } from "@/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TopDealsSection({
  data: propData,
}: SectionProps<TopDealsSectionData> = {}) {
  const data = propData || site.Properties.variants.RealEstateProperties1;
  const featured =
    site.ServicesOverview.variants.RealEstateServicesOverview1.featured;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="deals" className="bg-[#F8F9FC] section-y font-sans">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-6 sm:mb-8 lg:mb-10 flex flex-col items-start text-left"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-block h-[3px] w-8 rounded-full bg-[#f97316]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#f97316]">
              {featured.eyebrow}
            </span>
          </div>

          <div className="flex w-full items-start sm:items-center justify-between gap-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-[#0B132A] pr-2">
              {featured.heading}
            </h2>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <button
                ref={prevRef}
                aria-label="Previous Slide"
                className="flex h-9 w-9 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-[#1e3a8a] shadow-sm transition-all hover:shadow-md active:scale-95"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
              </button>
              <button
                ref={nextRef}
                aria-label="Next Slide"
                className="flex h-9 w-9 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full bg-[#2563eb] text-white shadow-md transition-all hover:bg-blue-700 active:scale-95"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          <p className="mt-2 sm:mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            {featured.desc}
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          onInit={(swiper) => {
            // @ts-expect-error Navigation params are assigned after init
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error Navigation params are assigned after init
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-2 sm:pb-4"
        >
          {[...data.listings, ...data.listings].map((item, index) => (
            <SwiperSlide key={`${item.slug}-${index}`}>
              <PropertyCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
