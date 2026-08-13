import Image from "next/image";
import { ArrowRight, Building2, Home, HandCoins } from "lucide-react";
import type { AboutSectionData } from "@/types/home";

type AboutSectionProps = { data: AboutSectionData };

const iconMap = {
  building: Building2,
  home: Home,
  shield: HandCoins,
} as const;

const AboutSection = ({ data }: AboutSectionProps) => {
  return (
    <section className="mt-10 bg-[#f0f2f5] py-12 font-sans lg:mt-16">
      <div className="page-container grid grid-cols-1 items-stretch gap-6 md:grid-cols-12">
        {/* SECTION 1: TEXT & CTA */}
        <div className="md:col-span-4 flex flex-col justify-between pr-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-orange-500 block"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0c2242]">
                {data.badge}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0c2242] leading-[1.1] mb-6">
              {data.heading}
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-10">
              {data.description}
            </p>
          </div>

          <button className="flex items-center gap-4 bg-[#0a183d] hover:bg-[#122452] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded transition-all shadow-md w-fit mt-auto">
            {data.buttonLabel} <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* SECTION 2: LARGE IMAGE CARD */}
        <div className="md:col-span-3 rounded-[3rem] overflow-hidden shadow-xl border-4 border-white h-full relative">
          <Image
            src={data.imageUrl}
            alt={data.imageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent"></div>
        </div>

        {/* SECTION 3: SERVICES GRID */}
        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {data.services.map((service, index) => {
            const Icon =
              (iconMap as Record<string, typeof Building2>)[service.iconName] ||
              Building2;
            const iconColor = service.accent
              ? "text-orange-500"
              : "text-blue-700";
            const iconBg = service.accent ? "bg-orange-100" : "bg-blue-100";

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between items-start"
              >
                <div>
                  <div
                    className={`${iconBg} p-3 rounded-2xl inline-block mb-6`}
                  >
                    <Icon
                      className={`${iconColor} w-8 h-8`}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-[#0c2242] leading-tight mb-2">
                    {service.title}
                  </h3>

                  <div className="w-6 h-[2px] bg-orange-400 mb-4"></div>

                  <p className="text-xs text-gray-500 leading-relaxed mb-8">
                    {service.text}
                  </p>
                </div>

                <a
                  href="#"
                  className="flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 uppercase tracking-wide mt-auto"
                >
                  {service.buttonText} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
