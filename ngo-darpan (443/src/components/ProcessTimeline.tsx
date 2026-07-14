/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PROCESS_STEPS } from "../types";
import i1Image from "../../photo/i1.png";
import i2Image from "../../photo/i2.png";
import { 
  Phone, 
  CheckCircle, 
  FileText, 
  Search, 
  Send, 
  GraduationCap, 
  LifeBuoy, 
  Clock, 
  ArrowRight, 
  Check, 
  Sparkles 
} from "lucide-react";

const ICONS = [Phone, FileText, Search, Send, GraduationCap, LifeBuoy];

// High-fidelity infographic metadata for each step
const STEP_META = [
  {
    duration: "1-2 Hours",
    highlights: ["Discuss NGO Objectives", "Verify legal structures", "Confirm custom roadmap"],
    badgeColor: "bg-[#BAC095]/15 text-[#3D4127] border-[#BAC095]/30"
  },
  {
    duration: "1 Day",
    highlights: ["NGO PAN Card & Deed", "Executive Member IDs", "Bank Details & NOC"],
    badgeColor: "bg-[#636B2F]/15 text-[#3D4127] border-[#636B2F]/30"
  },
  {
    duration: "1-2 Days",
    highlights: ["Spell & legal audits", "Resolve mismatches", "Pre-submission review"],
    badgeColor: "bg-[#F1F3E8]/60 text-[#3D4127] border-[#BAC095]/30"
  },
  {
    duration: "1-2 Days",
    highlights: ["Profile Setup on NITI", "Form Filling (Form 10A/9A)", "Secure PDF Uploads"],
    badgeColor: "bg-[#BAC095]/15 text-[#3D4127] border-[#BAC095]/30"
  },
  {
    duration: "7-15 Days",
    highlights: ["Officer follow-up", "Query resolution", "ID certificate generation"],
    badgeColor: "bg-[#636B2F]/15 text-[#3D4127] border-[#636B2F]/30"
  },
  {
    duration: "Ongoing",
    highlights: ["CSR-1 Filing activation", "Grant advice", "Compliance renewal tracker"],
    badgeColor: "bg-[#F1F3E8]/60 text-[#3D4127] border-[#BAC095]/30"
  }
];

export default function ProcessTimeline() {
  return (
    <section
      id="process-section"
      className="relative py-24 bg-pastel-ivory overflow-hidden border-t border-[#D1D6B6]"
    >
      {/* Background ambient aesthetic light leaks */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] bg-pastel-lavender/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-15%] w-[450px] h-[450px] bg-pastel-peach/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pastel-blush/60 border border-pastel-border text-[#3D4127] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pastel-lavender animate-spin-slow" />
            <span>Interactive Workflow Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3D4127] font-bold tracking-tight">
            Our 6-Step Registration Path
          </h2>
          <p className="text-stone-500 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our high-performance infographic workflow removes bureaucratic friction. We handle official portals while you build your vision.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pastel-lavender to-pastel-peach mx-auto rounded-full"></div>
        </div>

        {/* Process Timeline Layout */}
        <div className="relative">
          
          {/* Animated Central Connecting Line (grows on scroll, left-aligned on mobile, center on desktop) */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 top-4 bottom-4 w-1 bg-[#D1D6B6] transform lg:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div
              id="timeline-progress-line"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-pastel-lavender via-pastel-peach to-pastel-lavender origin-top"
            />
          </div>
 
          <div className="space-y-16 lg:space-y-24">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = ICONS[idx];
              const meta = STEP_META[idx];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center w-full pl-16 sm:pl-24 lg:pl-0 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Text card block with dynamic spring animations */}
                  <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 85, 
                      damping: 14, 
                      delay: idx * 0.08 
                    }}
                    className="w-full lg:w-[45%] text-left group"
                  >
                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D1D6B6] shadow-md hover:shadow-2xl relative group hover:border-pastel-peach transition-all duration-500 transform hover:-translate-y-1.5 cursor-default overflow-hidden">
                      
                      {/* Top Corner Gradient Accents on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pastel-lavender via-pastel-peach to-pastel-lavender opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Floating Absolute Big Step Number */}
                      <span className="absolute -top-3 -right-3 font-serif text-6xl sm:text-7xl font-black text-stone-100/70 group-hover:text-pastel-blush/80 transition-colors duration-500 pointer-events-none select-none">
                        0{step.step}
                      </span>

                      <div className="space-y-5 relative z-10">
                        {/* Upper Badges Block */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] uppercase tracking-widest text-[#3D4127] font-sans font-bold bg-pastel-blush/60 px-2.5 py-1 rounded-full border border-pastel-border inline-block shadow-sm">
                            Phase 0{step.step}
                          </span>
                          
                          {/* Duration Infographic Badge */}
                          <div className={`inline-flex items-center space-x-1 text-[10px] font-sans font-medium px-2.5 py-1 rounded-full border shadow-xs ${meta.badgeColor}`}>
                            <Clock className="w-3 h-3 shrink-0" />
                            <span>{meta.duration}</span>
                          </div>
                        </div>

                        {/* Heading & description */}
                        <div className="space-y-2">
                          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3D4127] group-hover:text-pastel-lavender transition-colors">
                            {step.title}
                          </h3>
                          <p className="font-sans text-stone-500 text-xs sm:text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Interactive Highlights Infographic Checklist */}
                        <div className="pt-3 border-t border-stone-100/85">
                          <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono font-semibold block mb-2.5">
                            Key Deliverables & Action Items:
                          </span>
                          <ul className="space-y-2">
                            {meta.highlights.map((item, keyIdx) => (
                              <motion.li 
                                key={keyIdx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx * 0.05) + (keyIdx * 0.08) }}
                                className="flex items-start space-x-2 text-stone-600 font-sans text-xs sm:text-[13px]"
                              >
                                <span className="p-0.5 rounded-full bg-pastel-blush/40 border border-pastel-border text-pastel-lavender shrink-0 mt-0.5 group-hover:bg-pastel-lavender group-hover:text-[#3D4127] group-hover:border-pastel-lavender transition-all duration-300">
                                  <Check className="w-3 h-3" />
                                </span>
                                <span className="group-hover:text-stone-800 transition-colors duration-300">
                                  {item}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Fancy hover micro-interaction pointer */}
                        <div className="pt-1 flex items-center text-[11px] font-bold text-pastel-lavender tracking-wider uppercase font-mono opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-500">
                          <span>Secure Filing Process</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1 animate-pulse" />
                        </div>

                        {/* Mobile display for Step 1 & Step 2 Images */}
                        {idx === 0 && (
                          <div className="mt-4 lg:hidden rounded-xl overflow-hidden border border-stone-150 bg-stone-50/50 p-2.5">
                            <img 
                              src={i1Image} 
                              alt="Expert Consultation"
                              className="w-full h-auto max-h-[160px] object-contain mx-auto rounded-lg"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                        {idx === 1 && (
                          <div className="mt-4 lg:hidden rounded-xl overflow-hidden border border-stone-150 bg-stone-50/50 p-2.5">
                            <img 
                              src={i2Image} 
                              alt="Document Collection"
                              className="w-full h-auto max-h-[160px] object-contain mx-auto rounded-lg"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}

                      </div>
                    </div>
                  </motion.div>

                  {/* Absolute Timeline Icon Indicator with high-end spring pulse and rotation */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0, rotate: -45 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 180, 
                      damping: 11, 
                      delay: idx * 0.12 
                    }}
                    className="absolute left-6 sm:left-8 lg:left-1/2 top-4 lg:top-auto transform -translate-x-1/2 lg:-translate-y-1/2 z-20 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center"
                  >
                    {/* Glowing pulse rings */}
                    <span className="absolute inset-0 rounded-full bg-pastel-peach/30 blur animate-ping duration-2000" />
                    
                    {/* Golden/Blue Inner compliance coin */}
                    <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-pastel-lavender flex items-center justify-center text-pastel-lavender shadow-xl relative hover:scale-115 hover:border-pastel-peach transition-all duration-300 group-hover:rotate-12">
                      <IconComponent className="w-4 h-4 lg:w-6 lg:h-6 text-pastel-lavender animate-pulse-slow" />
                      
                      {/* Micro glowing point */}
                      <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-pastel-peach border border-white animate-pulse" />
                    </div>
                  </motion.div>

                  {/* Desktop Empty Spacer Column or High-End Graphic Frame */}
                  <div className="hidden lg:flex lg:w-[45%] items-center justify-center">
                    {idx === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#D1D6B6] bg-white p-3 shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        <img 
                          src={i1Image} 
                          alt="Expert Consultation"
                          className="w-full h-auto max-h-[220px] object-contain rounded-xl pointer-events-none select-none transition-transform duration-500 hover:scale-[1.03]"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    )}
                    {idx === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#D1D6B6] bg-white p-3 shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        <img 
                          src={i2Image} 
                          alt="Document Collection"
                          className="w-full h-auto max-h-[220px] object-contain rounded-xl pointer-events-none select-none transition-transform duration-500 hover:scale-[1.03]"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

