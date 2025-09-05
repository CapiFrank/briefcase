import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Route } from "./+types/home";
import { useTranslation } from "react-i18next";
import i18n from "../src/i18n";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import type { SectionData } from "~/types/section_data";
import { Navbar } from "~/components/navbar";
import { SocialLink } from "~/components/social_link";
import { SectionHeader } from "~/components/section_header";
import {
  faBootstrap,
  faCss,
  faCss3Alt,
  faFlutter,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLaravel,
  faLinkedinIn,
  faLinux,
  faPython,
  faReact,
  faVuejs,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faCircleInfo,
  faCode,
  faDatabase,
  faDiagramProject,
  faEnvelope,
  faFile,
  faGraduationCap,
  faLanguage,
  faLaptopCode,
  faLocationDot,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { TechBadge } from "~/components/tech_badge";
import { SectionProjects } from "~/components/section_projects";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    sessionStorage.setItem("i18nextLng", lang);
  };

  const projects = t("projects_section", {
    returnObjects: true,
  }) as SectionData;
  const experience = t("experience_section", {
    returnObjects: true,
  }) as SectionData;
  const languages = t("languages_section", {
    returnObjects: true,
  }) as SectionData;

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
      <Navbar
        t={t}
        languages={languages}
        experience={experience}
        projects={projects}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Selector de idioma */}
      <div className="pt-12 flex justify-end gap-2">
        <button
          onClick={() => handleLanguageChange("es")}
          aria-label="Cambiar a Español"
          className="text-on-surface-light dark:text-on-surface-dark hover:underline cursor-pointer"
        >
          🇪🇸
        </button>
        <button
          onClick={() => handleLanguageChange("en")}
          aria-label="Cambiar a Inglés"
          className="text-on-surface-light dark:text-on-surface-dark hover:underline cursor-pointer"
        >
          🇺🇸
        </button>
      </div>

      {/* Presentación */}
      <motion.section
        id="personal_info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="flex flex-col md:flex-row items-center gap-8"
      >
        <div
          className={`rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark h-40 w-40 shrink-0 shadow-lg text-accent-light/25 dark:text-accent-dark/25`}
        >
          <img
            className="object-cover w-full h-full"
            src="/profilepic.png"
            alt="Foto de perfil de Jose A. Guevara Morales"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-on-surface-light dark:text-on-surface-dark text-3xl sm:text-4xl font-bold">
              Jose A. Guevara Morales
            </h1>
            <h2
              className={`text-xl font-bold text-accent-light dark:text-accent-dark`}
            >
              {t("profession")}
            </h2>
          </div>
          {/* <div className="flex items-center gap-2 text-on-surface-light dark:text-on-surface-dark text-lg">
            <FontAwesomeIcon icon={faLocationDot} />
            <a
              href="https://maps.app.goo.gl/QMfLoFz4Li8PxNsa7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-accent-light hover:dark:text-accent-dark"
            >
              {t("my_address")}
            </a>
          </div> */}
          <div className="flex flex-wrap gap-2">
            <SocialLink
              icon={faEnvelope}
              href="mailto:jose.guevaramorales17@gmail.com"
              label="jose.guevaramorales17@gmail.com"
              isEmail
            />
            <SocialLink
              icon={faFile}
              href={t("resume")}
              label={t("resume_link")}
            />
            <SocialLink
              icon={faGithub}
              href="https://github.com/CapiFrank"
              label="GitHub"
            />
            <SocialLink
              icon={faLinkedinIn}
              href="https://www.linkedin.com/in/jgm1706/"
              label="LinkedIn"
            />
          </div>
        </div>
      </motion.section>

      {/* Sobre Mí */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <SectionHeader icon={faCircleInfo}>{t("about")}</SectionHeader>
        <p className="text-on-surface-light dark:text-on-surface-dark text-lg leading-relaxed">
          {t("professional_profile")}
        </p>
      </motion.section>

      {/* Idiomas */}
      <motion.section
        id="languages"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <SectionHeader icon={faLanguage}>{languages.title}</SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.languages?.map((lang, index) => (
            <motion.div
              key={index}
              className={`bg-surface-light dark:bg-surface-dark rounded-lg p-6 border-l-4 border-accent-light dark:border-accent-dark hover:bg-surface-dark hover:dark:bg-surface-light transition-colors`}
              custom={index}
              variants={fadeIn}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-on-surface-light dark:text-on-surface-dark text-xl font-bold">
                  {lang.language}
                </h3>
                <span
                  className={`text-accent-light dark:text-accent-dark bg-surface-dark dark:bg-surface-light px-3 py-1 rounded-full text-sm`}
                >
                  {lang.level}
                </span>
              </div>
              <div className="w-full bg-surface-light dark:bg-surface-dark rounded-full h-2.5 mb-3">
                <div
                  className={`bg-accent-light dark:bg-accent-dark h-2.5 rounded-full`}
                  style={{ width: lang.proficiency }}
                ></div>
              </div>
              <p className="text-on-surface-light dark:text-on-surface-dark/80 text-sm">
                {lang.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tecnologías */}
      <motion.section
        id="technologies"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <SectionHeader icon={faTools}>{t("technologies")}</SectionHeader>
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {["Flutter", "React", "Laravel", "Tailwind", "MySQL", "GitHub"].map(
            (tech, i) => (
              <motion.li key={tech} custom={i} variants={fadeIn}>
                <TechBadge icon={getIcon(tech)} name={tech} />
              </motion.li>
            )
          )}
        </ul>
      </motion.section>

      {/* Experiencia */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <SectionHeader icon={faBrain}>{experience.title}</SectionHeader>
        <div className="space-y-6">
          {experience.experiences?.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row gap-4"
              custom={index}
              variants={fadeIn}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`bg-primary-dark/40 dark:bg-primary-light/40 border-2 border-primary-light dark:border-primary-dark rounded-full p-3`}
                >
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className="text-on-primary-light dark:text-on-primary-dark text-lg"
                  />
                </div>
                {index < (experience.experiences?.length || 0) - 1 && (
                  <div
                    className={`h-full w-0.5 bg-primary-dark dark:bg-primary-light my-2`}
                  ></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="text-on-surface-light dark:text-on-surface-dark text-lg font-bold">
                    {item.title}
                  </h3>
                  <span
                    className={`text-on-primary-light dark:text-on-primary-dark text-sm border-2 border-primary-light dark:border-primary-dark bg-primary-dark/40 dark:bg-primary-light/40 px-3 py-1 rounded-full`}
                  >
                    {item.year}
                  </span>
                </div>
                <p className="text-on-surface-light dark:text-on-surface-dark mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-sm text-accent-light dark:text-accent-dark bg-surface-dark dark:bg-surface-light rounded-full px-3 py-1`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Proyectos */}
      <SectionProjects projects={projects} />

      {/* Educación */}
      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <SectionHeader icon={faGraduationCap}>{t("education")}</SectionHeader>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col items-center">
            <div
              className={`bg-primary-dark/40 dark:bg-primary-light/40 border-2 border-primary-light dark:border-primary-dark rounded-full p-3`}
            >
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-on-primary-light dark:text-on-primary-dark text-lg"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
              <h3 className="text-on-surface-light dark:text-on-surface-dark text-lg font-bold">
                {t("degree")}
              </h3>
              <span
                className={`text-on-primary-light dark:text-on-primary-dark text-sm border-2 border-primary-light dark:border-primary-dark bg-primary-dark/40 dark:bg-primary-light/40 px-3 py-1 rounded-full`}
              >
                {t("degree_year")}
              </span>
            </div>
            <p className="text-on-surface-light dark:text-on-surface-dark">
              {t("university")}
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function getIcon(tech: string) {
  const map: Record<string, IconDefinition> = {
    HTML5: faHtml5,
    CSS3: faCss3Alt,
    JavaScript: faJs,
    React: faReact,
    Laravel: faLaravel,
    Tailwind: faCss,
    Bootstrap: faBootstrap,
    Vue: faVuejs,
    Java: faJava,
    Flutter: faFlutter,
    Python: faPython,
    "ASP.NET": faCode,
    MySQL: faDatabase,
    SQLite: faDatabase,
    "SQL Server": faDatabase,
    PostgreSQL: faDatabase,
    GitHub: faGithub,
    Linux: faLinux,
  };
  return map[tech] || faCode;
}
