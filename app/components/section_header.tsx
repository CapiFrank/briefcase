import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SectionHeaderProps } from "~/types/section_header_props";

export const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, children }) => (
  <h2 className="text-on-surface-light dark:text-on-surface-dark text-2xl font-bold mb-4 flex items-center gap-2">
    <FontAwesomeIcon icon={icon} />
    {children}
  </h2>
);