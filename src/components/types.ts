export interface Skill {
  name: string;
  level?: string;
}

export interface SkillCategory {
  icon: React.ReactElement;
  title: string;
  skills: (string | Skill)[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Activity {
  icon: React.ReactElement;
  title: string;
  organization: string;
  date?: string;
  highlight: string;
} 