/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle, ShieldCheck, CreditCard, Lock, Scale, Award, AlertCircle } from "lucide-react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#3D4127]/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-xl w-full bg-white border border-[#D1D6B6] rounded-3xl shadow-xl p-6 sm:p-8 overflow-y-auto max-h-[80vh] z-[101] text-left"
          >
            <div className="flex items-start justify-between pb-4 border-b border-[#D1D6B6] mb-4">
              <div>
                <span className="text-[10px] text-pastel-lavender uppercase tracking-widest font-sans font-bold">Policy Document</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D4127]">Privacy Policy</h3>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-full text-stone-400 hover:text-pastel-lavender hover:bg-[#F8F9F5]/30">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4 font-sans text-xs text-stone-600 leading-relaxed overflow-y-auto pr-1">
              <p>
                <strong>Last Updated: July 2026</strong>
              </p>
              <p>
                At <strong>Complete Tax Solution</strong>, accessible from www.completetaxsolution.in, protecting the privacy of our NGO, Trust, and corporate clients is our utmost priority. This Privacy Policy document outlines the types of information we collect, record, and how we securely utilize it.
              </p>
              <h4 className="font-bold text-[#3D4127] text-sm">1. Document and File Encryption</h4>
              <p>
                Any government credentials, Aadhaar cards, PAN cards, or trust deeds you submit to us via our online form, email, or WhatsApp are immediately encrypted and stored inside secure offline directories. We never sell, rent, or distribute these files to third-party databases.
              </p>
              <h4 className="font-bold text-[#3D4127] text-sm">2. Information Collection and Consent</h4>
              <p>
                We only collect basic personal and organizational information (such as name, mobile number, email, and NGO name) that you voluntarily provide to initiate your registration. By submitting your phone number, you explicitly consent to receiving voice calls and WhatsApp support from our CA panel regarding your compliance process.
              </p>
              <h4 className="font-bold text-[#3D4127] text-sm">3. Security Audits</h4>
              <p>
                Our server databases undergo routine security checks to ensure zero leaks. We strictly adhere to the Information Technology Act, 2000, of the Republic of India regarding data privacy and confidential compliance.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function TermsModal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#3D4127]/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-xl w-full bg-white border border-[#D1D6B6] rounded-3xl shadow-xl p-6 sm:p-8 overflow-y-auto max-h-[80vh] z-[101] text-left"
          >
            <div className="flex items-start justify-between pb-4 border-b border-[#D1D6B6] mb-4">
              <div>
                <span className="text-[10px] text-pastel-lavender uppercase tracking-widest font-sans font-bold">Service Agreement</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D4127]">Terms & Conditions</h3>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-full text-stone-400 hover:text-pastel-lavender hover:bg-[#F8F9F5]/30">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4 font-sans text-xs text-stone-600 leading-relaxed overflow-y-auto pr-1">
              <p>
                <strong>Agreement Jurisdiction: Jaipur, Rajasthan</strong>
              </p>
              <p>
                Welcome to <strong>Complete Tax Solution</strong>. By accessing this website and utilizing our professional filing services, you agree to comply with and be bound by the following Terms & Conditions.
              </p>
              <h4 className="font-bold text-[#3D4127] text-sm">1. Professional CA/Cost Accountant Scope</h4>
              <p>
                Complete Tax Solution provides administrative, legal, and educational advisory services for filing NGO registrations on Government portals (including NITI Aayog NGO Darpan, Ministry of Corporate Affairs, and Devasthan department). The final discretion of approval resides solely with government authorities.
              </p>
              <h4 className="font-bold text-[#3D4127] text-sm">2. Accuracy of Submitted Credentials</h4>
              <p>
                The client is solely responsible for ensuring that all documents (PAN, Aadhaar, Trust Deeds, Mobile numbers) submitted to Complete Tax Solution are 100% authentic and legally sound. Complete Tax Solution bears no liability for delayed or rejected government applications caused by forged documents or incorrect member details.
              </p>
              <h4 className="font-bold text-[#3D4127] text-sm">3. Professional Consulting Fees</h4>
              <p>
                All consulting fees are detailed transparently before filing begins. Government portal registrations (where official fees are zero, such as NGO Darpan) involve professional drafting and filing fees which are strictly non-refundable once the file has been submitted to the government.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function DisclaimerModal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#3D4127]/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-xl w-full bg-white border border-[#D1D6B6] rounded-3xl shadow-xl p-6 sm:p-8 overflow-y-auto max-h-[80vh] z-[101] text-left"
          >
            <div className="flex items-start justify-between pb-4 border-b border-[#D1D6B6] mb-4">
              <div>
                <span className="text-[10px] text-pastel-lavender uppercase tracking-widest font-sans font-bold">Legal Notice</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D4127]">Legal Disclaimer</h3>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-full text-stone-400 hover:text-pastel-lavender hover:bg-[#F8F9F5]/30">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4 font-sans text-xs text-stone-600 leading-relaxed overflow-y-auto pr-1">
              <p>
                <strong>Information Transparency Directive</strong>
              </p>
              <p>
                The contents, descriptions, FAQ answers, and analytical charts featured on this website (www.completetaxsolution.in) are provided for general educational and institutional informational purposes only.
              </p>
              <h4 className="font-bold text-[#3D4127] text-sm">1. No Direct Affiliation with NITI Aayog</h4>
              <p>
                <strong>Complete Tax Solution</strong> is an independent, private professional consultancy firm operated by certified practitioners in Jaipur, Rajasthan. We are NOT directly affiliated with the NITI Aayog (Government of India), Ministry of Corporate Affairs, or any other government department. Our service is limited to drafting, filing, and managing regulatory portal applications on behalf of clients under lawful authorization.
              </p>
              <h4 className="font-bold text-[#3D4127] text-sm">2. Professional Relationship</h4>
              <p>
                Accessing this website or submitting an online form does not constitute a binding legal partnership or retainer until a formal service quote has been confirmed by our Chartered Accountants in writing. All taxation issues require direct individual auditing.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
