/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Users, BookCheck, ShieldCheck, MapPin } from "lucide-react";
import advisoryBg from "../../photo/ChatGPT Image Jul 7, 2026, 07_05_02 PM.png";

export default function AboutUs() {
  return (
    <section
      id="about-section"
      className="relative py-24 bg-[#F8F9F5]/30 overflow-hidden"
    >
      {/* Decorative luxury shapes */}
      <div className="absolute top-[20%] right-0 w-[300px] h-[300px] bg-pastel-lavender/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[400px] h-[400px] bg-pastel-peach/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Experience Badge & High-End Image Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl bg-stone-100 p-2 border border-stone-200/60 shadow-2xl overflow-hidden"
            >
              {/* Luxury textured background with high-definition, crystal clear premium image */}
              <div className="absolute inset-0 bg-navy-950 flex flex-col justify-between p-8 text-white overflow-hidden">
                {/* Beautiful office background image - crystal clear, vibrant colors, cropped to show the calculator & accounting tools */}
                <img 
                  src={advisoryBg} 
                  alt="Authentic advisory office with calculator and accounting tools" 
                  className="absolute inset-0 w-full h-full object-cover object-bottom opacity-90 hover:scale-105 transition-transform duration-[1500ms] ease-out z-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Sophisticated dark gradient overlays at top and bottom to keep text extremely readable while keeping the center fully colorful and visible */}
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-black/85 via-black/20 to-transparent z-10 pointer-events-none" />
                
                <div className="space-y-4 relative z-20">
                  <span className="text-[10px] uppercase tracking-widest text-pastel-peach font-sans font-bold">Jaipur Headquarters</span>
                  <h3 className="text-3xl font-serif font-medium leading-tight text-white drop-shadow-md">Authentic Advisory Built on Absolute Integrity</h3>
                  <div className="w-12 h-1 bg-pastel-lavender rounded shadow"></div>
                </div>

                {/* Local Trust indicator */}
                <div className="space-y-3 relative z-20 border-t border-white/20 pt-4">
                  <div className="flex items-start space-x-2 text-stone-100">
                    <MapPin className="w-4 h-4 text-pastel-peach shrink-0 mt-0.5" />
                    <p className="text-xs font-sans leading-snug font-medium drop-shadow-md">
                      C-2, Krishna Enclave, B-1, Kailash Nagar, Jhotwara, Jaipur, Rajasthan – 302012
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-pastel-blush font-serif italic text-sm">
                    <span className="drop-shadow-md font-medium">Approved by CAs & Cost Accountants</span>
                  </div>
                </div>
              </div>


            </motion.div>
          </div>

           {/* Right Block: Content & Description */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-pastel-lavender font-sans font-bold">About Our Firm</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#3D4127] font-bold tracking-tight">
                Complete Tax Solution
              </h2>
              <div className="w-20 h-1 bg-pastel-lavender"></div>
            </div>

            <p className="font-sans text-[#5B6045] text-base leading-relaxed">
              Complete Tax Solution is a premier, highly-reputed professional consultancy firm based in Jaipur, Rajasthan. Under the guidance of seasoned Chartered Accountants and Cost Accountants, we offer specialized regulatory and legal support across India.
            </p>

            <p className="font-sans text-[#5B6045] text-base leading-relaxed">
              We specialize in end-to-end <strong>NGO Registration</strong>, <strong>NGO Darpan Registration</strong>, <strong>Trust Registration</strong>, <strong>Society Registration</strong>, and <strong>Section 8 Company Incorporation</strong>. Our deep expertise extends to crucial exemptions including <strong>12A & 80G</strong>, <strong>CSR Registration (CSR-1)</strong>, and <strong>FCRA compliance</strong>.
            </p>

            <p className="font-sans text-[#5B6045] text-sm italic leading-relaxed border-l-4 border-pastel-lavender pl-4 bg-[#F8F9F5]/50 py-3 rounded-r-lg">
              Beyond non-profits, we deliver world-class corporate services including Income Tax ITR filing, GST Registration, MSME registration, Trademark protection, Startup India registrations, DSC services, accounting, audits, and business credit consultancy.
            </p>

            {/* Premium Stat Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white border border-[#D1D6B6] p-4 rounded-xl text-center shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#F1F3E8]/60 mx-auto flex items-center justify-center mb-2 border border-[#D1D6B6]">
                  <Award className="w-5 h-5 text-pastel-lavender" />
                </div>
                <div className="font-serif text-2xl font-bold text-[#3D4127]">12+</div>
                <div className="text-[10px] text-stone-500 font-sans uppercase tracking-wider font-semibold mt-1">Years Experience</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white border border-[#D1D6B6] p-4 rounded-xl text-center shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#F1F3E8]/60 mx-auto flex items-center justify-center mb-2 border border-[#D1D6B6]">
                  <Users className="w-5 h-5 text-pastel-lavender" />
                </div>
                <div className="font-serif text-2xl font-bold text-[#3D4127]">1000+</div>
                <div className="text-[10px] text-stone-500 font-sans uppercase tracking-wider font-semibold mt-1">Trustworthy Clients</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white border border-[#D1D6B6] p-4 rounded-xl text-center shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#F1F3E8]/60 mx-auto flex items-center justify-center mb-2 border border-[#D1D6B6]">
                  <BookCheck className="w-5 h-5 text-pastel-lavender" />
                </div>
                <div className="font-serif text-2xl font-bold text-[#3D4127]">5000+</div>
                <div className="text-[10px] text-stone-500 font-sans uppercase tracking-wider font-semibold mt-1">Projects Completed</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white border border-[#D1D6B6] p-4 rounded-xl text-center shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#F1F3E8]/60 mx-auto flex items-center justify-center mb-2 border border-[#D1D6B6]">
                  <ShieldCheck className="w-5 h-5 text-pastel-lavender" />
                </div>
                <div className="font-serif text-2xl font-bold text-[#3D4127]">99%</div>
                <div className="text-[10px] text-stone-500 font-sans uppercase tracking-wider font-semibold mt-1">Success Rate</div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
