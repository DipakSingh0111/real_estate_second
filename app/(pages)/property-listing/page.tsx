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
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.32em] text-orange-500">
              Top Deals
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-slate-950 sm:text-5xl">
              Of the week
            </h2>
          </div>
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
                    ? "bg-brand text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a183d] py-10 text-white">
        <div className="page-container">
          <div className="grid gap-8 rounded-[32px] bg-[#172645] px-8 py-12 sm:grid-cols-[1.5fr_1fr] sm:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#7c93ff]">
                Any Query? We are Happy to Assist You
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Our support team is available 24/7 to help you.
              </h3>
            </div>
            <div className="rounded-[28px] bg-white p-6 text-slate-950 shadow-lg">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Call Us Anytime
              </p>
              <p className="mt-4 text-3xl font-bold">+1 234 567 8900</p>
              <p className="mt-2 text-sm text-slate-600">
                Reach out for instant booking and personalized property
                guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
