import HeroBanner from "@/components/common/HeroBanner";
import AboutSection from "@/components/sections/AboutSection";
import BestRealEstateSection from "@/components/sections/BestRealEstateSection";
import CtaSection from "@/components/sections/CtaSection";
import TopDealsSection from "@/components/sections/TopDealsSection";
import { site } from "@/data";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-50 font-sans antialiased text-slate-900">
      <HeroBanner data={site.Banner.variants.RealEstateBanner1} />
      <AboutSection
        data={site.About.variants.RealEstateAbout1}
        services={site.ServicesOverview.variants.RealEstateServicesOverview1.items.slice(0, 3)}
      />
      <CtaSection data={site.Highlight.variants.RealEstateHighlight1} />
      <TopDealsSection data={site.Properties.variants.RealEstateProperties1} />
      <BestRealEstateSection data={site.CitiesWeServe.variants.RealEstateCitiesWeServe1} />
    </main>
  );
}
