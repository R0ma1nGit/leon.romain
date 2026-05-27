export interface Education {
  date: string;
  title: string;
  school: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  current: boolean;
  details: string[];
  kpis: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  results: string;
  stack: string;
}

export interface CVData {
  firstName: string;
  lastName: string;
  subtitle: string;
  address: string;
  email: string;
  phone: string;
  drivingLicense: string;
  objective: string;
  profile: string;
  education: Education[];
  skillCategories: SkillCategory[];
  softSkills: string[];
  interests: string[];
  experiences: Experience[];
  projects: Project[];
  portfolioUrl: string;
}
