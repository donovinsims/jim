import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Clock, Hammer, ArrowRight, Phone } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content.ts';
import { ServiceId, ServiceDetail } from '../types.ts';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  selectedServiceId?: ServiceId;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  selectedServiceId: initialServiceId = 'pre-purchase'
}) => {
  const [activeId, setActiveId] = useState<ServiceId>(initialServiceId);

  const activeService = SERVICES.find(s => s.id === activeId) || SERVICES[0];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Inspection Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 font-display leading-tight" style={{ textWrap: 'balance' }}>
            Rigorous inspections for buyers, sellers, and homeowners
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Every inspection is executed personally by Jim Belanger using continuous testing equipment and master-builder knowledge.
          </p>
        </div>

        {/* Functional Segmented Navigation Bar (Allowed in Constitution §1.A for Interactive Filters) */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-xl mb-8 border border-stone-200 overflow-x-auto no-scrollbar snap-x" role="tablist">
          {SERVICES.map(service => {
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(service.id)}
                className={`px-4 py-3 min-h-[44px] text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 snap-start flex items-center gap-2 ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                <span>{service.title}</span>
                {service.status === 'VERIFIED' && (
                  <span className="text-[10px] font-mono text-amber-400">Primary</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Service Detail Container */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 cols: Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Unboxed Metadata Header */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-stone-500">
                <span className="font-semibold text-stone-900">{activeService.title}</span>
                <span aria-hidden="true">·</span>
                <span>{activeService.status === 'VERIFIED' ? 'Verified Offering' : 'Standard Service'}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-stone-600">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>{activeService.typicalDuration}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-stone-950 font-display leading-tight">
                {activeService.tagline}
              </h3>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {activeService.summary}
              </p>

              {/* Target Audience */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 text-sm">
                <p className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-1">
                  Who It&apos;s For
                </p>
                <p className="text-stone-800 font-medium">
                  {activeService.whoItsFor}
                </p>
              </div>

              {/* What is Inspected */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-stone-900 mb-3">
                  Scope of Evaluation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
                  {activeService.whatsInspected.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Builder's Perspective Callout */}
              <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-stone-900">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-1.5">
                  <Hammer className="w-4 h-4 text-amber-700" />
                  <span>The Builder&apos;s Perspective</span>
                </div>
                <p className="text-sm text-stone-800 leading-relaxed italic">
                  &ldquo;{activeService.builderPerspective}&rdquo;
                </p>
              </div>

              {/* Action row */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto justify-center px-6 py-3 min-h-[48px] text-sm font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span>Book {activeService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto justify-center px-5 py-3 min-h-[48px] text-sm font-semibold text-stone-700 hover:text-stone-950 bg-white border border-stone-300 hover:border-stone-400 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>

            </div>

            {/* Right 5 cols: Inspection Visual */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl overflow-hidden border border-stone-200 shadow-md bg-stone-900 relative">
                <img
                  src={activeService.image.src}
                  srcSet={activeService.image.srcSet}
                  sizes={activeService.image.sizes}
                  width={activeService.image.width}
                  height={activeService.image.height}
                  alt={activeService.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                  <span className="font-semibold block">{activeService.title}</span>
                  <span className="text-stone-300">Conducted personally by Jim Belanger · WI Lic #2200-106</span>
                </div>
              </div>

              {/* Quick Fact Box */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="font-semibold text-stone-900">Lead Inspector</span>
                  <span className="text-stone-800 font-mono">Jim Belanger</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="font-semibold text-stone-900">Experience</span>
                  <span className="text-stone-800 font-mono">Since 1992 (30+ Yrs)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="font-semibold text-stone-900">Builder License</span>
                  <span className="text-stone-800 font-mono">Est. 1993 (Tuscany)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-stone-900">Report Delivery</span>
                  <span className="text-stone-800">Clear digital photo format</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
