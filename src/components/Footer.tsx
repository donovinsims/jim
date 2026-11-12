import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Star, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';
import { NavTab } from '../types.ts';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenBooking,
  onOpenAudit
}) => {
  const handleNav = (tab: NavTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg font-display shrink-0">
                WI
              </div>
              <div>
                <span className="block text-base font-bold text-white font-display">
                  Wisconsin Home Inspection Associates, LLC
                </span>
                <span className="block text-xs text-stone-400">
                  James &ldquo;Jim&rdquo; Belanger Jr. · WI License #2200-106
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Premium residential home inspections and continuous radon testing across Janesville, Rock County, and Greater Dane County. Inspected with the eye of an active home builder since 1993.
            </p>

            <div className="space-y-1.5 text-xs text-stone-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-amber-400 transition-colors tabular-nums">
                  {BUSINESS_INFO.phone} (Calls &amp; Texts)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-amber-400 transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Jim Belanger
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('why-jim')} className="hover:text-white transition-colors cursor-pointer">
                  The Builder Difference
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-white transition-colors cursor-pointer">
                  5.0★ Google Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & Areas */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Services &amp; Areas
            </p>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  Pre-Purchase Inspection
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  Continuous Radon Testing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  Pre-Listing Inspection
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  New Construction Walkthrough
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('service-areas')} className="hover:text-white transition-colors cursor-pointer">
                  Rock &amp; Dane County Areas
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Resources & Agency Audit */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Resources &amp; Audit
            </p>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNav('for-realtors')} className="hover:text-white transition-colors cursor-pointer">
                  For Real Estate Agents
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Inspection FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('checklist')} className="hover:text-white transition-colors cursor-pointer">
                  40-Point Buyer Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAudit}
                  className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Site Audit &amp; CRO Blueprint</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-white font-medium transition-colors cursor-pointer">
                  Book an Inspection →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Wisconsin Home Inspection Associates, LLC. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            <span>WI License #2200-106</span>
            <span aria-hidden="true">·</span>
            <span>Exceptional Homes by Tuscany, LLC (Est. 1993)</span>
            <span aria-hidden="true">·</span>
            <span>Forward Janesville Member</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
