interface TechTagProps {
  tech: string;
}

export const TechTag: React.FC<TechTagProps> = ({ tech }) => (
  <span
    className={`
    inline-flex items-center
    text-xs md:text-sm 
    text-accent-light dark:text-accent-dark 
    bg-surface-dark dark:bg-surface-light 
    border border-surface-dark dark:border-surface-light
    rounded-full px-3 py-1
    font-medium
    transition-colors duration-200
    hover:bg-surface-dark/40 hover:dark:bg-surface-light/40
  `}
  >
    {tech}
  </span>
);
