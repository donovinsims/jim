import React from 'react';
import { Star, ShieldCheck, Hammer, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';

interface TrustBarProps {
  onOpenReviews: () => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({ onOpenReviews }) => {
  return (
    <section className="bg-stone-900 text-stone-100 border-y border-stone-800" aria-label="Inspector Credibility Stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 items-start">
          
          {/* Item 1: Perfect 5.0 Google Rating */}
          <button
            onClick={onOpenReviews}
            className="text-left group cursor-pointer focus-visible:outline-none"
            aria-label="View 5.0 Star Google Reviews"
          >
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1 text-sm font-bold font-mono text-white tabular-nums">5.0</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
              10 Google Reviews
            </p>
            <p className="text-xs text-stone-400">
              100% 5-Star Verified Track Record
            </p>
          </button>

          {/* Item 2: Inspecting Since 1992 */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">Experience</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white font-mono tabular-nums">
              Inspecting Since 1992
            </p>
            <p className="text-xs text-stone-400">
              30+ Years in the Trade (Home Tech)
            </p>
          </div>

          {/* Item 3: Wisconsin License */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">State Credential</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white font-mono tabular-nums">
              WI License #2200-106
            </p>
            <p className="text-xs text-stone-400">
              Licensed WI Home Inspector & Contractor
            </p>
          </div>

          {/* Item 4: Home Builder Angle */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Hammer className="w-4 h-4 text-amber-400" />
              <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">Master Builder</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white">
              Builder Since 1993
            </p>
            <p className="text-xs text-stone-400">
              Owner, Exceptional Homes by Tuscany
            </p>
          </div>

        </div>

        {/* Verification Guarantee Line */}
        <div className="mt-5 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>The One-Inspector Promise:</strong> Jim Belanger personally performs every inspection. No apprentices, no subcontracting.
            </span>
          </div>
          <div className="text-stone-400">
            Member of Forward Janesville (Chamber of Commerce) · Rock County Local
          </div>
        </div>
      </div>
    </section>
  );
};
