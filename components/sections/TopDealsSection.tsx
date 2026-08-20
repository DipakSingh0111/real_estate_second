"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bed,
  Bath,
  Maximize2,
} from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { site, SectionProps, TopDealsSectionData } from "@/data";
import { propertySlug } from "@/lib/property";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function TopDealsSection({ data: propData, className }: SectionProps<TopDealsSectionData> = {}) {
  const data = propData || site.topDealsSection;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="deals"
      className="bg-[#F8F9FC] py-10 lg:py-14 font-sans"
    >
      <div className="page-container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-[#F97316] inline-block"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                {data.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132A] tracking-tight leading-tight">
              {data.heading}
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-700 flex items-center justify-center shadow-sm hover:bg-gray-50 hover:shadow-md hover:-translate-x-1 transition-all active:scale-95 cursor-pointer disabled:opacity-40"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-700 flex items-center justify-center shadow-sm hover:bg-gray-50 hover:shadow-md hover:translate-x-1 transition-all active:scale-95 cursor-pointer disabled:opacity-40"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </motion.div>

        {/* Carousel Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onInit={(swiper) => {
            // Bind navigation buttons after init
            // @ts-expect-error Navigation params are assigned after init
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error Navigation params are assigned after init
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-4"
        >
          {[...data.deals, ...data.deals, ...data.deals].map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <PropertyCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </section>
  );
}
