import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Clock, Building2, Flame, Users } from 'lucide-react';
import { TARGET_AFFILIATE_URL, OFFER_NAME } from '../data/jobsData';

interface HeroProps {
  onOpenQuickMatch: () => void;
  onSearch: (role: string, location: string, category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuickMatch, onSearch }) => {
  const [roleInput, setRoleInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const popularPills = [
    { label: '🔥 Warehouse ($20–$28/hr)', query: 'Warehouse' },
    { label: '💻 Remote / Work From Home', query: 'Remote' },
    { label: '🚚 Delivery & CDL Drivers', query: 'Delivery' },
    { label: '⚡ No Experience Needed', query: 'Entry Level' },
    { label: '🏥 Healthcare & Clinic', query: 'Healthcare' },
    { label: '💳 Daily Pay / Immediate Start', query: 'Immediate Start' },
    { label: '🛍️ Retail & Cashier', query: 'Retail' }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(roleInput, locationInput, selectedCategory);
    // Also opens affiliate link or modal for high conversion
    window.open(TARGET_AFFILIATE_URL, '_blank', 'noopener,noreferrer');
  };

  const handlePillClick = (query: string) => {
    setRoleInput(query);
    onSearch(query, locationInput, selectedCategory);
  };

  return (
    <section id="hero-section" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-[#F8F9FB] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Ribbon */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              ⚡ Over 1,850+ New Jobs Added in the Last 24 Hours
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 hidden md:inline">
              Daily & Weekly Pay
            </span>
          </div>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & High-Converting Search Form */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-blue-500/15 text-blue-700 dark:text-blue-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-blue-500/20">
                USA-Wide Hiring Now
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Find Top <span className="text-blue-600 dark:text-blue-400">USA Job Opportunities</span> Near You
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Explore thousands of available positions from leading employers across the United States. Immediate starts, flexible shifts, competitive pay rates, and comprehensive benefits.
              </p>
            </div>

            {/* High-Converting Multi-Input Interactive Search Engine */}
            <div className="p-3 sm:p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <form onSubmit={handleSearchSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                  {/* Job Title / Keywords Input */}
                  <div className="sm:col-span-6 relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <input
                      id="hero-job-title-input"
                      type="text"
                      value={roleInput}
                      onChange={(e) => setRoleInput(e.target.value)}
                      placeholder="Job title, role, or company..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>

                  {/* Location or ZIP Code Input */}
                  <div className="sm:col-span-6 relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <input
                      id="hero-location-input"
                      type="text"
                      value={locationInput}
                      onChange={(e) => setLocationInput(e.target.value)}
                      placeholder="City, State, or 5-digit ZIP..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Second Row: Category Filter + Search Button */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                  <div className="sm:col-span-5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Building2 className="w-4 h-4 text-slate-400" />
                    </div>
                    <select
                      id="hero-category-select"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                      <option value="all">All Job Categories</option>
                      <option value="warehouse">Warehouse & Logistics</option>
                      <option value="retail">Retail & Customer Service</option>
                      <option value="remote">100% Remote / Work From Home</option>
                      <option value="delivery">Delivery & Driving (CDL/Non-CDL)</option>
                      <option value="healthcare">Healthcare & Nursing</option>
                      <option value="hospitality">Hospitality & Food Service</option>
                      <option value="admin">Office & Administrative</option>
                      <option value="trades">Construction & Skilled Trades</option>
                    </select>
                  </div>

                  {/* Main Large CTA Button */}
                  <div className="sm:col-span-7">
                    <button
                      id="hero-find-jobs-cta-btn"
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                    >
                      <Search className="w-4 h-4" />
                      <span>Find Jobs Near Me</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>

              {/* Quick Suggestion Pills */}
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
                  <Flame className="w-3.5 h-3.5 text-amber-500" /> Popular:
                </span>
                {popularPills.map((pill) => (
                  <button
                    key={pill.label}
                    onClick={() => handlePillClick(pill.query)}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/60 dark:hover:text-blue-300 border border-slate-200/60 dark:border-slate-700 transition font-medium cursor-pointer"
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Action Dual Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                id="hero-large-primary-cta"
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all"
              >
                <span>Find Jobs Near Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-secondary-browse-cta"
                href="#featured-jobs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm transition"
              >
                <span>Browse Open Positions</span>
              </a>

              <button
                id="hero-quiz-cta"
                onClick={onOpenQuickMatch}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 transition"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>60-Sec Quick Match</span>
              </button>
            </div>

            {/* Quick Guarantees & Features */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">100% Free to Apply</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Verified Employers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Same-Week Starts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Workforce Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-900">
                <img
                  src="/src/assets/images/hero_workforce_banner_1787548976352.jpg"
                  alt="Modern American Workforce & City Opportunities"
                  className="w-full h-[400px] sm:h-[440px] object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Floating Glassmorphism Badge 1: Instant Match Stat */}
                <div className="absolute top-4 left-4 backdrop-blur-md bg-white/95 dark:bg-slate-900/95 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-md max-w-[220px]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">$24.80/hr</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Average Starting Wage</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2: Open Positions */}
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-slate-900/90 text-white p-4 rounded-2xl border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[11px] text-amber-400 font-bold mb-0.5 uppercase tracking-wider">
                        <Flame className="w-3 h-3" /> High Volume
                      </div>
                      <div className="text-sm font-bold">50,000+ Verified Positions</div>
                      <div className="text-[11px] text-slate-300">Logistics, Retail, Remote & Tech</div>
                    </div>
                    <a
                      href={TARGET_AFFILIATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1 shrink-0"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
