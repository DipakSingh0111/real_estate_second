import Image from "next/image";
import Link from "next/link";
import type { PropertyDeal } from "@/types/home";
import { propertySlug } from "@/lib/property";

type PropertyCardProps = {
  property: PropertyDeal;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={`/property-listing/${propertySlug(property.title)}`}
      className="group block overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_22px_60px_-35px_rgba(15,23,42,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_-40px_rgba(15,23,42,0.25)]"
    >
      <div className="relative overflow-hidden rounded-t-[36px] bg-slate-100">
        <div className="relative h-72 sm:h-64">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="absolute inset-x-0 top-4 flex items-start justify-between px-4">
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-sm">
            Top Deals
          </span>
          <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-sm">
            {property.price}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-950 transition group-hover:text-brand">
            {property.title}
          </h3>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
            {property.location}
          </p>
        </div>

        <div className="space-y-4 rounded-[28px] border border-slate-100 bg-slate-50 p-4">
          <div className="flex items-center justify-between text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            <span>Bedrooms</span>
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center justify-between text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            <span>Bathrooms</span>
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center justify-between text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            <span>Square Ft</span>
            <span>{property.sqft}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
