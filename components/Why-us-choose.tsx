import Image from "next/image";
import {
  Home,
  UserCheck,
  ShieldCheck,
  Award,
  Headphones,
} from "lucide-react";
import homeData from "@/data/homeData.json";
import type { AboutPageData } from "@/types/home";

const whyIcons = {
  home: Home,
  userCheck: UserCheck,
  shieldCheck: ShieldCheck,
  award: Award,
  headphones: Headphones,
};

export default function WhyUsChoose() {
  const sectionData: AboutPageData = homeData.aboutPage;

  return (
    <div className="mt-24 pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
        <div className="lg:col-span-5 relative flex flex-col h-full min-h-[500px] lg:min-h-[580px]">
          <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-md border border-gray-100 bg-gray-50">
            <Image
              src={sectionData.whyImage}
              alt={sectionData.whyImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />

            <div className="absolute top-6 left-6 grid grid-cols-4 gap-2 z-20">
              {[...Array(16)].map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 bg-[#1A43BF] rounded-full inline-block"
                />
              ))}
            </div>

            <div className="absolute bottom-6 left-6 bg-[#1A43BF] text-white px-6 py-5 rounded-[24px] shadow-xl z-20 min-w-[150px] text-center flex flex-col items-center">
              <Home className="w-6 h-6 mb-1.5 stroke-[1.8]" />
              <span className="text-2xl font-extrabold tracking-tight leading-none mb-1">
                {sectionData.whyStatValue}
              </span>
              <span className="text-[11px] font-medium opacity-90">
                {sectionData.whyStatLabel}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between py-2">
          <div>
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A43BF] block mb-1">
                {sectionData.whyEyebrow}
              </span>
              <span className="w-8 h-[2px] bg-[#1A43BF] block mb-3" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132A] leading-tight tracking-tight mb-3">
              {sectionData.whyHeading} <br />
              <span className="text-[#1A43BF]">{sectionData.whyHeadingHighlight}</span>
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              {sectionData.whyDescription}
            </p>
          </div>

          <div className="space-y-4">
            {sectionData.whyFeatures.map((feature, index) => {
              const Icon =
                whyIcons[feature.iconName as keyof typeof whyIcons] ?? Home;
              const isLast = index === sectionData.whyFeatures.length - 1;
              return (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 ${isLast ? "" : "pb-3 border-b border-gray-100"}`}
                >
                  <div className="w-11 h-11 bg-[#EEF2FF] rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#1A43BF] stroke-[1.8]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0B132A] mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
