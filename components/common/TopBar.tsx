import { Mail, MapPin, Phone } from "lucide-react";
import type { TopBarData } from "@/types/home";

type TopBarProps = {
  data: TopBarData;
};

export default function TopBar({ data }: TopBarProps) {
  return (
    <div className="w-full bg-[#0B1A33] font-[family-name:var(--font-poppins)] text-white">
      <div className="flex h-9 w-full items-center justify-between gap-4 px-6 text-[12px] sm:px-10 lg:h-10 lg:pl-10 lg:pr-10 xl:pl-14 xl:pr-14">
        <div className="flex min-w-0 items-center gap-5 sm:gap-7">
          <a
            href={data.phoneHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-[#9BB4FF]"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 stroke-[2.2]" aria-hidden />
            <span className="font-medium tracking-wide">{data.phone}</span>
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
            {data.address}
          </span>
        </div>
      </div>
    </div>
  );
}
