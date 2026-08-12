"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-hidden bg-slate-900 text-white">
      <div className="page-container flex flex-1 flex-col items-center justify-center gap-12 py-12 md:flex-row md:py-20 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex w-full justify-center md:w-1/2"
        >
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
              alt="404 House Illustration"
              className="h-auto w-full rounded-2xl object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-7xl font-black tracking-tight text-blue-500 md:text-8xl lg:text-9xl"
          >
            404
          </motion.h1>

          <h2 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
            Oops! Page Not Found
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3.5rem" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="my-3 h-1 rounded bg-blue-500"
          />

          <p className="mb-8 mt-1 max-w-md text-sm leading-relaxed text-slate-300 md:text-base">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500"
            >
              <Home className="h-4 w-4" /> Back to Homepage
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
