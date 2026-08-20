import { Mail, MapPin, Phone } from "lucide-react";
import { site, SectionProps, TopBarData } from "@/data";

export default function TopBar({ data: propData, className }: SectionProps<TopBarData> = {}) {
  const data = propData || site.Topbar.variants.RealEstateTopbar1;
  return (
    <div className="w-full bg-[#0B1A33] font-[family-name:var(--font-poppins)] text-white">
      <div className="page-container flex h-8 sm:h-9 items-center justify-between gap-3 text-[11px] sm:text-[12px] lg:h-10">
        <div className="flex min-w-0 items-center gap-3 sm:gap-5 md:gap-7">
          <a
            href={data.phoneHref}
            className="inline-flex items-center gap-1.5 sm:gap-2 transition-colors hover:text-[#9BB4FF]"
          >
            <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 stroke-[2.2]" aria-hidden />
            <span className="font-medium tracking-wide truncate">{data.phone}</span>
          </a>

          <a
            href={data.emailHref}
            className="hidden min-w-0 items-center gap-2 transition-colors hover:text-[#9BB4FF] sm:inline-flex"
          >
            <Mail className="h-3.5 w-3.5 shrink-0 stroke-[2.2]" aria-hidden />
            <span className="truncate font-medium tracking-wide">
              {data.email}
            </span>
          </a>
        </div>

        <div className="hidden min-w-0 items-center gap-2 text-white/85 md:inline-flex">
          <MapPin className="h-3.5 w-3.5 shrink-0 stroke-[2.2]" aria-hidden />
          <span className="truncate font-medium tracking-wide">
            {data.location}
          </span>
        </div>
      </div>
    </div>
  );
}
