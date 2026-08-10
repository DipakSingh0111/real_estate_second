import Image from "next/image";
import type { HeroBannerData } from "@/types/home";

type HeroBannerProps = {
  data: HeroBannerData;
};

export default function HeroBanner({ data }: HeroBannerProps) {
  const titleSegments = data.title.split("Dream Home");

  const hasHighlight = titleSegments.length === 2;

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-white lg:min-h-[800px]">
      {/* =====================================================
          RIGHT IMAGE
      ===================================================== */}

      <div
        className="
          absolute
          right-0
          top-0
          hidden
          h-full
          w-[58%]
          lg:block
        "
      >
        <div
          className="
            relative
            h-full
            w-full
            overflow-hidden
          "
          style={{
            clipPath: `
              polygon(
                0% 0%,
                100% 0%,
                100% 100%,
                16% 100%,
                11% 97%,
                8% 94%,
                5% 89%,
                3% 83%,
                2% 76%,
                1% 68%,
                0% 60%
              )
            `,
          }}
        >
          <Image
            src={data.backgroundImage}
            alt={data.title}
            fill
            priority
            sizes="58vw"
            className="object-cover object-center"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/[0.02]" />
        </div>

        {/* =================================================
            WHITE DIAGONAL OVERLAY
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            h-[58%]
            w-[30%]
            bg-white
          "
          style={{
            clipPath: `
              polygon(
                0 0,
                0 100%,
                28% 100%,
                62% 75%,
                85% 40%,
                100% 0
              )
            `,
          }}
        />
      </div>

      {/* =====================================================
          MOBILE IMAGE
      ===================================================== */}

      <div className="absolute bottom-0 left-0 h-[350px] w-full lg:hidden">
        <Image
          src={data.backgroundImage}
          alt={data.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          max-w-[1400px]
          px-6
          pt-[185px]
          sm:px-10
          lg:px-[70px]
          lg:pt-[205px]
        "
      >
        <div className="max-w-[600px]">
          {/* ================= BADGE ================= */}

          <div
            className="
              inline-flex
              h-[46px]
              items-center
              overflow-hidden
              rounded-full
              border
              border-[#D5D8DF]
              bg-white
              shadow-[0_2px_6px_rgba(0,0,0,0.08)]
            "
          >
            <span
              className="
                flex
                h-full
                items-center
                rounded-full
                bg-[#3855CE]
                px-[25px]
                text-[13px]
                font-bold
                uppercase
                text-white
              "
            >
              {data.badgeTag}
            </span>

            <span
              className="
                px-[23px]
                text-[13px]
                font-medium
                uppercase
                text-[#737780]
              "
            >
              {data.badgeLocation}
            </span>
          </div>

          {/* ================= TITLE ================= */}

          <h1
            className="
              mt-[48px]
              text-[54px]
              font-extrabold
              leading-[1.08]
              tracking-[-1.8px]
              text-[#102650]
              sm:text-[62px]
              lg:text-[66px]
            "
          >
            {hasHighlight ? (
              <>
                <span className="block">{titleSegments[0].trim()}</span>

                <span className="block text-[#3855CE]">Dream Home</span>

                <span className="block">{titleSegments[1].trim()}</span>
              </>
            ) : (
              data.title
            )}
          </h1>

          {/* ================= DESCRIPTION ================= */}

          <p
            className="
              mt-[30px]
              max-w-[590px]
              text-[15px]
              leading-[1.9]
              text-[#697386]
              sm:text-[16px]
            "
          >
            {data.description}
          </p>
        </div>
      </div>

      {/* =====================================================
          PRICE CARD
      ===================================================== */}

      <div
        className="
          absolute
          right-[8%]
          top-[123px]
          z-30
          hidden
          w-[194px]
          rounded-[10px]
          bg-[#3E54D0]
          px-[20px]
          py-[27px]
          text-center
          text-white
          shadow-[0_15px_30px_rgba(35,55,170,0.25)]
          lg:block
        "
      >
        <p className="text-[13px] font-medium">{data.priceTag.label}</p>

        <p className="mt-[10px] text-[28px] font-bold">
          {data.priceTag.amount}
        </p>
      </div>

      {/* =====================================================
          MOBILE PRICE
      ===================================================== */}

      <div
        className="
          absolute
          right-5
          top-[125px]
          z-30
          rounded-[10px]
          bg-[#3E54D0]
          px-5
          py-4
          text-white
          shadow-xl
          lg:hidden
        "
      >
        <p className="text-[10px]">{data.priceTag.label}</p>

        <p className="mt-1 text-xl font-bold">{data.priceTag.amount}</p>
      </div>
    </section>
  );
}
