export interface Project {
  title: string;
  type: string;
  description: string;
  image: string;
  tech: string[];
  github: string | { url: string; label: string }[];
}

export interface ExperienceItem {
  title: string;
  year: string;
  description: string;
  tech: string[];
}

export interface Language {
  language: string;
  level: string;
  proficiency: string;
  description: string;
}

export interface SectionData {
  preview: string;
  title: string;
  languages?: Language[];
  experiences?: ExperienceItem[];
  projects?: Project[];
}
