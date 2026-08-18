"use client";

import { site } from "@/data";
import Image from "next/image";
import { use } from "react";
import PageBanner from "@/components/common/PageBanner";
import Link from "next/link";

interface TeamDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function TeamDetailPage({ params }: TeamDetailPageProps) {
  const { slug } = use(params);
  const teamMember = site.teamPage.members.find(
    (member: any) => member.slug === slug,
  );
  const bannerData = teamMember
    ? {
      ...site.pageBanners.team,
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Team", href: "/team" },
        { label: teamMember.name },
      ],
    }
    : site.pageBanners.team;

  if (!teamMember) {
    return (
      <main className="bg-white font-sans text-slate-900">
        <section className="page-container flex flex-col items-center justify-center py-20">
          <h1 className="mb-4 text-3xl font-bold">Team Member Not Found</h1>
          <p className="mb-8 text-slate-600">
            Sorry, we couldn't find the team member you're looking for.
          </p>
          <Link
            href="/team"
            className="rounded-lg bg-[#1A43BF] px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Back to Team
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-slate-50/50 font-sans text-slate-900 pb-4">
      <PageBanner />

      <section className="page-container pt-10 pb-6">
        <Link
          href="/team"
          className="mb-10 inline-flex items-center gap-2 text-[#1B36B0] font-bold text-sm sm:text-[15px] hover:underline"
        >
          <span>←</span> Back to Team
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Team Member Image */}
          <div className="w-[320px] sm:w-[380px] lg:w-[400px] shrink-0 relative h-[400px] sm:h-[480px] lg:h-[520px] mx-auto lg:mx-0">
            {/* Blue Background Block */}
            <div className="absolute -top-4 -bottom-4 -left-4 right-10 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] bg-[#1B36B0] z-0" />

            {/* Dot Pattern */}
            <div
              className="absolute -top-6 -right-6 w-20 h-20 z-20 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #1B36B0 2.5px, transparent 2.5px)",
                backgroundSize: "16px 16px",
              }}
            />

            {/* Main Image Wrapper */}
            <div className="relative z-10 w-[90%] ml-auto h-full rounded-tl-[80px] rounded-br-[80px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden shadow-xl bg-white">
              <Image
                src={teamMember.imageUrl}
                alt={teamMember.imageAlt}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Team Member Details */}
          <div className="flex-1 flex flex-col gap-8 w-full">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.08em] text-[#1B36B0]">
                {teamMember.role}
              </span>
              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#142345] leading-tight">
                {teamMember.name}
              </h1>
              <div className="w-12 h-[3.5px] bg-[#1B36B0] rounded-full mt-4" />
            </div>

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-slate-400">
                Specialization
              </p>
              <p className="text-lg font-bold text-slate-800">
                {teamMember.specialization}
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-400">
                About
              </p>
              <p className="leading-[1.75] text-[#4F5B73] text-[15px]">{teamMember.bio}</p>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-400">
                Description
              </p>
              <p className="leading-[1.75] text-[#4F5B73] text-[15px]">
                {teamMember.description}
              </p>
            </div>

            {/* Contact Information */}
            <div className="rounded-[24px] border border-[#D0DDFB]/50 bg-[#F0F4FF] p-6 shadow-sm">
              <h3 className="mb-4 text-base font-extrabold text-[#142345] uppercase tracking-wider">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email</p>
                  <a
                    href={`mailto:${teamMember.email}`}
                    className="text-[#1B36B0] font-semibold text-[15px] hover:underline"
                  >
                    {teamMember.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Phone</p>
                  <a
                    href={`tel:${teamMember.phone}`}
                    className="text-[#1B36B0] font-semibold text-[15px] hover:underline"
                  >
                    {teamMember.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.08em] text-slate-400">
                Achievements
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {teamMember.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-slate-100 bg-white p-5 text-center shadow-sm"
                  >
                    <p className="text-3xl font-black text-[#1B36B0]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Team Members */}
        <div className="mt-20 border-t border-slate-200/60 pt-16">
          <h2 className="mb-10 text-3xl font-extrabold text-[#142345]">
            Our Other Team Members
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.teamPage.members
              .filter((member: any) => member.slug !== slug)
              .map((member: any) => (
                <Link
                  key={member.id}
                  href={`/team/${member.slug}`}
                  className="group overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-[280px] overflow-hidden bg-slate-100">
                    <Image
                      src={member.imageUrl}
                      alt={member.imageAlt}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#1B36B0]">
                        {member.role}
                      </p>
                      <h3 className="mt-2 font-bold text-lg text-[#142345] group-hover:text-[#1B36B0] transition-colors duration-200">
                        {member.name}
                      </h3>
                      <p className="mt-3 line-clamp-2 text-sm text-[#4F5B73] leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
