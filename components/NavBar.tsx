import Link from "next/link";
import Image from "next/image";
import type { NavbarData } from "@/types/home";

type NavBarProps = {
  data: NavbarData;
};

export default function Navbar({ data }: NavBarProps) {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex h-[100px] max-w-[1400px] items-center justify-between px-6 sm:px-10 lg:px-[70px]">
        {/* ================= LOGO ================= */}
        <Link href="/" className="relative z-50">
          <Image
            src="/images/logo.png"
            alt="Real Estate Company"
            width={190}
            height={80}
            priority
            className="h-auto w-[170px] sm:w-[180px] lg:w-[190px]"
          />
        </Link>

        {/* ================= NAVIGATION ================= */}
        <nav className="hidden h-full items-center lg:flex">
          <div className="flex h-full items-center gap-[38px]">
            {data.navLinks.map((link, index) => {
              const active = link.label.toLowerCase() === "home";

              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`
                    relative
                    flex
                    h-full
                    items-center
                    gap-[7px]
                    pt-[2px]
                    text-[15px]
                    font-semibold
                    uppercase
                    transition-all
                    duration-200
                    ${
                      active
                        ? "text-[#3155C9]"
                        : "text-[#14213D] hover:text-[#3155C9]"
                    }
                  `}
                >
                  {link.label}

                  {link.hasDropdown && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  {/* Active underline */}
                  {active && (
                    <span
                      className="
                        absolute
                        bottom-[20px]
                        left-0
                        h-[3px]
                        w-full
                        rounded-full
                        bg-[#4258D5]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* ================= MENU ================= */}
        <button
          type="button"
          aria-label="Open menu"
          className="
            flex
            h-[58px]
            w-[58px]
            items-center
            justify-center
            rounded-[8px]
            bg-white
            shadow-[0_8px_25px_rgba(0,0,0,0.08)]
          "
        >
          <div className="flex flex-col gap-[6px]">
            <span className="h-[2px] w-[24px] bg-[#536078]" />
            <span className="h-[2px] w-[24px] bg-[#536078]" />
            <span className="h-[2px] w-[24px] bg-[#536078]" />
          </div>
        </button>
      </div>
    </header>
  );
}
