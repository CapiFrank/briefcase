import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SocialLinkProps } from "~/types/social_link_props";

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon,
  href,
  label,
  isEmail = false,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-on-primary-light dark:text-on-primary-dark text-lg cursor-pointer ${
      isEmail
        ? `bg-primary-dark dark:bg-primary-light`
        : `border-2 border-primary-light dark:border-primary-dark bg-primary-dark/40 dark:bg-primary-light/40`
    } px-4 py-2 rounded-full hover:underline ${
      isEmail
        ? `hover:bg-primary-light hover:dark:bg-primary-dark`
        : `hover:border-primary-light hover:dark:border-primary-dark hover:bg-primary-light/40 hover:dark:bg-primary-dark/40`
    } active:bg-secondary-light active:dark:bg-secondary-dark flex gap-2 items-center`}
    aria-label={label || `Enlace a ${href}`}
  >
    <FontAwesomeIcon icon={icon} />
    {label && <span>{label}</span>}
  </a>
);
