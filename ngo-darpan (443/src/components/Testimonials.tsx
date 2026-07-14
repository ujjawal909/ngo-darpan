/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../types";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play the testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials-section"
      className="relative py-24 bg-[#F1F3E8]/30 overflow-hidden border-t border-[#D1D6B6]"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#BAC095]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-[#636B2F]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-pastel-lavender font-sans font-bold">Client Experiences</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3D4127] font-bold tracking-tight">
            Trusted by Leaders of Change
          </h2>
          <p className="text-[#5B6045] font-sans text-sm max-w-md mx-auto">
            Read how we have empowered registered charitable trusts, societies, and foundations across Rajasthan.
          </p>
          <div className="w-16 h-1 bg-pastel-lavender mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white border border-[#D1D6B6] rounded-3xl p-8 sm:p-12 shadow-md text-center min-h-[340px] flex flex-col justify-between">
          
          {/* Decorative Giant Quote icon */}
          <div className="absolute top-6 left-8 text-[#F1F3E8] pointer-events-none opacity-60">
            <Quote className="w-16 h-16 transform -scale-x-100" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative z-10"
            >
              {/* Stars Row */}
              <div className="flex justify-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#636B2F] text-[#636B2F]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#3D4127] leading-relaxed max-w-2xl mx-auto">
                "{current.text}"
              </blockquote>

              {/* Author Info */}
              <div className="space-y-1">
                <cite className="not-italic font-sans font-bold text-[#3D4127] text-base block">
                  {current.name}
                </cite>
                <span className="font-sans text-xs text-pastel-lavender block uppercase tracking-wider font-semibold">
                  {current.organization}
                </span>
                <span className="font-sans text-[11px] text-stone-400 block">
                  {current.location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="flex justify-center space-x-4 mt-8 pt-6 border-t border-stone-100">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-[#D1D6B6] bg-white hover:bg-pastel-blush/40 hover:border-pastel-peach text-stone-600 hover:text-pastel-lavender transition-all cursor-pointer shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "w-6 bg-[#BAC095]" : "bg-stone-200"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-[#D1D6B6] bg-white hover:bg-pastel-blush/40 hover:border-pastel-peach text-stone-600 hover:text-pastel-lavender transition-all cursor-pointer shadow-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
