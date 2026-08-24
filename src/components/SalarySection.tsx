import React, { useState } from 'react';
import { DollarSign, Calculator, TrendingUp, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { SALARY_BRACKETS, TARGET_AFFILIATE_URL } from '../data/jobsData';

export const SalarySection: React.FC = () => {
  const [hourlyWage, setHourlyWage] = useState<number>(24);
  const [weeklyHours, setWeeklyHours] = useState<number>(40);
  const [overtimeHours, setOvertimeHours] = useState<number>(5);

  const regularWeekly = hourlyWage * weeklyHours;
  const overtimeWeekly = (hourlyWage * 1.5) * overtimeHours;
  const totalWeekly = regularWeekly + overtimeWeekly;
  const totalMonthly = totalWeekly * 4.33;
  const totalAnnual = totalWeekly * 52;

  return (
    <section id="salary-guide" className="py-16 sm:py-20 bg-transparent border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3 py-1 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-emerald-500/20">
            2026 USA Wage Insights
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Transparent Salary Tiers & Pay Rates
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-400">
            Understand average hourly rates and annual salary ranges across all job levels in the United States. Many employers provide weekly or daily payout.
          </p>
        </div>

        {/* 5 Salary Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 mb-12">
          {SALARY_BRACKETS.map((bracket) => (
            <div
              key={bracket.id}
              id={`salary-tier-card-${bracket.id}`}
              className="relative p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Badge */}
                <div className="mb-3">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${bracket.badgeColor}`}>
                    {bracket.level}
                  </span>
                </div>

                {/* Range */}
                <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                  {bracket.range}
                </div>

                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {bracket.annualEstimate}
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mb-3">
                  {bracket.tierTitle}
                </h3>

                {/* Popular Roles in this bracket */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Common Positions:
                  </div>
                  {bracket.popularRoles.slice(0, 3).map((role, i) => (
                    <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="truncate">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                id={`salary-bracket-btn-${bracket.id}`}
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-center text-blue-700 dark:text-blue-300 bg-blue-50 hover:bg-blue-600 hover:text-white dark:bg-blue-950/60 dark:hover:bg-blue-600 dark:hover:text-white border border-blue-200 dark:border-blue-800 transition flex items-center justify-center gap-1 mt-3"
              >
                <span>Find {bracket.range} Jobs</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Take-Home Wage & Overtime Calculator */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Sliders */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Interactive USA Paycheck Estimator
                  </h3>
                  <p className="text-xs text-slate-400">
                    Calculate your estimated earnings based on hourly wage and overtime incentives.
                  </p>
                </div>
              </div>

              {/* Slider 1: Hourly Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Target Hourly Wage:</span>
                  <span className="text-emerald-400 font-bold text-base">${hourlyWage}.00 / hr</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="75"
                  step="1"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>$16/hr (Minimum Entry)</span>
                  <span>$45/hr (Skilled)</span>
                  <span>$75/hr+ (High-Skill)</span>
                </div>
              </div>

              {/* Slider 2: Weekly Regular Hours */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Standard Weekly Hours:</span>
                  <span className="text-blue-400 font-bold text-base">{weeklyHours} Hours / week</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="40"
                  step="5"
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>15 hrs (Part-Time)</span>
                  <span>30 hrs (Flexible)</span>
                  <span>40 hrs (Full-Time)</span>
                </div>
              </div>

              {/* Slider 3: Overtime Hours (1.5x) */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Weekly Overtime (1.5x Pay):</span>
                  <span className="text-amber-400 font-bold text-base">{overtimeHours} Hours (+${Math.round(overtimeWeekly)}/wk)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={overtimeHours}
                  onChange={(e) => setOvertimeHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>
            </div>

            {/* Right Column: Earnings Summary Card */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center space-y-4">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 inline-block">
                ⚡ Estimated Gross Earnings
              </span>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ${Math.round(totalAnnual).toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  Estimated Gross Annual Income
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-left">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Weekly Pay</div>
                  <div className="text-sm sm:text-base font-bold text-emerald-400">${Math.round(totalWeekly).toLocaleString()}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-left">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">Monthly Pay</div>
                  <div className="text-sm sm:text-base font-bold text-blue-400">${Math.round(totalMonthly).toLocaleString()}</div>
                </div>
              </div>

              <a
                id="salary-calc-find-jobs-cta"
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-sm transition cursor-pointer"
              >
                <span>Find Jobs Paying ${hourlyWage}+ / hr</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
