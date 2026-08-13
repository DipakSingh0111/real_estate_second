import Image from "next/image";
import {
  Home,
  Eye,
  Target,
  UserCheck,
  ShieldCheck,
  Award,
  Headphones,
} from "lucide-react";

export default function WhyUsChoose() {
  return (
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
              We combine local expertise with a client-first approach to deliver
              the best real estate experience. Here&apos;s what sets us apart.
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
                  Explore residential, commercial, and investment properties in
                  prime locations.
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
                  We are committed to delivering properties that offer the best
                  value and long-term satisfaction.
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
  );
}
