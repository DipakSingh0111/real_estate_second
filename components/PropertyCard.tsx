import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Building2, MapPin, Square } from "lucide-react";
import { SectionProps, PropertyDeal } from "@/data";
import { propertySlug } from "@/lib/property";

export default function PropertyCard({ data: property, className }: SectionProps<PropertyDeal> = {}) {
  if (!property) return null;
  const stats = [
    { label: "Bedrooms", value: property.bedrooms, icon: BedDouble },
    { label: "Bathrooms", value: property.bathrooms, icon: Bath },
    { label: "Square Ft", value: property.sqft, icon: Square },
  ];

  return (
    <Link
      href={`/property-listing/${propertySlug(property.title)}`}
      className="group block overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-36px_rgba(15,23,42,0.3)]"
    >
      <div className="relative overflow-hidden rounded-t-[26px] bg-slate-100">
        <div className="relative h-64 sm:h-72">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="absolute left-4 top-4 rounded-xl bg-[#2A39CE] px-3 py-2 text-sm font-bold text-white shadow-lg">
          {property.price}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-2xl font-semibold leading-tight text-slate-900 transition group-hover:text-[#2A39CE]">
            {property.title}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
            <MapPin className="h-3.5 w-3.5 text-[#2A39CE]" />
            <span>{property.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 rounded-[18px] bg-slate-50 p-3">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-xl bg-white p-2 text-center shadow-sm"
            >
              <div className="mb-2 flex items-center justify-center text-[#2A39CE]">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
                {label}
              </div>
              <div className="mt-1 text-lg font-bold text-slate-900">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
