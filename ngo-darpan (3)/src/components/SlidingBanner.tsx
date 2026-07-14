/**
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Landmark, Shield, Award, CheckCircle2, BadgeCheck } from "lucide-react";

const TICKER_ITEMS = [
  { text: "NGO Darpan Unique ID", icon: Award },
  { text: "12A Tax-Free Provisional Approval", icon: Shield },
  { text: "80G Donor Exemption Compliance", icon: Landmark },
  { text: "Section 8 Company Registration", icon: BadgeCheck },
  { text: "CSR-1 Regulatory Filing", icon: CheckCircle2 },
  { text: "SOCIETY & TRUST REGISTRATION", icon: Award },
  { text: "MSME UDYAM REGISTRATION", icon: Shield },
  { text: "TRADEMARK & IP PROTECTION", icon: BadgeCheck },
  { text: "ITR-7 SPECIALIST COMPLIANCE", icon: Landmark },
];

export default function SlidingBanner() {
  // Triple the items array to ensure a seamless infinite loop coverage regardless of screen size
  const repeatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative w-full overflow-hidden bg-[#BAC095] py-4 border-y border-[#D1D6B6] shadow-sm select-none">
      {/* Absolute ambient light leaks from sides to fade out edge cuts */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#BAC095] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#BAC095] to-transparent z-10 pointer-events-none" />

      {/* Moving track container */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          id="sliding-text-track"
          className="flex space-x-12 sm:space-x-16 items-center shrink-0 pr-12 sm:pr-16"
          animate={{ x: [0, "-33.3333%"] }}
          transition={{
            repeat: Infinity,
            duration: 28,
            ease: "linear",
          }}
        >
          {repeatedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-2.5 sm:space-x-3.5 text-[#3D4127] group"
              >
                <Icon className="w-4.5 h-4.5 text-[#636B2F] group-hover:scale-110 transition-transform duration-300" />
                <span className="font-serif text-[12.5px] sm:text-[13.5px] font-bold uppercase tracking-widest text-[#3D4127] group-hover:text-[#F8F9F5] transition-colors duration-300">
                  {item.text}
                </span>
                <span className="text-[#F8F9F5] text-xs font-mono font-black">•</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
