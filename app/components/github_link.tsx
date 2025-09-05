import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GitHubLinkProps {
  href: string;
  label: string;
}

export const GitHubLink: React.FC<GitHubLinkProps> = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      inline-flex items-center gap-2
      text-on-primary-light dark:text-on-primary-dark 
      text-xs md:text-sm font-medium
      border-2 border-primary-light dark:border-primary-dark 
      bg-primary-dark/40 dark:bg-primary-light/40
      px-3 py-1.5 rounded-full
      transition-all duration-200 ease-in-out
      hover:bg-primary-light/20 hover:dark:bg-primary-dark/20
      hover:scale-105
      focus:outline-none focus:ring-2 focus:ring-primary-light/50
      active:scale-95
    `}
    // Mejorar accesibilidad
    aria-label={`Ver ${label} en GitHub`}
  >
    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
    <span className="hidden @xs:inline">{label}</span>
  </a>
);
