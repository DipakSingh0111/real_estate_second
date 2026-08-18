"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Bath,
  BedDouble,
  Building2,
  CalendarDays,
  Camera,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Headphones,
  MapPin,
  Maximize2,
  Phone,
  Send,
  Star,
  Tag,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { site, PropertyDeal, PageBannerData, SectionProps } from "@/data";
import PageBanner from "@/components/common/PageBanner";
import PriceCard from "@/components/common/PriceCard";
import ContactFormSidebar from "@/components/common/ContactFormSidebar";
import NeedHelpCard from "@/components/common/NeedHelpCard";
import PropertyMap from "@/components/common/PropertyMap";

type PropertyDetailProps = {
  property: PropertyDeal;
  galleryImages?: string[];
  banner: PageBannerData;
};

type TabKey = "overview" | "details" | "features";

export default function PropertyDetail({
  data: propData,
  className,
}: SectionProps<PropertyDetailProps> = {}) {
  // If wrapped in a generic container, it receives data, else use fallbacks
  const property = propData?.property || site.topDealsSection.deals[0];
  const galleryImages = propData?.galleryImages || [];
  const banner = propData?.banner || site.pageBanners['property-listing'];

  const bannerData = useMemo(
    () => ({
      ...banner,
      breadcrumb: [
        ...(banner.breadcrumb ?? []).slice(0, 2),
        { label: property.title },
      ],
    }),
    [banner, property.title],
  );

  const images = useMemo(() => {
    const unique = Array.from(
      new Set([property.image, ...galleryImages].filter(Boolean)),
    );
    return unique.length > 0 ? unique : [property.image];
  }, [galleryImages, property.image]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () =>
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const overviewRows = [
    {
      icon: Building2,
      label: "Rooms",
      value: String(property.bedrooms + property.bathrooms + 3),
    },
    { icon: Bath, label: "Baths", value: String(property.bathrooms) },
    { icon: BedDouble, label: "Bed", value: String(property.bedrooms) },
    {
      icon: Maximize2,
      label: "Size",
      value: `${property.sqft} Square Ft`,
    },
    { icon: CalendarDays, label: "Year Built", value: "2024" },
    { icon: Building2, label: "Property Type", value: "Villa" },
    { icon: Car, label: "Garage", value: "1" },
  ];

  const featureList = site.propertyDetail.features;

  return (
    <main className="bg-white">
      <PageBanner data={bannerData} />

      <section className="page-container py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] xl:gap-10">
          {/* LEFT */}
          <div className="min-w-0">
            {/* Gallery */}
            <div className="overflow-hidden rounded-[18px] border border-slate-100 bg-white shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)]">
              <div className="relative h-[280px] sm:h-[380px] lg:h-[420px]">
                <Image
                  src={images[activeIndex]}
                  alt={property.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-md bg-[#2A39CE] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                  Featured
                </span>
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  <Camera className="h-3.5 w-3.5" />
                  {activeIndex + 1}/{images.length}
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={goPrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md transition hover:bg-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={goNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md transition hover:bg-white"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2 p-3 sm:gap-3 sm:p-4">
                {images.slice(0, 5).map((src, index) => (
                  <button
                    key={`${src}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-16 overflow-hidden rounded-lg sm:h-20 ${activeIndex === index
                        ? "ring-2 ring-[#2A39CE] ring-offset-1"
                        : "opacity-80 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={src}
                      alt={`${property.title} ${index + 1}`}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Title block */}
            <div className="mt-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-[#0B1A33]">
                {property.title}
              </h1>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                <MapPin className="h-4 w-4 text-[#2A39CE]" />
                {property.location}
              </div>
              <p className="mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-500">
                {site.propertyDetail.description}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="text-sm font-medium text-slate-500">
                  Share:
                </span>
                <a
                  href="#"
                  aria-label="Share on LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EEFF] text-[#2A39CE] transition hover:bg-[#2A39CE] hover:text-white"
                >
                  <FaLinkedinIn className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="Share on Twitter"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EEFF] text-[#2A39CE] transition hover:bg-[#2A39CE] hover:text-white"
                >
                  <FaTwitter className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="Share on Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EEFF] text-[#2A39CE] transition hover:bg-[#2A39CE] hover:text-white"
                >
                  <FaFacebookF className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-8 flex flex-wrap gap-3">
              {(
                [
                  ["overview", "Overview", BedDouble],
                  ["details", "Property Details", FileText],
                  ["features", "Features", Star],
                ] as const
              ).map(([key, label, Icon]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`rounded-lg px-5 py-3 text-sm font-extrabold transition flex items-center gap-2.5 ${activeTab === key
                      ? "bg-[#1B36B0] text-white shadow-sm"
                      : "bg-[#F3F4F6] text-slate-700 hover:bg-slate-200"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <div className="mt-6 rounded-[24px] border border-slate-100 bg-white overflow-hidden shadow-[0_10px_40px_rgba(27,54,176,0.02)]">
              {activeTab === "overview" ? (
                <div className="divide-y divide-slate-100">
                  {overviewRows.map((row) => {
                    const Icon = row.icon;
                    return (
                      <div
                        key={row.label}
                        className="grid grid-cols-[1.2fr_1fr] divide-x divide-slate-100"
                      >
                        {/* Left Side: Icon + Name */}
                        <div className="flex items-center gap-3.5 px-5 py-3.5 sm:px-6">
                          <Icon className="h-5 w-5 text-[#4F5B73] shrink-0" />
                          <span className="text-[14px] sm:text-[15px] font-extrabold text-[#142345] tracking-wide">
                            {row.label}
                          </span>
                        </div>
                        {/* Right Side: Value */}
                        <div className="flex items-center px-5 py-3.5 sm:px-6 text-[14px] sm:text-[15px] font-semibold text-[#4F5B73]">
                          {row.value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}

              {activeTab === "details" ? (
                <div className="space-y-3 px-5 py-5 text-sm leading-7 text-slate-600">
                  <p>
                    This premium listing in{" "}
                    <strong className="text-[#0B1A33]">
                      {property.location}
                    </strong>{" "}
                    offers {property.bedrooms} bedrooms, {property.bathrooms}{" "}
                    bathrooms, and {property.sqft} sqft of thoughtfully designed
                    living space.
                  </p>
                  <p>
                    Listed price:{" "}
                    <strong className="text-[#2A39CE]">{property.price}</strong>
                  </p>
                </div>
              ) : null}

              {activeTab === "features" ? (
                <ul className="grid gap-3 px-5 py-5 sm:grid-cols-2">
                  {featureList.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#2A39CE]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {/* Map */}
            <PropertyMap title={property.title} location={property.location} />
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <PriceCard
              price={property.price}
              propertyType={site.propertyDetail.priceDetails.propertyType}
              priceType={site.propertyDetail.priceDetails.priceType}
              region={site.propertyDetail.priceDetails.region}
            />

            <ContactFormSidebar />

            <NeedHelpCard
              phone={site.propertyDetail.contactDetails.phone}
              phoneHref={site.propertyDetail.contactDetails.phoneHref}
              workingHours={site.propertyDetail.contactDetails.workingHours}
              helpText={site.propertyDetail.contactDetails.helpText}
            />
          </aside>
        </div>
      </section>
    </main>
  );
}
