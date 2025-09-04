import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TechBadgeProps } from "~/types/tech_badge_props";

export const TechBadge: React.FC<TechBadgeProps> = ({ icon, name }) => (
  <li className={`text-on-primary-light dark:text-on-primary-dark text-lg cursor-default border-2 border-primary-light dark:border-primary-dark bg-primary-dark/40 dark:bg-primary-light/40 px-4 py-2 rounded-full hover:border-primary-light hover:dark:border-primary-dark hover:bg-primary-light/40 hover:dark:bg-primary-dark/40 active:border-secondary-light active:dark:border-secondary-dark active:bg-secondary-light/40 active:dark:bg-secondary-dark/40 flex gap-2 items-center`}>
    <FontAwesomeIcon icon={icon} />
    {name}
  </li>
);