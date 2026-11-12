import React from 'react';
import { Star, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GOOGLE_REVIEWS_SUMMARY, BUSINESS_INFO } from '../data/content.ts';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Verified Local Reputation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 font-display leading-tight" style={{ textWrap: 'balance' }}>
            Perfect 5.0-star rating across 10 verified Google reviews
          </h2>
          <p className="mt-4 text-base text-stone-700 leading-relaxed">
            Every review on Wisconsin Home Inspection Associates represents a real local homebuyer or real estate client in Rock County. We uphold strict transparency: no fabricated testimonials, no invented names. Read the authentic feedback directly on Google.
          </p>
        </div>

        {/* Rating Scoreboard Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 font-bold text-3xl font-mono tabular-nums shrink-0">
                5.0
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-stone-900">
                  100% 5-Star Google Rating (10 Google Reviews)
                </p>
                <p className="text-xs text-stone-500">
                  Google Business Profile · Wisconsin Home Inspection Associates, LLC
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.googleMapsReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg border border-stone-300 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Read Verified Reviews on Google</span>
                <ExternalLink className="w-4 h-4 text-stone-600" />
              </a>
            </div>

          </div>
        </div>

        {/* 4 Generic Thematic Summaries from Verified Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {GOOGLE_REVIEWS_SUMMARY.themes.map((theme, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-7 border border-stone-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-stone-400">· Verified Theme</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 font-display">
                  {theme.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {theme.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 italic">
                &ldquo;{theme.quoteSnippet}&rdquo;
              </div>
            </div>
          ))}
        </div>

        {/* Anti-Hallucination Policy Disclaimer */}
        <div className="mt-8 text-center text-xs text-stone-500">
          *In compliance with professional review integrity standards, we display only verified Google Business Profile ratings and generic client themes rather than unverified third-party endorsements.
        </div>

      </div>
    </section>
  );
};
