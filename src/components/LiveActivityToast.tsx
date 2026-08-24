import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, CheckCircle, ExternalLink, X } from 'lucide-react';
import { TARGET_AFFILIATE_URL } from '../data/jobsData';

const LIVE_EVENTS = [
  { name: 'Michael T.', location: 'Dallas, TX', role: 'Amazon Fulfillment Associate ($22.50/hr)', time: 'Just now' },
  { name: 'Jessica R.', location: 'Atlanta, GA', role: 'FedEx Ground Package Handler ($21.00/hr)', time: '2m ago' },
  { name: 'David M.', location: 'Columbus, OH', role: 'Remote Customer Service ($24.00/hr)', time: '4m ago' },
  { name: 'Ashley K.', location: 'Phoenix, AZ', role: 'Target Distribution Specialist ($20.50/hr)', time: '6m ago' },
  { name: 'Brandon S.', location: 'Orlando, FL', role: 'UPS Route Delivery Driver ($26.00/hr)', time: '8m ago' },
  { name: 'Maria L.', location: 'Chicago, IL', role: 'CVS Pharmacy Technician ($23.00/hr)', time: '11m ago' }
];

export const LiveActivityToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_EVENTS.length);
        setVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const current = LIVE_EVENTS[currentIndex];

  return (
    <div className={`fixed bottom-20 left-4 z-40 max-w-xs sm:max-w-sm transition-all duration-300 transform ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
    }`}>
      <div className="relative p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex items-start gap-2.5">
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-1.5 -right-1.5 p-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 text-xs shadow-sm cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X className="w-3 h-3" />
        </button>

        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
          <CheckCircle className="w-4 h-4" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5">
            <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
              {current.name} in {current.location}
            </span>
            <span className="shrink-0 ml-1">{current.time}</span>
          </div>

          <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
            Matched: {current.role}
          </div>

          <a
            href={TARGET_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mt-0.5"
          >
            <span>View similar openings</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
