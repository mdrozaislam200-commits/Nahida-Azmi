import React from 'react';
import { Search, CheckCircle, Send, Sparkles, ArrowRight, MousePointerClick, FileCheck, BellRing } from 'lucide-react';
import { TARGET_AFFILIATE_URL } from '../data/jobsData';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Search Jobs',
      description: 'Enter your preferred job role, desired hourly pay rate, and city or 5-digit US ZIP code.',
      icon: Search,
      badge: 'Step 1',
      color: 'from-blue-600 to-cyan-500',
      illustration: '🔍 Instant Local Scan'
    },
    {
      stepNumber: '02',
      title: 'Choose Position',
      description: 'Browse through thousands of verified openings with clear wages, shift schedules, and benefit perks.',
      icon: MousePointerClick,
      badge: 'Step 2',
      color: 'from-indigo-600 to-blue-500',
      illustration: '📋 Verified Listings'
    },
    {
      stepNumber: '03',
      title: 'Submit Information',
      description: 'Complete the lightning-fast 60-second questionnaire. No lengthy resume or cover letter needed for most roles.',
      icon: Send,
      badge: 'Step 3',
      color: 'from-amber-500 to-orange-500',
      illustration: '⚡ 60-Second Form'
    },
    {
      stepNumber: '04',
      title: 'Receive Job Matches',
      description: 'Get matched with hiring managers and receive instant interview invitations or immediate orientation dates.',
      icon: BellRing,
      badge: 'Step 4',
      color: 'from-emerald-600 to-teal-500',
      illustration: '🚀 Start This Week'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-transparent border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3 py-1 bg-blue-500/15 text-blue-700 dark:text-blue-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-blue-500/20">
            Fast 4-Step Process
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How USA Job Connect Works
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-400">
            Connecting American job seekers with top local employers in minutes. Simple, transparent, and 100% free forever.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.stepNumber}
                id={`how-it-works-step-${item.stepNumber}`}
                className="relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                      {item.badge}
                    </span>
                    <div className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-blue-600/30 transition-colors">
                      {item.stepNumber}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span>{item.illustration}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            id="how-it-works-start-cta"
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition"
          >
            <span>Start Step 1: Search Positions Near You</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
