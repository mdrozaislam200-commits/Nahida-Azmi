import React, { useState } from 'react';
import { X, Sparkles, MapPin, DollarSign, Briefcase, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { TARGET_AFFILIATE_URL, OFFER_NAME } from '../data/jobsData';

interface QuickMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickMatchModal: React.FC<QuickMatchModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedRole, setSelectedRole] = useState<string>('Warehouse & Logistics');
  const [zipCode, setZipCode] = useState<string>('');
  const [payTarget, setPayTarget] = useState<string>('$22+/hr');
  const [availability, setAvailability] = useState<string>('Immediate (This Week)');

  if (!isOpen) return null;

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the affiliate offer URL
    window.open(TARGET_AFFILIATE_URL, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-5 sm:p-7">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 space-y-1.5 text-center sm:text-left">
          <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800 uppercase tracking-wider">
            60-Second Job Match
          </span>

          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Find Your Instant Job Match
          </h3>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Answer 3 quick questions to get matched with active employers hiring in your area.
          </p>

          {/* Progress Indicators */}
          <div className="flex items-center gap-1.5 pt-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  step >= s ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleFinish}>
          {/* Step 1: Industry / Role Preference */}
          {step === 1 && (
            <div className="space-y-3.5 animate-in fade-in">
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Step 1: What type of job are you looking for?
              </label>

              <div className="grid grid-cols-2 gap-2">
                {[
                  'Warehouse & Logistics',
                  '100% Remote / WFH',
                  'Retail & Customer Care',
                  'Delivery & Driving',
                  'Healthcare & Clinic',
                  'Food & Hospitality',
                  'Office & Admin',
                  'Skilled Trades & Labor'
                ].map((role) => (
                  <button
                    type="button"
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left border transition cursor-pointer ${
                      selectedRole === role
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-500'
                        : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Location</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Location & ZIP */}
          {step === 2 && (
            <div className="space-y-3.5 animate-in fade-in">
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Step 2: Enter Your City or 5-Digit US ZIP Code
              </label>

              <div className="relative">
                <MapPin className="w-4 h-4 text-blue-600 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="e.g. 75001 or Dallas, TX"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['Use Current Location', 'Nationwide / Remote', 'Dallas, TX', 'Atlanta, GA'].map((chip) => (
                  <button
                    type="button"
                    key={chip}
                    onClick={() => setZipCode(chip)}
                    className="text-[11px] px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Pay Rate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Desired Pay Rate & Start Date */}
          {step === 3 && (
            <div className="space-y-3.5 animate-in fade-in">
              <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Step 3: Minimum Desired Pay Rate
              </label>

              <div className="grid grid-cols-2 gap-2">
                {['$18 – $22/hr', '$22 – $28/hr', '$28 – $38/hr', '$40+/hr or Salary'].map((pay) => (
                  <button
                    type="button"
                    key={pay}
                    onClick={() => setPayTarget(pay)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition cursor-pointer ${
                      payTarget === pay
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-500'
                        : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {pay}
                  </button>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <div className="text-[11px] text-slate-700 dark:text-slate-300 font-medium">
                  We found <span className="font-bold text-slate-900 dark:text-white">42+ verified positions</span> matching <span className="font-bold text-slate-900 dark:text-white">{selectedRole}</span> in your area!
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Matched Jobs Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
