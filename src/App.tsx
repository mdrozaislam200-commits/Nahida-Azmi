/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { PopularEmployers } from './components/PopularEmployers';
import { JobCategories } from './components/JobCategories';
import { FeaturedJobs } from './components/FeaturedJobs';
import { SalarySection } from './components/SalarySection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { QuickMatchModal } from './components/QuickMatchModal';
import { JobDetailModal } from './components/JobDetailModal';
import { LiveActivityToast } from './components/LiveActivityToast';
import { StickyApplyBar } from './components/StickyApplyBar';
import { JobListing, Company } from './types';
import { TARGET_AFFILIATE_URL } from './data/jobsData';

export default function App() {
  const [quickMatchOpen, setQuickMatchOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [selectedLocation, setSelectedLocation] = useState('All 50 US States');
  const [searchFilter, setSearchFilter] = useState({
    role: '',
    location: '',
    category: 'all'
  });

  const handleHeroSearch = (role: string, location: string, category: string) => {
    setSearchFilter({ role, location, category });
    if (location) {
      setSelectedLocation(location);
    }
    // Scroll down to featured jobs section if user is searching
    const el = document.getElementById('featured-jobs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCompany = (company: Company) => {
    window.open(TARGET_AFFILIATE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navigation & Required Independent Disclaimer */}
      <Header
        onOpenQuickMatch={() => setQuickMatchOpen(true)}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />

      {/* Hero Section */}
      <Hero
        onOpenQuickMatch={() => setQuickMatchOpen(true)}
        onSearch={handleHeroSearch}
      />

      {/* Live Statistics & Trust Metrics Ribbon */}
      <StatsSection />

      {/* Popular Employers Section (54 Companies) */}
      <PopularEmployers
        onSelectCompany={handleSelectCompany}
      />

      {/* Popular Job Categories (34 Categories) */}
      <JobCategories />

      {/* Featured Jobs Section (20 In-Demand Listings) */}
      <FeaturedJobs
        onSelectJob={(job) => setSelectedJob(job)}
        searchFilter={searchFilter}
      />

      {/* Salary Guide & Paycheck Estimator Calculator */}
      <SalarySection />

      {/* How It Works (4 Animated Steps) */}
      <HowItWorks />

      {/* Why Choose Us (8 Core Pillars) */}
      <WhyChooseUs />

      {/* Real American Worker Testimonials */}
      <Testimonials />

      {/* Comprehensive Frequently Asked Questions Accordion */}
      <FAQSection />

      {/* Final High-Converting CTA Banner */}
      <FinalCTA />

      {/* Comprehensive Footer with State Directory & Disclaimers */}
      <Footer />

      {/* Modals & Floating Overlays */}
      <QuickMatchModal
        isOpen={quickMatchOpen}
        onClose={() => setQuickMatchOpen(false)}
      />

      <JobDetailModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      {/* Real-time Applicant Activity Notifications */}
      <LiveActivityToast />

      {/* High-Converting Bottom Sticky Bar on Scroll */}
      <StickyApplyBar />
    </div>
  );
}
