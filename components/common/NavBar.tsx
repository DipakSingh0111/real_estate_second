"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site, SectionProps, NavbarData } from "@/data";

export default function Navbar({
  data: propData,
}: SectionProps<NavbarData> = {}) {
  const data = propData || site.Header.variants.RealEstateHeader1;
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openChildIndex, setOpenChildIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeout.current !== null) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const handleOpenMenu = (index: number) => {
    clearCloseTimeout();
    setOpenIndex(index);
  };

  const handleCloseMenu = () => {
    clearCloseTimeout();
    closeTimeout.current = window.setTimeout(() => {
      setOpenIndex(null);
      setOpenChildIndex(null);
      closeTimeout.current = null;
    }, 120);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdown(null);
    setOpenIndex(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isHomePage = pathname === "/";
  const overImage = isHomePage && !scrolled && !mobileOpen;

  return (
    <header
      className={`relative w-full font-[family-name:var(--font-poppins)] transition-all duration-300 ${
        overImage
          ? "bg-transparent"
          : "border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.25)] backdrop-blur-md"
      }`}
    >
      <div className="page-container flex h-[64px] w-full items-center justify-between gap-3 sm:h-[72px] lg:h-[82px] lg:pr-6 xl:pr-8">
        <Link href="/" className="relative z-[110] shrink-0 max-w-[210px] sm:max-w-[220px] md:max-w-none">
          <Image
            src={"/images/logo.svg"}
            alt={data.logo}
            width={240}
            height={64}
            priority
            className="h-14 w-auto object-contain object-left sm:h-16 md:h-14 lg:h-16"
          />
        </Link>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={`relative z-[110] inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] transition lg:hidden ${
            overImage
              ? "bg-slate-900/5 text-slate-800 hover:bg-slate-900/10"
              : "bg-white text-slate-800 shadow-[0_12px_28px_-12px_rgba(16,42,86,0.45)] hover:text-[#3F51DE]"
          }`}
        >
          <span className="flex w-[18px] flex-col items-start gap-[5px]">
            <span
              className={`block h-[2px] rounded-full bg-current transition ${
                mobileOpen ? "w-full translate-y-[7px] rotate-45" : "w-full"
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-current transition ${
                mobileOpen ? "w-full scale-0 opacity-0" : "w-[12px]"
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-current transition ${
                mobileOpen ? "w-full -translate-y-[7px] -rotate-45" : "w-full"
              }`}
            />
          </span>
        </button>

        {/* Right side: Desktop navigation */}
        <nav className="hidden h-full min-w-0 flex-1 items-center justify-end lg:flex">
          <ul className="flex flex-nowrap items-center justify-end gap-x-1 xl:gap-x-2 2xl:gap-x-3">
            {data.menu.map((link, index) => {
              const active =
                Boolean((link as any).active) ||
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              const hasDropdown =
                !!link.children && link.children && link.children.length > 0;
              const isOpen = openIndex === index;
              const isContactUs = link.label.toUpperCase() === "CONTACT US";

              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleOpenMenu(index)}
                  onMouseLeave={handleCloseMenu}
                >
                  <Link
                    href={link.href}
                    className={
                      isContactUs
                        ? `relative flex items-center gap-1.5 rounded-md px-4 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] whitespace-nowrap transition-all xl:text-[14px] ${
                            overImage
                              ? "bg-[#3F51DE] text-white shadow-md hover:bg-[#2c3ab8]"
                              : "bg-[#3F51DE] text-white shadow-md hover:bg-[#2c3ab8]"
                          }`
                        : `group relative flex items-center gap-1.5 py-2 text-[13px] font-semibold uppercase tracking-[0.06em] whitespace-nowrap transition-colors xl:text-[14px] ${
                            active
                              ? "text-[#3b55ce]"
                              : "text-slate-800 hover:text-[#3b55ce]"
                          }`
                    }
                  >
                    {link.label}
                    {hasDropdown ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        className="mt-px"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                    {!isContactUs && (
                      <span
                        className={`absolute inset-x-0 -bottom-0.5 mx-auto h-[2.5px] rounded-full bg-[#3b55ce] transition-all duration-300 ease-out ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    )}
                  </Link>

                  {hasDropdown && link.children ? (
                    <div
                      className={`absolute left-0 top-full z-[120] pt-3 transition duration-150 ${
                        isOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      }`}
                      onMouseEnter={() => handleOpenMenu(index)}
                    >
                      <div className="min-w-[230px] overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_28px_60px_-28px_rgba(16,42,86,0.45)]">
                        {link.children.map((item, itemIndex) => {
                          const hasChildren =
                            (item as any).children &&
                            (item as any).children.length > 0;
                          const isChildOpen =
                            isOpen && openChildIndex === itemIndex;

                          return (
                            <div
                              key={item.href}
                              className="relative"
                              onMouseEnter={() => {
                                clearCloseTimeout();
                                setOpenChildIndex(itemIndex);
                              }}
                            >
                              <Link
                                href={item.href}
                                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.04em] text-slate-600 transition hover:bg-slate-50 hover:text-[#3F51DE]"
                              >
                                {item.label}
                                {hasChildren ? <span>›</span> : null}
                              </Link>

                              {hasChildren && (item as any).children ? (
                                <div
                                  className={`absolute left-full top-0 ml-1 min-w-[210px] rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_28px_60px_-28px_rgba(16,42,86,0.45)] transition ${
                                    isChildOpen
                                      ? "visible opacity-100"
                                      : "invisible opacity-0"
                                  }`}
                                >
                                  {(item as any).children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="block rounded-xl px-3.5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.04em] text-slate-600 transition hover:bg-slate-50 hover:text-[#3F51DE]"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[90] bg-[#0B1A33]/45 backdrop-blur-[2px] transition lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      <div
        className={`absolute inset-x-0 top-full z-[95] max-h-[min(78vh,640px)] overflow-y-auto border-t border-slate-100 bg-white shadow-[0_28px_60px_-28px_rgba(16,42,86,0.45)] transition duration-300 lg:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="page-container py-3">
          {data.menu.map((link, index) => {
            const hasDropdown =
              !!link.children && link.children && link.children.length > 0;
            const isOpen = mobileDropdown === index;
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li
                key={link.label}
                className="border-b border-slate-100 last:border-b-0"
              >
                <div className="flex items-center">
                  {hasDropdown ? (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.label} submenu`}
                      onClick={() =>
                        setMobileDropdown((v) => (v === index ? null : index))
                      }
                      className={`flex flex-1 items-center justify-between px-1 py-3.5 text-[14px] font-semibold uppercase tracking-[0.05em] ${
                        active ? "text-[#3F51DE]" : "text-[#1A2744]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="flex h-10 w-10 items-center justify-center text-slate-500">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          className={`transition ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M6 9l6 6 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex-1 px-1 py-3.5 text-[14px] font-semibold uppercase tracking-[0.05em] ${
                        active ? "text-[#3F51DE]" : "text-[#1A2744]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
                {hasDropdown && link.children && isOpen ? (
                  <ul className="mb-2 ml-2 space-y-0.5 border-l border-slate-200 pl-3">
                    {link.children.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2.5 text-[12px] font-medium uppercase tracking-[0.04em] text-slate-500 transition hover:bg-slate-50 hover:text-[#3F51DE]"
                        >
                          {item.label}
                        </Link>
                        {(item as any).children ? (
                          <ul className="mb-1 ml-2 border-l border-slate-100 pl-2">
                            {(item as any).children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-lg px-3 py-2 text-[11px] font-medium text-slate-400 transition hover:text-[#3F51DE]"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
