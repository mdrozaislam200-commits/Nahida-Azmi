import React from 'react';
import { X, Briefcase, MapPin, DollarSign, Clock, ShieldCheck, CheckCircle2, Zap, ArrowRight, Building, Award } from 'lucide-react';
import { JobListing } from '../types';
import { TARGET_AFFILIATE_URL, OFFER_NAME } from '../data/jobsData';

interface JobDetailModalProps {
  job: JobListing | null;
  onClose: () => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-5 sm:p-7 space-y-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {job.type}
            </span>
            {job.urgencyBadge && (
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                {job.urgencyBadge}
              </span>
            )}
            <span className="text-xs text-slate-400 font-medium">
              Posted {job.postedTime}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {job.title}
          </h2>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Building className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">{job.companyType}</span>
            <span>•</span>
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{job.location}</span>
          </div>
        </div>

        {/* Compensation Highlight */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <div>
            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Hourly / Base Pay</div>
            <div className="text-sm sm:text-base font-extrabold text-emerald-600 dark:text-emerald-400">{job.salary}</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Experience Level</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">{job.experience}</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Pay Frequency</div>
            <div className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">Weekly / DailyPay</div>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-1.5">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Job Overview & Description
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* Key Perks & Benefits */}
        <div className="space-y-1.5">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Perks & Compensation Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {job.perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Basic Requirements */}
        <div className="space-y-1.5">
          <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Basic Qualifications
          </h3>
          <div className="space-y-1">
            {job.requirements.map((req, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-2.5">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            Close Preview
          </button>

          <a
            id={`modal-apply-btn-${job.id}`}
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition cursor-pointer"
          >
            <Zap className="w-4 h-4" />
            <span>Apply Now - Instant 60s Fast Track</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
