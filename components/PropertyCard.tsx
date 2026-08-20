import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, Maximize2, MapPin } from "lucide-react";
import { SectionProps, PropertyDeal } from "@/data";
import { propertySlug } from "@/lib/property";

export default function PropertyCard({ data: property, className = "" }: SectionProps<PropertyDeal> & { className?: string }) {
  if (!property) return null;

  return (
    <Link
      href={`/property-listing/${propertySlug(property.title)}`}
      className={`block h-full ${className}`}
    >
      <div className="group flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
        <div>
          <div className="relative h-56 w-full overflow-hidden rounded-t-[24px]">
            <Image
              src={property.image}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-3 right-3 rounded-xl bg-[#2A39CE] px-4 py-2 text-sm font-extrabold text-white shadow-lg">
              {property.price}
            </div>
          </div>

          <div className="p-6">
            <h3 className="mb-3 text-xl font-extrabold leading-snug text-[#0B132A] transition-colors group-hover:text-[#2A39CE]">
              {property.title}
            </h3>
            <div className="mb-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2A39CE]">
              <MapPin className="h-3.5 w-3.5 stroke-[3]" />
              <span>{property.location}</span>
            </div>
            <div className="mb-6 h-px w-full bg-gray-100" />
            <div className="grid grid-cols-3 gap-2 text-gray-500">
              <div>
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                  <Bed className="h-4 w-4 text-[#2A39CE]" />
                  <span>Bedrooms</span>
                </div>
                <p className="text-lg font-bold text-[#0B132A]">
                  {property.bedrooms}
                </p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                  <Bath className="h-4 w-4 text-[#2A39CE]" />
                  <span>Bathrooms</span>
                </div>
                <p className="text-lg font-bold text-[#0B132A]">
                  {property.bathrooms}
                </p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                  <Maximize2 className="h-4 w-4 text-[#2A39CE]" />
                  <span>Square Ft</span>
                </div>
                <p className="text-lg font-bold text-[#0B132A]">
                  {property.sqft}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
