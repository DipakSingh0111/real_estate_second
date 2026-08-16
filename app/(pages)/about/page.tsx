import homeData from "@/data/homeData.json";
import PageBanner from "@/components/common/PageBanner";
import About from "@/components/About";
import VisionMission from "@/components/Vision-mission";
import WhyUsChoose from "@/components/Why-us-choose";
export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans text-gray-800">
      {/* PageBanner */}
      <PageBanner data={homeData.pageBanners.about} />
      <section className="page-container py-16">
        {/* About */}
        <About />
        {/* 3. VISION & MISSION */}
        <VisionMission />
        {/* Why-us-choose.tsx */}
        <WhyUsChoose />
      </section>
    </div>
  );
}
