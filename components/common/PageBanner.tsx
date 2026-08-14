import Image from "next/image";
import Link from "next/link";
import type { PageBannerData } from "@/types/home";

type PageBannerProps = {
  data: PageBannerData;
};

function getBreadcrumbHref(label: string) {
  const normalized = label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (normalized === "home") return "/";
  if (normalized === "privacy-policy") return "/privacy-policy";
  if (normalized === "terms-and-conditions") return "/terms-and-conditions";
  if (normalized === "site-map") return "/site-map";
  if (normalized === "get-a-quotes") return "/get-a-quotes";
  if (normalized === "industries-we-serve") return "/industries-we-serve";
  if (normalized === "our-partners") return "/our-partners";
  if (normalized === "property-listing") return "/property-listing";
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
  return `/${normalized}`;
}

export default function PageBanner({ data }: PageBannerProps) {
  return (
    <section className="relative h-[340px] w-full overflow-hidden sm:h-[400px]">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#0B1A33]/50" />
      <div className="page-container relative z-10 flex h-full flex-col items-center justify-center pt-[70px] text-center text-white sm:pt-[78px]">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
          {data.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-slate-200/90">
          {data.breadcrumb.map((item, index) => {
            const isLast = index === data.breadcrumb.length - 1;
            const href = item.href ?? getBreadcrumbHref(item.label);
            return (
              <span
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {index > 0 ? (
                  <span className="text-slate-200/50">/</span>
                ) : null}
                {!isLast ? (
                  <Link
                    href={href}
                    className="text-slate-200 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-white">{item.label}</span>
                )}
              </span>
            );
          })}
        </div>
        {/* <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-100 sm:text-base">
          {data.description}
        </p> */}
      </div>
    </section>
  );
}
