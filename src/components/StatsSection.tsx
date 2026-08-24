import React from 'react';
import { Users, Briefcase, Building, ThumbsUp, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { TARGET_AFFILIATE_URL } from '../data/jobsData';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      id: 'stat-1',
      value: '500,000+',
      label: 'Monthly Job Seekers',
      description: 'Active job hunters connecting with employment nationwide',
      icon: Users,
      color: 'from-blue-600 to-cyan-500',
      textColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'stat-2',
      value: '50,000+',
      label: 'Active Job Listings',
      description: 'Verified full-time, part-time & remote openings',
      icon: Briefcase,
      color: 'from-indigo-600 to-purple-500',
      textColor: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      id: 'stat-3',
      value: '5,000+',
      label: 'Hiring Partners',
      description: 'Leading retailers, logistics hubs, tech & healthcare',
      icon: Building,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-600 dark:text-amber-400'
    },
    {
      id: 'stat-4',
      value: '98%',
      label: 'Positive Reviews',
      description: 'Rated excellent for fast hiring turnaround and accuracy',
      icon: ThumbsUp,
      color: 'from-emerald-600 to-teal-500',
      textColor: 'text-emerald-600 dark:text-emerald-400'
    }
  ];

  return (
    <section id="statistics-section" className="py-10 bg-transparent border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`stat-card-${item.id}`}
                className="relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 dark:hover:border-blue-500 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    Live
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
                    {item.label}
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Status Bar */}
        <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Immediate Openings in All 50 States
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Thousands of direct-hire positions with same-week start dates and competitive hourly rates.
              </div>
            </div>
          </div>

          <a
            id="stats-banner-cta"
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition shrink-0"
          >
            <span>View Available Roles</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
