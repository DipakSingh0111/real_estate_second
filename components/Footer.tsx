import Image from "next/image";
import Link from "next/link";
import { Building2, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import type { FooterData } from "@/types/home";

type FooterProps = { data: FooterData };

const socialIconMap = {
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-[70px]">
        <div className="grid grid-cols-1 gap-12 py-[38px] md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.35fr] lg:gap-[55px]">
          <div>
            <Link href="/" className="inline-block">
              <Image src={data.logo.src} alt={data.logo.alt} width={235} height={90} priority className="h-auto w-[235px] object-contain" />
            </Link>
            <h2 className="mt-[5px] max-w-[230px] text-[27px] font-bold leading-[1.45] text-slate-900">{data.title}</h2>
            <p className="mt-[26px] max-w-[330px] text-[18px] font-normal leading-[1.78] text-[#555555]">{data.description}</p>
            <div className="mt-[38px] flex items-center gap-[27px]">
              {data.socialLinks.map((socialLink) => {
                const Icon = socialIconMap[socialLink.platform as keyof typeof socialIconMap] ?? FaYoutube;
                return (
                  <Link key={socialLink.platform} href={socialLink.href} aria-label={socialLink.label} className="text-[#9AADE0] transition-colors duration-200 hover:text-[#294FC1]">
                    <Icon size={21} />
                  </Link>
                );
              })}
            </div>
          </div>

          {data.linkGroups.map((group) => (
            <div key={group.title}>
              <FooterHeading title={group.title} />
              <ul className="mt-[29px] space-y-[17px]">
                {group.links.map((link) => <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>)}
              </ul>
            </div>
          ))}

          <div>
            <FooterHeading title={data.contact.heading} />
            <div className="mt-[27px] space-y-[25px]">
              <ContactBox icon={<Building2 size={29} strokeWidth={2.4} />}>
                <p className="text-[18px] font-medium leading-[1.45] text-[#555555]">
                  {data.contact.address.map((line) => <span key={line} className="block">{line}</span>)}
                </p>
              </ContactBox>
              <ContactBox icon={<Phone size={29} strokeWidth={2.4} />}>
                <p className="text-[18px] font-medium text-[#555555]">{data.contact.phoneNumber}</p>
              </ContactBox>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-[115px] items-center justify-center px-6">
        <p className="text-center text-[18px] font-normal text-[#888888]">{data.copyright}</p>
      </div>
    </footer>
  );
}

function FooterHeading({ title }: { title: string }) {
  return (
    <div className="w-fit">
      <h3 className="text-[27px] font-bold leading-[32px] text-slate-900">{title}</h3>
      <div className="mt-[11px] flex h-[7px] items-center">
        <span className="block h-[7px] w-[7px] shrink-0 rounded-full bg-[#FF9848]" />
        <span className="ml-[8px] block h-[5px] w-[58px] rounded-full bg-[#294FC1]" />
      </div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <li><Link href={href} className="text-[18px] font-normal leading-[1.5] text-[#555555] transition-colors duration-200 hover:text-[#294FC1]">{children}</Link></li>;
}

function ContactBox({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex min-h-[105px] w-full items-center">
      <div className="relative z-10 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#2D53C4] text-white">{icon}</div>
      <div className="-ml-[8px] flex min-h-[105px] flex-1 items-center rounded-[10px] bg-[#E8ECF8] pl-[55px] pr-[18px]">{children}</div>
    </div>
  );
}
