import type { SectionData } from "./section_data";

export interface NavbarProps {
  t: (key: string) => string;
  languages: SectionData;
  experience: SectionData;
  projects: SectionData;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}