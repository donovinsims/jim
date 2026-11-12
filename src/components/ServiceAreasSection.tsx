import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import { VERIFIED_SERVICE_AREAS, isWithinServiceArea } from '../utils/inspection-logic.ts';
import { BUSINESS_INFO } from '../data/content.ts';

interface ServiceAreasProps {
  onOpenBooking: () => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasProps> = ({ onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{ checked: boolean; covered: boolean; areaMatch?: any }>({
    checked: false,
    covered: false
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const res = isWithinServiceArea(searchQuery);
    setSearchResult({
      checked: true,
      covered: res.covered,
      areaMatch: res.areaMatch
    });
  };

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Local Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 font-display leading-tight" style={{ textWrap: 'balance' }}>
            Serving Janesville, Rock County &amp; Greater Dane County
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Based at <strong>3731 Solar Ave in Janesville, WI</strong>, Jim Belanger personally travels to properties across Southern Wisconsin and the Northern Illinois stateline.
          </p>
        </div>

        {/* Interactive Zip / City Checker */}
        <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold text-stone-900 mb-2 font-display">
              Check if your property is in Jim&apos;s direct service area
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-4">
              Enter your town name or 5-digit zip code (e.g. &ldquo;Janesville&rdquo;, &ldquo;53548&rdquo;, &ldquo;Beloit&rdquo;, &ldquo;Edgerton&rdquo;, &ldquo;Madison&rdquo;):
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Enter city or zip code..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-base sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Verify Coverage</span>
              </button>
            </form>

            {/* Verification Result Feedback */}
            {searchResult.checked && (
              <div className="mt-4 p-4 rounded-xl text-sm transition-all animate-in fade-in">
                {searchResult.covered ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-4 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">
                        Yes! {searchResult.areaMatch ? searchResult.areaMatch.name : searchQuery} is within Jim&apos;s active service area.
                      </span>
                      <span className="text-xs text-emerald-800 block mt-1">
                        Jim conducts pre-purchase inspections and continuous radon testing in this territory regularly.
                      </span>
                      <button
                        onClick={onOpenBooking}
                        className="mt-2 text-xs font-bold text-emerald-950 underline underline-offset-2 hover:text-emerald-700 cursor-pointer"
                      >
                        Proceed to Book an Inspection in {searchResult.areaMatch ? searchResult.areaMatch.name : searchQuery} →
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">
                        Location inquiry: &ldquo;{searchQuery}&rdquo;
                      </span>
                      <span className="text-xs text-amber-800 block mt-1">
                        Jim frequently accommodates surrounding communities in Southern Wisconsin. Call or text Jim directly at <strong>(608) 575-5680</strong> to confirm scheduling for this property.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Territory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between hover:border-amber-400/80 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                    {area.isPrimary ? 'Primary Territory' : 'Regional Coverage'}
                  </span>
                  <span className="text-xs font-mono text-stone-400">{area.state}</span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-1 font-display flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>{area.name}</span>
                </h3>

                <p className="text-xs font-medium text-stone-500 mb-3">
                  {area.county}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Full pre-purchase residential inspections, EPA 48-hr radon testing, and builder-grade pre-listing evaluations.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-stone-400 font-mono">
                  Zip codes: {area.zipCodes.slice(0, 3).join(', ')}{area.zipCodes.length > 3 ? '...' : ''}
                </span>
                <button
                  onClick={onOpenBooking}
                  className="font-semibold text-amber-700 hover:text-amber-800 cursor-pointer inline-flex min-h-[40px] items-center py-1 px-1 -mx-1"
                >
                  Book Area →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Local SEO Text Pillar */}
        <div className="mt-12 p-6 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 leading-relaxed space-y-2">
          <p className="font-semibold text-stone-900 text-sm">
            Local Wisconsin Inspection Expertise
          </p>
          <p>
            Whether inspecting an 1890s historic home in Janesville’s Courthouse Hill district, a 1960s ranch in Beloit, or new residential construction in Milton and Edgerton, Jim Belanger’s 30+ years as a Wisconsin inspector and licensed builder ensure structural load paths, frost footings, and moisture prevention systems are thoroughly documented.
          </p>
        </div>

      </div>
    </section>
  );
};
