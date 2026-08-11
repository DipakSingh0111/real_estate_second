import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/sections/AboutSection";
import BestRealEstateSection from "@/components/sections/BestRealEstateSection";
import CtaSection from "@/components/sections/CtaSection";
import TopDealsSection from "@/components/sections/TopDealsSection";
import SupportBanner from "@/components/common/SupportBanner";
import siteData from "@/data/homeData.json";
import type { SiteData } from "@/types/home";

const homeData: SiteData = siteData;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 font-sans antialiased text-slate-900">
      <HeroBanner data={homeData.heroBanner} />
      <AboutSection data={homeData.aboutSection} />
      <CtaSection data={homeData.ctaSection} />
      <TopDealsSection data={homeData.topDealsSection} />
      <BestRealEstateSection data={homeData.bestRealEstateSection} />
      <SupportBanner data={homeData.supportBanner} />
    </main>
  );
}
