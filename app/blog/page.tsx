"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaArrowRight,
  FaSearch,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
} from "react-icons/fa";
import homeData from "@/data/homeData.json";
import type { BlogsPageData } from "@/types/home";
import PageBanner from "@/components/common/PageBanner";

export default function BlogsPage() {
  const sectionData: BlogsPageData = homeData.blogs;
  const { pageBanner, posts, categoryCards } = sectionData;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={pageBanner} />

      <div className="page-container pt-12 space-y-12">
        {/* BLOG CONTENT & SIDEBAR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
              {categoryCards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_22px_60px_-35px_rgba(15,23,42,0.15)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {card.description}
                    </p>
                    <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700">
                      Explore
                      <FaArrowRight className="text-[10px]" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {posts.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100/80 overflow-hidden flex flex-col sm:flex-row items-stretch"
              >
                {/* Blog Image Section */}
                <div className="relative sm:w-1/2 h-56 sm:h-auto shrink-0 bg-slate-200">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Overlay for Video Blog */}
                  {blog.type === "video" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <button className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110">
                        <FaPlay className="text-sm ml-0.5" />
                      </button>
                    </div>
                  )}

                  {/* Navigation Arrows for Slider Blog */}
                  {blog.type === "slider" && (
                    <>
                      <button className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-slate-700 flex items-center justify-center shadow hover:bg-white transition-colors">
                        <FaChevronLeft className="text-xs" />
                      </button>
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 text-slate-700 flex items-center justify-center shadow hover:bg-white transition-colors">
                        <FaChevronRight className="text-xs" />
                      </button>
                    </>
                  )}
                </div>

                {/* Blog Content Section */}
                <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs text-blue-600 font-medium">
                      <FaCalendarAlt className="text-blue-500" />
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {blog.title}
                    </h3>

                    <div className="w-8 h-0.5 bg-blue-600 rounded-full" />

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-600 border border-blue-200 bg-blue-50/50 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md transition-all duration-300"
                    >
                      <span>Read More</span>
                      <FaArrowRight className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE: SIDEBAR (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            {/* 1. SEARCH WIDGET */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-3"
            >
              <h4 className="font-bold text-slate-900 text-sm">Search</h4>
              <div className="w-6 h-0.5 bg-blue-600 rounded-full" />
              <div className="flex items-center pt-1">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-l-md focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-3.5 py-2.5 rounded-r-md hover:bg-blue-700 transition-colors">
                  <FaSearch className="text-xs" />
                </button>
              </div>
            </motion.div>

            {/* 2. RECENT POSTS WIDGET */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-4"
            >
              <h4 className="font-bold text-slate-900 text-sm">Recent Posts</h4>
              <div className="w-6 h-0.5 bg-blue-600 rounded-full" />

              <div className="space-y-3.5 pt-1">
                {posts.slice(0, 3).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="flex items-center space-x-3 group cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-14 h-12 object-cover rounded-md shrink-0 bg-slate-100"
                    />
                    <div className="space-y-1">
                      <h5 className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h5>
                      <p className="text-[10px] text-blue-600 font-medium">
                        {post.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* 3. NEWSLETTER WIDGET */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-3"
            >
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">
                  <FaEnvelope />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Stay Updated
                </h4>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Subscribe to get the latest real estate tips and updates.
              </p>

              <div className="space-y-2 pt-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded-md transition-colors shadow-sm">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4. SUPPORT BANNER COMPONENT */}
      </div>
    </div>
  );
}
