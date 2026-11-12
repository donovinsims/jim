import React, { useState } from 'react';
import { Calculator, Clock, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { calculateInspectionScope } from '../utils/inspection-logic.ts';
import { BUSINESS_INFO } from '../data/content.ts';

interface ScopeEstimatorProps {
  onOpenBookingWithScope: (notes: string) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({ onOpenBookingWithScope }) => {
  const [sqft, setSqft] = useState<number>(2200);
  const [yearBuilt, setYearBuilt] = useState<number>(1985);
  const [propertyType, setPropertyType] = useState<'single-family' | 'condo' | 'multi-family' | 'new-construction'>('single-family');
  const [includeRadon, setIncludeRadon] = useState<boolean>(true);

  const scope = calculateInspectionScope({
    sqft,
    yearBuilt,
    propertyType,
    includeRadon
  });

  const handleBookEstimate = () => {
    const summary = `${sqft} sqft ${propertyType}, built ${yearBuilt}. Radon requested: ${includeRadon ? 'Yes' : 'No'}`;
    onOpenBookingWithScope(summary);
  };

  return (
    <section className="py-14 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Interactive Scoping Tool
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display leading-tight" style={{ textWrap: 'balance' }}>
            Check your property&apos;s inspection scope &amp; on-site duration
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300">
            Every home is built differently. Adjust the parameters below to see the specific structural and mechanical systems Jim will focus on for your property.
          </p>
        </div>

        {/* 2-Column interactive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input controls */}
          <div className="lg:col-span-5 bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-6">
            
            {/* Square footage slider */}
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <label htmlFor="sqft-slider" className="font-semibold text-stone-200">
                  Estimated Square Footage
                </label>
                <span className="font-mono text-amber-400 font-bold tabular-nums">
                  {sqft.toLocaleString()} sq ft
                </span>
              </div>
              <input
                id="sqft-slider"
                type="range"
                min="800"
                max="5500"
                step="100"
                value={sqft}
                onChange={e => setSqft(Number(e.target.value))}
                className="w-full h-2.5 my-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between gap-2 text-[10px] sm:text-[11px] text-stone-500 mt-1 font-mono">
                <span>800 sq ft</span>
                <span className="hidden sm:inline">2,500 sq ft</span>
                <span>5,500+ sq ft</span>
              </div>
            </div>

            {/* Year Built */}
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <label htmlFor="year-built" className="font-semibold text-stone-200">
                  Approximate Year Built
                </label>
                <span className="font-mono text-amber-400 font-bold tabular-nums">
                  {yearBuilt}
                </span>
              </div>
              <input
                id="year-built"
                type="range"
                min="1900"
                max="2026"
                step="5"
                value={yearBuilt}
                onChange={e => setYearBuilt(Number(e.target.value))}
                className="w-full h-2.5 my-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between gap-2 text-[10px] sm:text-[11px] text-stone-500 mt-1 font-mono">
                <span>Historic (1900)</span>
                <span className="hidden sm:inline">Mid-Century (1970)</span>
                <span>New Build (2026)</span>
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-semibold text-stone-200 mb-2">
                Property Structure
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                {[
                  { id: 'single-family', label: 'Single Family' },
                  { id: 'condo', label: 'Condominium' },
                  { id: 'multi-family', label: 'Multi-Family (2-4)' },
                  { id: 'new-construction', label: 'New Construction' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPropertyType(opt.id as any)}
                    className={`py-3 min-h-[48px] px-3 rounded-lg font-medium text-left transition-colors cursor-pointer border ${
                      propertyType === opt.id
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/60'
                        : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Include Radon */}
            <div className="pt-2 border-t border-stone-800">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeRadon}
                  onChange={e => setIncludeRadon(e.target.checked)}
                  className="mt-0.5 w-5 h-5 shrink-0 rounded bg-stone-800 border-stone-700 text-amber-500 focus:ring-amber-400 accent-amber-500"
                />
                <div>
                  <span className="text-sm font-semibold text-stone-200 block">
                    Include Continuous Radon Testing (Recommended)
                  </span>
                  <span className="text-xs text-stone-400">
                    Rock &amp; Dane Counties are EPA Zone 1 (high radon potential). 48-hr continuous monitor test.
                  </span>
                </div>
              </label>
            </div>

          </div>

          {/* Right: Calculated Scope Output */}
          <div className="lg:col-span-7 bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-800">
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                  On-Site Inspection Time
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white font-mono flex items-center gap-2 mt-1">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span>{scope.estimatedDurationHours}</span>
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                  Lead Inspector
                </span>
                <span className="text-sm font-bold text-amber-400 font-mono mt-1 block">
                  Jim Belanger (WI #2200-106)
                </span>
              </div>
            </div>

            {/* Recommended focus points based on inputs */}
            <div>
              <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-3">
                Key Structural &amp; Mechanical Systems to be Evaluated:
              </p>
              <div className="space-y-2.5">
                {scope.recommendedFocusAreas.map((focus, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Builder Perspective note */}
            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-300">
              <span className="font-semibold text-amber-300 block mb-1">
                Builder&apos;s Evaluation for {yearBuilt < 1980 ? 'Older Era Homes' : 'Modern Construction'}:
              </span>
              <span>
                {yearBuilt < 1980
                  ? 'Jim specifically inspects historical framing, moisture vapor barriers, attic ventilation balance, and ungrounded circuits typical of this era.'
                  : 'Jim checks engineered truss systems, modern mechanical combustion efficiency, window flashing wraps, and proper ground slope away from poured foundation walls.'}
              </span>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                onClick={handleBookEstimate}
                className="w-full sm:w-auto justify-center px-5 py-3 min-h-[48px] text-sm font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request Inspection with These Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-stone-400">
                Or call Jim directly at <strong>(608) 575-5680</strong>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
