import React, { useState } from 'react';
import { ClipboardCheck, Download, Printer, CheckCircle2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { CHECKLIST_CATEGORIES, BUSINESS_INFO } from '../data/content.ts';

interface ChecklistLeadMagnetProps {
  onOpenBooking: () => void;
}

export const ChecklistLeadMagnet: React.FC<ChecklistLeadMagnetProps> = ({ onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendChecklist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSentSuccess(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="checklist" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Free Buyer Resource (Lead Magnet)
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 font-display leading-tight" style={{ textWrap: 'balance' }}>
            What&apos;s Included in Jim&apos;s Inspection: The 40-Point Wisconsin Buyer&apos;s Checklist
          </h2>
          <p className="mt-4 text-base text-stone-700 leading-relaxed">
            Whether you&apos;re touring open houses this weekend or under contract on your dream property, know exactly what structural, mechanical, and safety components must be examined before you close.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 no-print">
            <button
              onClick={handlePrint}
              className="px-4 py-3 min-h-[44px] rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer border border-stone-300 transition-colors"
            >
              <Printer className="w-4 h-4 text-stone-600" />
              <span>Print or Save as PDF</span>
            </button>
            <span className="text-xs text-stone-500">
              · Curated by Jim Belanger (WI Lic #2200-106 · Home Builder Since 1993)
            </span>
          </div>
        </div>

        {/* 4-Category Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {CHECKLIST_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                  <h3 className="text-lg font-bold text-stone-900 font-display flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5 text-amber-600" />
                    <span>{cat.category}</span>
                  </h3>
                  <span className="text-xs font-mono text-stone-500">{cat.items.length} Points</span>
                </div>

                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-200 text-[11px] text-stone-500">
                Verified against Wisconsin DSPS home inspection standards &amp; master-builder criteria.
              </div>
            </div>
          ))}
        </div>

        {/* Lead Capture Box */}
        <div className="bg-stone-950 text-stone-100 rounded-2xl p-6 sm:p-10 border border-stone-800 no-print">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider block">
                Take This Checklist to Your Walkthrough
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Have Jim conduct the inspection with you
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Take the anxiety out of buying. Jim personally walks you through every item on this checklist, identifies hidden defects, and shows you how to operate your new home safely.
              </p>
            </div>

            <div className="lg:col-span-5">
              {sentSuccess ? (
                <div className="p-4 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs sm:text-sm">
                  <p className="font-bold mb-1">Checklist copy ready!</p>
                  <p className="text-stone-300">
                    A copy has been recorded for {email}. You can also print the page directly using your browser print command.
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Proceed to Book Jim →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendChecklist} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email for the guide..."
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="px-4 py-3 rounded-lg bg-stone-900 border border-stone-700 text-white placeholder:text-stone-500 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 flex-1"
                    />
                    <button
                      type="submit"
                      className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm transition-colors shrink-0 inline-flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send PDF</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-stone-400">
                    No spam ever. Just Jim’s 40-point inspection guide &amp; direct booking contact.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
