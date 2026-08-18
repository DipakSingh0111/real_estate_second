"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { NavbarData } from "@/types/home";

type NavBarProps = {
  data: NavbarData;
};

export default function Navbar({ data }: NavBarProps) {
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
      className={`relative w-full font-[family-name:var(--font-poppins)] transition-all duration-300 ${overImage
        ? "bg-transparent"
        : "border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.25)] backdrop-blur-md"
        }`}
    >
      <div className="page-container !px-0 flex h-[72px] w-full items-center lg:h-[82px]">
        {/* Left side: Logo (matches hero banner left text column) */}
        <div className="flex h-full w-full items-center justify-between pl-[var(--site-gutter)] pr-[var(--site-gutter)] lg:w-[44%] lg:pr-8 xl:w-[42%] xl:pr-12 2xl:w-[40%]">
          <Link href="/" className="relative z-[110] shrink-0">
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={210}
              height={56}
              priority
              className="h-10 w-auto object-contain object-left sm:h-11"
            />
          </Link>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`relative z-[110] inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] transition lg:hidden ${overImage
              ? "bg-slate-900/5 text-slate-800 hover:bg-slate-900/10"
              : "bg-white text-slate-800 shadow-[0_12px_28px_-12px_rgba(16,42,86,0.45)] hover:text-[#3F51DE]"
              }`}
          >
            <span className="flex w-[18px] flex-col items-start gap-[5px]">
              <span
                className={`block h-[2px] rounded-full bg-current transition ${mobileOpen ? "w-full translate-y-[7px] rotate-45" : "w-full"
                  }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition ${mobileOpen ? "w-full scale-0 opacity-0" : "w-[12px]"
                  }`}
              />
              <span
                className={`block h-[2px] rounded-full bg-current transition ${mobileOpen ? "w-full -translate-y-[7px] -rotate-45" : "w-full"
                  }`}
              />
            </span>
          </button>
        </div>

        {/* Right side: Desktop navigation (starts aligned with Hero image start, HOME sits right over the image) */}
        <nav className="hidden h-full pr-[var(--site-gutter)] lg:flex lg:w-[56%] lg:items-center lg:justify-start lg:pl-8 xl:w-[58%] xl:pl-10 2xl:w-[60%]">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 xl:gap-x-7 2xl:gap-x-8">
            {data.navLinks.map((link, index) => {
              const active =
                Boolean(link.active) ||
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              const hasDropdown =
                link.hasDropdown && link.dropdown && link.dropdown.length > 0;
              const isOpen = openIndex === index;

              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleOpenMenu(index)}
                  onMouseLeave={handleCloseMenu}
                >
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-1.5 py-2 text-[12.5px] font-semibold uppercase tracking-[0.06em] transition-colors xl:text-[13px] ${overImage
                      ? active
                        ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                        : "text-white/95 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                      : active
                        ? "text-[#3F51DE]"
                        : "text-slate-800 hover:text-[#3F51DE]"
                      }`}
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
                    {active ? (
                      <span
                        className={`absolute inset-x-0 -bottom-0.5 mx-auto h-[2.5px] w-full rounded-full ${overImage ? "bg-white shadow-sm" : "bg-[#3F51DE]"
                          }`}
                      />
                    ) : null}
                  </Link>

                  {hasDropdown && link.dropdown ? (
                    <div
                      className={`absolute left-0 top-full z-[120] pt-3 transition duration-150 ${isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                        }`}
                      onMouseEnter={() => handleOpenMenu(index)}
                    >
                      <div className="min-w-[230px] overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_28px_60px_-28px_rgba(16,42,86,0.45)]">
                        {link.dropdown.map((item, itemIndex) => {
                          const hasChildren =
                            item.children && item.children.length > 0;
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

                              {hasChildren && item.children ? (
                                <div
                                  className={`absolute left-full top-0 ml-1 min-w-[210px] rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_28px_60px_-28px_rgba(16,42,86,0.45)] transition ${isChildOpen
                                    ? "visible opacity-100"
                                    : "invisible opacity-0"
                                    }`}
                                >
                                  {item.children.map((child) => (
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
        className={`fixed inset-0 z-[90] bg-[#0B1A33]/45 backdrop-blur-[2px] transition lg:hidden ${mobileOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />

      <div
        className={`absolute inset-x-0 top-full z-[95] max-h-[min(78vh,640px)] overflow-y-auto border-t border-slate-100 bg-white shadow-[0_28px_60px_-28px_rgba(16,42,86,0.45)] transition duration-300 lg:hidden ${mobileOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
          }`}
      >
        <ul className="page-container py-3">
          {data.navLinks.map((link, index) => {
            const hasDropdown =
              link.hasDropdown && link.dropdown && link.dropdown.length > 0;
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
                      className={`flex flex-1 items-center justify-between px-1 py-3.5 text-[14px] font-semibold uppercase tracking-[0.05em] ${active ? "text-[#3F51DE]" : "text-[#1A2744]"
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
                      className={`flex-1 px-1 py-3.5 text-[14px] font-semibold uppercase tracking-[0.05em] ${active ? "text-[#3F51DE]" : "text-[#1A2744]"
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
                {hasDropdown && link.dropdown && isOpen ? (
                  <ul className="mb-2 ml-2 space-y-0.5 border-l border-slate-200 pl-3">
                    {link.dropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2.5 text-[12px] font-medium uppercase tracking-[0.04em] text-slate-500 transition hover:bg-slate-50 hover:text-[#3F51DE]"
                        >
                          {item.label}
                        </Link>
                        {item.children ? (
                          <ul className="mb-1 ml-2 border-l border-slate-100 pl-2">
                            {item.children.map((child) => (
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
