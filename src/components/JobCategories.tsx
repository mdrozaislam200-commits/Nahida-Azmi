import React, { useState } from 'react';
import {
  Package, ShoppingBag, Laptop, Headphones, Truck, Navigation, ShieldCheck, Home, Sparkles,
  Hammer, Zap, Wrench, Wind, HeartPulse, HeartHandshake, Activity, UserCheck, FileText,
  PhoneCall, Briefcase, TrendingUp, CreditCard, UtensilsCrossed, Flame, Building2, Monitor,
  Code, Megaphone, Palette, KanbanSquare, Landmark, Calculator, Users, ArrowRight, CheckCircle2
} from 'lucide-react';
import { POPULAR_CATEGORIES, TARGET_AFFILIATE_URL } from '../data/jobsData';

const iconMap: Record<string, React.ElementType> = {
  Package, ShoppingBag, Laptop, Headphones, Truck, Navigation, ShieldCheck, Home, Sparkles,
  Hammer, Zap, Wrench, Wind, HeartPulse, HeartHandshake, Activity, UserCheck, FileText,
  PhoneCall, Briefcase, TrendingUp, CreditCard, UtensilsCrossed, Flame, Building2, Monitor,
  Code, Megaphone, Palette, KanbanSquare, Landmark, Calculator, Users
};

export const JobCategories: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Logistics & Trade' | 'Remote & Office' | 'Healthcare' | 'Retail & Food'>('All');

  const filterMapping: Record<string, string[]> = {
    'Logistics & Trade': ['warehouse', 'delivery-driver', 'truck-driver', 'construction', 'electrician', 'plumber', 'hvac', 'security-guard', 'cleaning', 'housekeeping'],
    'Remote & Office': ['remote', 'customer-service', 'data-entry', 'call-center', 'office-assistant', 'it-support', 'software-engineer', 'marketing', 'graphic-designer', 'project-manager', 'finance', 'accounting', 'human-resources'],
    'Healthcare': ['nursing', 'caregiver', 'medical-assistant'],
    'Retail & Food': ['retail', 'sales-associate', 'cashier', 'restaurant-crew', 'cook', 'hotel-staff', 'receptionist']
  };

  const filteredCategories = POPULAR_CATEGORIES.filter(cat => {
    if (activeFilter === 'All') return true;
    const allowed = filterMapping[activeFilter] || [];
    return allowed.includes(cat.id);
  });

  return (
    <section id="job-categories" className="py-16 sm:py-20 bg-transparent border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3 py-1 bg-blue-500/15 text-blue-700 dark:text-blue-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-blue-500/20">
            34 High-Demand Career Paths
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Popular Job Categories
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-400">
            From flexible entry-level warehouse and retail roles to high-paying remote and skilled trades, find your ideal position today.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap mb-10">
          {(['All', 'Logistics & Trade', 'Remote & Office', 'Healthcare', 'Retail & Food'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                activeFilter === tab
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tab === 'All' ? 'All Categories (34)' : tab}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.iconName] || Briefcase;
            return (
              <a
                key={category.id}
                id={`category-card-${category.id}`}
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {category.urgency}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      {category.avgHourly}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 font-medium text-[11px]">
                      {category.openingsCount}
                    </span>
                  </div>

                  {/* Popular roles mini list */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {category.popularPositions.slice(0, 2).map((pos, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700">
                        {pos}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Jobs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Fast Action */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 p-1.5 pl-4 pr-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Not sure which category fits your experience best?
            </span>
            <a
              id="categories-quick-match-cta"
              href={TARGET_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1 shadow-sm"
            >
              <span>Get Matched Instantly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
