"use client";

import Image from "next/image";
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
            <div
              key={member.name}
              className={`flex flex-col ${
                isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-24 overflow-hidden`}
            >
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex-1 space-y-6"
              >
                <div className="flex items-center space-x-2 text-[#1B36B0] font-bold text-xs tracking-wider uppercase">
                  <User size={16} strokeWidth={2.5} />
                  <span>{member.role}</span>
                </div>

                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#142345] mb-4">
                    {member.name}
                  </h2>
                  <div className="w-12 h-[3px] bg-[#1B36B0]" />
                </div>

                <div className="text-[13px] leading-[1.8] text-[#4F5B73] space-y-5">
                  {member.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Stats Bar */}
                <div className="bg-[#F0F4FF] rounded-xl mt-8 flex items-center p-3 px-5 gap-2">
                  {member.stats.map((stat, statIdx) => {
                    let Icon = Award;
                    if (statIdx === 1) Icon = Building2;
                    if (statIdx === 2) Icon = Handshake;

                    return (
                      <div
                        key={stat.label}
                        className={`flex items-center space-x-3 flex-1 px-2 ${
                          statIdx !== member.stats.length - 1
                            ? "border-r border-[#D0DDFB]"
                            : ""
                        }`}
                      >
                        <div className="text-[#1B36B0] shrink-0">
                          <Icon size={22} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col leading-tight">
                          <span className="text-[#1B36B0] font-extrabold text-[13px]">
                            {stat.value}
                          </span>
                          <span className="text-[8px] uppercase tracking-wider text-[#4F5B73] font-semibold mt-0.5 whitespace-nowrap">
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
                  className={`absolute ${
                    isImageRight
                      ? "-top-8 -bottom-8 -right-8 w-[80%] rounded-[40px] rounded-tl-none"
                      : "-top-8 -bottom-8 -left-8 w-[80%] rounded-[40px] rounded-tr-none"
                  } bg-[#1B36B0] z-0`}
                />

                {/* Dot Pattern */}
                <div
                  className={`absolute ${
                    isImageRight ? "-top-6 -left-6" : "-top-6 -right-6"
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
            </div>
          );
        })}
      </section>
    </main>
  );
}
