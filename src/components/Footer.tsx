import React from 'react';
import { Briefcase, Shield, MapPin, ArrowRight } from 'lucide-react';
import { TARGET_AFFILIATE_URL, OFFER_NAME, US_STATES } from '../data/jobsData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Disclaimer Box */}
      <div className="bg-slate-900 border-b border-slate-800/80 py-5 px-4">
        <div className="max-w-7xl mx-auto flex items-start gap-3.5">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
            <Shield className="w-4 h-4" />
          </div>
          <div className="space-y-1 text-slate-300">
            <h4 className="font-bold text-white text-[11px] uppercase tracking-wider">
              IMPORTANT INDEPENDENT LEAD GENERATION DISCLAIMER
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-400">
              This website is an independent job information and lead generation platform. We are NOT affiliated with, endorsed by, or officially connected with any employer listed on this website. All company names, logos, and trademarks belong to their respective owners. Job availability, wage rates, sign-on bonuses, and hiring requirements may vary based on location, shift, experience, and employer discretion.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                USA Job <span className="text-blue-400">Connect</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              America's trusted independent job discovery hub connecting motivated job seekers with top hourly, part-time, full-time, and work-from-home positions in all 50 states.
            </p>

            <div className="pt-1">
              <a
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition"
              >
                <span>Find Jobs Near You</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Popular Categories */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">
              Top Categories
            </h4>
            <ul className="space-y-1.5">
              {['Warehouse & Logistics', 'Retail & Cashier', 'Delivery Driver (CDL/Non-CDL)', 'Remote Customer Care', 'Nursing & Healthcare', 'Skilled Trades & Labor'].map((c) => (
                <li key={c}>
                  <a href={TARGET_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-[11px]">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Employers */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">
              Popular Employers
            </h4>
            <ul className="space-y-1.5">
              {['Amazon Fulfillment', 'Walmart Supercenters', 'Costco Wholesale', 'FedEx & UPS Delivery', 'Starbucks & Food Service', 'Delta & Airlines'].map((e) => (
                <li key={e}>
                  <a href={TARGET_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-[11px]">
                    {e}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Legal */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">
              Resources & Legal
            </h4>
            <ul className="space-y-1.5">
              <li><a href="#salary-guide" className="hover:text-blue-400 transition text-[11px]">2026 Salary Calculator</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-400 transition text-[11px]">How Application Works</a></li>
              <li><a href="#faq-section" className="hover:text-blue-400 transition text-[11px]">Drug Testing & Background FAQ</a></li>
              <li><a href={TARGET_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-[11px]">Terms of Service</a></li>
              <li><a href={TARGET_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-[11px]">Privacy Policy</a></li>
              <li><a href={TARGET_AFFILIATE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition text-[11px]">Do Not Sell My Info</a></li>
            </ul>
          </div>
        </div>

        {/* State Directory */}
        <div className="pt-6 border-t border-slate-800/80 space-y-2.5">
          <div className="flex items-center gap-2 text-[11px] font-bold text-white uppercase tracking-wider">
            <MapPin className="w-3 h-3 text-blue-400" />
            <span>Jobs by State (All 50 US States)</span>
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500">
            {US_STATES.map((state) => (
              <a
                key={state}
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition"
              >
                Jobs in {state}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright & Disclaimer Bottom */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} USA Job Connect. All rights reserved. Equal Opportunity Employer Information Resource.
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by</span>
            <span className="text-slate-300 font-semibold">{OFFER_NAME}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
