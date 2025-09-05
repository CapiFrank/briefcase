import { motion } from "framer-motion";
import type { Project } from "~/types/section_data";
import { GitHubLink } from "./github_link";
import { TechTag } from "./tech_tag";

const projectCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

interface ProjectCardProps {
  project: Project;
  previewText: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  previewText,
  index,
}) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
  };

  const renderGitHubLinks = () => {
    if (Array.isArray(project.github)) {
      return project.github.map((repo, i) => (
        <GitHubLink
          key={`github-${index}-${i}`}
          href={repo.url}
          label={repo.label}
        />
      ));
    }

    return <GitHubLink href={project.github as string} label={previewText} />;
  };

  return (
    <motion.article
      variants={projectCardVariants}
      className={`
        flex flex-col lg:flex-row gap-4 lg:gap-6 
        bg-surface-light dark:bg-surface-dark 
        rounded-lg p-4 md:p-6
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-in-out
        @container
      `}
      // Mejor experiencia en móvil sin hover conflictivo
      whileHover={{
        y: -2,
        transition: { duration: 0.2 },
      }}
    >
      {/* Contenedor de imagen optimizado */}
      <div className="w-full lg:w-1/3 relative">
        <div className="aspect-video lg:aspect-square rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            src={project.image}
            alt={`Captura del proyecto ${project.title}`}
            loading="lazy"
            onError={handleImageError}
            // Mejoras de rendimiento
            decoding="async"
            fetchPriority={index < 2 ? "high" : "low"}
          />
        </div>
      </div>

      {/* Contenido del proyecto */}
      <div className="flex-1 lg:w-2/3 flex flex-col gap-3 min-w-0">
        <header>
          <h3 className="text-on-surface-light dark:text-on-surface-dark text-lg md:text-xl font-bold leading-tight">
            {project.title}
          </h3>
          <p className="text-accent-light dark:text-accent-dark text-sm font-medium">
            {project.type}
          </p>
        </header>

        <p className="text-on-surface-light dark:text-on-surface-dark text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Tags de tecnologías */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech, i) => (
            <TechTag key={`tech-${index}-${i}`} tech={tech} />
          ))}
        </div>

        {/* Enlaces de GitHub */}
        <div className="flex flex-wrap gap-2 md:gap-3 mt-auto pt-2">
          {renderGitHubLinks()}
        </div>
      </div>
    </motion.article>
  );
};
