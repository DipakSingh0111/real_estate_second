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
      <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-600">
        <span>{priceType}</span>
        <span className="font-medium text-[#0B1A33]">{region}</span>
      </div>
      <button
        type="button"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2A39CE] px-4 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#2330b0]"
      >
        <Tag className="h-4 w-4" />
        View Price
      </button>
    </div>
  );
}
