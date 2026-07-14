/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../types";
import { ChevronDown, Search, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Distinct FAQ Categories derived dynamically
  const categories = ["All", "NGO Darpan", "NGO Registration", "Tax Exemptions", "About Firm"];

  const filteredFAQs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq-section"
      className="relative py-24 bg-pastel-ivory overflow-hidden border-t border-[#D1D6B6]"
    >
      {/* Decorative Background effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-[#BAC095]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-[#636B2F]/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-pastel-lavender font-sans font-bold">In-Depth Guidance</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3D4127] font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5B6045] font-sans text-sm max-w-md mx-auto">
            Got queries? Search through our exhaustive compliance database containing expert CA/Cost Accountant verified answers.
          </p>
          <div className="w-16 h-1 bg-pastel-lavender mx-auto"></div>
        </div>

        {/* Search Bar + Category Filters */}
        <div className="space-y-6 mb-10">
          
          {/* Custom Luxury Search input */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search compliance issues, documents, timelines..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setOpenIndex(null); // Close open accordions on search
              }}
              className="w-full px-5 py-4 pl-12 rounded-xl border border-[#D1D6B6] bg-white text-slate-800 placeholder-stone-400 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-pastel-lavender focus:border-transparent shadow-sm transition-all"
            />
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

          {/* Quick Category filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-lg font-sans font-medium text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-pastel-lavender border-pastel-lavender text-pastel-dark shadow-md shadow-pastel-lavender/10"
                    : "bg-white hover:bg-[#F8F9F5]/30 border-[#D1D6B6] text-stone-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-white hover:bg-white border border-[#D1D6B6] rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 pr-4">
                      <HelpCircle className="w-5 h-5 text-pastel-lavender shrink-0" />
                      <h3 className="font-serif font-bold text-sm sm:text-base text-[#3D4127]">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-pastel-peach" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed border-t border-[#D1D6B6]">
                          <p className="bg-[#F8F9F5]/20 p-4 rounded-xl border border-[#D1D6B6]/50 shadow-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white border border-[#D1D6B6] rounded-2xl">
              <MessageSquare className="w-8 h-8 text-stone-300 mx-auto mb-2" />
              <p className="text-stone-500 font-sans text-sm">No matching questions found.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className="text-xs font-semibold text-pastel-lavender mt-2 hover:underline cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
