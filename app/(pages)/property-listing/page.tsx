import PropertyCard from "@/components/PropertyCard";
import PageBanner from "@/components/common/PageBanner";
import siteData from "@/data/homeData.json";
import type { PropertyDeal } from "@/types/home";

const properties: PropertyDeal[] = siteData.topDealsSection.deals;
const pageSize = 6;

export default function PropertyListingPage() {
  const pageCount = Math.ceil(properties.length / pageSize);
  const currentPage = 1;
  const visibleProperties = properties.slice(0, pageSize);

  return (
    <main className="bg-slate-50">
      <PageBanner data={siteData.pageBanners.propertyListing} />

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
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[32px] border border-slate-200 bg-white px-6 py-5 shadow-sm sm:flex-row">
          <p className="text-sm text-slate-500">
            Showing {visibleProperties.length} of {properties.length} properties
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  index === currentPage - 1
                    ? "bg-[#2A39CE] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
