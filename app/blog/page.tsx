"use client";
import { site } from "@/data";
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
import PageBanner from "@/components/common/PageBanner";

export default function BlogsPage() {
  const sectionData = site.Blog.variants.RealEstateBlog1;
  const posts = sectionData.blogItems;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-10 sm:pb-14">
      <PageBanner />

      <div className="page-container pt-8 sm:pt-10 md:pt-12 space-y-12">
        {/* BLOG CONTENT & SIDEBAR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            {posts.map((blog, idx) => (
              <motion.div
                key={blog.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-stretch gap-6"
              >
                {/* Blog Image Section */}
                <div className="relative sm:w-[45%] shrink-0 h-64 sm:h-auto rounded-2xl overflow-hidden bg-slate-200">
                  <img
                    src={blog.image}
                    alt={blog.alt || blog.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Overlay for Video Blog */}
                  {blog.type === "video" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <button className="w-12 h-12 rounded-full bg-[#2042C9] text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110">
                        <FaPlay className="text-sm ml-0.5" />
                      </button>
                    </div>
                  )}

                  {/* Navigation Arrows for Slider Blog */}
                  {blog.type === "slider" && (
                    <>
                      <button className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center shadow hover:text-[#2042C9] transition-colors">
                        <FaChevronLeft className="text-xs" />
                      </button>
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-slate-700 flex items-center justify-center shadow hover:text-[#2042C9] transition-colors">
                        <FaChevronRight className="text-xs" />
                      </button>
                    </>
                  )}
                </div>

                {/* Blog Content Section */}
                <div className="flex-1 flex flex-col justify-center py-2 pr-2">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-[13px] font-medium text-slate-500">
                      <FaCalendarAlt className="text-[#3F62E8]" />
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-bold text-[#142345] leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-[14px] text-slate-500 leading-relaxed line-clamp-3 text-justify">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-auto">
                    <Link
                      href={blog.href}
                      className="inline-flex items-center space-x-2 text-[13px] font-semibold text-[#2042C9] border border-[#2042C9]/20 hover:border-[#2042C9] bg-transparent hover:bg-blue-50 px-5 py-2.5 rounded-lg transition-all duration-300"
                    >
                      <span>Read More</span>
                      <FaArrowRight className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* RIGHT SIDE */}
          <div className="lg:col-span-4 space-y-8">
            {/* 1. SEARCH WIDGET */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-4"
            >
              <h4 className="font-bold text-[#142345] text-[17px]">{sectionData.sidebar.search.title}</h4>
              <div className="flex items-center pt-2">
                <input
                  type="text"
                  placeholder={sectionData.sidebar.search.placeholder}
                  className="w-full text-sm px-4 py-3 bg-white border border-slate-200 rounded-l-lg focus:outline-none focus:border-[#2042C9] text-slate-600"
                />
                <button className="bg-[#1B36B0] text-white px-5 py-3 rounded-r-lg hover:bg-blue-800 transition-colors">
                  <FaSearch className="text-[15px]" />
                </button>
              </div>
            </motion.div>

            {/* 2. RECENT POSTS WIDGET */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-5"
            >
              <h4 className="font-bold text-[#142345] text-[17px]">{sectionData.sidebar.recentPosts.title}</h4>

              <div className="space-y-4 pt-1">
                {posts.slice(0, 3).map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt={post.alt || post.title}
                      className="w-20 h-16 object-cover rounded-xl shrink-0 bg-slate-100"
                    />
                    <div className="space-y-1.5 flex-1">
                      <h5 className="text-[13px] font-bold text-[#142345] group-hover:text-[#2042C9] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h5>
                      <p className="text-[11px] font-bold text-[#2042C9] uppercase tracking-wide">
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
              className="bg-white rounded-3xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#F0F4FF] text-[#2042C9] flex items-center justify-center text-lg">
                  <FaEnvelope />
                </div>
                <h4 className="font-bold text-[#142345] text-[17px]">
                  {sectionData.sidebar.newsletter.title}
                </h4>
              </div>
              <p className="text-[13px] text-slate-500 leading-relaxed pt-1 text-justify">
                {sectionData.sidebar.newsletter.description}
              </p>

              <div className="space-y-3 pt-2">
                <input
                  type="email"
                  placeholder={sectionData.sidebar.newsletter.placeholder}
                  className="w-full text-sm px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#2042C9] text-slate-600"
                />
                <button className="w-full bg-[#1B36B0] hover:bg-blue-800 text-white text-[14px] font-semibold py-3 rounded-lg transition-colors">
                  {sectionData.sidebar.newsletter.buttonText}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

