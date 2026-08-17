import { Headphones, Phone } from "lucide-react";

type NeedHelpCardProps = {
  phone: string;
  phoneHref: string;
  workingHours: string;
  helpText: string;
};

export default function NeedHelpCard({
  phone,
  phoneHref,
  workingHours,
  helpText,
}: NeedHelpCardProps) {
  return (
    <div className="rounded-2xl bg-[#EEF2FF] p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2A39CE] shadow-sm">
        <Headphones className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-[#0B1A33]">Need Help?</h3>
      <p className="mt-1 text-sm text-slate-500">{helpText}</p>
      <a
        href={phoneHref}
        className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-[#2A39CE]"
      >
        <Phone className="h-4 w-4" />
        {phone}
      </a>
      <p className="mt-2 text-xs text-slate-500">{workingHours}</p>
    </div>
  );
}
