"use client";

import { site } from "@/data";
import Image from "next/image";
import { use } from "react";
import PageBanner from "@/components/common/PageBanner";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface IndustryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function IndustryDetailPage({ params }: IndustryDetailPageProps) {
  const { slug } = use(params);
  const industryItem = site.industriesPage.items.find(
    (item: any) => item.slug === slug,
  );

  const bannerData = industryItem
    ? {
      ...site.pageBanners["industries-we-serve"],
      title: industryItem.title,
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Industries We Serve", href: "/industries-we-serve" },
        { label: industryItem.title },
      ],
    }
    : site.pageBanners["industries-we-serve"];

  if (!industryItem) {
    return (
      <main className="bg-[#f8fafc] font-sans text-slate-900 min-h-screen">
        <section className="page-container flex flex-col items-center justify-center py-20">
          <h1 className="mb-4 text-3xl font-bold">Industry Not Found</h1>
          <p className="mb-8 text-slate-600">
            Sorry, we couldn't find the industry you're looking for.
          </p>
          <Link
            href="/industries-we-serve"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Back to Industries
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#f8fafc] font-sans text-slate-900 min-h-screen pb-16">
      <PageBanner />

      <section className="page-container py-12">
        <Link
          href="/industries-we-serve"
          className="mb-8 inline-flex items-center gap-2 text-blue-600 hover:underline font-semibold text-sm"
        >
          <FaArrowLeft /> Back to Industries
        </Link>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="relative w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden bg-slate-100 shadow-md">
              <Image
                src={industryItem.image}
                alt={industryItem.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  {industryItem.title}
                </h1>
                <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full"></div>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-medium text-slate-700 leading-relaxed">
                  {industryItem.description}
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  {industryItem.content}
                </p>
              </div>

              <div className="pt-4">
                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
