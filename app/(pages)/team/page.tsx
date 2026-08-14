import Image from "next/image";
import Link from "next/link";
import homeData from "@/data/homeData.json";
import type { TeamPageData } from "@/types/home";
import PageBanner from "@/components/common/PageBanner";
const sectionData: TeamPageData = homeData.teamPage;

export default function TeamPage() {
  return (
    <main className="bg-white font-sans text-slate-900">
      <PageBanner data={homeData.pageBanners.team} />

      <section className="page-container space-y-10 py-10">
        {sectionData.members.map((member, index) => {
          const isEven = index % 2 === 1;
          return (
            <Link href={`/team/${member.slug}`} key={member.name}>
              <div className="group cursor-pointer transition-all hover:shadow-lg">
                <div className="grid gap-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
                  <div
                    className={`flex flex-col justify-center gap-5 rounded-[28px] p-6 sm:p-8 ${
                      isEven ? "order-2 bg-[#f7f9ff]" : "order-1 bg-white"
                    }`}
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1A43BF]">
                      {member.role}
                    </span>
                    <h2 className="text-2xl font-extrabold text-slate-900 transition-colors group-hover:text-[#1A43BF] sm:text-3xl">
                      {member.name}
                    </h2>
                    <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                      {member.description}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {member.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-[20px] border border-slate-100 bg-white p-4 text-center shadow-sm transition-all group-hover:border-[#1A43BF] group-hover:bg-[#f7f9ff]"
                        >
                          <p className="text-2xl font-extrabold text-slate-900">
                            {stat.value}
                          </p>
                          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`relative overflow-hidden rounded-[28px] border border-slate-100 bg-slate-100 ${
                      isEven ? "order-1" : "order-2"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[#1A43BF] opacity-5" />
                    <div className="relative mx-4 my-4 h-[320px] overflow-hidden rounded-[26px] bg-white shadow-xl transition-transform group-hover:scale-105 sm:mx-6 sm:my-6 lg:h-[280px]">
                      <Image
                        src={member.imageUrl}
                        alt={member.imageAlt}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
