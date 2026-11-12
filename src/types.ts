export type NavTab = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-detail'
  | 'why-jim' 
  | 'reviews' 
  | 'service-areas' 
  | 'for-realtors' 
  | 'faq' 
  | 'checklist' 
  | 'contact' 
  | 'audit';

export type ServiceId = 
  | 'pre-purchase' 
  | 'radon-testing' 
  | 'pre-listing' 
  | 'new-construction' 
  | 'annual-maintenance';

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  tagline: string;
  status: 'VERIFIED' | 'INFERRED';
  summary: string;
  whoItsFor: string;
  whatsInspected: string[];
  builderPerspective: string;
  typicalDuration: string;
  image: string;
}

export interface ReviewTheme {
  title: string;
  description: string;
  quoteSnippet: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Radon' | 'Reports';
}

export interface AuditItem {
  id: number;
  title: string;
  currentIssue: string;
  impact: string;
  solution: string;
}
