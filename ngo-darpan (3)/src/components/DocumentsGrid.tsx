/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { REQUIRED_DOCUMENTS } from "../types";
import { FileText, UserCheck, BookOpen, Award, Home, Mail, Smartphone, CreditCard, Image, ShieldAlert } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  FileText: FileText,
  UserCheck: UserCheck,
  BookOpen: BookOpen,
  Award: Award,
  Home: Home,
  Mail: Mail,
  Smartphone: Smartphone,
  CreditCard: CreditCard,
  Image: Image
};

export default function DocumentsGrid() {
  return (
    <section
      id="documents-section"
      className="relative py-24 bg-pastel-ivory overflow-hidden border-t border-[#D1D6B6]"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#BAC095]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-[#636B2F]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-pastel-lavender font-sans font-bold">Preparation Checklist</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3D4127] font-bold tracking-tight">
            Documents Required
          </h2>
          <p className="text-[#5B6045] font-sans text-sm max-w-xl mx-auto">
            Ensure you have scanned, clear PDF/JPG copies of these documents before beginning. We double-audit every file to ensure error-free portal approval.
          </p>
          <div className="w-20 h-1 bg-pastel-lavender mx-auto"></div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REQUIRED_DOCUMENTS.map((doc, idx) => {
            const Icon = ICON_MAP[doc.iconName] || FileText;

            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white hover:bg-white border border-[#D1D6B6] hover:border-pastel-peach shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-pastel-blush/60 border border-pastel-border flex items-center justify-center text-pastel-lavender">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#3D4127]">
                      {doc.title}
                    </h3>
                    <p className="text-[#5B6045] font-sans text-xs mt-1.5 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400 font-sans">
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-pastel-peach"></span>
                    <span>Format: PDF / JPEG</span>
                  </span>
                  <span>Mandatory</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Audit Notice Warning Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-14 max-w-2xl mx-auto p-5 rounded-2xl bg-white border border-[#D1D6B6] flex items-start space-x-3 text-left shadow-sm"
        >
          <ShieldAlert className="w-5 h-5 text-pastel-peach shrink-0 mt-0.5" />
          <div>
            <h4 className="font-sans font-bold text-xs text-[#3D4127] uppercase tracking-wider">Expert Audit Assurance</h4>
            <p className="text-xs text-[#5B6045] font-sans mt-1 leading-relaxed">
              <strong>Complete Tax Solution</strong> performs a 100% complimentary check on the names and address details across your PAN card, Aadhaar cards, and Trust Deed to ensure zero clerical discrepancies before filing on the NITI Aayog portal.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
