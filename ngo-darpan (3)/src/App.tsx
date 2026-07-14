/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, ArrowUp, Sparkles, Award, ShieldCheck } from "lucide-react";

// Modular Imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import NGODarpan from "./components/NGODarpan";
import Services from "./components/Services";
import ProcessTimeline from "./components/ProcessTimeline";
import DocumentsGrid from "./components/DocumentsGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import AssociatedBrands from "./components/AssociatedBrands";
import FAQs from "./components/FAQs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";

// Modals
import { PrivacyModal, TermsModal, DisclaimerModal } from "./components/Modals";
import CustomCursor from "./components/CustomCursor";
import SlidingBanner from "./components/SlidingBanner";

// Images
import exemptionImage from "../photo/ChatGPT Image Jul 8, 2026, 12_45_07 PM.png";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Modal States
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  // Simulate smooth high-end loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Monitor scroll for Back-to-Top visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen bg-stone-50 font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-pastel-lavender/30 selection:text-pastel-dark">
      
      {/* Premium Interactive Cursor Move Effect */}
      <CustomCursor />
      
      {/* Luxury Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 bg-[#F8F9F5] z-[9999] flex flex-col items-center justify-center space-y-6 text-center px-4"
          >
            {/* Spinning Gold Frame */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-16 h-16 rounded-full border-4 border-pastel-lavender/10 border-t-pastel-lavender shadow-md shadow-pastel-lavender/10"
              />
              <span className="absolute font-serif text-lg font-black text-[#3D4127]">ND</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-serif font-bold text-xl text-[#3D4127] tracking-wide">
                NGO Darpan
              </h1>
              <p className="text-[10px] text-pastel-lavender uppercase tracking-widest font-sans font-semibold">
                Complete Tax Solution
              </p>
            </div>

            <div className="flex items-center space-x-2 text-[#5B6045] font-sans text-[10px] uppercase tracking-wider">
              <ShieldCheck className="w-4.5 h-4.5 text-pastel-peach shrink-0" />
              <span>Jaipur Certified Compliance Panel</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Main Content Layout */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col min-h-screen"
        >
          {/* Header */}
          <Header />

          {/* Core Corporate Sections */}
          <main className="flex-grow">
            {/* Hero Section */}
            <Hero />

            {/* Sliding Text Animation Banner */}
            <SlidingBanner />

            {/* About Us */}
            <AboutUs />

            {/* Reusable CTA 1 */}
            <CTASection 
              title="Establish Your Non-Profit Legally Today"
              subtitle="Connect with certified Jaipur practitioners for flawless Trust/Society draft review and instant submission on official registries."
              primaryActionLabel="Consult on WhatsApp"
            />

            {/* NGO Darpan Educational Deep Dive */}
            <NGODarpan />

            {/* Services Grid (17+ Services) */}
            <Services />

            {/* Reusable CTA 2 */}
            <CTASection 
              title="Need Provisional 12A & 80G Tax Exemptions?"
              subtitle="Maximize your fundraising capabilities immediately. We file 12A & 80G profiles with zero delays."
              primaryActionLabel="Get Tax Exemption Help"
              image={exemptionImage}
            />

            {/* Process Timeline (6 Steps) */}
            <ProcessTimeline />

            {/* Documents Checklist Grid */}
            <DocumentsGrid />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Reusable CTA 3 */}
            <CTASection 
              title="Securing Your NGO's MCA CSR-1 Registrations"
              subtitle="Form CSR-1 is highly mandatory to receive corporate funding budgets. File error-free with Complete Tax Solution."
              primaryActionLabel="Fast-Track CSR-1 Setup"
            />

            {/* Client Testimonials Carousel */}
            <Testimonials />

            {/* Our Associated Brand Network Platforms */}
            <AssociatedBrands />

            {/* Frequently Asked Questions */}
            <FAQs />

            {/* Working Contact Form & Google Map */}
            <ContactForm />
          </main>

          {/* Footer with Policy trigger binds */}
          <Footer 
            onOpenPrivacy={() => setIsPrivacyOpen(true)}
            onOpenTerms={() => setIsTermsOpen(true)}
            onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          />

          {/* Dynamic Popup Overlays */}
          <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
          <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
          <DisclaimerModal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} />

          {/* FLOATING ACTION INTERFACES */}

          {/* Phone Floating Call Button (Bottom Left) */}
          <motion.a
            id="floating-call-btn"
            href="tel:+916378051234"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-white border border-[#D1D6B6] text-[#3D4127] rounded-full flex items-center justify-center shadow-lg group hover:shadow-[#BAC095]/20"
            aria-label="Direct Call Support"
          >
            <Phone className="w-6 h-6 text-pastel-lavender animate-pulse" />
            <span className="absolute left-16 bg-white text-[#3D4127] text-[10px] uppercase font-sans font-bold tracking-wider px-3 py-1 rounded-md shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 whitespace-nowrap border border-[#D1D6B6]">
              Call CA: 63780 51234
            </span>
          </motion.a>

          {/* WhatsApp Floating Button (Bottom Right) */}
          <motion.a
            id="floating-whatsapp-btn"
            href="https://wa.me/918741009775"
            target="_blank"
            rel="noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-tr from-[#636B2F] to-[#636B2F] text-[#3D4127] rounded-full flex items-center justify-center shadow-lg group hover:shadow-[#636B2F]/40 border border-[#D1D6B6]"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-6 h-6 fill-[#3D4127] text-[#3D4127]" />
            <span className="absolute right-16 bg-white text-[#3D4127] text-[10px] uppercase font-sans font-bold tracking-wider px-3 py-1 rounded-md shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 whitespace-nowrap border border-[#D1D6B6]">
              WhatsApp: 87410 09775
            </span>
          </motion.a>

          {/* Back to Top Floating Button (Bottom Right, directly above WhatsApp) */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                id="floating-scroll-top"
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                whileHover={{ scale: 1.1, backgroundColor: "#636B2F" }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-24 right-7 z-40 w-12 h-12 bg-white border border-[#D1D6B6] text-[#3D4127] rounded-full flex items-center justify-center shadow-md cursor-pointer transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

        </motion.div>
      )}

    </div>
  );
}
