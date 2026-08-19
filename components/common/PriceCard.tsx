import { Tag } from "lucide-react";

type PriceCardProps = {
  price: string;
  propertyType: string;
  priceType: string;
  region: string;
};

export default function PriceCard({
  price,
  propertyType,
  priceType,
  region,
}: PriceCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.35)]">
      <p className="text-sm font-medium text-slate-400">Price</p>
      <p className="mt-2 text-[32px] font-extrabold leading-none text-[#2A39CE]">
        {price}
      </p>
      <p className="mt-3 text-sm font-semibold text-[#0B1A33]">
        {propertyType}
      </p>

    </div>
  );
}
