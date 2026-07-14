/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Landmark, Award, Instagram, Facebook } from "lucide-react";
import logoDarpan from "../../photo/logo darpan.png";

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDisclaimer: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms, onOpenDisclaimer }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#F1F3E8] text-[#5B6045] pt-16 pb-8 border-t border-[#D1D6B6] relative z-10">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[30%] bg-[#BAC095]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#D1D6B6] p-1 flex items-center justify-center shadow-sm overflow-hidden shrink-0">
                <img 
                  src={logoDarpan} 
                  alt="NGO Darpan Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-[#3D4127] leading-none">
                  NGO Darpan
                </span>
                <span className="text-[9px] text-pastel-lavender uppercase tracking-widest mt-1 font-sans font-semibold">
                  Complete Tax Solution
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5B6045] font-sans leading-relaxed">
              NGO Darpan (Complete Tax Solution) is Jaipur's premier professional regulatory consultancy, operated by certified Chartered Accountants & Cost Accountants. We deliver NGO registrations and taxation audits with absolute compliance.
            </p>

            <div className="space-y-2 text-xs text-[#5B6045] font-sans">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-pastel-lavender shrink-0 mt-0.5" />
                <span className="leading-snug">C-2, Krishna Enclave, B-1, Kailash Nagar, Jhotwara, Jaipur, RJ - 302012</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-pastel-lavender shrink-0" />
                <span>+91 63780 51234</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-pastel-lavender shrink-0" />
                <span>taxca2@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.facebook.com/share/1CbsdJLVrW/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white hover:bg-pastel-peach hover:text-white hover:border-pastel-peach text-[#5B6045] flex items-center justify-center transition-all border border-[#D1D6B6] shadow-sm"
                title="Connect with us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/completaxolution0_?igsh=MTdlYTVycmZtYXo5MA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white hover:bg-pastel-peach hover:text-white hover:border-pastel-peach text-[#5B6045] flex items-center justify-center transition-all border border-[#D1D6B6] shadow-sm"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: NGO Services quick triggers */}
          <div className="space-y-6">
            <h4 className="font-serif font-bold text-base text-[#3D4127] tracking-wide border-b border-[#D1D6B6] pb-2">NGO Services</h4>
            <ul className="space-y-3 text-xs text-[#5B6045] font-sans">
              {[
                { label: "NGO Darpan Setup", id: "service-ngo-darpan" },
                { label: "Charitable Trust Registration", id: "service-trust-reg" },
                { label: "Registered Society Filing", id: "service-society-reg" },
                { label: "Section 8 Company Incorporation", id: "service-sec8-company" },
                { label: "12A Lifetime Exemption", id: "service-reg-12a" },
                { label: "80G Donor Benefit Registration", id: "service-reg-80g" }
              ].map((link, lIdx) => (
                <li key={lIdx}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-pastel-lavender transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Services */}
          <div className="space-y-6">
            <h4 className="font-serif font-bold text-base text-[#3D4127] tracking-wide border-b border-[#D1D6B6] pb-2">Corporate Services</h4>
            <ul className="space-y-3 text-xs text-[#5B6045] font-sans">
              {[
                { label: "Form CSR-1 MCA Registration", id: "service-csr-reg" },
                { label: "Income Tax Return (ITR-7)", id: "service-itr-filing" },
                { label: "Trademark Brand Protection", id: "service-trademark" },
                { label: "MSME / Udyam Registration", id: "service-msme-reg" },
                { label: "GST Registration & Auditing", id: "service-gst-reg" },
                { label: "Project Reports for Loans", id: "service-project-report" }
              ].map((link, lIdx) => (
                <li key={lIdx}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-pastel-lavender transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Policy */}
          <div className="space-y-6">
            <h4 className="font-serif font-bold text-base text-[#3D4127] tracking-wide border-b border-[#D1D6B6] pb-2">Legal Compliance</h4>
            <ul className="space-y-3 text-xs text-[#5B6045] font-sans">
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-pastel-lavender transition-colors text-left cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-pastel-lavender transition-colors text-left cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={onOpenDisclaimer} className="hover:text-pastel-lavender transition-colors text-left cursor-pointer">
                  Legal Disclaimer
                </button>
              </li>
            </ul>

            {/* Our Group Associated Platforms */}
            <div className="pt-4 border-t border-[#D1D6B6] space-y-2">
              <h5 className="text-[10px] uppercase tracking-wider font-mono font-bold text-stone-500">Associated Portals</h5>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-[#5B6045] font-sans">
                <a href="https://www.subsidysetu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-pastel-lavender transition-colors flex items-center space-x-1">
                  <span>Subsidy Setu</span>
                </a>
                <a href="https://www.casolution.org/" target="_blank" rel="noopener noreferrer" className="hover:text-pastel-lavender transition-colors flex items-center space-x-1">
                  <span>CA Solution</span>
                </a>
                <a href="https://www.completetaxsolution.in/" target="_blank" rel="noopener noreferrer" className="hover:text-pastel-lavender transition-colors flex items-center space-x-1">
                  <span>Tax Solution</span>
                </a>
                <a href="https://www.namakwali.in/" target="_blank" rel="noopener noreferrer" className="hover:text-pastel-lavender transition-colors flex items-center space-x-1">
                  <span>Namakwali</span>
                </a>
              </div>
            </div>

            {/* Quality Standard badge */}
            <div className="p-3 rounded-lg bg-white border border-[#D1D6B6] flex items-center space-x-2 max-w-[200px] shadow-sm">
              <Award className="w-5 h-5 text-pastel-lavender shrink-0" />
              <div className="flex flex-col">
                <span className="text-[9px] text-[#3D4127] uppercase font-sans font-bold leading-none">ISO 9001:2015</span>
                <span className="text-[8px] text-[#5B6045] font-sans mt-0.5 leading-none">Certified Process</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="my-10 border-t border-[#D1D6B6]"></div>

        {/* Bottom row: disclaimer notice & copyrights */}
        <div className="flex flex-col md:flex-row items-center justify-between text-stone-400 font-sans text-xs space-y-4 md:space-y-0 text-center md:text-left">
          
          <div className="max-w-2xl">
            <p className="text-[10px] leading-relaxed text-stone-500">
              <strong>Disclaimer:</strong> Complete Tax Solution is an independent professional consultancy operated by qualified legal practitioners, Chartered Accountants, and Cost Accountants. We assist clients in legal registrations and compliance under Government portals. We are not a government ministry or affiliated with NITI Aayog directly.
            </p>
          </div>

          <div className="shrink-0 text-[11px] font-medium text-[#3D4127]">
            © {currentYear} NGO Darpan (Complete Tax Solution). All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
