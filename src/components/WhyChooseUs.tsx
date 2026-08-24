import React from 'react';
import {
  Layers, RefreshCw, Smartphone, Zap, ShieldCheck,
  Send, CheckCircle, Headphones, ArrowRight, Sparkles
} from 'lucide-react';
import { TARGET_AFFILIATE_URL } from '../data/jobsData';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      id: 'why-1',
      title: 'Thousands of Job Listings',
      description: 'Access 50,000+ active full-time, part-time, seasonal, and remote listings spanning 50 US states.',
      icon: Layers,
      color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60'
    },
    {
      id: 'why-2',
      title: 'Updated Daily',
      description: 'Our lead intelligence engine checks and refreshes employer openings every hour to remove expired postings.',
      icon: RefreshCw,
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60'
    },
    {
      id: 'why-3',
      title: 'Mobile Friendly',
      description: 'Apply on any smartphone or tablet in under 60 seconds with responsive, touch-optimized forms.',
      icon: Smartphone,
      color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60'
    },
    {
      id: 'why-4',
      title: 'Fast Search',
      description: 'Filter instantly by zip code, minimum hourly rate, shift preferences, and experience level.',
      icon: Zap,
      color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60'
    },
    {
      id: 'why-5',
      title: 'Secure & Private',
      description: 'Enterprise-grade 256-bit encryption protects your information. We never sell your personal contact info.',
      icon: ShieldCheck,
      color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60'
    },
    {
      id: 'why-6',
      title: 'Easy Apply',
      description: 'Skip lengthy 40-page corporate questionnaires. Fast 1-click match connects you directly to hiring pipelines.',
      icon: Send,
      color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60'
    },
    {
      id: 'why-7',
      title: 'Verified Information',
      description: 'All wage brackets, health benefits, and shift details are authenticated against active employer postings.',
      icon: CheckCircle,
      color: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60'
    },
    {
      id: 'why-8',
      title: 'Premium Support',
      description: 'Dedicated applicant assistance and FAQ resources to guide you through hiring, drug tests, and background checks.',
      icon: Headphones,
      color: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60'
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-transparent border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3 py-1 bg-blue-500/15 text-blue-700 dark:text-blue-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-blue-500/20">
            Built for Modern Job Seekers
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose USA Job Connect
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-400">
            We streamline the American job search by cutting through clutter, fake listings, and complicated hurdles.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                id={`why-card-${reason.id}`}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Ready to find a high-paying job in your neighborhood?
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              No fees, no obligations. Direct connection to verified hiring managers.
            </div>
          </div>

          <a
            id="why-choose-us-cta"
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition flex items-center gap-2 shrink-0"
          >
            <span>Explore Opportunities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
