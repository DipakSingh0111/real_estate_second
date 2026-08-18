import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/common/TopBar";
import NavBar from "@/components/common/NavBar";
import SupportBanner from "@/components/common/SupportBanner";
import Footer from "@/components/common/Footer";
import homeData from "@/data/property.json";

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
  title: "Real Estate Company",
  description: "Premium property listings and real estate services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        <div className="fixed inset-x-0 top-0 z-[9999] w-full">
          <TopBar data={homeData.topBar} />
          <NavBar data={homeData.navbar} />
        </div>
        <main className="flex-1">{children}</main>
        <SupportBanner data={homeData.supportBanner} />
        <Footer data={homeData.footer} />
      </body>
    </html>
  );
}