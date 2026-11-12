import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_INFO } from '../data/content.ts';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Homebuyer Guidance
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 font-display leading-tight" style={{ textWrap: 'balance' }}>
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Real answers to common questions about the home inspection and radon testing process in Wisconsin.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-stone-900 font-display">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 transition-transform shrink-0 ${
                      isOpen ? 'rotate-180 bg-amber-100 text-amber-900' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-stone-200">
          <h3 className="text-base font-bold text-stone-900 mb-1">
            Have a specific question about your property?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mb-4">
            Jim is always glad to speak with buyers and homeowners directly before booking.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-2.5 rounded-lg bg-stone-900 text-white font-semibold text-xs sm:text-sm hover:bg-stone-800 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Jim: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-lg bg-amber-500 text-stone-950 font-semibold text-xs sm:text-sm hover:bg-amber-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Schedule Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
