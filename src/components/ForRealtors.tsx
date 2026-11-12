import React from 'react';
import { Briefcase, CheckCircle2, Phone, Mail, Award, Clock, FileText, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';

interface ForRealtorsProps {
  onOpenBooking: () => void;
}

export const ForRealtors: React.FC<ForRealtorsProps> = ({ onOpenBooking }) => {
  return (
    <section id="for-realtors" className="py-16 sm:py-24 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Realtor Partnership Program
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display leading-tight" style={{ textWrap: 'balance' }}>
            An inspector who educates buyers without killing your deals
          </h2>
          <p className="mt-4 text-base text-stone-300 leading-relaxed">
            As a licensed home builder and holder of a Wisconsin real estate salesperson license, Jim Belanger understands both sides of the transaction. You need an inspector who is completely thorough for the buyer&apos;s protection, but speaks with calm, builder-grade objectivity.
          </p>
        </div>

        {/* 4 Pillars for Agents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-xl bg-stone-950 border border-stone-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 font-display">
              Non-Alarmist Explanations
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Jim puts findings into realistic perspective. A 20-year-old furnace nearing end-of-life is explained calmly as a budgeted maintenance item, not an emergency catastrophe.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-stone-950 border border-stone-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 font-display">
              Real Estate Licensed Insight
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Holding a Wisconsin real estate license means Jim respects the WB-11 purchase agreement, inspection contingency timelines, and the agent-client relationship.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-stone-950 border border-stone-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 font-display">
              Organized Photo Reports
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Reports feature clear color photos, focused defect summaries, and plain English descriptions that make drafting an Amendment to Offer straightforward.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-stone-950 border border-stone-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 font-display">
              Direct Inspector Access
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Need clarification on a roof or foundation comment before drafting an amendment? Jim answers his own phone at (608) 575-5680. No corporate switchboard.
            </p>
          </div>

        </div>

        {/* Realtor Card Callout */}
        <div className="bg-stone-950 rounded-2xl p-6 sm:p-10 border border-stone-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">
              Rock County &amp; Dane County Realtor Resource
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Have a buyer under contract with an inspection contingency?
            </h3>
            <p className="text-sm text-stone-300 max-w-2xl leading-relaxed">
              Connect Jim with your clients directly, or call Jim to coordinate access. We accommodate tight contingency windows across Janesville, Beloit, Edgerton, and surrounding areas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Jim Directly</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}?subject=Realtor%20Inspection%20Inquiry`}
              className="px-6 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm rounded-lg border border-stone-700 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-stone-400" />
              <span>Email: {BUSINESS_INFO.email}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
