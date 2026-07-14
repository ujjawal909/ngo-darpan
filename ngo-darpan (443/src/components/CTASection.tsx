/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, Award, MessageSquare } from "lucide-react";

interface CTASectionProps {
  onOpenApply?: () => void;
  title?: string;
  subtitle?: string;
  primaryActionLabel?: string;
  image?: string;
}

export default function CTASection({
  onOpenApply,
  title = "Register Your NGO & Secure Government Grants",
  subtitle = "Talk to our Chartered Accountants and get your NGO Darpan Unique ID, 12A/80G tax exemptions, and CSR-1 completed with zero hassle.",
  primaryActionLabel = "Get Free Consultation",
  image
}: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-24 bg-[#F1F3E8] overflow-hidden border-t border-[#D1D6B6]">
      {/* Subtle luxury mesh background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[100%] rounded-full bg-[#BAC095]/25 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-30%] right-[-10%] w-[50%] h-[100%] rounded-full bg-[#636B2F]/25 blur-[120px] animate-pulse-slow"></div>
        
        {/* Very subtle elegant grid pattern to elevate look */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(197,187,211,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(197,187,211,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        />
      </div>

      <div className="relative max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 z-10">
        {image ? (
          /* 2-Column Grid Layout when side image is provided */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & CTA Buttons */}
            <div className="lg:col-span-6 text-left space-y-8 order-2 lg:order-1">
              
              {/* Top visual Badge */}
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#BAC095]/20 border border-[#BAC095]/40 shadow-sm">
                <Award className="w-3.5 h-3.5 text-pastel-lavender" />
                <span className="text-[10px] text-[#3D4127] font-sans tracking-wide uppercase font-semibold">
                  Jaipur's Dedicated CA Compliance Advisory
                </span>
              </div>

              {/* Text Details */}
              <div className="space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3D4127] font-bold leading-tight">
                  {title}
                </h2>
                <p className="font-sans text-[#5B6045] text-base md:text-lg leading-relaxed font-normal">
                  {subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {/* Consult on WhatsApp Button */}
                <a
                  href="https://wa.me/918741009775?text=Hello%21%20I%20want%20to%20consult%20about%20NGO%20Darpan%20and%20compliance%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#636B2F] to-[#636B2F] hover:from-[#BAC095] hover:to-[#636B2F] text-[#3D4127] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#636B2F]/30 hover:-translate-y-0.5 transition-all cursor-pointer group overflow-hidden flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 fill-none text-[#3D4127] shrink-0" />
                  <span className="relative z-10">{primaryActionLabel}</span>
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </a>

                {/* Quick Call Button */}
                <a
                  href="tel:+916378051234"
                  className="px-8 py-3.5 rounded-xl border border-[#BAC095]/30 bg-white text-[#3D4127] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#F8F9F5]/40 hover:border-pastel-peach flex items-center justify-center space-x-2 transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-pastel-lavender" />
                  <span>Talk to an Expert</span>
                </a>
              </div>

              {/* Small reassurance check */}
              <p className="text-[11px] text-[#5B6045] font-sans pt-2 flex items-center gap-1.5">
                <span>🛡️</span>
                <span>100% Secure Digital File Submission • Zero Information Leak Guarantee</span>
              </p>
            </div>

            {/* Right Column: Transparent image without background or border */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-lg lg:max-w-xl flex items-center justify-center"
              >
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-auto max-h-[480px] lg:max-h-[550px] object-contain pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

          </div>
        ) : (
          /* Polished Centered Layout when no image is provided */
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
            
            {/* Top visual Badge */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#BAC095]/20 border border-[#BAC095]/40 shadow-sm">
              <Award className="w-3.5 h-3.5 text-pastel-lavender" />
              <span className="text-[10px] text-[#3D4127] font-sans tracking-wide uppercase font-semibold">
                Jaipur's Dedicated CA Compliance Advisory
              </span>
            </div>

            {/* Text Details */}
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#3D4127] font-bold leading-tight max-w-3xl mx-auto">
                {title}
              </h2>
              <p className="font-sans text-[#5B6045] text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
                {subtitle}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2 w-full sm:w-auto">
              {/* Consult on WhatsApp Button */}
              <a
                href="https://wa.me/918741009775?text=Hello%21%20I%20want%20to%20consult%20about%20NGO%20Darpan%20and%20compliance%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#636B2F] to-[#636B2F] hover:from-[#BAC095] hover:to-[#636B2F] text-[#3D4127] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#636B2F]/30 hover:-translate-y-0.5 transition-all cursor-pointer group overflow-hidden flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-none text-[#3D4127] shrink-0" />
                <span className="relative z-10">{primaryActionLabel}</span>
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </a>

              {/* Quick Call Button */}
              <a
                href="tel:+916378051234"
                className="px-8 py-3.5 rounded-xl border border-[#BAC095]/30 bg-white text-[#3D4127] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#F8F9F5]/40 hover:border-pastel-peach flex items-center justify-center space-x-2 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <Phone className="w-4 h-4 text-pastel-lavender" />
                <span>Talk to an Expert</span>
              </a>
            </div>

            {/* Small reassurance check */}
            <p className="text-[11px] text-[#5B6045] font-sans pt-2 flex items-center justify-center gap-1.5">
              <span>🛡️</span>
              <span>100% Secure Digital File Submission • Zero Information Leak Guarantee</span>
            </p>

          </div>
        )}
      </div>
    </section>
  );
}
