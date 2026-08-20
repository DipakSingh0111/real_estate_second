import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, Maximize2 } from "lucide-react";
import { propertySlug } from "@/lib/property";

export type PropertyCardItem = {
  title: string;
  image: string;
  price: string;
  slug?: string;
  builder?: string;
  subtitle?: string;
  location?: string;
  category?: string;
  saleLabel?: string;
  bedrooms?: number | string;
  bathrooms?: number | string;
  sqft?: number | string;
  features?: Array<{ label: string; value: string } | string>;
};

type PropertyCardProps = {
  data?: PropertyCardItem;
  saleLabel?: string;
  className?: string;
};

function featureValue(
  property: PropertyCardItem,
  label: string,
  direct?: number | string,
) {
  if (direct !== undefined && direct !== null && direct !== "") {
    return String(direct);
  }

  const match = property.features?.find((feature) => {
    if (typeof feature === "string") return false;
    return feature.label.toLowerCase() === label.toLowerCase();
  });

  if (match && typeof match !== "string") {
    return match.value.replace(/\s*sq\.?\s*ft\.?/i, "").trim();
  }

  return "-";
}

export default function PropertyCard({
  data: property,
  saleLabel = "FOR SALE",
  className = "",
}: PropertyCardProps) {
  if (!property) return null;

  const href = `/property-listing/${property.slug || propertySlug(property.title)}`;
  const badge = property.saleLabel || property.category || saleLabel;
  const subtitle =
    property.builder || property.subtitle || property.location || "";
  const bedrooms = featureValue(property, "Bedrooms", property.bedrooms);
  const bathrooms = featureValue(property, "Bathrooms", property.bathrooms);
  const sqft = featureValue(property, "Area", property.sqft);

  const stats = [
    { icon: Bed, value: bedrooms, label: "Bedrooms" },
    { icon: Bath, value: bathrooms, label: "Bathrooms" },
    { icon: Maximize2, value: sqft, label: "Sq Ft" },
  ];

  return (
    <Link href={href} className={`block h-full ${className}`}>
      <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
        <div className="relative h-44 sm:h-52 md:h-56 w-full overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 sm:left-4 sm:top-4 z-10 rounded-md bg-[#1e3a8a] px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
            {badge}
          </span>

          <span className="absolute bottom-0 right-0 z-10 rounded-tl-xl bg-[#2563eb] px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-md">
            {property.price}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold leading-snug text-[#0B132A] transition-colors group-hover:text-[#2563eb]">
            {property.title}
          </h3>

          {subtitle ? (
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold text-[#2563eb]">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-4 mb-3 sm:mt-5 sm:mb-4 h-px w-full bg-slate-100" />

          <div className="mt-auto grid grid-cols-3 divide-x divide-slate-100">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 px-1 sm:px-2 text-center"
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#2563eb]" strokeWidth={2} />
                <span className="text-sm sm:text-base font-extrabold text-[#0B132A]">
                  {value}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-400">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
