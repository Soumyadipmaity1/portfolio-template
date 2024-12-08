export interface Skill {
  name: string;
  level?: string;
}

export interface SkillCategory {
  icon: JSX.Element;
  title: string;
  skills: (string | Skill)[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Activity {
  icon: JSX.Element;
  title: string;
  organization: string;
  date?: string;
  highlight: string;
} 