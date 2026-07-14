/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, Sparkles, CheckCircle2, AlertTriangle, Clock, GraduationCap } from "lucide-react";

export default function NGODarpan() {
  const [activeTab, setActiveTab] = useState("definition");

  const tabs = [
    { id: "definition", label: "What is NGO Darpan", icon: HelpCircle },
    { id: "benefits", label: "Government Benefits", icon: Sparkles },
    { id: "eligibility", label: "Eligibility & Rules", icon: CheckCircle2 },
    { id: "mistakes", label: "Common Mistakes", icon: AlertTriangle }
  ];

  return (
    <section
      id="darpan-section"
      className="relative py-24 bg-pastel-ivory overflow-hidden border-t border-[#D1D6B6]"
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-pastel-lavender font-sans font-bold">NITI Aayog Portal</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3D4127] font-bold tracking-tight">
            Understanding NGO Darpan
          </h2>
          <p className="text-stone-500 font-sans text-sm max-w-xl mx-auto">
            A comprehensive overview of India's unified portal for civil society organizations and non-profits wishing to work with the government.
          </p>
          <div className="w-20 h-1 bg-pastel-lavender mx-auto"></div>
        </div>

        {/* Dynamic Interactive Tabs Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Tab Selection Column */}
          <div className="lg:col-span-4 flex flex-col space-y-2.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl flex items-center space-x-3 transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? "bg-pastel-lavender border-pastel-lavender text-pastel-dark shadow-xl shadow-pastel-lavender/10 translate-x-2"
                      : "bg-white border-[#D1D6B6] hover:border-pastel-peach text-slate-700 hover:bg-[#F8F9F5]/30"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isSelected ? "text-pastel-dark" : "text-stone-400"}`} />
                  <span className="font-sans font-semibold text-sm">{tab.label}</span>
                </button>
              );
            })}

            {/* Micro FAQ CTA box */}
            <div className="bg-white p-6 rounded-2xl border border-pastel-border shadow-xl relative overflow-hidden mt-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pastel-peach/20 rounded-full blur-xl"></div>
              <div className="flex items-center space-x-2 text-pastel-lavender mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-sans font-bold uppercase tracking-wider">Fast-Track Setup</span>
              </div>
              <h4 className="font-serif font-bold text-base text-[#3D4127]">Need a Darpan Unique ID urgently?</h4>
              <p className="text-[#5B6045] font-sans text-xs mt-2 leading-relaxed">
                Complete Tax Solution registers your Trust or Society on the NITI Aayog database in just 3 to 7 business days with 100% success guaranteed.
              </p>
            </div>
          </div>

          {/* Tab Contents Block */}
          <div className="lg:col-span-8 bg-white border border-[#D1D6B6] p-8 sm:p-10 rounded-2xl shadow-xl min-h-[420px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                {activeTab === "definition" && (
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 text-pastel-lavender bg-[#F1F3E8]/60 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D1D6B6]">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Official Overview</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#3D4127]">
                      What is NGO Darpan?
                    </h3>
                    <p className="font-sans text-[#5B6045] leading-relaxed text-sm">
                      NGO Darpan is a dynamic, online portal initiated by the <strong>NITI Aayog, Government of India</strong>. It acts as an interface between Voluntary Organizations (VOs) / Non-Governmental Organizations (NGOs) and key central ministries, departments, and government bodies.
                    </p>
                    <p className="font-sans text-[#5B6045] leading-relaxed text-sm">
                      It was launched to create a transparent, robust nationwide database of NGOs. Once registered, your NGO receives a <strong>Unique Identification Number (Unique ID)</strong>. This ID is your primary passport to proving institutional validity to the state.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-pastel-lavender mt-2 shrink-0"></div>
                        <span className="text-xs text-stone-600">Unified database under Prime Minister's oversight</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-pastel-lavender mt-2 shrink-0"></div>
                        <span className="text-xs text-stone-600">Mandatory for State, District & Central grants</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "benefits" && (
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 text-pastel-lavender bg-[#F1F3E8]/60 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D1D6B6]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Financial Advantages</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#3D4127]">
                      Benefits of Darpan Registration
                    </h3>
                    <p className="font-sans text-[#5B6045] leading-relaxed text-sm">
                      Registering on NGO Darpan opens access to multiple direct and indirect institutional advantages:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-[#F8F9F5]/40 border border-[#D1D6B6]">
                        <h4 className="font-sans font-bold text-xs text-[#3D4127] uppercase tracking-wider mb-1">Government Grants</h4>
                        <p className="text-xs text-[#5B6045] leading-relaxed">Mandatory eligibility for applying for welfare funds, subsidies, and state project tenders.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#F8F9F5]/40 border border-[#D1D6B6]">
                        <h4 className="font-sans font-bold text-xs text-[#3D4127] uppercase tracking-wider mb-1">CSR Collaborations</h4>
                        <p className="text-xs text-[#5B6045] leading-relaxed">Corporate donors use the NITI Aayog portal to verify your credentials before releasing CSR grants.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#F8F9F5]/40 border border-[#D1D6B6]">
                        <h4 className="font-sans font-bold text-xs text-[#3D4127] uppercase tracking-wider mb-1">Ministry Interface</h4>
                        <p className="text-xs text-[#5B6045] leading-relaxed">Direct communication channel with more than 35 Central ministries and departments.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#F8F9F5]/40 border border-[#D1D6B6]">
                        <h4 className="font-sans font-bold text-xs text-[#3D4127] uppercase tracking-wider mb-1">National Stature</h4>
                        <p className="text-xs text-[#5B6045] leading-relaxed">Increases institutional transparency, proving your non-profit is actively audited and clean.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "eligibility" && (
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 text-pastel-lavender bg-[#F1F3E8]/60 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D1D6B6]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Who Can Apply?</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#3D4127]">
                      Eligibility & Portal Rules
                    </h3>
                    <p className="font-sans text-[#5B6045] leading-relaxed text-sm">
                      To successfully get registered and secure a NITI Aayog Unique ID, the applicant organization must fulfill the following regulatory criteria:
                    </p>
                    <ul className="space-y-3.5 pt-2">
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-pastel-peach shrink-0 mt-0.5" />
                        <span className="text-xs text-[#5B6045] font-sans">
                          <strong>Registered Entity:</strong> Must be a legally registered Trust, Society, or Section 8 Company with a valid incorporation certificate.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-pastel-peach shrink-0 mt-0.5" />
                        <span className="text-xs text-[#5B6045] font-sans">
                          <strong>Active Board:</strong> Must have at least three unique executive members (such as Chairman, Secretary, and Treasurer) with valid Aadhaar cards.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-pastel-peach shrink-0 mt-0.5" />
                        <span className="text-xs text-[#5B6045] font-sans">
                          <strong>NGO PAN Card:</strong> The organization must hold a distinct Permanent Account Number (PAN Card) registered exactly in the legal name of the NGO.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === "mistakes" && (
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 text-pastel-peach bg-[#F1F3E8]/60 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D1D6B6]">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Rejection Warnings</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#3D4127]">
                      Common Mistakes That Cause Rejection
                    </h3>
                    <p className="font-sans text-[#5B6045] leading-relaxed text-sm">
                      Over 45% of self-filed NGO Darpan applications are blacklisted or rejected due to tiny clerical errors. Always secure expert CA review to avoid:
                    </p>
                    <div className="space-y-3.5 pt-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-pastel-peach mt-2 shrink-0"></div>
                        <p className="text-xs text-[#5B6045] font-sans">
                          <strong>Name Mismatches:</strong> Difference in the spelling of the NGO's name between the PAN Card, trust deed, and the NITI Aayog portal.
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-pastel-peach mt-2 shrink-0"></div>
                        <p className="text-xs text-[#5B6045] font-sans">
                          <strong>Incomplete Board Details:</strong> Omitting active Aadhaar or PAN details for mandatory office bearers like the President or Treasurer.
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-pastel-peach mt-2 shrink-0"></div>
                        <p className="text-xs text-[#5B6045] font-sans">
                          <strong>Unreadable Scan Uploads:</strong> Uploading blurry, cut-off, or un-notarized copies of trust deeds and registration certificates.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Custom Bottom micro-CTA line inside tab container */}
            <div className="mt-8 pt-6 border-t border-[#D1D6B6] flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400">
              <span className="mb-2 sm:mb-0">Jaipur Local Office Verification Guaranteed</span>
              <span className="font-sans font-bold text-pastel-lavender">Complete Tax Solution • Jaipur, RJ</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
