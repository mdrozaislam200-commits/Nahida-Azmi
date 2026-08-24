import React from 'react';
import { Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TARGET_AFFILIATE_URL, OFFER_NAME } from '../data/jobsData';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta-section" className="py-20 bg-slate-900 dark:bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider text-blue-400">
          <span>{OFFER_NAME} & Career Opportunities</span>
        </div>

        {/* Headlines */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Find Your Next Job?
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Search thousands of available opportunities today. Immediate openings, weekly pay, zero application fees, and verified US employers hiring now.
          </p>
        </div>

        {/* Clean CTA Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="final-cta-large-btn"
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-sm hover:shadow-md transition active:scale-[0.99] cursor-pointer"
          >
            <Search className="w-4 h-4 text-white" />
            <span>Search Available Opportunities Today</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Value Trust Bullets */}
        <div className="pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="text-xs text-slate-400 font-medium">100% Free Service</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="text-xs text-slate-400 font-medium">No Resume Needed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="text-xs text-slate-400 font-medium">Daily & Weekly Pay</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="text-xs text-slate-400 font-medium">All 50 US States</span>
          </div>
        </div>

        {/* Small Disclaimer Tag */}
        <p className="text-[11px] text-slate-500 max-w-2xl mx-auto pt-2 leading-relaxed">
          *USA Job Connect is an independent career discovery and lead generation network. We connect applicants with hiring partners and employment aggregators across the United States.
        </p>
      </div>
    </section>
  );
};
