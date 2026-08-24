import React, { useState, useEffect } from 'react';
import { Search, MapPin, Sparkles, ArrowRight, Zap, Flame } from 'lucide-react';
import { TARGET_AFFILIATE_URL, OFFER_NAME } from '../data/jobsData';

export const StickyApplyBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!scrolled) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg py-2.5 px-4 animate-in slide-in-from-bottom-5 duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <div className="hidden sm:flex w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900 items-center justify-center font-bold shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>50,000+ USA Positions Hiring Immediately</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
              Average starting pay $18.50 – $38.00/hr • Weekly direct deposit
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            id="sticky-bar-cta-btn"
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Find Jobs Near Me ($20–$35/hr)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
