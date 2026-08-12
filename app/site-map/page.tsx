"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHome,
  FaUserFriends,
  FaBuilding,
  FaBriefcase,
  FaIndustry,
  FaProjectDiagram,
  FaQuoteRight,
  FaAward,
  FaNewspaper,
  FaUserTie,
  FaPhoneAlt,
  FaHeadset,
  FaSitemap,
  FaArrowRight,
} from "react-icons/fa";
import homeData from "@/data/homeData.json";
import PageBanner from "@/components/common/PageBanner";
interface SitemapSection {
  id: number;
  title: string;
  icon: React.ReactNode;
  links: { name: string; href: string }[];
}

const sitemapData: SitemapSection[] = [
  {
    id: 1,
    title: "Home",
    icon: <FaHome className="text-red-500 text-base" />,
    links: [
      { name: "Banner", href: "/" },
      { name: "Featured Properties", href: "/#featured" },
      { name: "About Us", href: "/about" },
      { name: "Why Choose Us", href: "/#why-us" },
      { name: "Our Projects", href: "/projects" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Latest News", href: "/news" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    id: 2,
    title: "About Us",
    icon: <FaUserFriends className="text-red-500 text-base" />,
    links: [
      { name: "Company Overview", href: "/about" },
      { name: "Our Mission", href: "/about#mission" },
      { name: "Our Vision", href: "/about#vision" },
      { name: "Our Values", href: "/about#values" },
      { name: "Our Team", href: "/about#team" },
      { name: "Awards & Achievements", href: "/about#awards" },
    ],
  },
  {
    id: 3,
    title: "Properties",
    icon: <FaBuilding className="text-red-500 text-base" />,
    links: [
      { name: "All Properties", href: "/properties" },
      { name: "Residential Properties", href: "/properties?type=residential" },
      { name: "Commercial Properties", href: "/properties?type=commercial" },
      { name: "Luxury Properties", href: "/properties?type=luxury" },
      { name: "Property Listing", href: "/properties" },
      { name: "Property Details", href: "/properties/1" },
    ],
  },
  {
    id: 4,
    title: "Services",
    icon: <FaBriefcase className="text-red-500 text-base" />,
    links: [
      { name: "Property Buying", href: "/services#buying" },
      { name: "Property Selling", href: "/services#selling" },
      { name: "Property Leasing", href: "/services#leasing" },
      { name: "Property Management", href: "/services#management" },
      { name: "Investment Consultation", href: "/services#consultation" },
      { name: "Legal Assistance", href: "/services#legal" },
    ],
  },
  {
    id: 5,
    title: "Industry We Serve",
    icon: <FaIndustry className="text-red-500 text-base" />,
    links: [
      { name: "Residential", href: "/services" },
      { name: "Commercial", href: "/services" },
      { name: "Retail", href: "/services" },
      { name: "Hospitality", href: "/services" },
      { name: "Industrial", href: "/services" },
      { name: "Land Development", href: "/services" },
    ],
  },
  {
    id: 6,
    title: "Projects",
    icon: <FaProjectDiagram className="text-red-500 text-base" />,
    links: [
      { name: "Ongoing Projects", href: "/projects?status=ongoing" },
      { name: "Completed Projects", href: "/projects?status=completed" },
      { name: "Upcoming Projects", href: "/projects?status=upcoming" },
      { name: "Project Gallery", href: "/projects" },
      { name: "Project Details", href: "/projects/1" },
    ],
  },
  {
    id: 7,
    title: "Testimonials",
    icon: <FaQuoteRight className="text-red-500 text-base" />,
    links: [
      { name: "Client Reviews", href: "/#testimonials" },
      { name: "Success Stories", href: "/#testimonials" },
      { name: "Video Testimonials", href: "/#testimonials" },
    ],
  },
  {
    id: 8,
    title: "Awards",
    icon: <FaAward className="text-red-500 text-base" />,
    links: [
      { name: "Our Achievements", href: "/about#awards" },
      { name: "Recognitions", href: "/about#awards" },
      { name: "Certificates", href: "/about#awards" },
    ],
  },
  {
    id: 9,
    title: "News & Blogs",
    icon: <FaNewspaper className="text-red-500 text-base" />,
    links: [
      { name: "Latest News", href: "/news" },
      { name: "Blog Articles", href: "/news" },
      { name: "Market Insights", href: "/news" },
      { name: "Press Releases", href: "/news" },
    ],
  },
  {
    id: 10,
    title: "Career",
    icon: <FaUserTie className="text-red-500 text-base" />,
    links: [
      { name: "Why Join Us", href: "/career" },
      { name: "Current Openings", href: "/career" },
      { name: "Apply Now", href: "/career" },
    ],
  },
  {
    id: 11,
    title: "Contact Us",
    icon: <FaPhoneAlt className="text-red-500 text-base" />,
    links: [
      { name: "Get in Touch", href: "/contact" },
      { name: "Office Locations", href: "/contact" },
      { name: "Enquiry Form", href: "/enquiry" },
    ],
  },
  {
    id: 12,
    title: "Support",
    icon: <FaHeadset className="text-red-500 text-base" />,
    links: [
      { name: "FAQs", href: "/faq" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners["site-map"]} />

      {/* MAIN CONTAINER */}
      <div className="page-container pt-10 space-y-12">
        {/* SECTION HEADER */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 mx-auto flex items-center justify-center">
            <FaSitemap className="text-xl" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Quick Navigation to Everything You Need
          </h2>
          <div className="w-8 h-0.5 bg-red-500 mx-auto rounded-full" />
          <p className="text-xs text-slate-400 pt-1">
            Find what you're looking for with ease.
          </p>
        </div>

        {/* SITEMAP GRID (3 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sitemapData.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] space-y-4"
            >
              {/* Card Header */}
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <div className="w-9 h-9 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  {section.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {section.title}
                </h3>
              </div>

              {/* Card Bullet Links */}
              <ul className="space-y-2 text-[11px] text-slate-500 font-medium">
                {section.links.map((link, idx) => (
                  <li key={idx} className="flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 group-hover:scale-125 transition-transform" />
                    <Link
                      href={link.href}
                      className="hover:text-red-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CAN'T FIND WHAT YOU'RE LOOKING FOR STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-red-50/50 rounded-3xl p-6 sm:p-8 border border-red-100 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-white text-red-500 shadow-sm flex items-center justify-center shrink-0 border border-red-100">
              <FaHeadset className="text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Can't Find What You're Looking For?
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Our support team is here to help you. Feel free to reach out to
                us anytime.
              </p>
            </div>
          </div>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e11d48] hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-md transition-all flex items-center space-x-2 shrink-0"
            >
              <span>Contact Us</span>
              <FaArrowRight className="text-[10px]" />
            </motion.button>
          </Link>
        </motion.div>

        {/* BOTTOM SUPPORT BANNER */}
      </div>
    </div>
  );
}
