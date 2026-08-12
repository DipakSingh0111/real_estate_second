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
  Headphones,
  MapPin,
  Maximize2,
  Phone,
  Send,
  Tag,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import type { PropertyDeal, PageBannerData } from "@/types/home";
import PageBanner from "@/components/common/PageBanner";

type PropertyDetailProps = {
  property: PropertyDeal;
  galleryImages?: string[];
  banner: PageBannerData;
};

type TabKey = "overview" | "details" | "features";

export default function PropertyDetail({
  property,
  galleryImages = [],
  banner,
}: PropertyDetailProps) {
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

  const featureList = [
    "Air Conditioning",
    "Swimming Pool",
    "Garden Area",
    "Security System",
    "Parking Space",
    "Modern Kitchen",
    "Balcony / Terrace",
    "High-Speed Internet",
  ];

  return (
    <main className="bg-white">
      <PageBanner data={banner} />

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
            <div className="mt-8">
              <h1 className="text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-[#0B1A33] sm:text-[34px]">
                {property.title}
              </h1>
              <div className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                <MapPin className="h-4 w-4 text-slate-400" />
                {property.location}
              </div>
              <p className="mt-5 max-w-3xl text-[14px] leading-[1.8] text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                  ["overview", "Overview"],
                  ["details", "Property Details"],
                  ["features", "Features"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`rounded-md px-5 py-2.5 text-sm font-semibold transition ${
                    activeTab === key
                      ? "bg-[#2A39CE] text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-[#2A39CE]/40 hover:text-[#2A39CE]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <div className="mt-6 rounded-xl border border-slate-100 bg-white">
              {activeTab === "overview" ? (
                <div className="divide-y divide-slate-100">
                  {overviewRows.map((row) => {
                    const Icon = row.icon;
                    return (
                      <div
                        key={row.label}
                        className="flex items-center gap-4 px-4 py-3.5 sm:px-5"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF1FF] text-[#2A39CE]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="flex-1 text-sm font-medium text-slate-600">
                          {row.label}
                        </span>
                        <span className="text-sm font-semibold text-[#0B1A33]">
                          {row.value}
                        </span>
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
            <div className="mt-10">
              <h2 className="text-xl font-bold text-[#0B1A33]">
                Property Location
              </h2>
              <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
                <iframe
                  title={`${property.title} location`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    `${property.title} ${property.location}`,
                  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  className="h-[280px] w-full border-0 sm:h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            {/* Price card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.35)]">
              <p className="text-sm font-medium text-slate-400">Price</p>
              <p className="mt-2 text-[32px] font-extrabold leading-none text-[#2A39CE]">
                {property.price}
              </p>
              <p className="mt-3 text-sm font-semibold text-[#0B1A33]">
                Semi-Detached House
              </p>
              <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-600">
                <span>Ex-showroom Price</span>
                <span className="font-medium text-[#0B1A33]">Australia ▾</span>
              </div>
              <button
                type="button"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2A39CE] px-4 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#2330b0]"
              >
                <Tag className="h-4 w-4" />
                View Price
              </button>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.35)]">
              <h3 className="text-lg font-bold text-[#0B1A33]">Get in Touch</h3>
              <div className="mt-1 h-[3px] w-10 rounded-full bg-[#2A39CE]" />
              <form
                className="mt-5 space-y-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#2A39CE]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#2A39CE]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#2A39CE]"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#2A39CE]"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2A39CE] px-4 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#2330b0]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
              <p className="mt-3 flex items-start gap-2 text-[11px] leading-5 text-slate-400">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2A39CE]" />
                We respect your privacy. Your details are safe with us.
              </p>
            </div>

            {/* Need help */}
            <div className="rounded-2xl bg-[#EEF2FF] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2A39CE] shadow-sm">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#0B1A33]">
                Need Help?
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Our property experts are ready to assist you.
              </p>
              <a
                href="tel:+919876543210"
                className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-[#2A39CE]"
              >
                <Phone className="h-4 w-4" />
                +91 987 654 3210
              </a>
              <p className="mt-2 text-xs text-slate-500">
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
