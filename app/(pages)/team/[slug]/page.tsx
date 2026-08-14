"use client";

import Image from "next/image";
import { use } from "react";
import homeData from "@/data/homeData.json";
import type { TeamMember } from "@/types/home";
import PageBanner from "@/components/common/PageBanner";
import Link from "next/link";

interface TeamDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function TeamDetailPage({ params }: TeamDetailPageProps) {
  const { slug } = use(params);
  const teamMember = homeData.teamPage.members.find(
    (member: TeamMember) => member.slug === slug,
  );

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
    <main className="bg-white font-sans text-slate-900">
      <PageBanner data={homeData.pageBanners.team} />

      <section className="page-container py-12">
        <Link
          href="/team"
          className="mb-8 inline-flex items-center gap-2 text-[#1A43BF] hover:underline"
        >
          <span>←</span> Back to Team
        </Link>

        <div className="grid gap-12 lg:grid-cols-2 lg:min-h-[600px]">
          {/* Team Member Image */}
          <div className="flex items-center justify-center">
            <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-lg">
              <Image
                src={teamMember.imageUrl}
                alt={teamMember.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Team Member Details */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1A43BF]">
                {teamMember.role}
              </span>
              <h1 className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                {teamMember.name}
              </h1>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Specialization
              </p>
              <p className="text-xl font-semibold text-slate-900">
                {teamMember.specialization}
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                About
              </p>
              <p className="leading-7 text-slate-600">{teamMember.bio}</p>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Description
              </p>
              <p className="leading-7 text-slate-600">
                {teamMember.description}
              </p>
            </div>

            {/* Contact Information */}
            <div className="rounded-[20px] border border-slate-200 bg-gradient-to-br from-[#f7f9ff] to-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Email</p>
                  <a
                    href={`mailto:${teamMember.email}`}
                    className="text-[#1A43BF] hover:underline"
                  >
                    {teamMember.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Phone</p>
                  <a
                    href={`tel:${teamMember.phone}`}
                    className="text-[#1A43BF] hover:underline"
                  >
                    {teamMember.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Achievements
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {teamMember.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[20px] border border-slate-100 bg-white p-4 text-center shadow-sm"
                  >
                    <p className="text-3xl font-extrabold text-[#1A43BF]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Team Members */}
        <div className="mt-16 border-t border-slate-200 pt-12">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Our Other Team Members
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeData.teamPage.members
              .filter((member: TeamMember) => member.slug !== slug)
              .map((member: TeamMember) => (
                <Link
                  key={member.id}
                  href={`/team/${member.slug}`}
                  className="group overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-[250px] overflow-hidden bg-slate-100">
                    <Image
                      src={member.imageUrl}
                      alt={member.imageAlt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1A43BF]">
                      {member.role}
                    </p>
                    <h3 className="mt-2 font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                      {member.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
