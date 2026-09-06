export interface PersonalInfo {
  fullName: string;
  professionalIdentity: string;
  location: string;
  phone: string;
  facebookName: string;
  socialUsername: string;
  email: string;
  heroBadge: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSupportingText: string;
  bio: string;
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  badgeColor: string;
  skills: SkillItem[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  deliverables: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  subject?: string;
  program?: string;
  group?: string;
  passingYear?: string;
  gpa?: string;
  status: string;
  badge: string;
  description: string;
}

export interface TrainingItem {
  title: string;
  institution: string;
  skillsLearned: string[];
  type: 'Structured Training' | 'Practical / Self-Learned';
  statusNote: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & Automation' | 'Graphic Design' | 'Video & UGC' | 'SEO & Digital' | 'n8n Workflows';
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  technologies: string[];
  isSample: boolean;
  featured?: boolean;
  demoUrl?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  caseNumber: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  technology: string;
  techBadges: string[];
  result: string;
  workflowSteps: { step: string; title: string; desc: string }[];
  isSample: boolean;
}

export interface ValueCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorTitle: string;
  organization: string;
  isPlaceholder: boolean;
  category: string;
}

export interface StatItem {
  label: string;
  status: string;
  subtext: string;
  type: 'expertise' | 'gpa';
}

export type PageRoute = 
  | '/'
  | '/about'
  | '/skills'
  | '/services'
  | '/experience'
  | '/projects'
  | '/case-studies'
  | '/case-studies/ai-automation'
  | '/certifications'
  | '/testimonials'
  | '/contact';
