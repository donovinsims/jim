import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { NavTab } from '../types.ts';
import { BUSINESS_INFO } from '../data/content.ts';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenBooking,
  onOpenAudit
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-sm">
      {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (Concise Nav) — Zone 3 (Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          aria-label="Wisconsin Home Inspection Associates Home"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg font-display shrink-0">
              WI
            </div>
            <div>
              <span className="block text-base sm:text-lg font-bold tracking-tight text-white font-display leading-tight group-hover:text-amber-400 transition-colors whitespace-nowrap">
                Wisconsin Home Inspection Associates
              </span>
              <span className="block text-xs text-stone-400 font-normal">
                Jim Belanger · WI Lic #2200-106 · Janesville, WI
              </span>
            </div>
          </div>
        </button>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300" aria-label="Main Navigation">
          <button
            onClick={() => handleNavClick('about')}
            className={`cursor-pointer transition-colors whitespace-nowrap py-1 ${
              currentTab === 'about' ? 'text-amber-400 font-semibold' : 'hover:text-white'
            }`}
          >
            About Jim
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`cursor-pointer transition-colors whitespace-nowrap py-1 ${
              currentTab === 'services' || currentTab === 'service-detail' ? 'text-amber-400 font-semibold' : 'hover:text-white'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('why-jim')}
            className={`cursor-pointer transition-colors whitespace-nowrap py-1 ${
              currentTab === 'why-jim' ? 'text-amber-400 font-semibold' : 'hover:text-white'
            }`}
          >
            Why Jim
          </button>
          <button
            onClick={() => handleNavClick('reviews')}
            className={`cursor-pointer transition-colors whitespace-nowrap py-1 ${
              currentTab === 'reviews' ? 'text-amber-400 font-semibold' : 'hover:text-white'
            }`}
          >
            5.0★ Reviews
          </button>
          <button
            onClick={() => handleNavClick('service-areas')}
            className={`cursor-pointer transition-colors whitespace-nowrap py-1 ${
              currentTab === 'service-areas' ? 'text-amber-400 font-semibold' : 'hover:text-white'
            }`}
          >
            Service Areas
          </button>
          <button
            onClick={() => handleNavClick('for-realtors')}
            className={`cursor-pointer transition-colors whitespace-nowrap py-1 ${
              currentTab === 'for-realtors' ? 'text-amber-400 font-semibold' : 'hover:text-white'
            }`}
          >
            For Realtors
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className={`cursor-pointer transition-colors whitespace-nowrap py-1 ${
              currentTab === 'faq' ? 'text-amber-400 font-semibold' : 'hover:text-white'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => handleNavClick('checklist')}
            className={`cursor-pointer transition-colors whitespace-nowrap py-1 ${
              currentTab === 'checklist' ? 'text-amber-400 font-semibold' : 'hover:text-stone-300'
            }`}
          >
            Inspection Checklist
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-stone-200 hover:text-white transition-colors mr-1"
            title="Call Jim directly"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span className="tabular-nums">{BUSINESS_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span>Book an Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-400 hover:text-white rounded-md focus-visible:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="py-2 px-3 text-xs text-stone-400 border-b border-stone-800 flex items-center justify-between">
            <span>Direct: {BUSINESS_INFO.phone}</span>
            <span className="text-amber-400 font-medium">Calls & Texts Welcome</span>
          </div>
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left px-3 py-2 text-sm font-medium rounded text-stone-200 hover:bg-stone-800"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left px-3 py-2 text-sm font-medium rounded text-stone-200 hover:bg-stone-800"
          >
            About Jim Belanger (30+ Years Experience)
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="block w-full text-left px-3 py-2 text-sm font-medium rounded text-stone-200 hover:bg-stone-800"
          >
            Inspection Services & Radon Testing
          </button>
          <button
            onClick={() => handleNavClick('why-jim')}
            className="block w-full text-left px-3 py-2 text-sm font-medium rounded text-stone-200 hover:bg-stone-800"
          >
            The Builder&apos;s Eye Differentiator
          </button>
          <button
            onClick={() => handleNavClick('reviews')}
            className="block w-full text-left px-3 py-2 text-sm font-medium rounded text-stone-200 hover:bg-stone-800"
          >
            Verified Google Reviews (5.0★ Rating)
          </button>
          <button
            onClick={() => handleNavClick('service-areas')}
            className="block w-full text-left px-3 py-2 text-sm font-medium rounded text-stone-200 hover:bg-stone-800"
          >
            Service Areas (Rock & Dane County)
          </button>
          <button
            onClick={() => handleNavClick('for-realtors')}
            className="block w-full text-left px-3 py-2 text-sm font-medium rounded text-stone-200 hover:bg-stone-800"
          >
            For Real Estate Agents
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="block w-full text-left px-3 py-2 text-sm font-medium rounded text-stone-200 hover:bg-stone-800"
          >
            Inspection FAQ
          </button>
          <button
            onClick={() => handleNavClick('checklist')}
            className="block w-full text-left px-3 py-2 text-sm font-medium rounded text-stone-200 hover:bg-stone-800"
          >
            40-Point Buyer&apos;s Checklist (Lead Magnet)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="block w-full text-left px-3 py-2 text-sm font-medium rounded text-amber-400 bg-amber-950/30 hover:bg-amber-950/50"
          >
            View Site Audit & CRO Blueprint
          </button>

          <div className="pt-3 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-stone-800 text-stone-200 text-sm font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Jim: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
