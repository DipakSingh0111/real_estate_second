import Link from "next/link";
import Image from "next/image";

import { Building2, Phone } from "lucide-react";

import {
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-[70px]">
        <div
          className="
            grid
            grid-cols-1
            gap-12
            py-[38px]
            md:grid-cols-2
            lg:grid-cols-[1.35fr_1fr_1fr_1.35fr]
            lg:gap-[55px]
          "
        >
          {/* =====================================================
              BRAND / ABOUT
          ====================================================== */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Real Estate Company"
                width={235}
                height={90}
                priority
                className="h-auto w-[235px] object-contain"
              />
            </Link>

            {/* Title */}
            <h2
              className="
                mt-[5px]
                max-w-[230px]
                text-[27px]
                font-bold
                leading-[1.45]
                text-black
              "
            >
              Best real estate
              <br />
              house
            </h2>

            {/* Description */}
            <p
              className="
                mt-[26px]
                max-w-[330px]
                text-[18px]
                font-normal
                leading-[1.78]
                text-[#555555]
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Social Media */}
            <div className="mt-[38px] flex items-center gap-[27px]">
              <Link
                href="#"
                aria-label="YouTube"
                className="text-[#9AADE0] transition-colors duration-200 hover:text-[#294FC1]"
              >
                <FaYoutube size={21} />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-[#9AADE0] transition-colors duration-200 hover:text-[#294FC1]"
              >
                <FaLinkedinIn size={21} />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="text-[#9AADE0] transition-colors duration-200 hover:text-[#294FC1]"
              >
                <FaTwitter size={21} />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="text-[#9AADE0] transition-colors duration-200 hover:text-[#294FC1]"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="text-[#9AADE0] transition-colors duration-200 hover:text-[#294FC1]"
              >
                <FaInstagram size={22} />
              </Link>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ====================================================== */}
          <div>
            <FooterHeading title="Quick Links" />

            <ul className="mt-[29px] space-y-[17px]">
              <FooterLink href="/about">About Us</FooterLink>

              <FooterLink href="/contact">Contact Us</FooterLink>

              <FooterLink href="/properties">Products</FooterLink>

              <FooterLink href="/login">Login</FooterLink>

              <FooterLink href="/signup">Sign Up</FooterLink>
            </ul>
          </div>

          {/* =====================================================
              SUPPORT
          ====================================================== */}
          <div>
            <FooterHeading title="Support" />

            <ul className="mt-[29px] space-y-[17px]">
              <FooterLink href="/affiliates">Affiliates</FooterLink>

              <FooterLink href="/sitemap">Sitemap</FooterLink>

              <FooterLink href="/cancellation-policy">
                Cancelation Policy
              </FooterLink>

              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>

              <FooterLink href="/legal-disclaimer">Legal Disclaimer</FooterLink>
            </ul>
          </div>

          {/* =====================================================
              CONTACT
          ====================================================== */}
          <div>
            <FooterHeading title="Contact" />

            <div className="mt-[27px] space-y-[25px]">
              {/* Address */}
              <ContactBox icon={<Building2 size={29} strokeWidth={2.4} />}>
                <p className="text-[18px] font-medium leading-[1.45] text-[#555555]">
                  77 Highfield Road
                  <br />
                  London N36 7SB
                </p>
              </ContactBox>

              {/* Phone */}
              <ContactBox icon={<Phone size={29} strokeWidth={2.4} />}>
                <p className="text-[18px] font-medium text-[#555555]">
                  987 654 3210
                </p>
              </ContactBox>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}
      <div className="flex min-h-[115px] items-center justify-center px-6">
        <p className="text-center text-[18px] font-normal text-[#888888]">
          Copyright © 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ============================================================
   FOOTER HEADING
   Orange Dot + Blue Line
============================================================ */

function FooterHeading({ title }: { title: string }) {
  return (
    <div className="w-fit">
      {/* Heading */}
      <h3
        className="
          text-[27px]
          font-bold
          leading-[32px]
          text-black
        "
      >
        {title}
      </h3>

      {/* Orange Dot + Blue Line */}
      <div className="mt-[11px] flex h-[7px] items-center">
        {/* Orange Dot */}
        <span
          className="
            block
            h-[7px]
            w-[7px]
            shrink-0
            rounded-full
            bg-[#FF9848]
          "
        />

        {/* Blue Line */}
        <span
          className="
            ml-[8px]
            block
            h-[5px]
            w-[58px]
            rounded-full
            bg-[#294FC1]
          "
        />
      </div>
    </div>
  );
}

/* ============================================================
   FOOTER LINK
============================================================ */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="
          text-[18px]
          font-normal
          leading-[1.5]
          text-[#555555]
          transition-colors
          duration-200
          hover:text-[#294FC1]
        "
      >
        {children}
      </Link>
    </li>
  );
}

/* ============================================================
   CONTACT BOX
============================================================ */

function ContactBox({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[105px] w-full items-center">
      {/* Blue Circle */}
      <div
        className="
          relative
          z-10
          flex
          h-[62px]
          w-[62px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#2D53C4]
          text-white
        "
      >
        {icon}
      </div>

      {/* Light Blue Box */}
      <div
        className="
          -ml-[8px]
          flex
          min-h-[105px]
          flex-1
          items-center
          rounded-[10px]
          bg-[#E8ECF8]
          pl-[55px]
          pr-[18px]
        "
      >
        {children}
      </div>
    </div>
  );
}
