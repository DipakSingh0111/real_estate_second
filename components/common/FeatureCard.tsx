import { Building2, Home, ShieldCheck } from "lucide-react";

type FeatureCardProps = {
  iconName: string;
  title: string;
  text: string;
  buttonText: string;
  accent: boolean;
};

const iconMap: Record<string, typeof Building2> = {
  building: Building2,
  home: Home,
  shield: ShieldCheck,
};

export default function FeatureCard({
  iconName,
  title,
  text,
  buttonText,
  accent,
}: FeatureCardProps) {
  const Icon = iconMap[iconName] ?? Building2;

  return (
    <div
      className={`rounded-[32px] border border-transparent bg-white p-8 shadow-[0_20px_60px_rgba(20,38,78,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(20,38,78,0.08)] ${
        accent ? "border-[#E8E9FF]" : ""
      }`}
    >
      <div
        className={`mb-7 inline-flex h-[70px] w-[70px] items-center justify-center rounded-[24px] ${
          accent ? "bg-[#FFF5ED] text-[#FF7626]" : "bg-[#EEF3FF] text-[#1D4ED8]"
        }`}
      >
        <Icon size={28} />
      </div>

      <h3 className="text-[22px] font-semibold tracking-[-0.4px] text-[#102650]">
        {title}
      </h3>

      <p className="mt-4 text-[15px] leading-[1.9] text-[#5A6274] text-justify">{text}</p>

      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold uppercase tracking-[0.14em] text-[#1D4ED8]"
      >
        {buttonText}
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
