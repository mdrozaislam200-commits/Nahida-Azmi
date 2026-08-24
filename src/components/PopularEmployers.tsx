import React, { useState, useMemo } from 'react';
import { Building2, Search, ArrowRight, Sparkles, CheckCircle2, DollarSign, Users, Briefcase, Zap, Shield } from 'lucide-react';
import { POPULAR_EMPLOYERS, TARGET_AFFILIATE_URL } from '../data/jobsData';
import { Company } from '../types';

interface PopularEmployersProps {
  onSelectCompany: (company: Company) => void;
}

export const PopularEmployers: React.FC<PopularEmployersProps> = ({ onSelectCompany }) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sectors = ['All', 'Logistics', 'Retail', 'Food', 'Tech', 'Hospitality', 'Aviation', 'Healthcare', 'Banking', 'Telecom'];

  const filteredEmployers = useMemo(() => {
    return POPULAR_EMPLOYERS.filter((comp) => {
      const matchesSector = selectedSector === 'All' || comp.sector === selectedSector;
      const matchesQuery = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           comp.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           comp.featuredRole.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSector && matchesQuery;
    });
  }, [selectedSector, searchQuery]);

  return (
    <section id="popular-employers" className="py-16 sm:py-20 bg-transparent border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3 py-1 bg-blue-500/15 text-blue-700 dark:text-blue-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-blue-500/20">
            Top 50+ Leading US Employers
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Popular Employers Hiring Now
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-400">
            Browse verified job opportunities with competitive pay, healthcare benefits, and fast-track hiring from America's top employers.
          </p>

          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            *Independent lead platform. All trademarks and company names are property of their respective owners.
          </p>
        </div>

        {/* Sector Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Scrollable Sector Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  selectedSector === sec
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {sec === 'All' ? 'All Employers (54)' : sec}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies or roles..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEmployers.map((company) => (
            <div
              key={company.id}
              id={`company-card-${company.id}`}
              className="relative rounded-2xl p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Header: Company Initials Icon + Name + Urgency Tag */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base text-white shadow-sm shrink-0"
                      style={{ backgroundColor: company.accentColor }}
                    >
                      {company.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {company.name}
                      </h3>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {company.industry}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0 flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5 text-emerald-500" />
                    {company.hiringUrgency}
                  </span>
                </div>

                {/* Key Metrics: Pay & Open Roles */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-4">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Est. Pay Rate</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {company.avgPay}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Available Openings</div>
                    <div className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">
                      {company.openRoles.toLocaleString()}+ roles
                    </div>
                  </div>
                </div>

                {/* Featured In-Demand Role */}
                <div className="mb-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    In-Demand Opportunity:
                  </div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {company.featuredRole}
                  </div>
                </div>

                {/* Benefits Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {company.benefits.slice(0, 3).map((benefit, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      ✓ {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                id={`apply-company-btn-${company.id}`}
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 transition-colors shadow-sm"
              >
                <span>View Openings & Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 text-center">
          <a
            id="employers-view-all-cta"
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Search Positions Across All 54+ Employers</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
