import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Eye,
  Target,
  UserCheck,
  ShieldCheck,
  Award,
  Headphones,
} from "lucide-react";
import homeData from "@/data/homeData.json";
import PageBanner from "@/components/common/PageBanner";
export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <PageBanner data={homeData.pageBanners.about} />

      {/* 2. MAIN ABOUT SECTION */}
      <section className="page-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: HEXAGON COLLAGE */}
          <div className="lg:col-span-7 relative flex justify-start py-6">
            <div className="relative w-full max-w-[680px] h-[420px] sm:h-[500px]">
              {/* Main Hexagon Image */}
              <div
                className="absolute inset-0 overflow-hidden shadow-2xl z-10"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern Real Estate Property"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 15+ Years Badge */}
              <div
                className="absolute -left-4 sm:-left-6 top-1/4 w-[140px] sm:w-[160px] h-[160px] sm:h-[180px] bg-[#1A43BF] text-white flex flex-col items-center justify-center text-center p-4 shadow-xl z-20"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <span className="text-2xl sm:text-3xl font-extrabold leading-none mb-1">
                  15+
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-blue-100 leading-tight mb-2">
                  Years of <br /> Excellence
                </span>
                <span className="w-5 h-[1.5px] bg-blue-300 mb-2 inline-block" />
                <Home className="w-5 h-5 stroke-[1.8] text-white" />
              </div>

              {/* Secondary Small Hexagon Image */}
              <div
                className="absolute -right-2 sm:-right-4 bottom-6 w-[130px] sm:w-[150px] h-[140px] sm:h-[160px] shadow-2xl z-20 overflow-hidden border-2 border-white"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop"
                  alt="Secondary Property"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT */}
          <div className="lg:col-span-5 lg:pl-10 flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A43BF] block mb-1">
                ABOUT US
              </span>
              <span className="w-8 h-[2px] bg-[#1A43BF] block mb-4" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132A] leading-tight mb-6">
              Building Trust. <br />
              <span className="text-[#1A43BF]">Creating Better Living.</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                DreamHome Realty is a premier real estate company committed to
                helping people find their dream properties and make smart
                investments. With a strong foundation built on trust,
                transparency, and expertise, we have earned a reputation for
                delivering exceptional real estate solutions.
              </p>

              <p>
                Our experienced team offers a wide range of residential,
                commercial, and investment properties tailored to meet the
                unique needs of our clients. From prime locations to modern
                amenities, we ensure quality and value in every property we
                offer.
              </p>

              <p>
                At DreamHome Realty, our goal is simple – to create lasting
                relationships and build communities where people love to live,
                work, and grow.
              </p>
            </div>
          </div>
        </div>

        {/* 3. VISION & MISSION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Vision Card */}
          <div className="bg-[#FAFBFD] p-8 sm:p-10 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#E0E8FF] rounded-2xl flex items-center justify-center shrink-0">
                <Eye className="w-7 h-7 text-[#1A43BF] stroke-[1.8]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B132A]">Vision</h3>
                <span className="w-6 h-[2px] bg-[#1A43BF] block mt-1" />
              </div>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              To be the most trusted real estate brand, recognized for
              delivering exceptional properties and creating spaces that enhance
              lives and communities.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#FAFBFD] p-8 sm:p-10 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#E0E8FF] rounded-2xl flex items-center justify-center shrink-0">
                <Target className="w-7 h-7 text-[#1A43BF] stroke-[1.8]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B132A]">Mission</h3>
                <span className="w-6 h-[2px] bg-[#1A43BF] block mt-1" />
              </div>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              To provide reliable real estate solutions with integrity,
              innovation, and customer focus, helping our clients achieve their
              property goals and build a better tomorrow.
            </p>
          </div>
        </div>

        {/* 4. WHY CHOOSE US SECTION (INCREASED WIDTH & EQUAL HEIGHT ALIGNED) */}
        <div className="mt-24 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
            {/* Left Column: WIDER Image (Equal Height to Right Content) */}
            <div className="lg:col-span-5 relative flex flex-col h-full min-h-[500px] lg:min-h-[580px]">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-md border border-gray-100 bg-gray-50">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
                  alt="Luxury Pool Property"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority
                />

                {/* Top-Left Dots Grid Accent */}
                <div className="absolute top-6 left-6 grid grid-cols-4 gap-2 z-20">
                  {[...Array(16)].map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-[#1A43BF] rounded-full inline-block"
                    />
                  ))}
                </div>

                {/* Bottom-Left 500+ Happy Families Badge */}
                <div className="absolute bottom-6 left-6 bg-[#1A43BF] text-white px-6 py-5 rounded-[24px] shadow-xl z-20 min-w-[150px] text-center flex flex-col items-center">
                  <Home className="w-6 h-6 mb-1.5 stroke-[1.8]" />
                  <span className="text-2xl font-extrabold tracking-tight leading-none mb-1">
                    500+
                  </span>
                  <span className="text-[11px] font-medium opacity-90">
                    Happy Families
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Content with Expanded Width */}
            <div className="lg:col-span-7 flex flex-col justify-between py-2">
              {/* Header */}
              <div>
                <div className="mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A43BF] block mb-1">
                    WHY CHOOSE US
                  </span>
                  <span className="w-8 h-[2px] bg-[#1A43BF] block mb-3" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132A] leading-tight mb-2">
                  Your Trusted Partner in <br />
                  <span className="text-[#1A43BF]">Real Estate.</span>
                </h2>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                  We combine local expertise with a client-first approach to
                  deliver the best real estate experience. Here&apos;s what sets
                  us apart.
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="flex items-start gap-4 pb-3 border-b border-gray-100">
                  <div className="w-11 h-11 bg-[#EEF2FF] rounded-2xl flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5 text-[#1A43BF] stroke-[1.8]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0B132A] mb-0.5">
                      Wide Range of Properties
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      Explore residential, commercial, and investment properties
                      in prime locations.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4 pb-3 border-b border-gray-100">
                  <div className="w-11 h-11 bg-[#EEF2FF] rounded-2xl flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-[#1A43BF] stroke-[1.8]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0B132A] mb-0.5">
                      Expert Guidance
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      Our experienced professionals provide honest advice and
                      personalized support.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4 pb-3 border-b border-gray-100">
                  <div className="w-11 h-11 bg-[#EEF2FF] rounded-2xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#1A43BF] stroke-[1.8]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0B132A] mb-0.5">
                      Transparent Deals
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      We believe in complete transparency and ensure secure,
                      hassle-free transactions.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4 pb-3 border-b border-gray-100">
                  <div className="w-11 h-11 bg-[#EEF2FF] rounded-2xl flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#1A43BF] stroke-[1.8]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0B132A] mb-0.5">
                      Quality & Value
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      We are committed to delivering properties that offer the
                      best value and long-term satisfaction.
                    </p>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#EEF2FF] rounded-2xl flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5 text-[#1A43BF] stroke-[1.8]" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0B132A] mb-0.5">
                      After-Sales Support
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      Our relationship doesn&apos;t end at the deal — we&apos;re
                      here for you, always.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
