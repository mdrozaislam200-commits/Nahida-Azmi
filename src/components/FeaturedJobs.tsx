import React, { useState, useMemo } from 'react';
import {
  Briefcase, MapPin, DollarSign, Clock, ShieldCheck, Zap, ArrowRight,
  Filter, Search, CheckCircle2, Bookmark, Sparkles, Building
} from 'lucide-react';
import { FEATURED_JOBS, TARGET_AFFILIATE_URL } from '../data/jobsData';
import { JobListing } from '../types';

interface FeaturedJobsProps {
  onSelectJob: (job: JobListing) => void;
  searchFilter: { role: string; location: string; category: string };
}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ onSelectJob, searchFilter }) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [experienceFilter, setExperienceFilter] = useState<string>('All');
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [query, setQuery] = useState('');

  const toggleSaveJob = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSavedJobs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const filteredJobs = useMemo(() => {
    return FEATURED_JOBS.filter((job) => {
      const matchesType = selectedType === 'All' || job.type === selectedType;
      const matchesExp = experienceFilter === 'All' || job.experience === experienceFilter;
      const matchesText = query === '' ||
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.companyType.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase());

      const matchesPropRole = !searchFilter.role || job.title.toLowerCase().includes(searchFilter.role.toLowerCase()) || job.category.toLowerCase().includes(searchFilter.role.toLowerCase());
      const matchesPropCategory = searchFilter.category === 'all' || !searchFilter.category || job.category.toLowerCase().includes(searchFilter.category.toLowerCase());

      return matchesType && matchesExp && matchesText && matchesPropRole && matchesPropCategory;
    });
  }, [selectedType, experienceFilter, query, searchFilter]);

  return (
    <section id="featured-jobs" className="py-16 sm:py-20 bg-transparent border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-emerald-500/20">
              Verified & Immediate Hiring Positions
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Job Openings
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-400">
              Top opportunities updated hourly across all 50 US states. Apply online in 60 seconds with no resume required for most entry-level positions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="featured-jobs-fast-match-btn"
              href={TARGET_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Fast Track All Openings</span>
            </a>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8 shadow-sm space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Quick Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter by title, keyword, or skill..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Employment Type Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {(['All', 'Full-Time', 'Part-Time', 'Remote', 'Flexible'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    selectedType === type
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Experience Dropdown */}
            <div className="w-full md:w-auto flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">Experience:</span>
              <select
                value={experienceFilter}
                onChange={(e) => setExperienceFilter(e.target.value)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Experience Levels</option>
                <option value="No Experience Needed">No Experience Needed</option>
                <option value="Entry Level">Entry Level</option>
                <option value="1+ Year">1+ Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Jobs List Grid (20 Positions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              id={`featured-job-card-${job.id}`}
              className="relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 dark:hover:border-blue-500 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Urgency Tag + Save Button + Posted Time */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {job.urgencyBadge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        {job.urgencyBadge}
                      </span>
                    )}
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-medium">{job.postedTime}</span>
                    <button
                      onClick={(e) => toggleSaveJob(job.id, e)}
                      className={`p-1.5 rounded-lg border transition ${
                        savedJobs.includes(job.id)
                          ? 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950 dark:border-amber-800'
                          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 border-slate-200 dark:border-slate-800'
                      }`}
                      title="Save Job"
                      aria-label="Save Job"
                    >
                      <Bookmark className="w-3.5 h-3.5" fill={savedJobs.includes(job.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                {/* Job Title & Company Type */}
                <div className="mb-3">
                  <h3
                    onClick={() => onSelectJob(job)}
                    className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {job.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.companyType}</span>
                  </div>
                </div>

                {/* Compensation & Location Bar */}
                <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                      $
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Estimated Pay</div>
                      <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        {job.salary}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Location</div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                        {job.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Snippet */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                  {job.description}
                </p>

                {/* Perks & Requirements Chips */}
                <div className="space-y-2 mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {job.perks.map((perk, i) => (
                      <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/60">
                        ✓ {perk}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Experience:</span>
                    <span>{job.experience}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  id={`view-job-details-btn-${job.id}`}
                  onClick={() => onSelectJob(job)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition cursor-pointer"
                >
                  Job Details
                </button>

                <a
                  id={`apply-now-btn-${job.id}`}
                  href={TARGET_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition flex items-center justify-center gap-1.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Load Bar */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white text-center relative overflow-hidden shadow-md border border-slate-800">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-500/30">
              Immediate Access
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Looking for Immediate Start Positions in Your City?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Access the complete database of 50,000+ local warehouse, remote, customer support, and driving opportunities right now.
            </p>
            <div className="pt-2">
              <a
                id="featured-jobs-bottom-all-cta"
                href={TARGET_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-sm transition"
              >
                <span>Find Jobs Near Me Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
