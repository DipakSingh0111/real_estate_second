import { Headset, PhoneCall } from "lucide-react";

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
    <div className="rounded-[24px] bg-[#F8F9FE] p-7 border border-slate-100/50 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#E8EDFF] text-[#1B36B0]">
          <Headset className="h-[26px] w-[26px] stroke-[2]" />
        </div>
        <div className="pt-1">
          <h3 className="text-[19px] font-bold text-[#0B1A33]">Need Help?</h3>
          <p className="mt-1.5 text-[14px] font-medium leading-[1.6] text-slate-500 pr-2">
            {helpText}
          </p>
        </div>
      </div>
      
      <div className="mt-7 space-y-3 pl-1">
        <a
          href={phoneHref}
          className="inline-flex items-center gap-3 text-[21px] font-bold text-[#1B36B0] transition-colors hover:text-blue-800"
        >
          <PhoneCall className="h-5 w-5 stroke-[2.5]" />
          {phone}
        </a>
        <p className="text-[14px] font-medium text-slate-500">{workingHours}</p>
      </div>
    </div>
  );
}
