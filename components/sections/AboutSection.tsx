import Image from "next/image";
import { ArrowRight, Building2, Home, HandCoins } from "lucide-react";
import type { AboutSectionData } from "@/types/home";
import Link from "next/link";

type AboutSectionProps = { data: AboutSectionData };

const iconMap = {
  building: Building2,
  home: Home,
  shield: HandCoins,
} as const;

const AboutSection = ({ data }: AboutSectionProps) => {
  return (
    <section className="mt-10 bg-[#f0f2f5] py-8 font-sans lg:mt-16 lg:py-12">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-12 items-start animate-fade-in">
          {/* SECTION 1: TEXT & CTA */}
          <div
            className="md:col-span-4 flex flex-col justify-between px-4 md:px-0 animate-slide-in-left"
            style={{ animationDelay: "0.1s" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-orange-500 block"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0c2242]">
                  {data.badge}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0c2242] leading-[1.1] mb-4 sm:mb-6">
                {data.heading}
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm mb-8 sm:mb-10">
                {data.description}
              </p>
            </div>

            <Link
              href="/about"
              className="flex items-center cursor-pointer gap-4 bg-[#0a183d] hover:bg-[#122452] text-white font-bold text-xs uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-4 rounded transition-all shadow-md w-fit"
            >
              {data.buttonLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* SECTION 2: LARGE IMAGE CARD */}
          <div
            className="md:col-span-3 rounded-[3rem] overflow-hidden shadow-xl border-4 border-white h-64 sm:h-80 md:h-full relative animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src={data.imageUrl}
              alt={data.imageAlt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-slate-900/20 to-transparent"></div>
          </div>

          {/* SECTION 3: SERVICES GRID */}
          <div
            className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-slide-in-right"
            style={{ animationDelay: "0.3s" }}
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
                <div
                  key={index}
                  className="bg-white hover:bg-linear-to-br hover:from-blue-50 hover:to-orange-50 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between items-start w-full sm:max-w-xs animate-scale-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-full">
                    <div
                      className={`${iconBg} p-3 rounded-2xl inline-block mb-4 sm:mb-6`}
                    >
                      <Icon
                        className={`${iconColor} w-7 sm:w-8 h-7 sm:h-8`}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#0c2242] leading-tight mb-2">
                      {service.title}
                    </h3>

                    <div className="w-6 h-0.5 bg-orange-400 mb-3 sm:mb-4"></div>

                    <p className="text-xs text-gray-500 leading-relaxed mb-6 sm:mb-8">
                      {service.text}
                    </p>
                  </div>

                  <a
                    href="#"
                    className="flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 hover:gap-3 uppercase tracking-wide transition-all duration-300"
                  >
                    {service.buttonText}{" "}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
