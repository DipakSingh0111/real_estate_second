"use client";

import { motion } from "framer-motion";
import { Check, X, Send, Home, Crown, ArrowRight } from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
import homeData from "@/data/homeData.json";

const pricingPlans = [
  {
    id: "basic",
    name: "Basic Plan",
    tagline: "Perfect for small teams getting started",
    price: "19",
    billing: "/month",
    icon: Send,
    isPopular: false,
    features: [
      { text: "Up to 10 Users", available: true },
      { text: "Access to All Features", available: true },
      { text: "Assisted Onboarding Support", available: true },
      { text: "CPM Coverage: Unlimited", available: true },
      { text: "Program Reviews 1x a Month", available: false },
      { text: "Priority Support", available: false },
    ],
    buttonText: "Try For Free",
    buttonVariant: "outline",
  },
  {
    id: "popular",
    name: "Popular Plan",
    tagline: "Great for growing real estate businesses",
    price: "39",
    billing: "/month",
    icon: Home,
    isPopular: true,
    features: [
      { text: "Up to 10 Users", available: true },
      { text: "Access to All Features", available: true },
      { text: "Assisted Onboarding Support", available: true },
      { text: "CPM Coverage: Unlimited", available: true },
      { text: "Program Reviews 1x a Month", available: true },
      { text: "Priority Support", available: false },
    ],
    buttonText: "Try For Free",
    buttonVariant: "primary",
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    tagline: "Advanced solution for large organizations",
    price: "69",
    billing: "/month",
    icon: Crown,
    isPopular: false,
    features: [
      { text: "Up to 10 Users", available: true },
      { text: "Access to All Features", available: true },
      { text: "Assisted Onboarding Support", available: true },
      { text: "CPM Coverage: Unlimited", available: true },
      { text: "Program Reviews 1x a Month", available: true },
      { text: "Priority Support", available: true },
    ],
    buttonText: "Try For Free",
    buttonVariant: "outline",
  },
];

export default function PricingSection() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-hidden">
      <PageBanner data={homeData.pageBanners.pricing} />

      {/* Main Content Area */}
      <div className="page-container py-16">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            PLANS & PRICING
            <span className="w-8 h-[2px] bg-blue-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Simple Plans, Powerful Solutions
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
            Choose the perfect plan for your real estate needs and grow your
            business.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className={`relative bg-white rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  plan.isPopular
                    ? "border-2 border-blue-600 shadow-xl shadow-blue-500/10"
                    : "border border-slate-200 shadow-md hover:shadow-lg"
                }`}
              >
                {/* Popular Ribbon Tag */}
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase px-6 py-1 rounded-b-lg tracking-wider z-20 shadow-sm">
                    Most Popular
                  </div>
                )}

                <div
                  className={`p-6 md:p-8 flex-1 ${plan.isPopular ? "pt-10" : ""}`}
                >
                  {/* Top Icon Header */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Plan Name & Subtitle */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 h-8 flex items-center justify-center">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing Amount */}
                  <div className="text-center mb-6 pb-6 border-b border-slate-100">
                    <span className="text-4xl md:text-5xl font-black text-blue-600 tracking-tight">
                      ${plan.price}
                    </span>
                    <span className="text-slate-400 text-xs font-medium ml-1">
                      {plan.billing}
                    </span>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs">
                        {feature.available ? (
                          <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                        ) : (
                          <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                            <X className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                        )}
                        <span
                          className={
                            feature.available
                              ? "text-slate-700 font-medium"
                              : "text-slate-400 line-through"
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Action CTA Button */}
                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full max-w-[200px] py-2.5 px-4 rounded-lg font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 ${
                        plan.buttonVariant === "primary"
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25"
                          : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {plan.buttonText} <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>

                {/* Bottom Skyline Illustration Decor */}
                <div className="w-full h-16 bg-slate-50 border-t border-slate-100 relative opacity-60 overflow-hidden">
                  <svg
                    className="absolute bottom-0 w-full h-12 text-slate-300 fill-current"
                    viewBox="0 0 500 100"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,100 L0,70 L20,70 L20,40 L35,40 L35,70 L50,70 L50,30 L70,30 L70,70 L90,70 L90,20 L110,20 L110,70 L130,70 L130,50 L145,50 L145,70 L160,70 L160,10 L185,10 L185,70 L210,70 L210,35 L225,35 L225,70 L250,70 L250,25 L270,25 L270,70 L290,70 L290,45 L310,45 L310,70 L330,70 L330,15 L355,15 L355,70 L380,70 L380,40 L395,40 L395,70 L410,70 L410,30 L430,30 L430,70 L450,70 L450,50 L470,50 L470,70 L500,70 L500,100 Z" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
