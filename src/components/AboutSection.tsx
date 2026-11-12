import React from 'react';
import { Award, ShieldCheck, Hammer, CheckCircle2, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';
import { ROOF_IMAGE } from '../data/images.ts';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Meet Your Inspector
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 font-display leading-tight" style={{ textWrap: 'balance' }}>
            James L. Belanger Jr. — Everyone Calls Him Jim
          </h2>
          <p className="mt-4 text-base text-stone-700 leading-relaxed">
            When you hire Wisconsin Home Inspection Associates, LLC, you are not hiring a faceless national franchise or a newly trained apprentice. You are hiring <strong>Jim Belanger personally</strong>.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
          
          {/* Left Column: Visual Portrait */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-900 relative">
              <img
                src={ROOF_IMAGE.src}
                srcSet={ROOF_IMAGE.srcSet}
                sizes={ROOF_IMAGE.sizes}
                width={ROOF_IMAGE.width}
                height={ROOF_IMAGE.height}
                alt="Jim Belanger conducting residential roof inspection in Janesville Wisconsin"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  Owner &amp; Lead Inspector
                </span>
                <span className="text-lg font-bold font-display block">James &ldquo;Jim&rdquo; Belanger Jr.</span>
                <span className="text-xs text-stone-300">Wisconsin Licensed Home Inspector #2200-106</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Office: {BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Direct: {BUSINESS_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Mobile: {BUSINESS_INFO.phone} (Calls &amp; Texts)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="prose prose-stone text-stone-700 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Jim has been inspecting homes across Janesville, Rock County, and Southern Wisconsin since <strong>1992</strong>, when he founded his first inspection firm, <em>Home Tech</em>. Over three decades in the industry, Jim has personally examined thousands of residential properties, from historic late-1800s Victorians to contemporary custom subdivisions.
              </p>
              
              <p>
                In <strong>1993</strong>, Jim expanded into custom home construction as the owner of <em>Exceptional Homes by Tuscany, LLC</em>. This dual career as both an active home builder and a licensed home inspector represents his true differentiator:
              </p>

              <blockquote className="p-4 rounded-xl bg-white border border-stone-200 text-stone-800 font-medium italic">
                &ldquo;Today I own Wisconsin Home Inspection Associates, LLC. When I look at a roof valley, a foundation wall, or an electrical service panel, I don&apos;t just see what&apos;s on the surface. I know how the framing was cut, how the flashing was lapped, and how the building settles over 30 Wisconsin winters. That is the builder&apos;s eye I bring to your inspection.&rdquo;
              </blockquote>

              <p>
                Jim also holds a Wisconsin real estate salesperson license and a Wisconsin dwelling contractor credential, and is a proud active member of <em>Forward Janesville</em> (Chamber of Commerce).
              </p>
            </div>

            {/* Credential Tags (Unboxed Text with Separators - §1.A) */}
            <div className="pt-2 border-t border-stone-200">
              <span className="text-xs uppercase tracking-wider font-bold text-stone-500 block mb-2">
                Verified Wisconsin State Credentials:
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-800 font-medium">
                <span>WI Licensed Home Inspector #2200-106</span>
                <span aria-hidden="true" className="text-stone-400">·</span>
                <span>WI Dwelling Contractor Credential</span>
                <span aria-hidden="true" className="text-stone-400">·</span>
                <span>WI Real Estate Salesperson License</span>
                <span aria-hidden="true" className="text-stone-400">·</span>
                <span>Member, Forward Janesville</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                Schedule with Jim
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (608) 575-5680</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
