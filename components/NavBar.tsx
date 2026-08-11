"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavbarData } from "@/types/home";

type NavBarProps = {
  data: NavbarData;
};

export default function Navbar({ data }: NavBarProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openChildIndex, setOpenChildIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
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
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full font-[family-name:var(--font-poppins)] transition-colors duration-300 ${
        scrolled
          ? "bg-white border-b border-slate-200 shadow-sm"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex h-22 w-full max-w-7xl items-center px-5 sm:px-8 lg:h-24 lg:px-12">
        <Link href="/" className="relative z-50 shrink-0">
          <Image
            src={data.logo.src}
            alt={data.logo.alt}
            width={220}
            height={56}
            priority
            className="h-10.5 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav className="ml-auto hidden items-center lg:flex">
          <ul className="flex items-center gap-8 xl:gap-9">
            {data.navLinks.map((link, index) => {
              const active =
                Boolean(link.active) || link.label.toLowerCase() === "home";
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
                    className={`relative flex items-center gap-1.5 py-2 text-[13px] font-semibold uppercase tracking-[0.04em] transition-colors ${
                      active ? "text-white" : "text-white hover:text-[#d3fc03]"
                    }`}
                  >
                    {link.label}
                    {hasDropdown ? (
                      <svg
                        width="10"
                        height="10"
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
                      <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-[2.5px] w-full rounded-full bg-brand" />
                    ) : null}
                  </Link>

                  {hasDropdown && link.dropdown ? (
                    <div
                      className={`absolute left-0 top-full z-50 pt-3 transition duration-150 ${
                        isOpen ? "visible opacity-100" : "invisible opacity-0"
                      }`}
                      onMouseEnter={() => handleOpenMenu(index)}
                    >
                      <div className="min-w-57.5 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_28px_60px_-28px_rgba(16,42,86,0.45)]">
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
                                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.04em] text-slate-600 transition hover:bg-slate-50 hover:text-brand"
                              >
                                {item.label}
                                {hasChildren ? <span>›</span> : null}
                              </Link>

                              {hasChildren && item.children ? (
                                <div
                                  className={`absolute left-full top-0 ml-1 min-w-52.5 rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_28px_60px_-28px_rgba(16,42,86,0.45)] transition ${
                                    isChildOpen
                                      ? "visible opacity-100"
                                      : "invisible opacity-0"
                                  }`}
                                >
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="block rounded-xl px-3.5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.04em] text-slate-600 transition hover:bg-slate-50 hover:text-brand"
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

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white text-[#4B5B76] shadow-[0_12px_28px_-12px_rgba(16,42,86,0.45)] transition hover:text-brand lg:ml-10"
        >
          <span className="flex flex-col items-start gap-1.25">
            <span className="block h-0.5 w-4.5 rounded-full bg-current" />
            <span className="block h-0.5 w-3 rounded-full bg-current" />
            <span className="block h-0.5 w-4.5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="mx-5 max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_28px_60px_-28px_rgba(16,42,86,0.45)] sm:mx-8 lg:hidden">
          <ul>
            {data.navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.05em] transition hover:bg-slate-50 ${
                    link.active ? "text-[#3F51DE]" : "text-[#1A2744]"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown ? (
                  <ul className="mb-1 ml-3 border-l border-slate-100 pl-3">
                    {link.dropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-[12px] font-medium text-slate-500 transition hover:bg-slate-50 hover:text-[#3F51DE]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
