import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import type { SectionData } from "~/types/section_data";
import { SectionHeader } from "./section_header";
import { ProjectCard } from "./project_card";

const fadeInVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

interface ProjectsSectionProps {
  projects: SectionData;
}
export const SectionProjects: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      // Configuración más permisiva para móviles
      viewport={{ 
        once: true, 
        amount: 0.1, // Reducido para pantallas pequeñas
        margin: "-50px" // Trigger antes de ser visible
      }}
      variants={fadeInVariants}
      className="w-full"
    >
      <SectionHeader icon={faDiagramProject}>
        {projects.title}
      </SectionHeader>
      
      <motion.div 
        className="grid gap-6 md:gap-8 max-w-7xl mx-auto"
        variants={fadeInVariants}
      >
        {projects.projects?.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} // Key más descriptiva
            project={project}
            previewText={projects.preview}
            index={index}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};