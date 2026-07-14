/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ExternalLink, Landmark, ShieldCheck, Scale, Leaf, ArrowUpRight } from "lucide-react";

interface BrandItem {
  name: string;
  url: string;
  tagline: string;
  description: string;
  icon: any;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    iconBg: string;
    iconColor: string;
    hoverBorder: string;
    accent: string;
  };
}

const BRANDS: BrandItem[] = [
  {
    name: "Subsidy Setu",
    url: "https://www.subsidysetu.in/",
    tagline: "Government Subsidies & Grants Port",
    description: "Your direct bridge to secure MSME loans, central/state subsidies, and government incentive schemes seamlessly.",
    icon: Landmark,
    colorScheme: {
      bg: "bg-[#BAC095]/10",
      border: "border-[#BAC095]/30",
      text: "text-[#3D4127]",
      iconBg: "bg-[#BAC095]",
      iconColor: "text-[#3D4127]",
      hoverBorder: "hover:border-[#BAC095] hover:shadow-[#BAC095]/10",
      accent: "text-[#BAC095]"
    }
  },
  {
    name: "CA Solution",
    url: "https://www.casolution.org/",
    tagline: "Chartered Accountancy & Audit Services",
    description: "Expert tax audits, legal representations, complex company incorporations, and robust corporate financial structuring.",
    icon: ShieldCheck,
    colorScheme: {
      bg: "bg-[#636B2F]/10",
      border: "border-[#636B2F]/30",
      text: "text-[#3D4127]",
      iconBg: "bg-[#636B2F]",
      iconColor: "text-[#3D4127]",
      hoverBorder: "hover:border-[#636B2F] hover:shadow-[#636B2F]/10",
      accent: "text-[#636B2F]"
    }
  },
  {
    name: "Complete Tax Solution",
    url: "https://www.completetaxsolution.in/",
    tagline: "Taxation, Filing & Compliance",
    description: "High-fidelity tax planning, error-free ITR filings, robust GST compliance, and ongoing corporate legal advisory under one single portal.",
    icon: Scale,
    colorScheme: {
      bg: "bg-[#F1F3E8]/30",
      border: "border-[#F1F3E8]",
      text: "text-[#3D4127]",
      iconBg: "bg-[#BAC095]",
      iconColor: "text-[#3D4127]",
      hoverBorder: "hover:border-[#BAC095] hover:shadow-[#BAC095]/10",
      accent: "text-[#BAC095]"
    }
  },
  {
    name: "Namakwali",
    url: "https://www.namakwali.in/",
    tagline: "Artisanal Pahadi Organic Spices & Salts",
    description: "Empowering rural women artisans of Uttarakhand. Savor hand-ground traditional Himalayan rock salts and authentic mountain spices.",
    icon: Leaf,
    colorScheme: {
      bg: "bg-[#F8F9F5]/80",
      border: "border-[#BAC095]/30",
      text: "text-[#3D4127]",
      iconBg: "bg-[#636B2F]",
      iconColor: "text-[#3D4127]",
      hoverBorder: "hover:border-[#636B2F] hover:shadow-[#636B2F]/10",
      accent: "text-[#636B2F]"
    }
  }
];

export default function AssociatedBrands() {
  return (
    <section 
      id="our-network"
      className="relative py-24 bg-pastel-ivory overflow-hidden border-t border-[#D1D6B6]"
    >
      {/* Background radial highlight */}
      <div className="absolute top-0 right-[10%] w-[350px] h-[350px] bg-pastel-lavender/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] bg-pastel-peach/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pastel-blush/60 border border-pastel-border/60 text-[#3D4127] text-xs font-semibold uppercase tracking-wider mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-pastel-lavender animate-ping" />
            <span>Our Professional Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3D4127] font-bold tracking-tight">
            Our Associated Network & Group Platforms
          </h2>
          <p className="text-[#5B6045] font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Under the leadership of our qualified compliance professionals, we operate several leading platforms spanning government subsidy consultancy, accounting services, and social impact startups.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-lavender to-pastel-peach mx-auto rounded-full"></div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {BRANDS.map((brand, idx) => {
            const Icon = brand.icon;
            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                className={`relative group rounded-3xl p-6 sm:p-8 border bg-white ${brand.colorScheme.border} ${brand.colorScheme.hoverBorder} transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between`}
              >
                <div>
                  {/* Icon and external action link */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${brand.colorScheme.iconBg} flex items-center justify-center text-[#3D4127] shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <motion.a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-full bg-stone-50 border border-stone-200/60 text-stone-400 hover:text-pastel-lavender hover:bg-stone-100 flex items-center justify-center transition-all shadow-sm"
                      aria-label={`Visit ${brand.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Brand Content */}
                  <div className="space-y-3">
                    <span className={`text-[10px] uppercase tracking-widest font-mono font-bold ${brand.colorScheme.accent}`}>
                      {brand.tagline}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#3D4127] group-hover:text-pastel-lavender transition-colors duration-300">
                      {brand.name}
                    </h3>
                    <p className="text-[#5B6045] font-sans text-xs sm:text-[13px] leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="pt-6 mt-6 border-t border-stone-100/80">
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#3D4127] group-hover:text-pastel-lavender transition-colors"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
