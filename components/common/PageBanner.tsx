"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { site, SectionProps, PageBannerData } from "@/data";

const VALID_PAGES = new Set([
  "/",
  "/about",
  "/services",
  "/pricing",
  "/property-listing",
  "/team",
  "/testimonial",
  "/blog",
  "/awards",
  "/faq",
  "/contact",
  "/brochure",
  "/careers",
  "/enquiry",
  "/gallery",
  "/get-a-quotes",
  "/industries-we-serve",
  "/our-partners",
  "/privacy-policy",
  "/site-map",
  "/terms-and-conditions",
]);

function getBreadcrumbHref(label: string) {
  const normalized = label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (normalized === "home") return "/";
  if (normalized === "privacy-policy") return "/privacy-policy";
  if (normalized === "terms-and-conditions") return "/terms-and-conditions";
  if (normalized === "site-map" || normalized === "sitemap") return "/site-map";
  if (normalized === "get-a-quotes") return "/get-a-quotes";
  if (normalized === "industries-we-serve") return "/industries-we-serve";
  if (normalized === "our-partners") return "/our-partners";
  if (normalized === "property-listing" || normalized === "properties" || normalized === "listings") return "/property-listing";
  if (normalized === "team") return "/team";
  if (normalized === "testimonial") return "/testimonial";
  if (normalized === "blog") return "/blog";
  if (normalized === "awards") return "/awards";
  if (normalized === "faq") return "/faq";
  if (normalized === "contact-us" || normalized === "contact")
    return "/contact";
  if (normalized === "about-us" || normalized === "about") return "/about";
  if (normalized === "pricing") return "/pricing";
  if (normalized === "services") return "/services";
  if (normalized === "brochure") return "/brochure";
  if (normalized === "careers") return "/careers";
  if (normalized === "enquiry") return "/enquiry";
  if (normalized === "gallery") return "/gallery";

  const path = `/${normalized}`;
  return VALID_PAGES.has(path) ? path : "";
}

export default function PageBanner({ data: propData, className }: SectionProps<PageBannerData> = {}) {
  const pathname = usePathname();
  const segment = (pathname || "").split("/")[1] || "about";
  const pathKey = segment.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  const innerBanners = site.PageBanner.variants.RealEstateInnerBanner1;
  const data = propData || (innerBanners as any)[segment] || (innerBanners as any)[pathKey] || innerBanners.about;
  if (!data) return null;
  return (
    <section className="relative h-[200px] w-full overflow-hidden sm:h-[260px] md:h-[300px] lg:h-[360px]">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#0B1A33]/50" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="page-container relative z-10 flex h-full flex-col items-center justify-center pt-14 text-center text-white sm:pt-16 md:pt-20"
      >
        <h1 className="px-2 text-xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {data.title}
        </h1>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 px-2 text-[11px] text-slate-200/90 sm:mt-3 sm:gap-2 sm:text-sm">
          {data.breadcrumb.map((item, index) => {
            const isLast = index === data.breadcrumb.length - 1;
            const href = item.href ?? getBreadcrumbHref(item.label);
            const isClickable = !isLast && href !== "";
            return (
              <span
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {index > 0 ? (
                  <span className="text-slate-200/50">/</span>
                ) : null}
                {isClickable ? (
                  <Link
                    href={href}
                    className="text-slate-200 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "font-semibold text-white" : "text-slate-200/60"}>
                    {item.label}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
