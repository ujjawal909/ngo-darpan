/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Phone, Award, MessageSquare } from "lucide-react";
import ngoDarpanBg from "../../photo/Ngo Darpan_1746189558.jpg";
import pexelsPhoto from "../../photo/pexels-photo-461049-640x519.png";
import thirdPhoto from "../../photo/young-girl-planting-tree-19782175 .png";

const CYCLING_WORDS = ["NGOs", "Charitable Trusts", "Registered Societies", "Section 8 Companies"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = CYCLING_WORDS[wordIndex];
    const speed = isDeleting ? 40 : 100;

    if (!isDeleting && displayedText === currentWord) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center bg-pastel-ivory overflow-hidden"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pastel-lavender/25 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-pastel-peach/25 blur-[150px] animate-pulse-slow" style={{ animationDelay: "4s" }}></div>
        
        {/* Subtle grid pattern Overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(197,187,211,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(197,187,211,0.06)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_95%_95%_at_50%_50%,#000_90%,transparent_100%)]" 
        />
      </div>

      {/* Floating Particles (Decorative) */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-tr from-pastel-lavender/40 to-pastel-peach/30 blur-[1px] animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${Math.random() * 6 + 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 z-10 w-full flex flex-col items-center">
        
        {/* Top featured Photo (Clear, fully visible, framed beautifully - Ngo Darpan_1746189558.jpg) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1050px] mb-12 relative group"
        >
          {/* Decorative luxury glowing border frame behind the image */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-pastel-lavender to-pastel-peach rounded-2xl opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-white rounded-2xl border-4 border-white shadow-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/11] flex items-center justify-center">
            <img 
              src={ngoDarpanBg} 
              alt="NGO Darpan Registration Certificate and Portal" 
              className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Elegant glassmorphism watermark badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 px-4 py-2 rounded-xl bg-pastel-dark/80 backdrop-blur-md border border-pastel-lavender/40 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-stone-200 font-sans tracking-widest uppercase font-bold">NGO Darpan Verified Portal</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom grid: Text in the center, flanked by two beautiful photos on desktop */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-8 xl:gap-12 items-center w-full mt-4">
          
          {/* Column 1: Left Photo (young-girl-planting-tree-19782175) on desktop, Left side-by-side on mobile */}
          <div className="col-span-6 lg:col-span-3 order-2 lg:order-1 w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full relative group"
            >
              {/* Decorative luxury glowing border frame behind the image */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-pastel-lavender to-pastel-peach rounded-xl opacity-60 blur-sm group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="relative bg-white rounded-xl border-2 sm:border-4 border-white shadow-xl overflow-hidden aspect-[3/4] sm:aspect-square lg:aspect-[3/4] flex items-center justify-center">
                <img 
                  src={thirdPhoto} 
                  alt="NGO Social Work & Tree Planting Activity" 
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Elegant glassmorphism watermark badge */}
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg bg-pastel-dark/80 backdrop-blur-md border border-pastel-lavender/40 flex items-center space-x-1 justify-center">
                  <span className="text-[8px] text-stone-200 font-sans tracking-wider uppercase font-bold text-center">Social Impact Initiative</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Centered main compliance and registration words */}
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 space-y-8 flex flex-col items-center text-center justify-center py-4 lg:py-0">
            
            {/* Tag badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-pastel-blush/80 text-pastel-dark text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-pastel-border"
            >
              <Award className="w-3.5 h-3.5 text-pastel-lavender" />
              <span className="font-sans font-semibold">
                Jaipur's Elite NGO Compliance Authority
              </span>
            </motion.div>

            {/* Main Typographical Headings */}
            <div className="space-y-4 w-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#3D4127] font-bold tracking-tight leading-[1.1] text-center"
              >
                NGO Darpan <br />
                <span className="text-pastel-lavender italic">Registration</span> Made Easy
              </motion.h1>

              {/* Dynamic Sub-tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans text-base sm:text-lg md:text-xl text-[#5B6045] font-normal flex flex-wrap justify-center items-center gap-2"
              >
                <span>We assist registered</span>
                <span className="font-serif font-semibold text-pastel-lavender border-r-2 border-pastel-lavender pr-1 min-w-[140px] inline-block text-center">
                  {displayedText}
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-sans text-sm sm:text-base text-[#5B6045] max-w-2xl leading-relaxed font-light mx-auto"
              >
                Helping NGOs, Trusts and Societies get registered quickly with complete government compliance. Obtain your NITI Aayog Unique ID, 12A/80G, and CSR-1 with zero rejections.
              </motion.p>
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 border-y border-[#D1D6B6] py-6 w-full max-w-lg mx-auto"
            >
              <div>
                <div className="font-serif text-xl sm:text-2xl xl:text-3xl font-bold text-[#3D4127]">1000+</div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-sans font-semibold uppercase tracking-wider mt-1">NGOs Served</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl xl:text-3xl font-bold text-[#3D4127]">12+ Yrs</div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-sans font-semibold uppercase tracking-wider mt-1">CA Experience</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl xl:text-3xl font-bold text-[#3D4127]">99.8%</div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-sans font-semibold uppercase tracking-wider mt-1">Approval Rate</div>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mx-auto"
            >
              {/* Primary Call Action */}
              <a
                id="hero-call-btn"
                href="tel:+916378051234"
                className="px-6 py-4 bg-pastel-peach text-[#3D4127] hover:bg-gradient-to-r hover:from-pastel-lavender hover:to-pastel-peach rounded-xl font-bold text-xs sm:text-sm shadow-xl shadow-pastel-peach/10 flex items-center justify-center space-x-2 transition-all hover:-translate-y-0.5 border border-[#D1D6B6]"
              >
                <Phone className="w-4 h-4 text-[#3D4127]" />
                <span>Call CA Expert Now</span>
              </a>

              {/* WhatsApp Contact Action */}
              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/918741009775"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-xs sm:text-sm hover:shadow-green-500/20 shadow-lg flex items-center justify-center space-x-2 transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 fill-white text-white" />
                <span>Connect on WhatsApp</span>
              </a>
            </motion.div>
          </div>

          {/* Column 3: Right Photo (pexels-photo-461049-640x519) on desktop, Right side-by-side on mobile */}
          <div className="col-span-6 lg:col-span-3 order-3 lg:order-3 w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full relative group"
            >
              {/* Decorative luxury glowing border frame behind the image */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-pastel-lavender to-pastel-peach rounded-xl opacity-60 blur-sm group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="relative bg-white rounded-xl border-2 sm:border-4 border-white shadow-xl overflow-hidden aspect-[3/4] sm:aspect-square lg:aspect-[3/4] flex items-center justify-center">
                <img 
                  src={pexelsPhoto} 
                  alt="NGO Darpan Registration Team & Portals" 
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Elegant glassmorphism watermark badge */}
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg bg-pastel-dark/80 backdrop-blur-md border border-pastel-lavender/40 flex items-center space-x-1 justify-center">
                  <span className="text-[8px] text-stone-200 font-sans tracking-wider uppercase font-bold text-center">Verified Assistant</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
