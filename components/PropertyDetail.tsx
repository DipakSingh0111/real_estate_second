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
  Wifi,
  Wind,
  Flame,
  Dumbbell,
  Trees,
  Droplets,
  CarFront,
  ShieldCheck,
  Utensils,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { site, PropertyDeal, PageBannerData, SectionProps } from "@/data";
import PageBanner from "@/components/common/PageBanner";
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
  const banner = propData?.banner || site.pageBanners.propertyListing;

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
                <div className="absolute right-4 top-4 rounded-lg bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm flex flex-col items-end">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">Price</span>
                  <span className="text-xl font-extrabold text-[#2A39CE]">{property.price}</span>
                </div>
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

            <div className="mt-12 space-y-12">
              {/* Overview Section */}
              <section>
                <h2 className="text-2xl font-bold text-[#0B1A33] mb-6 flex items-center gap-2">
                  <BedDouble className="h-6 w-6 text-[#2A39CE]" />
                  Overview
                </h2>
                <div className="rounded-[24px] border border-slate-100 bg-white overflow-hidden shadow-[0_10px_40px_rgba(27,54,176,0.02)]">
                  <div className="divide-y divide-slate-100">
                    {overviewRows.map((row) => {
                      const Icon = row.icon;
                      return (
                        <div
                          key={row.label}
                          className="grid grid-cols-[1.2fr_1fr] divide-x divide-slate-100"
                        >
                          <div className="flex items-center gap-3.5 px-5 py-3.5 sm:px-6">
                            <Icon className="h-5 w-5 text-[#4F5B73] shrink-0" />
                            <span className="text-[14px] sm:text-[15px] font-extrabold text-[#142345] tracking-wide">
                              {row.label}
                            </span>
                          </div>
                          <div className="flex items-center px-5 py-3.5 sm:px-6 text-[14px] sm:text-[15px] font-semibold text-[#4F5B73]">
                            {row.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Property Details Section */}
              <section>
                <h2 className="text-2xl font-bold text-[#0B1A33] mb-6 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-[#2A39CE]" />
                  Property Details
                </h2>
                <div className="rounded-[24px] border border-slate-100 bg-white overflow-hidden shadow-[0_10px_40px_rgba(27,54,176,0.02)] p-6 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    This premium listing in{" "}
                    <strong className="text-[#0B1A33]">
                      {property.location}
                    </strong>{" "}
                    offers {property.bedrooms} bedrooms, {property.bathrooms}{" "}
                    bathrooms, and {property.sqft} sqft of thoughtfully designed
                    living space.
                  </p>
                  <p className="mt-2">
                    Listed price:{" "}
                    <strong className="text-[#2A39CE]">{property.price}</strong>
                  </p>
                </div>
              </section>

              {/* Features Section */}
              <section>
                <h2 className="text-2xl font-bold text-[#0B1A33] mb-6 flex items-center gap-2">
                  <Star className="h-6 w-6 text-[#2A39CE]" />
                  Features
                </h2>
                <div className="rounded-[24px] border border-slate-100 bg-white overflow-hidden shadow-[0_10px_40px_rgba(27,54,176,0.02)] p-6 sm:p-8">
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {featureList.map((feature) => {
                      const f = feature.toLowerCase();
                      let FeatureIcon = CheckCircle2;
                      if (f.includes("air condition") || f.includes("ac") || f.includes("cooling")) FeatureIcon = Wind;
                      else if (f.includes("heat") || f.includes("fire")) FeatureIcon = Flame;
                      else if (f.includes("pool") || f.includes("water")) FeatureIcon = Droplets;
                      else if (f.includes("gym") || f.includes("fitness")) FeatureIcon = Dumbbell;
                      else if (f.includes("garden") || f.includes("park") || f.includes("yard")) FeatureIcon = Trees;
                      else if (f.includes("garage") || f.includes("parking")) FeatureIcon = CarFront;
                      else if (f.includes("wifi") || f.includes("internet") || f.includes("broadband")) FeatureIcon = Wifi;
                      else if (f.includes("security")) FeatureIcon = ShieldCheck;
                      else if (f.includes("kitchen")) FeatureIcon = Utensils;
                      else if (f.includes("balcony") || f.includes("terrace")) FeatureIcon = Building2;
                      
                      return (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-medium bg-slate-50 hover:bg-blue-50/50 transition-colors p-3.5 rounded-xl border border-slate-100 shadow-sm"
                        >
                          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#2A39CE] shrink-0 border border-slate-100">
                            <FeatureIcon className="h-5 w-5" />
                          </div>
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </div>

            {/* Map */}
            <PropertyMap title={property.title} location={property.location} />
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">


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
