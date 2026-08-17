"use client";

import Image from "next/image";
import { ArrowRight, Building2, Home, HandCoins, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { AboutSectionData, AboutService } from "@/types/home";
import { useState } from "react";
import Link from "next/link";

type AboutSectionProps = { data: AboutSectionData };

const iconMap = {
  building: Building2,
  home: Home,
  shield: HandCoins,
} as const;

const AboutSection = ({ data }: AboutSectionProps) => {
  const [selectedService, setSelectedService] = useState<AboutService | null>(null);

  return (
    <section className="bg-[#f0f2f5] py-10 lg:py-14 font-sans">
      <div className="page-container">
        <div className="grid grid-cols-1 items-stretch gap-8 md:gap-6 lg:grid-cols-12">
          {/* SECTION 1: TEXT & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-between px-2 sm:px-0 lg:col-span-3 xl:col-span-3"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="block h-0.5 w-8 bg-orange-500"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0c2242]">
                  {data.badge}
                </span>
              </div>

              <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-[#0c2242] sm:mb-6">
                {data.heading}
              </h2>

              <p className="mb-8 max-w-sm text-sm sm:text-base leading-relaxed text-gray-500 sm:mb-10">
                {data.description}
              </p>
            </div>

            <Link
              href="/about"
              className="flex w-fit cursor-pointer items-center gap-4 rounded bg-[#0a183d] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#122452] sm:px-8 sm:py-4"
            >
              {data.buttonLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* SECTION 2: LARGE IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl lg:col-span-3 xl:col-span-3"
          >
            <Image
              src={data.imageUrl}
              alt={data.imageAlt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent"></div>
          </motion.div>

          {/* SECTION 3: SERVICES GRID WITH GENEROUS CARD WIDTH */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-3 xl:col-span-6 xl:gap-5"
          >
            {data.services.map((service, index) => {
              const Icon =
                (iconMap as Record<string, typeof Building2>)[
                service.iconName
                ] || Building2;
              const iconColor = service.accent
                ? "text-orange-500"
                : "text-blue-700";
              const iconBg = service.accent ? "bg-orange-100" : "bg-blue-100";

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex w-full min-h-[360px] flex-col items-center justify-between rounded-2xl bg-white p-5 text-center shadow-md transition-colors duration-300 hover:bg-gradient-to-br hover:from-blue-50/70 hover:to-orange-50/70 hover:shadow-xl sm:p-6"
                >
                  <div className="w-full">
                    <div className="mb-4 flex justify-center sm:mb-6">
                      <div
                        className={`${iconBg} flex h-24 w-24 items-center justify-center rounded-2xl`}
                      >
                        <Icon
                          className={`${iconColor} h-8 w-8 sm:h-9 sm:w-9`}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <div className="text-left">
                      <h3 className="mb-2 text-base font-bold leading-snug text-[#0c2242] sm:text-lg">
                        {service.title}
                      </h3>

                      <div className="mb-3 h-0.5 w-6 bg-orange-400 sm:mb-4"></div>

                      <p className="mb-6 text-xs leading-relaxed text-gray-500 sm:mb-8 sm:text-sm">
                        {service.text}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => { e.preventDefault(); setSelectedService(service as AboutService); }}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-700 transition-all duration-300 hover:gap-3 hover:text-blue-900 cursor-pointer"
                  >
                    {service.buttonText}{" "}
                    <ArrowRight className="h-4 w-4 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B1A33]/40 p-4 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 shadow-[0_28px_60px_-28px_rgba(16,42,86,0.45)] sm:p-8"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="mb-4 text-2xl font-bold text-[#0c2242]">
                {selectedService.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                {selectedService.fullDescription || selectedService.text}
              </p>

              <button
                onClick={() => setSelectedService(null)}
                className="w-full rounded-xl bg-[#0a183d] py-3 text-sm font-bold text-white transition-colors hover:bg-[#122452]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
