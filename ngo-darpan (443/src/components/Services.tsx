/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES, ServiceItem } from "../types";
import { 
  CheckCircle, 
  ArrowUpRight, 
  HelpCircle, 
  FileText, 
  Briefcase, 
  Landmark,
  Award,
  Scale,
  Users,
  Building2,
  Gift,
  Shield,
  Target,
  Cpu,
  Globe,
  Copyright,
  Store,
  Receipt,
  FileSpreadsheet,
  Fingerprint,
  Calculator,
  FilePieChart,
  Banknote
} from "lucide-react";
import premiumBadgeBg from "../../photo/ChatGPT Image Jul 8, 2026, 11_14_03 AM.png";

const SERVICE_STYLING: Record<string, {
  icon: React.ComponentType<any>;
  authority: string;
  accentClass: string;
  badgeHighlight: string;
}> = {
  "ngo-darpan": {
    icon: Award,
    authority: "NITI Aayog, Govt of India",
    accentClass: "from-[#BAC095] via-[#636B2F] to-[#F1F3E8]",
    badgeHighlight: "Mandatory for Grants"
  },
  "trust-reg": {
    icon: Scale,
    authority: "Devasthan Dept, Rajasthan",
    accentClass: "from-[#636B2F] via-[#F1F3E8] to-[#BAC095]",
    badgeHighlight: "Devasthan Approved"
  },
  "society-reg": {
    icon: Users,
    authority: "Cooperative Dept, Rajasthan",
    accentClass: "from-[#F1F3E8] via-[#BAC095] to-[#636B2F]",
    badgeHighlight: "Rajasthan Society Act"
  },
  "sec8-company": {
    icon: Building2,
    authority: "Ministry of Corporate Affairs",
    accentClass: "from-[#BAC095] via-[#F1F3E8] to-[#F8F9F5]",
    badgeHighlight: "Highest Stature"
  },
  "reg-80g": {
    icon: Gift,
    authority: "Income Tax Department",
    accentClass: "from-[#F1F3E8] via-[#636B2F] to-[#F1F3E8]",
    badgeHighlight: "Donor Tax Benefit"
  },
  "reg-12a": {
    icon: Shield,
    authority: "Income Tax Department",
    accentClass: "from-[#636B2F] via-[#BAC095] to-[#F1F3E8]",
    badgeHighlight: "Lifetime Tax-Free"
  },
  "csr-reg": {
    icon: Target,
    authority: "Ministry of Corporate Affairs",
    accentClass: "from-[#BAC095] via-[#636B2F] to-[#F8F9F5]",
    badgeHighlight: "CSR Fund Eligible"
  },
  "niti-aayog": {
    icon: Cpu,
    authority: "NITI Aayog Portal",
    accentClass: "from-[#F1F3E8] via-[#BAC095] to-[#F8F9F5]",
    badgeHighlight: "Central Portal Setup"
  },
  "fcra-consult": {
    icon: Globe,
    authority: "Ministry of Home Affairs",
    accentClass: "from-[#636B2F] via-[#F1F3E8] to-[#F8F9F5]",
    badgeHighlight: "Foreign Funding"
  },
  "trademark": {
    icon: Copyright,
    authority: "Trade Marks Registry, IP India",
    accentClass: "from-[#BAC095] via-[#636B2F] to-[#F1F3E8]",
    badgeHighlight: "Brand Name Protected"
  },
  "msme-reg": {
    icon: Store,
    authority: "Ministry of MSME",
    accentClass: "from-[#636B2F] via-[#F1F3E8] to-[#BAC095]",
    badgeHighlight: "Udyam Subsidies"
  },
  "gst-reg": {
    icon: Receipt,
    authority: "GSTN Council",
    accentClass: "from-[#F1F3E8] via-[#BAC095] to-[#636B2F]",
    badgeHighlight: "GSTIN returns"
  },
  "itr-filing": {
    icon: FileSpreadsheet,
    authority: "Income Tax Department",
    accentClass: "from-[#BAC095] via-[#F8F9F5] to-[#F1F3E8]",
    badgeHighlight: "ITR-7 Specialists"
  },
  "dsc-services": {
    icon: Fingerprint,
    authority: "CCA Approved",
    accentClass: "from-[#636B2F] via-[#BAC095] to-[#F8F9F5]",
    badgeHighlight: "Class 3 Secure"
  },
  "accounting": {
    icon: Calculator,
    authority: "ICA Standards Compliance",
    accentClass: "from-[#F1F3E8] via-[#636B2F] to-[#BAC095]",
    badgeHighlight: "Cloud Bookkeeping"
  },
  "project-report": {
    icon: FilePieChart,
    authority: "Banks & Funding Agencies",
    accentClass: "from-[#BAC095] via-[#F1F3E8] to-[#636B2F]",
    badgeHighlight: "High Loan Approval"
  },
  "business-loan": {
    icon: Banknote,
    authority: "Public & Private Banks",
    accentClass: "from-[#636B2F] via-[#F8F9F5] to-[#F1F3E8]",
    badgeHighlight: "MSME Scheme Subsidy"
  }
};

export default function Services() {
  const [filter, setFilter] = useState<"all" | "ngo" | "tax" | "compliance">("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES.filter(
    (service) => filter === "all" || service.category === filter
  );

  return (
    <section
      id="services-section"
      className="relative py-24 bg-pastel-ivory overflow-hidden border-t border-[#D1D6B6]"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-pastel-lavender/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[450px] h-[450px] bg-pastel-peach/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Heading & National Scope Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16">
          {/* Left Block: Heading Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pastel-blush/60 border border-pastel-border/60 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pastel-lavender opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pastel-lavender"></span>
              </span>
              <span className="text-[11px] uppercase tracking-widest text-pastel-dark font-sans font-bold">Comprehensive Suite</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif text-[#3D4127] font-bold tracking-tight leading-tight">
              Our Our <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pastel-lavender via-pastel-peach to-pastel-lavender font-extrabold italic pr-1">Premium Services</span>
            </h2>
            
            <p className="text-[#5B6045] font-sans text-sm md:text-base leading-relaxed max-w-2xl">
              From initial incorporation to complex tax exemptions and continuous audits, our specialists manage every detail of your business compliance with absolute integrity. We serve organizations across India from our hub in Jaipur.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-1.5">
              <div className="w-10 h-[2px] bg-pastel-border"></div>
              <div className="w-2 h-2 rounded-full bg-pastel-lavender"></div>
              <div className="w-10 h-[2px] bg-pastel-border"></div>
            </div>
          </div>

          {/* Right Block: Elegant fully visible Premium Services Badge (Transparent, no background, no border) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-xs lg:max-w-[360px] flex items-center justify-center"
            >
              <img 
                src={premiumBadgeBg} 
                alt="Our Premium Services Certificate Seal" 
                className="w-full h-auto max-h-[300px] object-contain pointer-events-none select-none transition-transform duration-500 hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Filter Bar with micro-animations */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All 17+ Services" },
            { id: "ngo", label: "NGO & Trust Registrations" },
            { id: "tax", label: "Taxation & Exemptions" },
            { id: "compliance", label: "Corporate Compliance" }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-5 py-2.5 rounded-full font-sans font-medium text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                filter === btn.id
                  ? "bg-pastel-lavender border-pastel-lavender text-pastel-dark shadow-md shadow-pastel-lavender/10"
                  : "bg-white border-pastel-border text-pastel-text hover:border-pastel-peach hover:bg-pastel-blush/20"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const styling = SERVICE_STYLING[service.id] || {
                icon: Briefcase,
                authority: "Regulatory Authority",
                accentClass: "from-gold-600 via-amber-500 to-yellow-500",
                badgeHighlight: "Premium Compliance"
              };
              const IconComponent = styling.icon;
              
              // Find index in original SERVICES array to show stable catalog numbers 01-17
              const originalIndex = SERVICES.findIndex((s) => s.id === service.id);
              const displayNum = originalIndex !== -1 ? originalIndex + 1 : idx + 1;
              const formattedNum = displayNum < 10 ? `0${displayNum}` : `${displayNum}`;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  key={service.id}
                  id={`service-${service.id}`}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl border border-[#D1D6B6] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-pastel-peach overflow-hidden text-left"
                >
                  {/* Glowing Background Radial Accents (Active on Hover) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-50/40 to-white -z-10 group-hover:from-stone-50/10 group-hover:to-stone-50/20 transition-all duration-300" />
                  
                  {/* Subtle color highlight blur at top right corner */}
                  <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${styling.accentClass} opacity-5 group-hover:opacity-10 blur-xl transition-all duration-500`} />
                  
                  {/* Top Elegant Accent Border Line */}
                  <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${styling.accentClass} opacity-10 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />

                  <div className="space-y-4">
                    {/* Header Row: Catalog Number & Specialized Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-mono font-bold tracking-wider text-[#3D4127] bg-[#F1F3E8]/60 border border-[#D1D6B6] px-2 py-0.5 rounded-full shadow-3xs">
                          #{formattedNum}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider font-mono font-bold px-2 py-0.5 rounded bg-[#F8F9F5]/80 text-[#5B6045] border border-[#D1D6B6]">
                          {service.category === "ngo"
                            ? "NGO & Trust"
                            : service.category === "tax"
                            ? "Tax & Audit"
                            : "Compliance"}
                        </span>
                      </div>
                      
                      {/* Interactive highlighted custom badge for each service */}
                      <span className="text-[9px] font-sans font-bold px-2.5 py-0.5 rounded-full bg-pastel-blush/60 text-pastel-dark border border-[#D1D6B6] shadow-3xs group-hover:bg-pastel-peach/30 transition-colors duration-200">
                        {styling.badgeHighlight}
                      </span>
                    </div>

                    {/* Icon & Authority Area */}
                    <div className="flex items-start space-x-4 pt-1">
                      {/* Highly styled container with floating shadow */}
                      <div className={`w-14 h-14 rounded-xl bg-[#F8F9F5]/60 flex items-center justify-center border border-[#D1D6B6] text-[#3D4127] shadow-3xs group-hover:bg-gradient-to-br group-hover:${styling.accentClass} group-hover:text-white group-hover:border-transparent group-hover:shadow-md transition-all duration-300`}>
                        <IconComponent className="w-6 h-6 text-pastel-lavender group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                      </div>
                      
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-mono text-stone-400 uppercase tracking-wider leading-none">Authority / Jurisdiction</p>
                        <h4 className="text-xs font-sans font-semibold text-[#3D4127] leading-tight">
                          {styling.authority}
                        </h4>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[19px] font-extrabold text-[#3D4127] leading-tight tracking-tight pt-1 group-hover:text-pastel-lavender transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-[#5B6045] text-[12.5px] leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Actions & Analyze */}
                  <div className="pt-5 mt-5 border-t border-stone-100/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-[12px] font-sans font-bold text-[#3D4127] group-hover:text-pastel-lavender flex items-center space-x-1.5 cursor-pointer group/btn"
                    >
                      <span>Analyze Scope</span>
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F8F9F5]/60 group-hover/btn:bg-pastel-blush/50 transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-pastel-lavender transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </button>
                    <span className="text-[10px] font-mono text-stone-400 font-semibold">CTS-{(originalIndex+1 < 10 ? `0${originalIndex+1}` : originalIndex+1)}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Detail Modal (Glassmorphism backdrop) */}
        <AnimatePresence>
          {selectedService && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-navy-950/80 z-50 backdrop-blur-sm"
                onClick={() => setSelectedService(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
                className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-xl w-full max-h-[85vh] bg-white border border-[#D1D6B6] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto z-50 text-left"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between pb-4 border-b border-stone-100">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-pastel-lavender font-sans font-bold">
                      {selectedService.category === "ngo" ? "NGO Registration" : selectedService.category === "tax" ? "Tax compliance" : "Corporate services"}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D4127]">
                      {selectedService.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-full text-stone-400 hover:text-[#3D4127] hover:bg-stone-50 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Modal Body */}
                <div className="py-5 space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-sans font-bold text-xs text-stone-400 uppercase tracking-wider">Detailed Scope</h4>
                    <p className="font-sans text-[#5B6045] text-sm leading-relaxed">
                      {selectedService.detailedInfo}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-sans font-bold text-xs text-stone-400 uppercase tracking-wider">Core Advantages & Deliverables</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-pastel-peach shrink-0 mt-0.5" />
                          <span className="text-xs text-[#5B6045] leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer / Form link */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-serif italic text-pastel-lavender">Complete Tax Solution Jaipur</span>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      const contactSec = document.getElementById("contact-section");
                      if (contactSec) {
                        contactSec.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-4 py-2 rounded-lg bg-pastel-peach text-pastel-dark font-sans text-xs font-semibold hover:bg-pastel-lavender transition-all border border-[#D1D6B6] cursor-pointer"
                  >
                    Enquire Directly
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
