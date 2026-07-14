/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageSquare, ChevronDown, Award, Shield, FileText } from "lucide-react";
import { SERVICES } from "../types";
import logoDarpan from "../../photo/logo darpan.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // offset for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-pastel-border/60 py-3"
          : "bg-white/90 backdrop-blur-md border-b border-pastel-border/30 py-4"
      }`}
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            id="brand-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-3 group shrink-0"
          >
            <div className="relative w-10 h-10 rounded-xl bg-white border border-pastel-border p-1 flex items-center justify-center shadow-sm transform group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img 
                src={logoDarpan} 
                alt="NGO Darpan Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[#3D4127] font-serif font-bold text-lg md:text-xl tracking-tight leading-none group-hover:text-pastel-lavender transition-colors">
                NGO <span className="text-pastel-lavender">Darpan</span>
              </span>
              <span className="text-[9px] text-[#5B6045] uppercase tracking-widest mt-1 font-sans font-bold">
                Complete Tax Solution
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            <button
              id="nav-home"
              onClick={() => handleLinkClick("site-header")}
              className="group relative py-1 text-[#5B6045] hover:text-[#3D4127] font-sans font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="relative">
                Home
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-pastel-lavender transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <button
              id="nav-about"
              onClick={() => handleLinkClick("about-section")}
              className="group relative py-1 text-[#5B6045] hover:text-[#3D4127] font-sans font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="relative">
                About Us
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-pastel-lavender transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            
            {/* Services Dropdown */}
            <div 
              className="relative py-1"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                id="nav-services-trigger"
                onClick={() => {
                  handleLinkClick("services-section");
                  setServicesDropdownOpen(false);
                }}
                className="group flex items-center space-x-1 text-[#5B6045] hover:text-[#3D4127] font-sans font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span className="relative flex items-center space-x-1">
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180 text-pastel-lavender" : "text-stone-400 group-hover:text-[#3D4127]"}`} />
                  <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-pastel-lavender transition-all duration-300 group-hover:w-[calc(100%-14px)]"></span>
                </span>
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    id="services-dropdown"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white border border-pastel-border rounded-2xl shadow-[0_20px_50px_rgba(45,45,45,0.08)] p-4 grid grid-cols-1 gap-2 z-20 backdrop-blur-lg"
                  >
                    <div className="text-[10px] font-bold text-pastel-lavender uppercase tracking-widest px-2 pb-1.5 border-b border-[#D1D6B6]">
                      Registration & Compliance
                    </div>
                    <div className="max-h-80 overflow-y-auto pr-1 space-y-1 mt-1.5 scrollbar-thin">
                      {SERVICES.slice(0, 9).map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            handleLinkClick(`service-${service.id}`);
                            setServicesDropdownOpen(false);
                          }}
                          className="w-full text-left px-2.5 py-2 rounded-xl text-stone-600 hover:text-pastel-dark hover:bg-pastel-ivory text-xs font-sans font-semibold transition-all flex items-center space-x-2.5"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-pastel-peach shrink-0"></div>
                          <span className="truncate">{service.title}</span>
                        </button>
                      ))}
                      <button
                        onClick={() => {
                          handleLinkClick("services-section");
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-center mt-2 px-3 py-2 rounded-xl bg-pastel-peach/25 hover:bg-pastel-peach/40 text-[#3D4127] text-[10px] font-bold uppercase tracking-widest transition-all border border-pastel-peach/20"
                      >
                        View All 17+ Services
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              id="nav-darpan"
              onClick={() => handleLinkClick("darpan-section")}
              className="group relative py-1 text-[#5B6045] hover:text-[#3D4127] font-sans font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="relative">
                NGO Darpan
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-pastel-lavender transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <button
              id="nav-timeline"
              onClick={() => handleLinkClick("process-section")}
              className="group relative py-1 text-[#5B6045] hover:text-[#3D4127] font-sans font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="relative">
                Our Process
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-pastel-lavender transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <button
              id="nav-documents"
              onClick={() => handleLinkClick("documents-section")}
              className="group relative py-1 text-[#5B6045] hover:text-[#3D4127] font-sans font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="relative">
                Documents
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-pastel-lavender transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <button
              id="nav-faq"
              onClick={() => handleLinkClick("faq-section")}
              className="group relative py-1 text-[#5B6045] hover:text-[#3D4127] font-sans font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="relative">
                FAQs
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-pastel-lavender transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            <button
              id="nav-contact"
              onClick={() => handleLinkClick("contact-section")}
              className="group relative py-1 text-[#5B6045] hover:text-[#3D4127] font-sans font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="relative">
                Contact
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-pastel-lavender transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </nav>

          {/* Contact Trigger Pill */}
          <div className="hidden lg:flex items-center">
            <a
              id="header-call-btn"
              href="tel:+916378051234"
              className="flex items-center space-x-2 bg-pastel-peach/10 hover:bg-pastel-peach/20 border border-pastel-peach/30 px-5 py-2 rounded-full text-[#3D4127] text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-pastel-peach shrink-0 animate-pulse" />
              <span>+91 63780 51234</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-850 p-2.5 rounded-xl hover:bg-pastel-ivory transition-all"
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              id="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-80 bg-white border-l border-[#D1D6B6] z-50 p-6 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <span className="font-serif font-bold text-lg text-[#3D4127]">CTS Navigation</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-4">
                  <button
                    onClick={() => handleLinkClick("site-header")}
                    className="text-left text-[#3D4127] hover:text-pastel-lavender text-base font-semibold py-1 cursor-pointer"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleLinkClick("about-section")}
                    className="text-left text-slate-700 hover:text-pastel-lavender text-base font-medium py-1 cursor-pointer"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handleLinkClick("darpan-section")}
                    className="text-left text-slate-700 hover:text-pastel-lavender text-base font-medium py-1 cursor-pointer"
                  >
                    NGO Darpan Registration
                  </button>
                  <button
                    onClick={() => handleLinkClick("services-section")}
                    className="text-left text-slate-700 hover:text-pastel-lavender text-base font-medium py-1 cursor-pointer"
                  >
                    All 17+ Services
                  </button>
                  <button
                    onClick={() => handleLinkClick("process-section")}
                    className="text-left text-slate-700 hover:text-pastel-lavender text-base font-medium py-1 cursor-pointer"
                  >
                    Our 6-Step Process
                  </button>
                  <button
                    onClick={() => handleLinkClick("documents-section")}
                    className="text-left text-slate-700 hover:text-pastel-lavender text-base font-medium py-1 cursor-pointer"
                  >
                    Documents List
                  </button>
                  <button
                    onClick={() => handleLinkClick("faq-section")}
                    className="text-left text-slate-700 hover:text-pastel-lavender text-base font-medium py-1 cursor-pointer"
                  >
                    FAQs
                  </button>
                  <button
                    onClick={() => handleLinkClick("contact-section")}
                    className="text-left text-slate-700 hover:text-pastel-lavender text-base font-medium py-1 cursor-pointer"
                  >
                    Contact Office
                  </button>
                </nav>
              </div>

              <div className="space-y-4 border-t border-slate-200 pt-6">
                <a
                  href="tel:+916378051234"
                  className="flex items-center space-x-3 text-slate-700 hover:text-pastel-lavender text-sm font-medium py-1"
                >
                  <Phone className="w-4 h-4 text-pastel-peach shrink-0" />
                  <span>+91 63780 51234</span>
                </a>
                <a
                  href="https://wa.me/918741009775"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3 text-slate-700 hover:text-green-600 text-sm font-medium py-1"
                >
                  <MessageSquare className="w-4 h-4 text-green-500 shrink-0" />
                  <span>WhatsApp Expert</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
