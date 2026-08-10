import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import siteData from "@/data/homeData.json";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 font-sans antialiased text-slate-900">
      <NavBar data={siteData.navbar} />
      <HeroBanner data={siteData.heroBanner} />
      <Footer />
    </main>
  );
}
