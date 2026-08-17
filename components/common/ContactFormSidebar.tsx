"use client";

import { CheckCircle2, Send } from "lucide-react";

export default function ContactFormSidebar() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.35)]">
      <h3 className="text-lg font-bold text-[#0B1A33]">Get in Touch</h3>
      <div className="mt-1 h-[3px] w-10 rounded-full bg-[#2A39CE]" />
      <form
        className="mt-5 space-y-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#2A39CE]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#2A39CE]"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#2A39CE]"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-[#2A39CE]"
        />
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2A39CE] px-4 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#2330b0]"
        >
          <Send className="h-4 w-4" />
          Send Message
        </button>
      </form>
      <p className="mt-3 flex items-start gap-2 text-[11px] leading-5 text-slate-400">
        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2A39CE]" />
        We respect your privacy. Your details are safe with us.
      </p>
    </div>
  );
}
