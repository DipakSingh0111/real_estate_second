"use client";

import Image from "next/image";
import { ArrowRight, Building2, Home, HandCoins, X } from "lucide-react";
import { motion } from "framer-motion";
import { site, SectionProps } from "@/data";
import Link from "next/link";

const iconMap = {
  building: Building2,
  home: Home,
  shield: HandCoins,
} as const;

const AboutSection = ({
  data: propData,
  services: propServices,
  className,
}: any) => {
  const data = propData || site.About.variants.RealEstateAbout1;
  const services =
    propServices ||
    site.ServicesOverview.variants.RealEstateServicesOverview1.items.slice(
      0,
      3,
    );

  return (
    <section className="bg-[#f0f2f5] section-y font-sans">
      <div className="page-container">
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:gap-6 lg:grid-cols-12">
          {/* SECTION 1: TEXT & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-between px-0 lg:col-span-3 xl:col-span-3"
          >
            <div>
              <div className="mb-3 sm:mb-4 flex items-center gap-3">
                <span className="block h-0.5 w-8 bg-orange-500"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0c2242]">
                  {data.pretitle}
                </span>
              </div>

              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-[#0c2242] sm:mb-6">
                {data.title}
              </h2>

              <p className="mb-6 sm:mb-8 max-w-sm text-sm sm:text-base leading-relaxed text-gray-500 sm:mb-10 text-justify">
                {data.desc}
              </p>
            </div>

            <Link
              href="/about"
              className="flex w-fit cursor-pointer items-center gap-4 rounded bg-[#0a183d] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#122452] sm:px-8 sm:py-4"
            >
              {(data.buttons && data.buttons[0]?.label) || "Explore More"}{" "}
              <ArrowRight className="h-4 w-4" />
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
              src={data.sideImage}
              alt={data.sideImageTitle}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent"></div>
          </motion.div>

          {/* SECTION  */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-3 xl:col-span-6 xl:gap-5"
          >
            {services.map((service: any, index: number) => {
              const Icon =
                (iconMap as Record<string, typeof Building2>)[
                  service.iconName
                ] || Building2;
              const iconColor =
                index === 1 ? "text-orange-500" : "text-blue-700";
              const iconBg = index === 1 ? "bg-orange-100" : "bg-blue-100";
              const slug = service.title.toLowerCase().replace(/ /g, "-");

              return (
                <Link
                  href={`/services/${slug}`}
                  key={index}
                  className="block h-full group/card cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-full w-full flex-col rounded-2xl bg-white p-4 text-left shadow-md transition-colors duration-300 hover:bg-gradient-to-br hover:from-blue-50/70 hover:to-orange-50/70 hover:shadow-xl sm:p-5 lg:min-h-[300px] lg:justify-between lg:p-6"
                  >
                    <div className="w-full">
                      <div className="mb-3 flex justify-start sm:mb-4">
                        <div
                          className={`${iconBg} flex h-14 w-14 items-center justify-center rounded-xl sm:h-16 sm:w-16 sm:rounded-2xl lg:h-20 lg:w-20`}
                        >
                          <Icon
                            className={`${iconColor} h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8`}
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>

                      <div className="text-left">
                        <h3 className="mb-2 text-base font-bold leading-snug text-[#0c2242] sm:text-lg">
                          {service.title}
                        </h3>

                        <div className="mb-2.5 h-0.5 w-6 bg-orange-400 sm:mb-3"></div>

                        <p className="mb-4 text-xs leading-relaxed text-gray-500 sm:mb-5 sm:text-sm lg:mb-0">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <span className="mt-auto flex items-center gap-2 pt-1 text-xs font-bold uppercase tracking-wide text-blue-700 transition-all duration-300 group-hover/card:gap-3 group-hover/card:text-blue-900">
                      READ MORE{" "}
                      <ArrowRight className="h-4 w-4 transition-transform" />
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
