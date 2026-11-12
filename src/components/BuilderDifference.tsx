import React from 'react';
import { Hammer, Check, X, ShieldAlert, Award, FileSearch, HardHat } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';

interface BuilderDifferenceProps {
  onOpenBooking: () => void;
}

export const BuilderDifference: React.FC<BuilderDifferenceProps> = ({ onOpenBooking }) => {
  return (
    <section id="why-jim" className="py-16 sm:py-24 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            The Central Differentiator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 font-display leading-tight" style={{ textWrap: 'balance' }}>
            Why Wisconsin buyers and realtors choose an inspector who builds houses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            In Wisconsin, anyone can take an entry-level home inspection course and get certified in a few weeks. 
            <strong> Jim Belanger isn&apos;t reading from a generic manual.</strong> Since 1993, Jim has operated <em>Exceptional Homes by Tuscany, LLC</em>, managing custom construction from foundation excavations to finish carpentry.
          </p>
        </div>

        {/* 2-Column Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          
          {/* Card 1: Standard Checklist Inspector */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <span className="text-sm font-semibold text-stone-500 uppercase tracking-wider">
                  Typical Franchise Inspector
                </span>
                <span className="text-xs text-stone-400">Standard Coursework</span>
              </div>

              <ul className="space-y-4 text-sm text-stone-600">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Superficial symptom checklist:</strong> Notes a crack in the drywall, but can&apos;t tell you whether it is standard joist shrinkage or an overloaded header beam.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Alarmist reporting:</strong> Uses dramatic boilerplate phrasing that terrifies first-time buyers over routine $40 maintenance items.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Franchise lottery:</strong> You book with a big regional company and have no idea which junior hire or subcontractor will turn up on the day.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Never held a hammer:</strong> Has never pulled a building permit, poured a footing, or corrected a crooked load-bearing truss.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-stone-500 italic">
              Result: Incomplete insight, unnecessary transaction stress, and lingering post-closing doubts.
            </div>
          </div>

          {/* Card 2: Jim Belanger - Master Builder & Inspector */}
          <div className="bg-stone-900 text-stone-100 rounded-xl p-6 sm:p-8 border border-amber-500/40 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
                <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <HardHat className="w-4 h-4 text-amber-400" />
                  <span>Jim Belanger (WI Lic #2200-106)</span>
                </span>
                <span className="text-xs font-mono text-stone-400 tabular-nums">30+ Years Experience</span>
              </div>

              <ul className="space-y-4 text-sm text-stone-200">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Understands what&apos;s behind the walls:</strong> Knows how Wisconsin homes are framed, where insulation fails, and how structural loads distribute down to the footings.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Calm, objective distinction:</strong> Clearly explains which observations are expected aging vs critical safety or structural considerations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Always Jim personally:</strong> Every inspection, phone call, and report review is handled directly by Jim Belanger himself.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Triple Credentialed:</strong> Licensed Home Inspector, Licensed Dwelling Contractor, and Licensed Real Estate Salesperson.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-800 flex items-center justify-between">
              <span className="text-xs text-amber-300 font-medium">
                Founder, Exceptional Homes by Tuscany, LLC (Est. 1993)
              </span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
              >
                Schedule with Jim →
              </button>
            </div>
          </div>

        </div>

        {/* 3 Proof Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">
              Wisconsin Freeze-Thaw Insight
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Wisconsin winters test foundations, roofs, and drainage. Jim knows how frost heave impacts exterior concrete, where ice dams form in attics, and whether a basement crack is hydrostatic pressure or harmless settlement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <FileSearch className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">
              Buyer-Friendly Walkthrough
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Jim invites you to join him on-site. He walks you through each room, shows you where the main emergency shutoffs are, and explains simple preventive maintenance items that keep repair costs low.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-2">
              Realtor-Trusted Objectivity
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Top Rock County and Dane County agents trust Jim because his reports are thorough without being dramatic. He gives real facts with realistic context, helping transactions stay constructive.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
