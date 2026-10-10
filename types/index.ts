export interface NavItem {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  institution: string;
  campus: string;
  degree: string;
  cgpa: string;
  bio: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  mode?: string;
  summary: string;
  tools?: string[];
}

export interface SkillCategory {
  title: string;
  description?: string;
  icon?: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  isCurrent?: boolean;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  date?: string;
  verifyUrl?: string;
  image?: string;
  credentialId?: string;
  category: "technical" | "management" | "bootcamp" | "internship" | "hackathon";
}

export interface ActivityItem {
  event: string;
  organizer: string;
  result?: string;
  description?: string;
  isWinner?: boolean;
}

export interface ProjectItem {
  num: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  category?: string;
}

export interface RepositoryItem {
  id: number;
  name: string;
  url: string;
  owner?: string;
  category: "main" | "collaborator" | "learning";
  description?: string;
  tech?: string[];
}
