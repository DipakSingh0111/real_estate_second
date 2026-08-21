import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/common/TopBar";
import NavBar from "@/components/common/NavBar";
import SupportBanner from "@/components/common/SupportBanner";
import Footer from "@/components/common/Footer";
import { site } from "@/data";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "skyline realty",
  description: "Premium property listings and real estate services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-white text-slate-900">
        <div className="fixed inset-x-0 top-0 z-[9999] w-full">
          <TopBar data={site.Topbar.variants.RealEstateTopbar1} />
          <NavBar data={site.Header.variants.RealEstateHeader1} />
        </div>
        <main className="relative w-full flex-1 overflow-x-hidden">
          {children}
        </main>
        <SupportBanner
          data={site.SupportBanner.variants.RealEstateSupportBanner1}
        />
        <Footer data={site.Footer.variants.RealEstateFooter1} />
      </body>
    </html>
  );
}
