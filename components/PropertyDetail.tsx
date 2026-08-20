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
  Maximize2,
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
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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

const socialIconMap = {
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

export default function PropertyDetail({
  data: propData,
  className,
}: SectionProps<PropertyDetailProps> = {}) {
  // If wrapped in a generic container, it receives data, else use fallbacks
  const property =
    propData?.property ||
    site.Properties.variants.RealEstateProperties1.listings[0];
  const galleryImages = propData?.galleryImages || [];
  const banner =
    propData?.banner ||
    site.PageBanner.variants.RealEstateInnerBanner1.propertyListing;

  const bannerData = useMemo(
    () => ({
      ...banner,
      breadcrumb: [
        ...((banner as any).breadcrumb ?? []).slice(0, 2),
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

  const featureValue = (label: string, fallback = "-") =>
    property.features.find((f) => f.label === label)?.value ?? fallback;

  const overviewRows = [
    {
      icon: Building2,
      label: "Rooms",
      value: String(
        Number(featureValue("Bedrooms", "0")) +
          Number(featureValue("Bathrooms", "0")) +
          3,
      ),
    },
    { icon: Bath, label: "Baths", value: featureValue("Bathrooms") },
    { icon: BedDouble, label: "Bed", value: featureValue("Bedrooms") },
    {
      icon: Maximize2,
      label: "Size",
      value: featureValue("Area"),
    },
    {
      icon: CalendarDays,
      label: "Year Built",
      value: property.statusText?.replace(/^Built\s+/i, "") || "2024",
    },
    {
      icon: Building2,
      label: "Property Type",
      value: property.propertyType || "Villa",
    },
    { icon: Car, label: "Garage", value: featureValue("Parking", "1") },
  ];

  const featureList =
    site.PropertyDetail.variants.RealEstatePropertyDetail1.features;

  return (
    <main className="bg-white">
      <PageBanner data={bannerData as any} />

      <section className="page-container py-8 sm:py-10 lg:py-14">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] xl:gap-10">
          {/* LEFT */}
          <div className="min-w-0">
            {/* Gallery */}
            <div className="overflow-hidden rounded-xl sm:rounded-[18px] border border-slate-100 bg-white shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)]">
              <div className="relative h-[220px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
                <Image
                  src={images[activeIndex]}
                  alt={property.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-md bg-[#2A39CE] px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                  Featured
                </span>
                <div className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-lg bg-white/95 px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg backdrop-blur-sm flex flex-col items-end">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                    Price
                  </span>
                  <span className="text-base sm:text-xl font-extrabold text-[#2A39CE]">
                    {property.price}
                  </span>
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
                    className={`relative h-16 overflow-hidden rounded-lg sm:h-20 ${
                      activeIndex === index
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
            <div className="mt-6 sm:mt-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-[#0B1A33]">
                {property.title}
              </h1>

              <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-500">
                {
                  site.PropertyDetail.variants.RealEstatePropertyDetail1
                    .description
                }
              </p>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 space-y-8 sm:space-y-10 lg:space-y-12">
              {/* Overview Section */}
              <section>
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B1A33] mb-2 sm:mb-3">
                    Overview
                  </h2>
                  <div className="w-12 h-[3px] bg-[#1A43BF] rounded-full"></div>
                </div>
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
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#0B1A33] mb-3">
                    Property Details
                  </h2>
                  <div className="w-12 h-[3px] bg-[#1A43BF] rounded-full"></div>
                </div>
                <div className="rounded-[24px] border border-slate-100 bg-white overflow-hidden shadow-[0_10px_40px_rgba(27,54,176,0.02)] p-6 text-sm sm:text-base leading-relaxed text-slate-600 space-y-3">
                  <p>
                    {
                      site.PropertyDetail.variants.RealEstatePropertyDetail1
                        .overviewText
                    }
                  </p>
                  <p>
                    This premium listing in{" "}
                    <strong className="text-[#0B1A33]">
                      {property.location}
                    </strong>{" "}
                    offers {featureValue("Bedrooms")} bedrooms,{" "}
                    {featureValue("Bathrooms")} bathrooms, and{" "}
                    {featureValue("Area")} of thoughtfully designed living
                    space.
                  </p>
                  <p>
                    Listed price:{" "}
                    <strong className="text-[#2A39CE]">{property.price}</strong>
                  </p>
                </div>
              </section>

              {/* Features Section */}
              <section>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#0B1A33] mb-3">
                    Features
                  </h2>
                  <div className="w-12 h-[3px] bg-[#1A43BF] rounded-full"></div>
                </div>
                <div className="rounded-[24px] border border-slate-100 bg-white overflow-hidden shadow-[0_10px_40px_rgba(27,54,176,0.02)] p-6 sm:p-8">
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {featureList.map((feature) => {
                      const f = feature.toLowerCase();
                      let FeatureIcon = CheckCircle2;
                      if (
                        f.includes("air condition") ||
                        f.includes("ac") ||
                        f.includes("cooling")
                      )
                        FeatureIcon = Wind;
                      else if (f.includes("heat") || f.includes("fire"))
                        FeatureIcon = Flame;
                      else if (f.includes("pool") || f.includes("water"))
                        FeatureIcon = Droplets;
                      else if (f.includes("gym") || f.includes("fitness"))
                        FeatureIcon = Dumbbell;
                      else if (
                        f.includes("garden") ||
                        f.includes("park") ||
                        f.includes("yard")
                      )
                        FeatureIcon = Trees;
                      else if (f.includes("garage") || f.includes("parking"))
                        FeatureIcon = CarFront;
                      else if (
                        f.includes("wifi") ||
                        f.includes("internet") ||
                        f.includes("broadband")
                      )
                        FeatureIcon = Wifi;
                      else if (f.includes("security"))
                        FeatureIcon = ShieldCheck;
                      else if (f.includes("kitchen")) FeatureIcon = Utensils;
                      else if (f.includes("balcony") || f.includes("terrace"))
                        FeatureIcon = Building2;

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
              phone={
                site.PropertyDetail.variants.RealEstatePropertyDetail1
                  .contactDetails.phone
              }
              phoneHref={
                site.PropertyDetail.variants.RealEstatePropertyDetail1
                  .contactDetails.phoneHref
              }
              workingHours={
                site.PropertyDetail.variants.RealEstatePropertyDetail1
                  .contactDetails.workingHours
              }
              helpText={
                site.PropertyDetail.variants.RealEstatePropertyDetail1
                  .contactDetails.helpText
              }
            />
          </aside>
        </div>
      </section>
    </main>
  );
}
