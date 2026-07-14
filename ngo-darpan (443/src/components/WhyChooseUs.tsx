/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { WHY_CHOOSE_US } from "../types";
import { Award, Zap, HeartHandshake, Eye, Headphones, CheckCircle, ShieldCheck, Scale } from "lucide-react";

const ICONS = [Award, Zap, HeartHandshake, Scale, Eye, Headphones, CheckCircle, ShieldCheck];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-24 bg-[#F1F3E8]/60 overflow-hidden"
    >
      {/* Decorative luxury gradient mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pastel-lavender/20 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-pastel-peach/15 blur-[150px] animate-pulse-slow" style={{ animationDelay: "4s" }}></div>
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(197,187,211,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(197,187,211,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_95%_95%_at_50%_50%,#000_90%,transparent_100%)]" 
        />
      </div>

      <div className="relative max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-pastel-lavender font-sans font-bold">Unparalleled Quality</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3D4127] font-bold tracking-tight">
            Why Choose Complete Tax Solution
          </h2>
          <p className="text-[#5B6045] font-sans text-sm max-w-xl mx-auto">
            Jaipur's elite regulatory advisory, trusted by prominent foundations, NGOs, and corporations for pristine government compliance.
          </p>
          <div className="w-20 h-1 bg-pastel-lavender mx-auto"></div>
        </div>

        {/* Bento/Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((feature, idx) => {
            const IconComponent = ICONS[idx] || Award;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5, borderColor: "#636B2F", boxShadow: "0 10px 25px -5px rgba(197, 187, 211, 0.25)" }}
                className="p-6 rounded-2xl bg-white border border-[#D1D6B6] transition-all duration-300 text-left flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-pastel-blush/60 border border-pastel-border flex items-center justify-center text-pastel-lavender">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#3D4127]">
                      {feature.title}
                    </h3>
                    <p className="text-[#5B6045] font-sans text-xs mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D1D6B6] text-[9px] uppercase tracking-wider font-mono text-pastel-lavender font-semibold">
                  Verified Standard
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
