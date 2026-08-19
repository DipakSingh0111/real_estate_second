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
              <Link
                href={`/property-listing/${propertySlug(item.title)}`}
                className="block h-full"
              >
                <div
                  className="group flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden rounded-t-[24px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        priority={true}
                      />
                      <div className="absolute bottom-3 right-3 rounded-xl bg-[#2A39CE] px-4 py-2 text-sm font-extrabold text-white shadow-lg">
                        {item.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-extrabold leading-snug text-[#0B132A] transition-colors group-hover:text-[#2A39CE]">
                        {item.title}
                      </h3>
                      <div className="mb-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2A39CE]">
                        <MapPin className="h-3.5 w-3.5 stroke-[3]" />
                        <span>{item.location}</span>
                      </div>
                      <div className="mb-6 h-px w-full bg-gray-100" />
                      <div className="grid grid-cols-3 gap-2 text-gray-500">
                        <div>
                          <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                            <Bed className="h-4 w-4 text-[#2A39CE]" />
                            <span>{data.propertyLabels.bedrooms}</span>
                          </div>
                          <p className="text-lg font-bold text-[#0B132A]">
                            {item.bedrooms}
                          </p>
                        </div>
                        <div>
                          <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                            <Bath className="h-4 w-4 text-[#2A39CE]" />
                            <span>{data.propertyLabels.bathrooms}</span>
                          </div>
                          <p className="text-lg font-bold text-[#0B132A]">
                            {item.bathrooms}
                          </p>
                        </div>
                        <div>
                          <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                            <Maximize2 className="h-4 w-4 text-[#2A39CE]" />
                            <span>{data.propertyLabels.squareFeet}</span>
                          </div>
                          <p className="text-lg font-bold text-[#0B132A]">
                            {item.sqft}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </section>
  );
}
