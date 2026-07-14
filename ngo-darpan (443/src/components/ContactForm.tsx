/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, Mail, MapPin, Globe, MessageSquare, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const contactItems = [
    {
      id: "address",
      icon: <MapPin className="w-5 h-5 text-pastel-lavender" />,
      title: "Office Address",
      info: "Complete Tax Solution, C-2, Krishna Enclave, B-1, Kailash Nagar, Jhotwara, Jaipur, Rajasthan – 302012",
      link: "https://share.google/lkZSuiK5ZYTZQkfMN",
      badge: "Corporate Headquarters",
    },
    {
      id: "phone",
      icon: <Phone className="w-5 h-5 text-pastel-lavender" />,
      title: "Mobile Call Support",
      info: "+91 63780 51234",
      link: "tel:+916378051234",
      badge: "Direct Line",
    },
    {
      id: "whatsapp",
      icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
      title: "WhatsApp Expert Line",
      info: "+91 87410 09775",
      link: "https://wa.me/918741009775",
      badge: "Instant Chat",
    },
    {
      id: "email",
      icon: <Mail className="w-5 h-5 text-pastel-lavender" />,
      title: "Email Inquiry",
      info: "taxca2@gmail.com",
      link: "mailto:taxca2@gmail.com",
      badge: "Official Inbox",
    },
    {
      id: "website",
      icon: <Globe className="w-5 h-5 text-pastel-lavender" />,
      title: "Official Website",
      info: "www.completetaxsolution.in",
      link: "https://www.completetaxsolution.in",
      badge: "Secure Portal",
    },
  ];

  return (
    <section
      id="contact-section"
      className="relative py-24 bg-gradient-to-b from-white to-[#F1F3E8]/15 overflow-hidden border-t border-[#D1D6B6]"
    >
      {/* Premium Decorative Lighting Blur Orbs */}
      <div className="absolute top-[-5%] right-[-10%] w-[450px] h-[450px] bg-[#BAC095]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[450px] h-[450px] bg-[#636B2F]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Premium Left-Hand Contact Card (40% width approx.) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-white border border-[#D1D6B6] rounded-[24px] p-6 sm:p-10 shadow-[0_15px_40px_-15px_rgba(45,45,45,0.06)] flex flex-col justify-between relative overflow-hidden text-left h-full transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(45,45,45,0.08)]">
              {/* Elegant Top Decorative Border Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pastel-lavender via-[#636B2F] to-pastel-lavender"></div>
              
              <div className="space-y-8">
                {/* Headers Inside Card */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase tracking-widest text-pastel-lavender font-sans font-bold bg-[#BAC095]/10 px-2.5 py-1 rounded-full">
                      Contact Us
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#636B2F]"></span>
                    <span className="text-[10px] text-stone-400 font-sans font-bold uppercase tracking-widest">
                      Advisory Panel
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D4127] leading-tight tracking-tight">
                    Get in Touch with <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D4127] to-stone-600">
                      Complete Tax Solution
                    </span>
                  </h3>
                  <p className="text-[#5B6045] font-sans text-xs sm:text-sm leading-relaxed max-w-md">
                    Connect directly with our panel of certified Chartered Accountants and compliance experts for fast-track NGO registration, taxation, and legal advisory services.
                  </p>
                </div>

                {/* Vertical Contact Cards List */}
                <div className="space-y-4">
                  {contactItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      target={item.id === "address" || item.id === "website" || item.id === "whatsapp" ? "_blank" : undefined}
                      rel={item.id === "address" || item.id === "website" || item.id === "whatsapp" ? "noreferrer" : undefined}
                      className="group/item flex items-center justify-between p-4 bg-[#F4F6F0] hover:bg-white border border-stone-100 hover:border-pastel-lavender/30 rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_-8px_rgba(45,45,45,0.04)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-left"
                    >
                      <div className="flex items-start space-x-4 min-w-0">
                        {/* Icon Container */}
                        <div className="w-11 h-11 rounded-[12px] bg-white border border-stone-150/60 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.01)] group-hover/item:bg-pastel-lavender/10 group-hover/item:border-pastel-lavender/20 transition-all duration-300 shrink-0">
                          {item.icon}
                        </div>
                        
                        {/* Title & Info */}
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center space-x-1.5">
                            <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-sans group-hover/item:text-pastel-lavender transition-colors duration-300">
                              {item.title}
                            </h4>
                            {item.badge && (
                              <span className="text-[8px] bg-white text-stone-400 border border-stone-150/50 px-1.5 py-0.5 rounded-md font-sans font-semibold">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-[13px] font-sans text-stone-700 font-bold leading-snug group-hover/item:text-[#3D4127] transition-colors duration-300 break-words">
                            {item.info}
                          </p>
                        </div>
                      </div>

                      {/* Hover Arrow Indicator */}
                      <div className="w-7 h-7 rounded-full bg-stone-100/40 group-hover/item:bg-pastel-lavender/5 flex items-center justify-center shrink-0 ml-2 transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-stone-300 group-hover/item:text-pastel-lavender group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Assurance */}
              <div className="pt-6 mt-8 border-t border-stone-100 flex items-center space-x-3 text-stone-500 font-sans text-[11px]">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-semibold text-stone-600">Jaipur Certified Corporate Registration Office</span>
              </div>
            </div>
          </div>

          {/* Column 2: Premium Right-Hand Google Map (60% width approx.) */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[480px] lg:min-h-0">
            <div className="border border-[#D1D6B6] rounded-[20px] overflow-hidden shadow-[0_15px_40px_-15px_rgba(45,45,45,0.06)] h-full w-full relative bg-stone-50 flex transform transition-transform duration-500 hover:shadow-[0_20px_50px_-10px_rgba(45,45,45,0.08)]">
              {/* Subtle top indicator matching the aesthetic */}
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md border border-stone-200/60 px-3.5 py-1.5 rounded-full shadow-sm flex items-center space-x-2 text-[10px] font-bold text-stone-700 font-sans uppercase tracking-widest pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-pastel-lavender shrink-0" />
                <span>Live Location Map</span>
              </div>
              
              <iframe
                title="Complete Tax Solution Office Map Location"
                src="https://maps.google.com/maps?q=COMPLETE%20TAX%20SOLUTION,%20Krishna%20Enclave,%20Jaipur,%20Rajasthan%20302012&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
