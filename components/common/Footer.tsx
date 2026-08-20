import Image from "next/image";
import Link from "next/link";
import { Building2, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { site, SectionProps, FooterData } from "@/data";



const socialIconMap = {
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

export default function Footer({ data: propData, className }: SectionProps<FooterData> = {}) {
  const data = propData || site.Footer.variants.RealEstateFooter1;
  return (
    <footer className="w-full bg-white border-t border-slate-100 font-sans">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-8 py-8 sm:py-10 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.35fr] lg:gap-10 xl:gap-[50px]">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.svg"
                alt={data.logo}
                width={210}
                height={80}
                priority
                className="h-auto w-[160px] sm:w-[190px] md:w-[210px] object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <h2 className="text-[20px] font-bold leading-snug text-slate-900">{data.logo}</h2>
            <p className="text-[13px] sm:text-[14px] font-normal leading-relaxed text-[#555555] max-w-[320px]">{data.desc}</p>
            <div className="flex items-center gap-[20px] pt-2">
              {data.socialLinks.map((socialLink) => {
                const platformKey = socialLink.label.toLowerCase();
                const Icon = socialIconMap[platformKey as keyof typeof socialIconMap] ?? FaYoutube;
                return (
                  <Link 
                    key={socialLink.label} 
                    href={socialLink.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={socialLink.label} 
                    className="text-[#9AADE0] transition-colors duration-200 hover:text-[#294FC1]"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {data.footerColumns.map((group) => (
            <div key={group.title}>
              <FooterHeading title={group.title} />
              <ul className="mt-[20px] space-y-[12px]">
                {group.links.map((link) => <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>)}
              </ul>
            </div>
          ))}

          <div>
            <FooterHeading title={"Contact Us"} />
            <div className="mt-[20px] space-y-[16px]">
              <ContactBox icon={<Building2 size={20} strokeWidth={2} />}>
                <p className="text-[13px] sm:text-[14px] font-normal leading-normal text-[#555555]">
                  {String(data.footerContact.location).split('\n').map((line) => <span key={line} className="block">{line}</span>)}
                </p>
              </ContactBox>
              {data.footerContact.email && (
                <ContactBox icon={<Mail size={20} strokeWidth={2} />}>
                  <p className="text-[13px] sm:text-[14px] font-normal text-[#555555]">
                    <a href={`mailto:${data.footerContact.email}`} className="hover:text-[#294FC1] transition-colors duration-200">
                      {data.footerContact.email}
                    </a>
                  </p>
                </ContactBox>
              )}
              <ContactBox icon={<Phone size={20} strokeWidth={2} />}>
                <p className="text-[13px] sm:text-[14px] font-normal text-[#555555]">
                  <a href={`tel:${data.footerContact.phone.replace(/\s+/g, '')}`} className="hover:text-[#294FC1] transition-colors duration-200">
                    {data.footerContact.phone}
                  </a>
                </p>
              </ContactBox>
            </div>
          </div>
        </div>
      </div>
      <div className="page-container flex min-h-[70px] items-center justify-center border-t border-slate-100/50 py-4">
        <p className="text-center text-[13px] font-normal text-[#888888]">{data.copyrightText}</p>
      </div>
    </footer>
  );
}

function FooterHeading({ title }: { title: string }) {
  return (
    <div className="w-fit">
      <h3 className="text-[17px] font-bold leading-[22px] text-slate-900">{title}</h3>
      <div className="mt-[8px] flex h-[5px] items-center">
        <span className="block h-[5px] w-[5px] shrink-0 rounded-full bg-[#FF9848]" />
        <span className="ml-[6px] block h-[3px] w-[40px] rounded-full bg-[#294FC1]" />
      </div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <li><Link href={href} className="text-[14px] font-normal leading-normal text-[#555555] transition-colors duration-200 hover:text-[#294FC1]">{children}</Link></li>;
}

function ContactBox({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative ml-[23px]">
      <div className="flex min-h-[70px] w-full items-center rounded-[10px] bg-[#E8ECF8] pl-[36px] pr-[16px]">
        {children}
      </div>
      <div className="absolute -left-[23px] top-1/2 -translate-y-1/2 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#2D53C4] text-white shadow-sm">
        {icon}
      </div>
    </div>
  );
}
