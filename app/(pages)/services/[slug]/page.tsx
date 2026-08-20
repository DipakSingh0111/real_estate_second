"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { site } from "@/data";
import PageBanner from "@/components/common/PageBanner";

export default function ServiceDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const serviceData = site.Service.variants.RealEstateServicePage1.productSlides.find(
    (slide) => slide.slug === slug,
  );

  if (!serviceData) {
    return notFound();
  }

  const imageUrl = serviceData.image || "/images/property_01.avif";
  const featureLabels = serviceData.productFeatures.map((f) => f.label);
  const featureList = featureLabels.length > 0 ? featureLabels : serviceData.benefits;

  return (
    <main className="bg-white font-sans text-slate-900">
      <PageBanner
        data={{
          ...site.PageBanner.variants.RealEstateInnerBanner1.services,
          title: serviceData.productTitle,
          breadcrumb: [
            { label: "Services", href: "/services" },
            { label: serviceData.productTitle, href: "#" },
          ],
        } as any}
      />

      <section className="page-container pt-8 sm:pt-10 md:pt-12 pb-8 lg:pt-20 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={imageUrl}
              alt={serviceData.alt || serviceData.productTitle}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#142345]">
              {serviceData.productTitle}
            </h2>
            <div className="w-16 h-[3px] bg-[#1B36B0]" />
            <h3 className="text-xl font-bold text-slate-700">
              {serviceData.productSubtitle}
            </h3>
            <p className="text-[15px] leading-relaxed text-slate-500">
              {serviceData.productInfoDesc}
            </p>

            <ul className="space-y-4 pt-4">
              {featureList.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <FaCheckCircle className="text-[#1B36B0] text-lg shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8">
              <Link
                href="/enquiry"
                className="inline-flex items-center space-x-2 bg-[#1B36B0] hover:bg-blue-800 text-white px-8 py-3.5 rounded-xl font-bold transition-colors shadow-lg shadow-blue-900/20"
              >
                <span>Contact Us Today</span>
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
