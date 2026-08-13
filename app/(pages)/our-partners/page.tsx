"use client";

import { motion } from "framer-motion";
import homeData from "@/data/homeData.json";
import PageBanner from "@/components/common/PageBanner";
interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
}

// Partners json
const partnersData: PartnerLogo[] = [
  // Row 1
  {
    id: 1,
    name: "DLF",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/DLF_logo.svg",
  },
  {
    id: 2,
    name: "Godrej Properties",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Godrej_Properties_Logo.svg",
  },
  {
    id: 3,
    name: "Lodha",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Lodha_Group_logo.svg",
  },
  {
    id: 4,
    name: "Tata Projects",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
  },
  {
    id: 5,
    name: "Ireo",
    logo: "https://placehold.co/200x80/ffffff/111827?text=IREO",
  },

  // Row 2
  {
    id: 6,
    name: "Sobha Realty",
    logo: "https://placehold.co/200x80/ffffff/111827?text=SOBHA",
  },
  {
    id: 7,
    name: "Brigade Group",
    logo: "https://placehold.co/200x80/ffffff/111827?text=BRIGADE",
  },
  {
    id: 8,
    name: "Mahindra Lifespaces",
    logo: "https://placehold.co/200x80/ffffff/111827?text=Mahindra",
  },
  {
    id: 9,
    name: "Shapoorji Pallonji",
    logo: "https://placehold.co/200x80/ffffff/111827?text=Shapoorji",
  },
  {
    id: 10,
    name: "Prestige Group",
    logo: "https://placehold.co/200x80/ffffff/111827?text=PRESTIGE",
  },

  // Row 3
  {
    id: 11,
    name: "K Raheja Corp",
    logo: "https://placehold.co/200x80/ffffff/111827?text=K+RAHEJA",
  },
  {
    id: 12,
    name: "Puravankara",
    logo: "https://placehold.co/200x80/ffffff/111827?text=PURAVANKARA",
  },
  {
    id: 13,
    name: "Omaxe",
    logo: "https://placehold.co/200x80/ffffff/111827?text=OMAXE",
  },
  {
    id: 14,
    name: "Total Environment",
    logo: "https://placehold.co/200x80/ffffff/111827?text=TOTAL",
  },
  {
    id: 15,
    name: "JLL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/JLL_logo.svg",
  },

  // Row 4
  {
    id: 16,
    name: "CBRE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/CBRE_Group_logo.svg",
  },
  {
    id: 17,
    name: "Colliers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Colliers_International_logo.svg",
  },
  {
    id: 18,
    name: "Cushman & Wakefield",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Cushman_%26_Wakefield_logo.svg",
  },
  {
    id: 19,
    name: "Knight Frank",
    logo: "https://placehold.co/200x80/ffffff/111827?text=Knight+Frank",
  },
  {
    id: 20,
    name: "BPTP",
    logo: "https://placehold.co/200x80/ffffff/111827?text=BPTP",
  },

  // Row 5
  {
    id: 21,
    name: "Emaar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Emaar_Properties_logo.svg",
  },
  {
    id: 22,
    name: "NCC",
    logo: "https://placehold.co/200x80/ffffff/111827?text=NCC",
  },
  {
    id: 23,
    name: "Hiranandani",
    logo: "https://placehold.co/200x80/ffffff/111827?text=Hiranandani",
  },
  {
    id: 24,
    name: "Piramal Realty",
    logo: "https://placehold.co/200x80/ffffff/111827?text=Piramal",
  },
  {
    id: 25,
    name: "L&T Realty",
    logo: "https://placehold.co/200x80/ffffff/111827?text=L%26T+Realty",
  },

  // Row 6
  {
    id: 26,
    name: "ASBL",
    logo: "https://placehold.co/200x80/ffffff/111827?text=ASBL",
  },
  {
    id: 27,
    name: "Ajmera",
    logo: "https://placehold.co/200x80/ffffff/111827?text=ajmera",
  },
  {
    id: 28,
    name: "Signature Global",
    logo: "https://placehold.co/200x80/ffffff/111827?text=SIGNATURE",
  },
  {
    id: 29,
    name: "M3M",
    logo: "https://placehold.co/200x80/ffffff/111827?text=M3M",
  },
  {
    id: 30,
    name: "Ganga Realty",
    logo: "https://placehold.co/200x80/ffffff/111827?text=GANGA",
  },

  // Row 7
  {
    id: 31,
    name: "Rustomjee",
    logo: "https://placehold.co/200x80/ffffff/111827?text=Rustomjee",
  },
  {
    id: 32,
    name: "VTP Realty",
    logo: "https://placehold.co/200x80/ffffff/111827?text=VTP+REALTY",
  },
  {
    id: 33,
    name: "Tata Housing",
    logo: "https://placehold.co/200x80/ffffff/111827?text=TATA+HOUSING",
  },
  {
    id: 34,
    name: "Joyville",
    logo: "https://placehold.co/200x80/ffffff/111827?text=JOYVILLE",
  },
  {
    id: 35,
    name: "Sheth Creators",
    logo: "https://placehold.co/200x80/ffffff/111827?text=SHETH",
  },

  // Row 8
  {
    id: 36,
    name: "Kalpataru",
    logo: "https://placehold.co/200x80/ffffff/111827?text=KALPATARU",
  },
  {
    id: 37,
    name: "Arihant Superstructures",
    logo: "https://placehold.co/200x80/ffffff/111827?text=ARIHANT",
  },
  {
    id: 38,
    name: "Provident Housing",
    logo: "https://placehold.co/200x80/ffffff/111827?text=PROVIDENT",
  },
  {
    id: 39,
    name: "ATS Infrastructure",
    logo: "https://placehold.co/200x80/ffffff/111827?text=ATS",
  },
  {
    id: 40,
    name: "ACE Group",
    logo: "https://placehold.co/200x80/ffffff/111827?text=ACE",
  },

  // Row 9
  {
    id: 41,
    name: "Flora",
    logo: "https://placehold.co/200x80/ffffff/111827?text=FLORA",
  },
  {
    id: 42,
    name: "Anarock",
    logo: "https://placehold.co/200x80/ffffff/111827?text=ANAROCK",
  },
  {
    id: 43,
    name: "Ramky",
    logo: "https://placehold.co/200x80/ffffff/111827?text=RAMKY",
  },
  {
    id: 44,
    name: "Dosti Realty",
    logo: "https://placehold.co/200x80/ffffff/111827?text=DOSTI",
  },
  {
    id: 45,
    name: "Bhutani Infra",
    logo: "https://placehold.co/200x80/ffffff/111827?text=BHUTANI",
  },

  // Row 10
  {
    id: 46,
    name: "The Address Makers",
    logo: "https://placehold.co/200x80/ffffff/111827?text=ADDRESS",
  },
  {
    id: 47,
    name: "Sattva Group",
    logo: "https://placehold.co/200x80/ffffff/111827?text=SATTVA",
  },
  {
    id: 48,
    name: "Srijan Realty",
    logo: "https://placehold.co/200x80/ffffff/111827?text=srijan",
  },
  {
    id: 49,
    name: "Gammon",
    logo: "https://placehold.co/200x80/ffffff/111827?text=GAMMON",
  },
  {
    id: 50,
    name: "Reliance Infra",
    logo: "https://placehold.co/200x80/ffffff/111827?text=RELIANCE",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans pb-16">
      <PageBanner data={homeData.pageBanners["our-partners"]} />

      <div className="page-container pt-12 space-y-10">
        {/* 2. SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Esteemed Partners
          </h2>
          <div className="w-8 h-0.5 bg-red-500 mx-auto rounded-full" />
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
            Proud to collaborate with a diverse group of organizations that
            drive innovation and deliver excellence.
          </p>
        </motion.div>

        {/* 3. PARTNERS LOGO GRID (5 COLUMNS) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5"
        >
          {partnersData.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              className="bg-white rounded-xl p-3 sm:p-4 border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 flex items-center justify-center h-20 sm:h-24"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-[85%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
