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
    <section className="mt-10 bg-[#f0f2f5] py-10 font-sans lg:mt-16 lg:py-16">
      <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-stretch gap-8 md:gap-6 lg:grid-cols-12 animate-fade-in">
          {/* SECTION 1: TEXT & CTA */}
          <div
            className="flex flex-col justify-between px-2 sm:px-0 lg:col-span-3 xl:col-span-3 animate-slide-in-left"
            style={{ animationDelay: "0.1s" }}
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
          </div>

          {/* SECTION 2: LARGE IMAGE CARD */}
          <div
            className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-full overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl lg:col-span-3 xl:col-span-3 animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src={data.imageUrl}
              alt={data.imageAlt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent"></div>
          </div>

          {/* SECTION 3: SERVICES GRID WITH GENEROUS CARD WIDTH */}
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-3 xl:col-span-6 xl:gap-5 animate-slide-in-right"
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
                  className="flex w-full min-h-[360px] flex-col items-center justify-between rounded-2xl bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50/70 hover:to-orange-50/70 hover:shadow-xl sm:p-6 animate-scale-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
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

                  <a
                    href="#"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-700 transition-all duration-300 hover:gap-3 hover:text-blue-900"
                  >
                    {service.buttonText}{" "}
                    <ArrowRight className="h-4 w-4 transition-transform" />
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
