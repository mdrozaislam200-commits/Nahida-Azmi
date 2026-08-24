export interface Company {
  id: string;
  name: string;
  industry: string;
  sector: 'Retail' | 'Logistics' | 'Tech' | 'Food' | 'Hospitality' | 'Aviation' | 'Banking' | 'Telecom' | 'Healthcare';
  avgPay: string;
  openRoles: number;
  featuredRole: string;
  benefits: string[];
  hiringUrgency: 'Immediate Start' | 'High Demand' | 'Weekly Pay' | 'Hot Opportunity';
  colorGradient: string;
  accentColor: string;
}

export interface JobCategory {
  id: string;
  title: string;
  iconName: string;
  avgHourly: string;
  openingsCount: string;
  urgency: string;
  popularPositions: string[];
  gradient: string;
}

export interface JobListing {
  id: string;
  title: string;
  companyType: string;
  salary: string;
  hourlyRate: string;
  location: string;
  type: 'Full-Time' | 'Part-Time' | 'Remote' | 'Flexible' | 'Seasonal';
  experience: 'No Experience Needed' | 'Entry Level' | '1+ Year' | '2+ Years';
  urgencyBadge?: string;
  postedTime: string;
  perks: string[];
  requirements: string[];
  description: string;
  category: string;
}

export interface SalaryBracket {
  id: string;
  range: string;
  tierTitle: string;
  level: string;
  annualEstimate: string;
  popularRoles: string[];
  keyBenefits: string[];
  badgeColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  wage: string;
  timeToHire: string;
  avatarUrl: string;
  quote: string;
  rating: number;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  category: 'Hiring' | 'Salary' | 'Requirements' | 'Remote Work' | 'Benefits' | 'Application' | 'Background Check' | 'Drug Test';
  question: string;
  answer: string;
}
