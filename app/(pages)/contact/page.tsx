"use client";

import { site } from "@/data";
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
  FaLinkedinIn, 
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import PageBanner from "@/components/common/PageBanner";

const socialIconMap = {
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

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
      <PageBanner />

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
                  {site.contactPage.heading.eyebrow}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {site.contactPage.heading.main1} <span className="text-blue-600">{site.contactPage.heading.mainHighlight}</span>
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              {site.contactPage.description}
            </p>

            {/* Address Card */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">
                  {site.contactPage.office.label}
                </span>
                <p className="text-sm font-semibold text-slate-700">
                  {site.contactPage.office.line1}
                </p>
                <p className="text-xs text-slate-400">
                  {site.contactPage.office.line2}
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
                  {site.contactPage.phone.label}
                </span>
                <p className="text-sm font-bold text-slate-800">
                  {site.contactPage.phone.number}
                </p>
                <p className="text-xs text-slate-400">
                  {site.contactPage.phone.workingHours}
                </p>
              </div>
            </div>

            {/* Social Icons using react-icons */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-600 mb-3">
                Follow Us
              </p>
              <div className="flex space-x-3">
                {site.footer.socialLinks.map((socialLink) => {
                  const Icon = socialIconMap[socialLink.platform as keyof typeof socialIconMap] ?? FaYoutube;
                  return (
                    <a
                      key={socialLink.platform}
                      href={socialLink.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${socialLink.label}`}
                      className="w-9 h-9 rounded-full bg-[#E8EEFF] text-[#2A39CE] flex items-center justify-center hover:bg-[#2A39CE] hover:text-white transition"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
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

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between w-64 shadow-sm">
                <label className="flex items-center space-x-3 text-sm text-slate-700 cursor-pointer font-medium">
                  <input
                    type="checkbox"
                    className="w-6 h-6 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>I'm not a robot</span>
                </label>
                <div className="flex flex-col items-center justify-center">
                  <img 
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                    alt="reCAPTCHA" 
                    className="w-8 h-8 object-contain mb-0.5" 
                  />
                  <span className="text-[9px] text-slate-500 font-medium">reCAPTCHA</span>
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
            src={site.contactPage.mapUrl}
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
