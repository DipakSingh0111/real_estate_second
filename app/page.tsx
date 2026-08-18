import HeroBanner from "@/components/common/HeroBanner";
import AboutSection from "@/components/sections/AboutSection";
import BestRealEstateSection from "@/components/sections/BestRealEstateSection";
import CtaSection from "@/components/sections/CtaSection";
import TopDealsSection from "@/components/sections/TopDealsSection";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-50 font-sans antialiased text-slate-900">
      <HeroBanner />
      <AboutSection />
      <CtaSection />
      <TopDealsSection />
      <BestRealEstateSection />
    </main>
  );
}
