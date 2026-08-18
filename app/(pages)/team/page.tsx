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
    <main className="bg-slate-50/50 font-sans text-slate-900 pb-4">
      <PageBanner data={homeData.pageBanners.team} />

      <section className="page-container space-y-8 lg:space-y-10 pt-10 pb-6">
        {sectionData.members.map((member, index) => {
          const isImageRight = index % 2 === 0;

          return (
            <Link
              href={`/team/${member.slug}`}
              key={member.name}
              className={`flex flex-col-reverse ${
                isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-16 bg-white rounded-[32px] p-6 sm:p-8 lg:p-12 border border-slate-100/80 shadow-[0_15px_45px_rgba(27,54,176,0.03)] hover:shadow-[0_25px_60px_rgba(27,54,176,0.08)] transition-all duration-300`}
            >
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: isImageRight ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 space-y-6 lg:space-y-7"
              >
                <div className="flex items-center space-x-2.5 text-[#1B36B0] font-extrabold text-xs sm:text-sm tracking-[0.08em] uppercase">
                  <User size={18} strokeWidth={2.5} className="fill-current" />
                  <span>{member.role}</span>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#142345] leading-tight">
                    {member.name}
                  </h2>
                  <div className="w-12 h-[3.5px] bg-[#1B36B0] rounded-full mt-4" />
                </div>

                <div className="text-[14px] sm:text-[15px] leading-relaxed text-[#4F5B73] space-y-4 font-normal">
                  {member.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Stats Bar */}
                <div className="bg-[#F0F4FF] rounded-2xl mt-8 flex flex-col sm:flex-row sm:items-center p-4 sm:p-5 gap-5 sm:gap-3 border border-[#D0DDFB]/50">
                  {member.stats.map((stat, statIdx) => {
                    let Icon = Award;
                    if (statIdx === 1) Icon = Building2;
                    if (statIdx === 2) Icon = Handshake;

                    return (
                      <div
                        key={stat.label}
                        className={`flex items-center space-x-4 flex-1 px-2 ${
                          statIdx !== member.stats.length - 1
                            ? "border-b pb-4 sm:border-b-0 sm:pb-0 sm:border-r border-[#D0DDFB]"
                            : ""
                        }`}
                      >
                        <div className="text-[#1B36B0] shrink-0">
                          <Icon size={26} strokeWidth={1.8} />
                        </div>
                        <div className="flex flex-col leading-snug">
                          <span className="text-[#1B36B0] font-black text-lg md:text-xl">
                            {stat.value}
                          </span>
                          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#4F5B73] font-bold mt-0.5">
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
                initial={{ opacity: 0, scale: 0.96, x: isImageRight ? 30 : -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="w-[320px] sm:w-[380px] lg:w-[400px] shrink-0 relative h-[380px] sm:h-[440px] lg:h-[480px] mx-auto"
              >
                {/* Blue Background Block */}
                <div
                  className={`absolute ${
                    isImageRight
                      ? "-top-4 -bottom-4 -right-4 left-10 rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[24px] rounded-br-[24px]"
                      : "-top-4 -bottom-4 -left-4 right-10 rounded-tl-[100px] rounded-br-[100px] rounded-tr-[24px] rounded-bl-[24px]"
                  } bg-[#1B36B0] z-0`}
                />

                {/* Dot Pattern */}
                <div
                  className={`absolute ${
                    isImageRight ? "-top-6 -left-6" : "-top-6 -right-6"
                  } w-20 h-20 z-20 opacity-60`}
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #1B36B0 2.5px, transparent 2.5px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* Main Image Wrapper */}
                <div
                  className={`relative z-10 w-[90%] ${
                    isImageRight ? "mr-auto" : "ml-auto"
                  } h-full ${
                    isImageRight
                      ? "rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[24px] rounded-br-[24px]"
                      : "rounded-tl-[100px] rounded-br-[100px] rounded-tr-[24px] rounded-bl-[24px]"
                  } overflow-hidden shadow-lg bg-white`}
                >
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
