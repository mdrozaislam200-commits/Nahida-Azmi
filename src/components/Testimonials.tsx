import React from 'react';
import { Star, CheckCircle2, Quote, MapPin, Clock, DollarSign, Sparkles } from 'lucide-react';
import { TESTIMONIALS, TARGET_AFFILIATE_URL } from '../data/jobsData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-16 sm:py-20 bg-transparent border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3 py-1 bg-amber-500/15 text-amber-700 dark:text-amber-300 rounded-full text-[11px] font-bold uppercase tracking-wider border border-amber-500/20">
            98% Candidate Satisfaction
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Real Stories from American Workers
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-400">
            Read how everyday job seekers across the nation found higher pay, better shifts, and reliable careers through USA Job Connect.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-200 dark:text-slate-800" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Worker Profile Card Footer */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <img
                      src={item.avatarUrl}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white dark:border-slate-900" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0" />
                    </div>
                    <div className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold truncate">
                      {item.role}
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Wage & Speed Badge */}
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 text-[10px] space-y-0.5">
                  <div className="text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-1">
                    <DollarSign className="w-2.5 h-2.5" />
                    <span>{item.wage}</span>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-blue-500" />
                    <span>{item.timeToHire}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 text-center">
          <a
            id="testimonials-join-cta"
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition"
          >
            <span>Join Over 500,000+ Job Seekers</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
