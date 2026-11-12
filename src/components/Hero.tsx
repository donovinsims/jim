import React from 'react';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExploreServices,
  onOpenAudit
}) => {
  return (
    <section className="relative bg-stone-950 text-stone-100 overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-stone-800">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Direct Response Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Zero-Pill Unboxed Metadata Kicker (Anti-AI Slop) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Janesville & Rock County, WI</span>
              </span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>Inspecting Since 1992</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="font-mono tabular-nums">WI License #2200-106</span>
            </div>

            {/* Marquee Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]" style={{ textWrap: 'balance' }}>
              Inspect your home with the eye of someone who has actually built them.
            </h1>

            {/* Direct-response body copy */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Most home inspectors read a checklist after a few weeks of certification classes. 
              <strong> James &ldquo;Jim&rdquo; Belanger</strong> has inspected Wisconsin homes since 1992 and has built custom residences since 1993 as owner of Exceptional Homes by Tuscany. You get 30+ years of structural knowledge on your walkthrough—personally, every time.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Personal walkthrough with Jim</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>EPA continuous radon testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Clear digital photo report</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Calm, non-alarmist explanations</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3.5 text-base font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-colors shadow-md inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-base font-semibold text-white bg-stone-800 hover:bg-stone-700 active:bg-stone-800 border border-stone-700 rounded-lg transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 cursor-pointer"
              >
                <span>Book an Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Subtle trust notice */}
            <div className="pt-2 text-xs text-stone-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Need quick answers? Calls and texts both reach Jim directly at <strong>(608) 575-5680</strong>.
              </span>
            </div>

          </div>

          {/* Right Column: Marquee Visual with Overlay Scrim */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-900 group">
              <img
                src="/src/assets/images/hero_home_inspection_1794442342110.jpg"
                alt="Professional Wisconsin home inspector examining craftsman house foundation and exterior structure in Janesville"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[430px] object-cover transition-transform duration-500 group-hover:scale-102"
              />
              
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent pointer-events-none" />

              {/* In-photo trust caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-800 text-stone-100">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-0.5">
                      The &ldquo;Get Jim&rdquo; Advantage
                    </p>
                    <p className="text-sm font-medium text-white">
                      James L. Belanger Jr. · 30+ Years Inspecting & Building
                    </p>
                    <p className="text-xs text-stone-300 mt-1">
                      &ldquo;I inspect every home with the exact same rigor I used when framing and building houses for Wisconsin families.&rdquo;
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-2 py-1 rounded bg-stone-800 border border-stone-700 text-amber-400 text-xs font-mono font-bold">
                      WI 2200-106
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
