import Image from "next/image";
import { Phone, PhoneCall } from "lucide-react";
import { site, SectionProps, SupportBannerData } from "@/data";

export default function SupportBanner({
  data: propData,
  className,
}: SectionProps<SupportBannerData> = {}) {
  const data = propData || site.SupportBanner.variants.RealEstateSupportBanner1;
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="page-container">
        <div className="relative flex min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] w-full overflow-hidden rounded-[18px] sm:rounded-[22px] bg-[#1B36B0] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 left-5 z-[1] grid grid-cols-4 gap-x-[7px] gap-y-[7px] opacity-45"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <span
                key={i}
                className="h-[5px] w-[5px] rounded-full bg-white/70"
              />
            ))}
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#6B8CFF]/55 blur-2xl"
          />

          <div className="relative z-10 flex w-full flex-col lg:flex-row lg:items-stretch">
            <div className="flex flex-1 flex-col justify-center gap-4 sm:gap-6 px-4 py-5 sm:px-6 sm:py-7 md:px-8 md:flex-row md:items-center md:gap-7 lg:gap-8 lg:px-9">
              <div className="relative shrink-0 self-start md:self-center">
                <div className="absolute inset-0 scale-110 rounded-[26px] bg-[#8FB0FF]/55 blur-md" />
                <div className="relative flex h-[72px] w-[72px] sm:h-[96px] sm:w-[96px] items-center justify-center rounded-[20px] sm:rounded-[24px] bg-white text-[#1B36B0] shadow-[0_10px_24px_rgba(107,140,255,0.45)]">
                  <Headset247 />
                </div>
              </div>

              <div className="min-w-0 max-w-[320px] text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white">
                  {data.title}
                </h3>
                <p className="mt-2 sm:mt-2.5 text-sm sm:text-base leading-relaxed text-white/90 text-justify">
                  {data.desc}
                </p>
              </div>

              <div className="hidden h-[104px] w-px shrink-0 bg-white md:block" />

              <div className="flex shrink-0 flex-col items-start gap-3.5 text-white">
                <div className="flex items-center gap-2.5 text-[14px] font-medium text-white">
                  <PhoneCall className="h-[18px] w-[18px] stroke-white stroke-[2]" />
                  <span>{data.callLabel}</span>
                </div>
                <a
                  href={data.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-md bg-[#FF7A00] px-5 py-[13px] text-[15px] font-bold text-white shadow-[0_8px_18px_rgba(255,122,0,0.35)] transition-colors hover:bg-[#e96f00]"
                >
                  <Phone className="h-[17px] w-[17px] fill-white stroke-white" />
                  {data.phoneNumber}
                </a>
              </div>
            </div>

            <div className="relative hidden min-h-full min-w-[300px] w-[38%] shrink-0 self-stretch lg:block">
              <div className="absolute inset-0 overflow-hidden rounded-l-[140px]">
                <Image
                  src={data.imageUrl}
                  alt={data.imageAlt}
                  fill
                  sizes="38vw"
                  className="object-cover object-[52%_28%]"
                  priority
                />
              </div>
            </div>

            <div className="relative h-48 w-full overflow-hidden sm:h-56 lg:hidden">
              <Image
                src={data.imageUrl}
                alt={data.imageAlt}
                fill
                sizes="100vw"
                className="object-cover object-[50%_28%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Headset247() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-[58px] w-[58px] text-[#1B36B0]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 30c0-10.5 7.2-18 16-18s16 7.5 16 18"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <rect
        x="10"
        y="28"
        width="10"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="3.2"
      />
      <rect
        x="44"
        y="28"
        width="10"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="3.2"
      />
      <path
        d="M48 44v4.5c0 3.2-2.6 5.5-5.8 5.5H33"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="30" cy="52" r="3.2" fill="currentColor" />
      <text
        x="32"
        y="37"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9"
        fontWeight="800"
        letterSpacing="-0.5"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        24/7
      </text>
    </svg>
  );
}
