import React, { useState } from 'react';
import { Briefcase, MapPin, Search, ChevronDown, Sparkles, Shield, ArrowRight, Menu, X } from 'lucide-react';
import { TARGET_AFFILIATE_URL, OFFER_NAME } from '../data/jobsData';

interface HeaderProps {
  onOpenQuickMatch: () => void;
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuickMatch, selectedLocation, setSelectedLocation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locDropdownOpen, setLocDropdownOpen] = useState(false);

  const topLocations = [
    'All 50 US States',
    'Dallas, TX',
    'Atlanta, GA',
    'Chicago, IL',
    'Los Angeles, CA',
    'Phoenix, AZ',
    'Columbus, OH',
    'Charlotte, NC',
    'Orlando, FL',
    'Houston, TX',
    '100% Remote / WFH'
  ];

  return (
    <header id="main-header" className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-all">
      {/* Required Independent Job Platform Disclaimer */}
      <div id="header-disclaimer" className="bg-slate-900 text-slate-300 text-xs py-2 px-4 text-center border-b border-slate-800 tracking-tight">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap text-slate-300">
          <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span className="font-semibold text-white">Independent Platform:</span>
          <span>
            This website is an independent job information & lead generation platform. We are NOT affiliated with, endorsed by, or officially connected with any employer listed on this website. All trademarks belong to their respective owners.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  USA <span className="text-blue-600 dark:text-blue-400">Job Connect</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
                  Hiring Now
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block font-medium">
                Verified American Career Opportunities
              </p>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a
              href="#featured-jobs"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Open Positions
            </a>
            <a
              href="#popular-employers"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Top Employers
            </a>
            <a
              href="#job-categories"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Categories
            </a>
            <a
              href="#salary-guide"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Salaries
            </a>
            <a
              href="#how-it-works"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              How It Works
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Location Selector Pill */}
            <div className="relative hidden md:block">
              <button
                id="location-picker-btn"
                onClick={() => setLocDropdownOpen(!locDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{selectedLocation}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {locDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    Select Hiring Region
                  </div>
                  {topLocations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setLocDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-medium flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 ${
                        selectedLocation === loc ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50/50 dark:bg-blue-950/40' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>{loc}</span>
                      {selectedLocation === loc && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Match Modal Trigger */}
            <button
              id="header-quick-match-btn"
              onClick={onOpenQuickMatch}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Fast Match</span>
            </button>

            {/* Primary CTA Button */}
            <a
              id="header-find-jobs-cta"
              href={TARGET_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Find Jobs Near Me</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-90" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <button
              onClick={() => {
                onOpenQuickMatch();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Instant Job Match</span>
            </button>
            <a
              href={TARGET_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold"
            >
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span>{OFFER_NAME}</span>
            </a>
          </div>

          <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            <a
              href="#featured-jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Browse 50,000+ Open Positions
            </a>
            <a
              href="#popular-employers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Popular Employers (54 Companies)
            </a>
            <a
              href="#job-categories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Job Categories & Roles
            </a>
            <a
              href="#salary-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Salary & Hourly Pay Calculator
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              How It Works & Quick Apply
            </a>
            <a
              href="#faq-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Frequently Asked Questions
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
