import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Route } from "./+types/home";
import { useTranslation } from "react-i18next";
import i18n from "../src/i18n";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// Componentes reutilizables
const SectionHeader = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
  <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
    <FontAwesomeIcon icon={icon} />
    {children}
  </h2>
);

const TechBadge = ({ icon, name }: { icon: string; name: string }) => (
  <li className="text-white text-lg cursor-default border-2 border-purple-950 bg-purple-950/40 px-4 py-2 rounded-full hover:border-purple-800 hover:bg-purple-800/40 active:border-purple-700 active:bg-purple-700/40 flex gap-2 items-center">
    <FontAwesomeIcon icon={icon} />
    {name}
  </li>
);

const SocialLink = ({ icon, href, label, isEmail = false }: { icon: string; href: string; label?: string; isEmail?: boolean }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-white text-lg cursor-pointer ${
      isEmail ? "bg-purple-950" : "border-2 border-purple-950 bg-purple-950/40"
    } px-4 py-2 rounded-full hover:underline ${
      isEmail ? "hover:bg-purple-800" : "hover:border-purple-800 hover:bg-purple-800/40"
    } active:bg-purple-700 flex gap-2 items-center`}
    aria-label={label || `Enlace a ${href}`}
  >
    <FontAwesomeIcon icon={icon} />
    {label && <span>{label}</span>}
  </a>
);

export function meta({}: Route.MetaArgs) {
  return [
    { title: i18n.t("title") },
    { name: "description", content: i18n.t("description") },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { charSet: "utf-8" },
  ];
}

export default function Home() {
  const { t } = useTranslation();
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    sessionStorage.setItem("i18nextLng", lang);
  };

  const projects = t("projects_section", { returnObjects: true });
  const experience = t("experience_section", { returnObjects: true });
  const languages = t("languages_section", { returnObjects: true });

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-purple-950 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-white font-bold text-xl">Jose A. Guevara</h1>
          <div className="space-x-4 text-white">
            <Link to="about" smooth duration={500} className="hover:underline cursor-pointer">{t("about")}</Link>
            <Link to="languages" smooth duration={500} className="hover:underline cursor-pointer">{languages.title}</Link>
            <Link to="technologies" smooth duration={500} className="hover:underline cursor-pointer">{t("technologies")}</Link>
            <Link to="experience" smooth duration={500} className="hover:underline cursor-pointer">{experience.title}</Link>
            <Link to="projects" smooth duration={500} className="hover:underline cursor-pointer">{projects.title}</Link>
            <Link to="education" smooth duration={500} className="hover:underline cursor-pointer">{t("education")}</Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 flex justify-end gap-2">
        <button onClick={() => handleLanguageChange("es")} className="text-white hover:underline cursor-pointer">🇪🇸</button>
        <button onClick={() => handleLanguageChange("en")} className="text-white hover:underline cursor-pointer">🇺🇸</button>
      </div>

      {/* Presentación */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <div className="rounded-full overflow-hidden border-4 border-purple-950 h-40 w-40 shrink-0">
          <img className="object-cover w-full h-full" src="/profilepic.png" alt="Foto de perfil de Jose A. Guevara" loading="lazy" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-white text-3xl sm:text-4xl font-bold">Jose A. Guevara Morales</h1>
            <h2 className="text-white text-xl font-bold text-purple-300">{t("profession")}</h2>
          </div>
          <div className="flex items-center gap-2 text-white text-lg">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <a href="https://maps.app.goo.gl/QMfLoFz4Li8PxNsa7" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-400">
              {t("my_address")}
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            <SocialLink icon="fa-solid fa-envelope" href="mailto:jose.guevaramorales17@gmail.com" label="jose.guevaramorales17@gmail.com" isEmail />
            <SocialLink icon="fa-solid fa-file" href={t("resume")} />
            <SocialLink icon="fa-brands fa-github" href="https://github.com/CapiFrank" />
            <SocialLink icon="fa-brands fa-linkedin-in" href="https://www.linkedin.com/in/jose-alberto-guevara-morales-652886182/" />
          </div>
        </div>
      </motion.section>

      {/* Sobre Mí */}
      <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <SectionHeader icon="fa-solid fa-circle-info">{t("about")}</SectionHeader>
        <p className="text-white text-lg leading-relaxed">{t("professional_profile")}</p>
      </motion.section>

      {/* Idiomas */}
      <motion.section id="languages" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <SectionHeader icon="fa-solid fa-language">{languages.title}</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.languages.map((lang, index) => (
            <motion.div key={index} className="bg-white/5 rounded-lg p-6 border-l-4 border-purple-500 hover:bg-white/10 transition-colors" custom={index} variants={fadeIn}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white text-xl font-bold">{lang.language}</h3>
                <span className="text-purple-300 bg-white/10 px-3 py-1 rounded-full text-sm">{lang.level}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: lang.proficiency }}></div>
              </div>
              <p className="text-white/80 text-sm">{lang.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tecnologías */}
      <motion.section id="technologies" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <SectionHeader icon="fa-solid fa-tools">{t("technologies")}</SectionHeader>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {['HTML5','CSS3','JavaScript','React','Laravel','Tailwind','Bootstrap','Vue','Java','Python','ASP.NET','MySQL','SQLite','SQL Server','PostgreSQL','GitHub','Linux'].map((tech, i) => (
            <motion.div key={tech} custom={i} variants={fadeIn}><TechBadge icon={getIcon(tech)} name={tech} /></motion.div>
          ))}
        </ul>
      </motion.section>

      {/* Experiencia */}
      <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <SectionHeader icon="fa-solid fa-brain">{experience.title}</SectionHeader>
        <div className="space-y-6">
          {experience.experiences.map((item, index) => (
            <motion.div key={index} className="flex gap-4" custom={index} variants={fadeIn}>
              <div className="flex flex-col items-center">
                <div className="bg-purple-950/40 border-2 border-purple-950 rounded-full p-3">
                  <FontAwesomeIcon icon="fa-solid fa-laptop-code" className="text-white text-lg" />
                </div>
                {index < experience.experiences.length - 1 && <div className="h-full w-0.5 bg-purple-950 my-2"></div>}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  <span className="text-white text-sm border-2 border-purple-950 bg-purple-950/40 px-3 py-1 rounded-full">{item.year}</span>
                </div>
                <p className="text-white mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span key={i} className="text-sm text-purple-300 bg-white/10 rounded-full px-3 py-1">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Proyectos */}
      <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <SectionHeader icon="fa-solid fa-diagram-project">{projects.title}</SectionHeader>
        <div className="grid gap-8">
          {projects.projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-6 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="lg:w-1/3 rounded-md overflow-hidden">
                <img
                  className="object-cover w-full h-full max-h-48 lg:max-h-none"
                  src={project.image}
                  alt={`Captura del proyecto ${project.title}`}
                  loading="lazy"
                />
              </div>

              <div className="lg:w-2/3 flex flex-col gap-3">
                <div>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-purple-300 text-sm">{project.type}</p>
                </div>

                <p className="text-white">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm text-purple-300 bg-white/10 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  {Array.isArray(project.github) ? (
                    project.github.map((repo, i) => (
                      <a
                        key={i}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm cursor-pointer border-2 border-purple-950 bg-purple-950/40 px-3 py-1 rounded-full hover:border-purple-800 hover:bg-purple-800/40 flex gap-2 items-center"
                      >
                        <FontAwesomeIcon icon="fa-brands fa-github" />
                        {repo.label}
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm cursor-pointer border-2 border-purple-950 bg-purple-950/40 px-3 py-1 rounded-full hover:border-purple-800 hover:bg-purple-800/40 flex gap-2 items-center"
                    >
                      <FontAwesomeIcon icon="fa-brands fa-github" />
                      {projects.preview}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <SectionHeader icon="fa-solid fa-graduation-cap">
          {t("education")}
        </SectionHeader>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-purple-950/40 border-2 border-purple-950 rounded-full p-3">
              <FontAwesomeIcon
                icon="fa-solid fa-graduation-cap"
                className="text-white text-lg"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
              <h3 className="text-white text-lg font-bold">{t("degree")}</h3>
              <span className="text-white text-sm border-2 border-purple-950 bg-purple-950/40 px-3 py-1 rounded-full">
                {t("degree_year")}
              </span>
            </div>
            <p className="text-white">{t("university")}</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function getIcon(tech: string) {
  const map: Record<string, string> = {
    HTML5: "fa-brands fa-html5",
    CSS3: "fa-brands fa-css3-alt",
    JavaScript: "fa-brands fa-js",
    React: "fa-brands fa-react",
    Laravel: "fa-brands fa-laravel",
    Tailwind: "fa-brands fa-css",
    Bootstrap: "fa-brands fa-bootstrap",
    Vue: "fa-brands fa-vuejs",
    Java: "fa-brands fa-java",
    Python: "fa-brands fa-python",
    "ASP.NET": "fa-solid fa-code",
    MySQL: "fa-solid fa-database",
    SQLite: "fa-solid fa-database",
    "SQL Server": "fa-solid fa-database",
    PostgreSQL: "fa-solid fa-database",
    GitHub: "fa-brands fa-github",
    Linux: "fa-brands fa-linux",
  };
  return map[tech] || "fa-solid fa-code";
}
