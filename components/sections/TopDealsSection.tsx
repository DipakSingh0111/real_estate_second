"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bed,
  Bath,
  Maximize2,
} from "lucide-react";
import type { TopDealsSectionData } from "@/types/home";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type TopDealsSectionProps = { data: TopDealsSectionData };

export default function TopDealsSection({ data }: TopDealsSectionProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="deals"
      className="bg-[#F8F9FC] px-4 py-14 font-sans md:px-12 lg:px-20 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F97316] inline-block"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                {data.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B132A] tracking-tight">
              {data.heading}
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-700 flex items-center justify-center shadow-sm hover:bg-gray-50 hover:shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-40"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-full bg-white border border-gray-100 text-gray-700 flex items-center justify-center shadow-sm hover:bg-gray-50 hover:shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-40"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
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
          className="pb-12"
        >
          {data.deals.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col justify-between h-full cursor-pointer"
              >
                {/* Image & Price Tag Container */}
                <div>
                  <div className="relative w-full h-56 overflow-hidden rounded-t-[24px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Price Tag Badge */}
                    <div className="absolute bottom-3 right-3 bg-[#2A39CE] text-white font-extrabold text-sm px-4 py-2 rounded-xl shadow-lg">
                      {item.price}
                    </div>
                  </div>

                  {/* Card Main Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-[#0B132A] mb-3 leading-snug group-hover:text-[#2A39CE] transition-colors">
                      {item.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-[#2A39CE] text-xs font-bold uppercase tracking-wider mb-6">
                      <MapPin className="w-3.5 h-3.5 stroke-[3]" />
                      <span>{item.location}</span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gray-100 mb-6" />

                    {/* Features (Bed, Bath, Sqft) */}
                    <div className="grid grid-cols-3 gap-2 text-gray-500">
                      {/* Bedrooms */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold mb-2">
                          <Bed className="w-4 h-4 text-[#2A39CE]" />
                          <span>{data.propertyLabels.bedrooms}</span>
                        </div>
                        <p className="text-lg font-bold text-[#0B132A]">
                          {item.bedrooms}
                        </p>
                      </div>

                      {/* Bathrooms */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold mb-2">
                          <Bath className="w-4 h-4 text-[#2A39CE]" />
                          <span>{data.propertyLabels.bathrooms}</span>
                        </div>
                        <p className="text-lg font-bold text-[#0B132A]">
                          {item.bathrooms}
                        </p>
                      </div>

                      {/* Square Feet */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold mb-2">
                          <Maximize2 className="w-4 h-4 text-[#2A39CE]" />
                          <span>{data.propertyLabels.squareFeet}</span>
                        </div>
                        <p className="text-lg font-bold text-[#0B132A]">
                          {item.sqft}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {[0, 1, 2].map((dotIndex) => (
            <span
              key={dotIndex}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex % 3 === dotIndex
                  ? "w-8 bg-[#2A39CE]"
                  : "w-2.5 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
