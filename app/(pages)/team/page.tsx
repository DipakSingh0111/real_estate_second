"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";
import type { TeamPageData } from "@/types/home";
import PageBanner from "@/components/common/PageBanner";
import { User, Award, Building2, Handshake } from "lucide-react";

const sectionData: TeamPageData = homeData.teamPage;

export default function TeamPage() {
  return (
    <main className="bg-white font-sans text-slate-900 pb-20">
      <PageBanner data={homeData.pageBanners.team} />

      <section className="page-container space-y-32 py-16">
        {sectionData.members.map((member, index) => {
          const isImageRight = index % 2 === 0;

          return (
            <Link
              href={`/team/${member.slug}`}
              key={member.name}
              className={`flex flex-col group cursor-pointer ${isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-24 overflow-hidden`}
            >
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex-1 space-y-7"
              >
                <div className="flex items-center space-x-3 text-[#1B36B0] font-bold text-sm sm:text-[15px] tracking-[0.1em] uppercase">
                  <User size={20} strokeWidth={2.5} />
                  <span>{member.role}</span>
                </div>

                <div>
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-[#142345] mb-5">
                    {member.name}
                  </h2>
                  <div className="w-16 h-[4px] bg-[#1B36B0] rounded-full" />
                </div>

                <div className="text-[16px] md:text-[17px] leading-[1.85] text-[#4F5B73] space-y-5">
                  {member.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Stats Bar */}
                <div className="bg-[#F0F4FF] rounded-xl mt-10 flex flex-col sm:flex-row sm:items-center p-4 sm:px-6 gap-4 sm:gap-3">
                  {member.stats.map((stat, statIdx) => {
                    let Icon = Award;
                    if (statIdx === 1) Icon = Building2;
                    if (statIdx === 2) Icon = Handshake;

                    return (
                      <div
                        key={stat.label}
                        className={`flex items-center space-x-4 flex-1 px-3 ${statIdx !== member.stats.length - 1
                          ? "border-b pb-4 sm:border-b-0 sm:pb-0 sm:border-r border-[#D0DDFB]"
                          : ""
                          }`}
                      >
                        <div className="text-[#1B36B0] shrink-0">
                          <Icon size={28} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col leading-snug">
                          <span className="text-[#1B36B0] font-black text-lg md:text-xl">
                            {stat.value}
                          </span>
                          <span className="text-[11px] sm:text-[13px] uppercase tracking-wider text-[#4F5B73] font-bold mt-1">
                            {stat.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: isImageRight ? 50 : -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="flex-1 relative w-full max-w-[420px] mx-auto lg:max-w-none"
              >
                {/* Blue Background Block */}
                <div
                  className={`absolute ${isImageRight
                    ? "-top-8 -bottom-8 -right-8 w-[80%] rounded-[40px] rounded-tl-none"
                    : "-top-8 -bottom-8 -left-8 w-[80%] rounded-[40px] rounded-tr-none"
                    } bg-[#1B36B0] z-0`}
                />

                {/* Dot Pattern */}
                <div
                  className={`absolute ${isImageRight ? "-top-6 -left-6" : "-top-6 -right-6"
                    } w-24 h-24 z-20 opacity-60`}
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #1B36B0 2.5px, transparent 2.5px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* Main Image */}
                <div className="relative z-10 w-[90%] mx-auto h-[480px] lg:h-[580px] rounded-[32px] overflow-hidden shadow-2xl bg-white">
                  <Image
                    src={member.imageUrl}
                    alt={member.imageAlt}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
