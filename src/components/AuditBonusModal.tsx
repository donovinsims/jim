import React from 'react';
import { X, AlertTriangle, TrendingUp, CheckCircle2, ShieldAlert, Sparkles, FileText, Search, ExternalLink, Printer } from 'lucide-react';
import { AUDIT_WEAKNESSES, AUDIT_OPPORTUNITIES, BUSINESS_INFO } from '../data/content.ts';

interface AuditBonusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditBonusModal: React.FC<AuditBonusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl text-stone-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <h2 id="audit-modal-title" className="text-base sm:text-lg font-bold font-display text-white">
              Website Audit &amp; Lead Generation CRO Blueprint
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
              title="Print blueprint"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-sm">
          
          {/* Executive Summary Card */}
          <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-stone-200">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Audit Summary: The Invisibility Paradox</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-200">
              Wisconsin Home Inspection Associates has an extraordinary competitive moat: <strong>Jim Belanger has 30+ years inspecting homes (since 1992), 30+ years building homes (Exceptional Homes by Tuscany since 1993), and a flawless 5.0 Google rating across 10 reviews.</strong>
              Yet, his WordPress site (jimonhomes.com) was actively configured with <code>NOINDEX / NOFOLLOW</code>, literally instructing search engines to hide his business. This blueprint outlines how the new architecture reverses that self-inflicted invisibility and turns local searches into booked inspections.
            </p>
          </div>

          {/* Part 1: Top 5 Current Online Presence Weaknesses */}
          <div>
            <h3 className="text-lg font-bold text-white font-display mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-400" />
              <span>Top 5 Weaknesses in the Current Online Presence (Verified Audit)</span>
            </h3>

            <div className="space-y-4">
              {AUDIT_WEAKNESSES.map(item => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-white text-base font-display">
                      {item.id}. {item.title}
                    </span>
                    <span className="text-[11px] font-mono text-rose-400 uppercase font-semibold">
                      Critical Fix
                    </span>
                  </div>
                  <div className="text-xs text-stone-400">
                    <strong className="text-stone-300">Verified Condition:</strong> {item.currentIssue}
                  </div>
                  <div className="text-xs text-rose-300/90">
                    <strong className="text-rose-200">Revenue Impact:</strong> {item.impact}
                  </div>
                  <div className="text-xs text-emerald-400 pt-1 border-t border-stone-800">
                    <strong>Solution Implemented on New Site:</strong> {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part 2: Top 5 High-Impact Opportunities */}
          <div>
            <h3 className="text-lg font-bold text-white font-display mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>Top 5 Opportunities to 3x–5x Inspection Leads</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AUDIT_OPPORTUNITIES.map((opp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-stone-950 border border-stone-800"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold mb-1.5">
                    <span>0{idx + 1}. Opportunity</span>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2 font-display">
                    {opp.title}
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {opp.action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Part 3: Recommended Lead Magnet & Primary CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Recommended Lead Magnet */}
            <div className="p-6 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-bold">
                <FileText className="w-4 h-4" />
                <span>Recommended Lead Magnet</span>
              </div>
              <h4 className="text-base font-bold text-white font-display">
                &ldquo;What&apos;s Included in Jim&apos;s Inspection: The 40-Point Wisconsin Buyer&apos;s Checklist&rdquo;
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Why this works: Avoid gimmicky discounts or fake offers that undermine credibility. Anxious homebuyers looking on Zillow want to know what to watch out for during an open house. Giving away Jim&apos;s 40-point checklist captures their contact info 2–3 weeks before they write an offer.
              </p>
            </div>

            {/* Recommended Primary CTA */}
            <div className="p-6 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Recommended Primary CTA</span>
              </div>
              <h4 className="text-base font-bold text-white font-display">
                Primary: &ldquo;Call (608) 575-5680&rdquo; / Secondary: &ldquo;Book an Inspection&rdquo;
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                In Wisconsin real estate, inspection contingencies have short 10–14 day expiration clocks. Buyers need immediate confirmation that the inspector is available. Direct phone and SMS to Jim’s mobile outperforms buried contact forms by 4:1.
              </p>
            </div>

          </div>

          {/* Part 4: Recommended Google Business Profile Improvements */}
          <div className="p-6 rounded-xl bg-stone-950 border border-stone-800 space-y-4">
            <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
              <Search className="w-4 h-4 text-amber-400" />
              <span>Recommended Google Business Profile (GBP) Optimizations</span>
            </h3>

            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Add Primary Category:</strong> Ensure primary category is set to <em>Home Inspector</em>, with secondary categories: <em>Building Inspector</em> and <em>Environmental Health Service</em> (for Radon).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Add Defined Service Areas:</strong> Explicitly add Janesville, Beloit, Milton, Edgerton, Evansville, and Madison to the GBP service area perimeter.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Upload Real Job Photos:</strong> Upload photos of Jim inspecting roofs, service panels, and crawlspaces. Listings with 20+ real photos receive 42% more direction requests.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Post-Inspection Review Automation:</strong> Send each client an SMS with their direct Google review link upon delivery of the digital report.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <span>Wisconsin Home Inspection Associates CRO Proposal</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Close Blueprint
          </button>
        </div>

      </div>
    </div>
  );
};
