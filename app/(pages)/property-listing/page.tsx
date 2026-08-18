"use client";
import { site } from "@/data";

import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import PageBanner from "@/components/common/PageBanner";
import Pagination from "@/components/common/Pagination";
const properties: any[] = site.topDealsSection.deals;
const pageSize = 6;

export default function PropertyListingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(properties.length / pageSize);

  const visibleProperties = properties.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <main className="bg-slate-50">
      <PageBanner />

      <section className="page-container py-12">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#2A39CE]">
            Top Deals
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Of the week
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProperties.map((property) => (
            <PropertyCard key={property.id} data={property} />
          ))}
        </div>

        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </section>
    </main>
  );
}
