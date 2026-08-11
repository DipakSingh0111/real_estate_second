"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Phone, Headset } from "lucide-react";
import SupportBanner from "@/components/common/SupportBanner";
import homeData from "@/data/homeData.json";

export default function NotFound() {
  return (
    // Background updated to dark slate/navy gradient so white Navbar is clearly visible
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between overflow-hidden">
      {/* 404 Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex-1 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Left Side: Illustration Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative max-w-md w-full bg-white/5 p-4 rounded-3xl backdrop-blur-sm border border-white/10">
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
              alt="404 House Illustration"
              className="w-full h-auto object-contain rounded-2xl drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right Side: Text & Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black text-blue-500 tracking-tight"
          >
            404
          </motion.h1>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
            Oops! Page Not Found
          </h2>

          {/* Underline Indicator */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3.5rem" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-1 bg-blue-500 rounded my-3"
          />

          <p className="text-slate-300 text-sm md:text-base max-w-md mt-1 mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-blue-600/30 transition-all duration-300 text-sm"
            >
              <Home className="w-4 h-4" /> Back to Homepage
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section: Support Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 w-full mb-8"
      >
        {homeData?.supportBanner ? (
          <SupportBanner data={homeData.supportBanner} />
        ) : (
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 rounded-2xl text-white p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden border border-blue-500/20">
            <div className="flex items-center gap-5 z-10">
              <div className="w-16 h-16 rounded-2xl bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-lg">
                <Headset className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">
                  Any Query? We are Happy to Assist You
                </h3>
                <p className="text-blue-100 text-xs md:text-sm mt-1">
                  Our support team is available 24/7 to help you.
                </p>
              </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-blue-400/30" />

            <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full lg:w-auto justify-end">
              <span className="text-xs text-blue-200 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> Call Us Anytime
              </span>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+12345678900"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-md text-sm transition-all"
              >
                +1 234 567 8900
              </motion.a>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
