export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  tags?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  content: string[];
}

export interface WhyChoosePoint {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface WhyIndiaPhoto {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export interface MethodologyPhase {
  phase: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface CorePrinciple {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  engagementType: string;
  message: string;
}
