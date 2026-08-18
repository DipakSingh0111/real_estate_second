"use client";

import React, { useState } from "react";
import {
  Headphones,
  MapPin,
  PhoneCall,
  Send,
  ExternalLink,
} from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PageBanner from "@/components/common/PageBanner";
import homeData from "@/data/property.json";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <PageBanner data={homeData.pageBanners.contact} />

      {/* MAIN CONTAINER */}
      <div className="page-container py-12 space-y-12">
        {/* 2. CONTACT INFO & FORM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Headphones className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {homeData.contactPage.heading.eyebrow}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {homeData.contactPage.heading.main1} <span className="text-blue-600">{homeData.contactPage.heading.mainHighlight}</span>
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              {homeData.contactPage.description}
            </p>

            {/* Address Card */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">
                  {homeData.contactPage.office.label}
                </span>
                <p className="text-sm font-semibold text-slate-700">
                  {homeData.contactPage.office.line1}
                </p>
                <p className="text-xs text-slate-400">
                  {homeData.contactPage.office.line2}
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">
                  {homeData.contactPage.phone.label}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {homeData.contactPage.phone.number}
                </p>
                <p className="text-xs text-slate-400">
                  {homeData.contactPage.phone.workingHours}
                </p>
              </div>
            </div>

            {/* Social Icons using react-icons */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-600 mb-3">
                Follow Us
              </p>
              <div className="flex space-x-3">
                <a
                  href={homeData.contactPage.socials.facebook}
                  className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href={homeData.contactPage.socials.twitter}
                  className="w-9 h-9 rounded-full bg-sky-400 text-white flex items-center justify-center hover:opacity-90 transition"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a
                  href={homeData.contactPage.socials.linkedin}
                  className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center hover:opacity-90 transition"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href={homeData.contactPage.socials.instagram}
                  className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center hover:opacity-90 transition"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send Message Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <MdEmail className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Send Us a Message
                </h3>
              </div>
              <div className="w-10 h-0.5 bg-blue-600 mt-2"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full text-xs px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full text-xs px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* ReCAPTCHA UI Block */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between w-60">
                <label className="flex items-center space-x-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>I'm not a robot</span>
                </label>
                <div className="text-[10px] text-slate-400 text-right">
                  <div className="w-5 h-5 bg-blue-500 text-white text-[8px] flex items-center justify-center rounded-full ml-auto">
                    🔄
                  </div>
                  reCAPTCHA
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* 3. GOOGLE MAPS SECTION */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-72">
          <div className="absolute top-4 left-4 z-10">
            <button className="bg-white px-3 py-1.5 rounded-md shadow text-xs font-semibold text-slate-700 flex items-center space-x-1 hover:bg-slate-50">
              <span>Open in Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <iframe
            src={homeData.contactPage.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
