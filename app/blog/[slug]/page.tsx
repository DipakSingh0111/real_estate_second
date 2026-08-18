"use client";
import { site } from "@/data";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaCalendarAlt,
  FaUser,
  FaFolderOpen,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import PageBanner from "@/components/common/PageBanner";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { blogs } = site;
  const { pageBanner, posts } = blogs;

  // Find the blog post by slug
  const post = posts.find((p) => p.slug === slug);
  const bannerData = post
    ? {
      ...pageBanner,
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title },
      ],
    }
    : pageBanner;

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-slate-600 mb-6">
            Sorry, the blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              <FaArrowLeft className="text-sm" />
              <span>Back to Blog</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (other posts from the same category)
  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Get previous and next posts
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      {/* Page Banner */}
      <PageBanner />

      {/* Blog Detail Content */}
      <div className="page-container pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100/80 overflow-hidden"
            >
              {/* Featured Image */}
              <div className="relative w-full h-96 bg-slate-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-8 md:p-12 space-y-6">
                {/* Header Info */}
                <div className="space-y-4 pb-6 border-b border-slate-200">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {post.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-slate-600">
                      <FaCalendarAlt className="text-blue-600" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600">
                      <FaUser className="text-blue-600" />
                      <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600">
                      <FaFolderOpen className="text-blue-600" />
                      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Blog Body */}
                <div className="prose prose-sm md:prose-base max-w-none space-y-4">
                  {post.content.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-slate-700 leading-relaxed text-sm md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200 pt-8 mt-8" />

                {/* Author Bio Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 rounded-xl p-6 border border-blue-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">
                        {post.author}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2">
                        Expert real estate writer with years of experience in
                        the industry. Passionate about helping people find their
                        dream homes and make informed property decisions.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8">
                  {prevPost ? (
                    <Link href={`/blog/${prevPost.slug}`}>
                      <button className="w-full sm:w-auto inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Previous Post</span>
                      </button>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextPost ? (
                    <Link href={`/blog/${nextPost.slug}`}>
                      <button className="w-full sm:w-auto inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group">
                        <span>Next Post</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-4"
            >
              <h3 className="font-bold text-slate-900 text-lg">
                Related Posts
              </h3>
              <div className="w-8 h-1 bg-blue-600 rounded-full" />

              <div className="space-y-4">
                {relatedPosts.length > 0 ? (
                  relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="group cursor-pointer"
                      >
                        <div className="relative h-32 rounded-lg overflow-hidden bg-slate-200 mb-3">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          {relatedPost.date}
                        </p>
                      </motion.div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">
                    No related posts found.
                  </p>
                )}
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 space-y-4"
            >
              <h3 className="font-bold text-slate-900 text-lg">Categories</h3>
              <div className="w-8 h-1 bg-blue-600 rounded-full" />

              <div className="space-y-2">
                {[
                  "Market News",
                  "Buying Guides",
                  "Selling Tips",
                  "Investment Advice",
                  "Home Design",
                ].map((category) => (
                  <button
                    key={category}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${post.category === category
                        ? "bg-blue-600 text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-blue-50"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Subscribe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-sm text-white space-y-4"
            >
              <h3 className="font-bold text-lg">Subscribe to Newsletter</h3>
              <p className="text-sm text-blue-100">
                Get the latest real estate tips and updates delivered to your
                inbox.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                />
                <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
