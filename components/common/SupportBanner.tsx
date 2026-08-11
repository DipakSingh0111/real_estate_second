import Image from "next/image";
import { Headphones, Phone, PhoneCall } from "lucide-react";
import type { SupportBannerData } from "@/types/home";

type SupportBannerProps = { data: SupportBannerData };

export default function SupportBanner({ data }: SupportBannerProps) {
  return (
    <section id="contact" className="bg-[#fafafa] px-6 py-14 lg:px-12 lg:py-20">
      <div className="relative mx-auto min-h-[200px] w-full max-w-[1280px] overflow-hidden rounded-[18px] bg-[linear-gradient(112deg,#1b3cac_0%,#294bc1_52%,#1734a5_100%)] text-white shadow-[0_12px_22px_rgba(22,47,145,0.18)]">
        <div className="pointer-events-none absolute bottom-3 left-4 grid grid-cols-4 gap-1.5 opacity-30">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} className="h-1 w-1 rounded-full bg-white" />
          ))}
        </div>

        <div className="relative z-10 flex min-h-[200px] items-center pr-0 lg:pr-[33%]">
          <div className="flex w-full flex-col gap-7 px-7 py-8 sm:px-11 md:flex-row md:items-center lg:px-10">
            <div className="flex items-center gap-7 md:min-w-[430px]">
              <div className="relative shrink-0">
                <div className="absolute inset-0 scale-110 rounded-[26px] bg-white/45 blur-md" />
                <div className="relative flex h-[104px] w-[104px] items-center justify-center rounded-[25px] bg-white text-[#2548c5] shadow-lg">
                  <Headphones className="h-[59px] w-[59px] stroke-[1.5]" />
                  <span className="absolute top-[43px] text-[13px] font-extrabold tracking-[-0.08em]">
                    24/7
                  </span>
                </div>
              </div>
              <div className="max-w-[255px]">
                <h3 className="text-[23px] font-bold leading-[1.32] tracking-[-0.03em] sm:text-[24px]">
                  {data.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#dce5ff]">
                  {data.description}
                </p>
              </div>
            </div>

            <div className="hidden h-[106px] w-px shrink-0 bg-white/75 md:block" />

            <div className="flex flex-col items-start gap-4 md:pl-1">
              <div className="flex items-center gap-3 text-[15px] font-medium text-[#e2eaff]">
                <PhoneCall className="h-5 w-5 stroke-[2]" />
                <span>{data.callLabel}</span>
              </div>
              <a
                href={data.phoneHref}
                className="flex items-center gap-3 rounded-md bg-[#ff7900] px-6 py-[15px] text-[16px] font-bold shadow-[0_8px_18px_rgba(180,73,0,0.3)] transition-colors hover:bg-[#e96f00]"
              >
                <Phone className="h-[18px] w-[18px] fill-white stroke-white" />
                {data.phoneNumber}
              </a>
            </div>
          </div>
        </div>

        <div
          className="relative hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-[34%]"
          style={{ clipPath: "ellipse(91% 100% at 100% 50%)" }}
        >
          <Image
            src={data.imageUrl}
            alt={data.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 34vw"
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative h-52 lg:hidden">
          <Image
            src={data.imageUrl}
            alt={data.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
