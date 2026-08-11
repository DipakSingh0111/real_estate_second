"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  ChevronDown,
  Users,
  Star,
  Home,
  HelpCircle,
} from "lucide-react";
import SupportBanner from "@/components/common/SupportBanner";
import homeData from "@/data/homeData.json";

const faqData = [
  {
    id: 1,
    question: "How did my property get listed?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, nisl nec suscipit maximus, quam purus hendrerit nisl, in luctus urna nisi in arcu. Integer sit amet sem eu nibh rutrum congue in nec velit.",
  },
  {
    id: 2,
    question: "How long will it take to buy a home?",
    answer:
      "The timeline varies depending on financing and negotiation, but the typical process takes between 30 to 60 days from offer acceptance to closing.",
  },
  {
    id: 3,
    question: "Can I schedule a property visit online?",
    answer:
      "Yes! You can schedule a virtual tour or an in-person viewing directly through our online booking tool on the property detail page.",
  },
  {
    id: 4,
    question: "Do you provide home loans assistance?",
    answer:
      "We partner with leading financial institutions to help connect you with pre-approval options and competitive mortgage rates.",
  },
  {
    id: 5,
    question: "What documents are required to book a property?",
    answer:
      "Generally, you will need proof of identity (ID/Passport), proof of income/funds, and a signed initial agreement form.",
  },
  {
    id: 6,
    question: "What is your property return policy?",
    answer:
      "Depending on your contract stage, cancellations during the initial inspection contingency period allow for refund of earnest deposits per terms.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-hidden">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-72 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <h1 className="text-4xl font-bold tracking-wide">Faq's</h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-white mt-2 rounded"
        />
      </motion.div>

      {/* Main Content - Space reduced with pt-12 pb-4 */}
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-4 flex flex-col lg:flex-row gap-10">
        {/* Left Side: Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" /> FAQ
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
            Frequently Asked{" "}
            <span className="text-blue-600 block">Questions</span>
          </h2>

          <p className="text-slate-500 text-sm mt-3 mb-8 max-w-md">
            Find answers to the most common questions about our properties,
            services, and buying process.
          </p>

          {/* Accordion List */}
          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`bg-white rounded-lg border overflow-hidden transition-colors duration-200 ${
                    isOpen
                      ? "border-l-4 border-l-blue-600 border-y-slate-100 border-r-slate-100 shadow-md"
                      : "border-slate-100 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full p-4 flex items-center justify-between text-left font-bold text-slate-800 text-sm hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </motion.span>
                      {item.question}
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4 text-blue-600" />
                    </motion.div>
                  </button>

                  {/* Smooth Expand/Collapse Content Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: {
                              duration: 0.3,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            },
                            opacity: { duration: 0.25, delay: 0.05 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: {
                              duration: 0.25,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            },
                            opacity: { duration: 0.15 },
                          },
                        }}
                      >
                        <div className="px-5 pb-5 text-slate-500 text-xs leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: Image Banner Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-[420px] shrink-0"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
            {/* Dotted Grid Background */}
            <div className="absolute top-5 left-5 grid grid-cols-4 gap-2 z-10 opacity-60">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                ></div>
              ))}
            </div>

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Property"
              className="w-full h-96 object-cover"
            />

            {/* Bottom Stats Footer */}
            <div className="bg-blue-700 py-5 px-3 grid grid-cols-3 gap-2 text-center text-white">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-9 h-9 rounded-full bg-white text-blue-700 flex items-center justify-center mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-lg leading-none">
                  135K+
                </span>
                <span className="text-[10px] text-blue-200 mt-1 leading-tight">
                  Happy
                  <br />
                  Customers
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-9 h-9 rounded-full bg-white text-blue-700 flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 fill-blue-700" />
                </div>
                <span className="font-extrabold text-lg leading-none">20+</span>
                <span className="text-[10px] text-blue-200 mt-1 leading-tight">
                  Years of
                  <br />
                  Experience
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-9 h-9 rounded-full bg-white text-blue-700 flex items-center justify-center mb-2">
                  <Home className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-lg leading-none">
                  10K+
                </span>
                <span className="text-[10px] text-blue-200 mt-1 leading-tight">
                  Properties
                  <br />
                  Sold
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Support Banner with reduced top margin */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-2"
      >
        <SupportBanner data={homeData.supportBanner} />
      </motion.div>
    </div>
  );
}
