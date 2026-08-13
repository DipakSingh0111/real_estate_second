import Image from "next/image";
import type { HeroBannerData, HeroPriceTag } from "@/types/home";

type HeroBannerProps = { data: HeroBannerData };

export default function HeroBanner({ data }: HeroBannerProps) {
  const [beforeHighlight, afterHighlight] = data.title.split(
    data.highlightedTitleText,
  );
  const hasHighlight = afterHighlight !== undefined;

  return (
    <section className="relative isolate overflow-hidden bg-white font-[family-name:var(--font-poppins)]">
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <clipPath id="hero-media-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.18 0 H1 V1 H0.22 C0.08 1 0.02 0.86 0.03 0.62 L0.18 0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="page-container relative z-10 flex flex-col pb-10 pt-[108px] lg:min-h-[640px] lg:justify-center lg:pb-24 lg:pt-[96px]">
        <div className="max-w-xl lg:max-w-[38%]">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#E6EBF3] bg-white py-[3px] pl-[3px] pr-5 shadow-[0_10px_24px_-16px_rgba(16,42,86,0.35)]">
            <span className="rounded-full bg-[#3F51DE] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
              {data.badgeTag}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9AA3B5]">
              {data.badgeLocation}
            </span>
          </div>

          <h1 className="mt-8 text-[2.55rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0B1A33] sm:text-[3.1rem] lg:text-[3.45rem]">
            {hasHighlight ? (
              <>
                <span className="block">{beforeHighlight.trim()}</span>
                <span className="block text-[#3F51DE]">
                  {data.highlightedTitleText}
                </span>
                <span className="block">{afterHighlight.trim()}</span>
              </>
            ) : (
              data.title
            )}
          </h1>

          <p className="mt-7 max-w-[27rem] text-[0.9rem] leading-[1.75] text-[#8A93A5]">
            {data.description}
          </p>
        </div>
      </div>

      <div className="relative mx-5 mb-10 h-[280px] overflow-hidden rounded-[28px] sm:mx-8 sm:h-[360px] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mb-0 lg:h-full lg:w-[62%] lg:rounded-none lg:[clip-path:url(#hero-media-clip)]">
        <Image
          src={data.backgroundImage}
          alt={data.title}
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-[62%_center] lg:object-[70%_center]"
        />
        <PriceTag
          data={data.priceTag}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 lg:right-[18%] lg:top-[92px]"
        />
      </div>
    </section>
  );
}

function PriceTag({
  data,
  className,
}: {
  data: HeroPriceTag;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[10px] bg-[#3F51DE] px-6 py-3.5 text-center text-white shadow-[0_20px_40px_-18px_rgba(31,45,150,0.7)] ${className ?? ""}`}
    >
      <p className="text-[0.78rem] leading-none text-white/90">{data.label}</p>
      <p className="mt-2 text-[1.35rem] font-bold leading-none tracking-[-0.02em]">
        {data.amount}
      </p>
    </div>
  );
}
