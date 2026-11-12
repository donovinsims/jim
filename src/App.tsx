/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, ShieldCheck, Star, Calendar, MessageSquare, FileText, CheckCircle2 } from 'lucide-react';
import { NavTab, ServiceId } from './types.ts';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustBar } from './components/TrustBar.tsx';
import { BuilderDifference } from './components/BuilderDifference.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ScopeEstimator } from './components/ScopeEstimator.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { ServiceAreasSection } from './components/ServiceAreasSection.tsx';
import { ForRealtors } from './components/ForRealtors.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ChecklistLeadMagnet } from './components/ChecklistLeadMagnet.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { AuditBonusModal } from './components/AuditBonusModal.tsx';
import { BookingForm } from './components/BookingForm.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileStickyBar } from './components/MobileStickyBar.tsx';
import { BUSINESS_INFO } from './data/content.ts';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [bookingNotes, setBookingNotes] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('pre-purchase');

  // Handle URL hash or tab navigation
  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    if (tab === 'audit') {
      setIsAuditOpen(true);
    }
  };

  const handleOpenBookingWithScope = (notes: string) => {
    setBookingNotes(notes);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-stone-950 pb-16 lg:pb-0">
      
      {/* Top Banner: Local & Direct Phone Notice */}
      <div className="bg-stone-950 text-stone-400 text-xs py-2 px-4 border-b border-stone-800 text-center flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 text-stone-300">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Rock &amp; Dane County Home Inspections</span>
        </span>
        <span aria-hidden="true" className="text-stone-700">·</span>
        <span className="hidden sm:inline">Inspected Personally by Jim Belanger · WI Lic #2200-106</span>
        <span aria-hidden="true" className="text-stone-700 hidden sm:inline">·</span>
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="text-amber-400 hover:text-amber-300 font-bold tabular-nums"
        >
          Call/Text: {BUSINESS_INFO.phone}
        </a>
      </div>

      {/* Header conforming to Top Bar Contract */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenAudit={() => setIsAuditOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <Hero
              onOpenBooking={() => setIsBookingOpen(true)}
              onExploreServices={() => handleSelectTab('services')}
              onOpenAudit={() => setIsAuditOpen(true)}
            />
            <TrustBar onOpenReviews={() => handleSelectTab('reviews')} />
            <BuilderDifference onOpenBooking={() => setIsBookingOpen(true)} />
            <ServicesSection onOpenBooking={() => setIsBookingOpen(true)} />
            <ScopeEstimator onOpenBookingWithScope={handleOpenBookingWithScope} />
            <ReviewsSection />
            <ServiceAreasSection onOpenBooking={() => setIsBookingOpen(true)} />
            <ForRealtors onOpenBooking={() => setIsBookingOpen(true)} />
            <ChecklistLeadMagnet onOpenBooking={() => setIsBookingOpen(true)} />
            <FaqSection onOpenBooking={() => setIsBookingOpen(true)} />
          </>
        )}

        {currentTab === 'about' && (
          <>
            <AboutSection onOpenBooking={() => setIsBookingOpen(true)} />
            <TrustBar onOpenReviews={() => handleSelectTab('reviews')} />
            <BuilderDifference onOpenBooking={() => setIsBookingOpen(true)} />
          </>
        )}

        {currentTab === 'services' && (
          <>
            <ServicesSection onOpenBooking={() => setIsBookingOpen(true)} />
            <ScopeEstimator onOpenBookingWithScope={handleOpenBookingWithScope} />
            <TrustBar onOpenReviews={() => handleSelectTab('reviews')} />
          </>
        )}

        {currentTab === 'why-jim' && (
          <>
            <BuilderDifference onOpenBooking={() => setIsBookingOpen(true)} />
            <TrustBar onOpenReviews={() => handleSelectTab('reviews')} />
            <AboutSection onOpenBooking={() => setIsBookingOpen(true)} />
          </>
        )}

        {currentTab === 'reviews' && (
          <>
            <ReviewsSection />
            <TrustBar onOpenReviews={() => {}} />
            <FaqSection onOpenBooking={() => setIsBookingOpen(true)} />
          </>
        )}

        {currentTab === 'service-areas' && (
          <>
            <ServiceAreasSection onOpenBooking={() => setIsBookingOpen(true)} />
            <TrustBar onOpenReviews={() => handleSelectTab('reviews')} />
          </>
        )}

        {currentTab === 'for-realtors' && (
          <>
            <ForRealtors onOpenBooking={() => setIsBookingOpen(true)} />
            <TrustBar onOpenReviews={() => handleSelectTab('reviews')} />
            <FaqSection onOpenBooking={() => setIsBookingOpen(true)} />
          </>
        )}

        {currentTab === 'faq' && (
          <>
            <FaqSection onOpenBooking={() => setIsBookingOpen(true)} />
            <TrustBar onOpenReviews={() => handleSelectTab('reviews')} />
          </>
        )}

        {currentTab === 'checklist' && (
          <>
            <ChecklistLeadMagnet onOpenBooking={() => setIsBookingOpen(true)} />
            <TrustBar onOpenReviews={() => handleSelectTab('reviews')} />
          </>
        )}

        {/* Global Pre-Footer Action Block */}
        <section className="bg-amber-500 text-stone-950 py-12 sm:py-16 border-t border-amber-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs uppercase tracking-wider font-bold text-stone-900 block font-mono">
              Get Jim on Your Inspection Contingency
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display max-w-2xl mx-auto">
              Ready to book the inspector with 30+ years and a builder&apos;s eye?
            </h2>
            <p className="text-sm sm:text-base text-stone-900 max-w-xl mx-auto font-medium">
              Call or text Jim directly at (608) 575-5680 to confirm availability, or request your inspection online in 60 seconds.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3.5 bg-stone-950 hover:bg-stone-900 text-white font-bold text-sm sm:text-base rounded-lg transition-colors shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3.5 bg-white hover:bg-stone-100 text-stone-950 font-bold text-sm sm:text-base rounded-lg transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book an Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenAudit={() => setIsAuditOpen(true)}
      />

      {/* Mobile Sticky Bar (Cap <= 15% mobile viewport) */}
      <MobileStickyBar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Booking Modal */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialNotes={bookingNotes}
        initialService={selectedServiceId}
      />

      {/* Audit & CRO Blueprint Modal */}
      <AuditBonusModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />

    </div>
  );
}
