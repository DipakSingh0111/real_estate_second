import Image from "next/image";
import homeData from "@/data/homeData.json";
import type { TeamPageData } from "@/types/home";

const data: TeamPageData = homeData.teamPage;

export default function TeamPage() {
  return (
    <main className="bg-white font-sans text-slate-900">
      <section className="relative h-[360px] overflow-hidden bg-slate-900">
        <Image
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative z-10 mx-auto flex h-full mt-7 max-w-[1280px] flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            {data.hero.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-200/80">
            <span className="uppercase tracking-[0.24em]">Home</span>
            <span>/</span>
            <span className="font-semibold">Team</span>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] space-y-12 px-6 py-10 md:px-12">
        {data.members.map((member, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={member.name}
              className="grid gap-6 rounded-[40px] border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-2 lg:p-0"
            >
              <div
                className={`flex flex-col justify-center gap-6 rounded-[40px] p-8 sm:p-10 lg:p-12 ${
                  isEven ? "order-2 bg-[#f7f9ff]" : "order-1 bg-white"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1A43BF]">
                  {member.role}
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  {member.name}
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  {member.description}
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                  {member.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[24px] border border-slate-100 bg-white p-5 text-center shadow-sm"
                    >
                      <p className="text-3xl font-extrabold text-slate-900">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`relative overflow-hidden rounded-[40px] border border-slate-100 bg-slate-100 ${
                  isEven ? "order-1" : "order-2"
                }`}
              >
                <div className="absolute inset-0 bg-[#1A43BF] opacity-5" />
                <div className="relative overflow-hidden rounded-[32px] bg-white shadow-xl m-6">
                  <Image
                    src={member.imageUrl}
                    alt={member.imageAlt}
                    width={720}
                    height={720}
                    className="aspect-[4/5] w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
