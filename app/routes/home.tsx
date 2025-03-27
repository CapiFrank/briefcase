import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Route } from "./+types/home";

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
    className={`text-white text-lg cursor-pointer ${isEmail ? 'bg-purple-950' : 'border-2 border-purple-950 bg-purple-950/40'} px-4 py-2 rounded-full hover:underline ${isEmail ? 'hover:bg-purple-800' : 'hover:border-purple-800 hover:bg-purple-800/40'} active:bg-purple-700 flex gap-2 items-center`}
    aria-label={label || `Enlace a ${href}`}
  >
    <FontAwesomeIcon icon={icon} />
    {label && <span>{label}</span>}
  </a>
);

// Metadatos
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jose A. Guevara - Desarrollador FullStack" },
    { name: "description", content: "Portafolio profesional de Jose A. Guevara, Desarrollador Junior FullStack" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { charSet: "utf-8" },
  ];
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Sección de Presentación */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="rounded-full overflow-hidden border-4 border-purple-950 h-40 w-40 shrink-0">
          <img
            className="object-cover w-full h-full"
            src="/profilepic.png"
            alt="Foto de perfil de Jose A. Guevara"
            loading="lazy"
          />
        </div>
        
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-white text-3xl sm:text-4xl font-bold">Jose A. Guevara Morales</h1>
            <h2 className="text-white text-xl font-bold text-purple-300">Desarrollador Junior FullStack</h2>
          </div>

          <div className="flex items-center gap-2 text-white text-lg">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <a
              href="https://maps.app.goo.gl/QMfLoFz4Li8PxNsa7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-400"
            >
              Mi dirección
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            <SocialLink 
              icon="fa-solid fa-envelope" 
              href="mailto:jose.guevaramorales17@gmail.com" 
              label="jose.guevaramorales17@gmail.com" 
              isEmail 
            />
            <SocialLink icon="fa-solid fa-file" href="https://drive.google.com/file/d/1xLoI5Fcqf8GGdN_pZdBEpjRim9t4x-sR/view?usp=sharing" />
            <SocialLink icon="fa-brands fa-github" href="https://github.com/CapiFrank" />
            <SocialLink icon="fa-brands fa-linkedin-in" href="https://www.linkedin.com/in/jose-alberto-guevara-morales-652886182/" />
          </div>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section>
        <SectionHeader icon="fa-solid fa-circle-info">Sobre mí</SectionHeader>
        <p className="text-white text-lg leading-relaxed">
          Soy un desarrollador junior fullstack apasionado por la tecnología y el desarrollo de software. 
          Disfruto aprender y experimentar con nuevas tecnologías, así como compartir mis conocimientos. 
          Mi enfoque se centra en crear soluciones eficientes con código limpio y buenas prácticas.
        </p>
      </section>
      <section>
        <SectionHeader icon="fa-solid fa-language">Idiomas</SectionHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              language: "Español",
              level: "Nativo",
              proficiency: "100%",
              description: "Lengua materna, dominio completo en todos los contextos"
            },
            {
              language: "Inglés",
              level: "Intermedio Avanzado",
              proficiency: "70%",
              description: "Capaz de mantener conversaciones técnicas, leer documentación y escribir correos profesionales"
            }
          ].map((lang, index) => (
            <div 
              key={index} 
              className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors border-l-4 border-purple-500"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white text-xl font-bold">{lang.language}</h3>
                <span className="text-purple-300 bg-white/10 px-3 py-1 rounded-full text-sm">
                  {lang.level}
                </span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
                <div 
                  className="bg-purple-500 h-2.5 rounded-full" 
                  style={{ width: lang.proficiency }}
                ></div>
              </div>
              
              <p className="text-white/80 text-sm">{lang.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Sección Tecnologías */}
      <section>
        <SectionHeader icon="fa-solid fa-tools">Tecnologías</SectionHeader>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <TechBadge icon="fa-brands fa-html5" name="HTML5" />
          <TechBadge icon="fa-brands fa-css3-alt" name="CSS3" />
          <TechBadge icon="fa-brands fa-js" name="JavaScript" />
          <TechBadge icon="fa-brands fa-react" name="React" />
          <TechBadge icon="fa-brands fa-laravel" name="Laravel" />
          <TechBadge icon="fa-brands fa-css" name="Tailwind" />
          <TechBadge icon="fa-brands fa-bootstrap" name="Bootstrap" />
          <TechBadge icon="fa-brands fa-vuejs" name="Vue" />
          <TechBadge icon="fa-brands fa-java" name="Java" />
          <TechBadge icon="fa-brands fa-python" name="Python" />
          <TechBadge icon="fa-solid fa-code" name="ASP.NET" />
          <TechBadge icon="fa-solid fa-database" name="MySQL" />
          <TechBadge icon="fa-solid fa-database" name="SQLite" />
          <TechBadge icon="fa-solid fa-database" name="SQL Server" />
          <TechBadge icon="fa-solid fa-database" name="PostgreSQL" />
          <TechBadge icon="fa-brands fa-github" name="GitHub" />
          <TechBadge icon="fa-brands fa-linux" name="Linux" />
        </ul>
      </section>

      {/* Sección Experiencia */}
      <section>
        <SectionHeader icon="fa-solid fa-brain">Experiencia</SectionHeader>
        
        <div className="space-y-6">
          {[
            {
              year: "2021",
              title: "Desarrollador Backend - Aplicación de Gestión Hospitalaria",
              description: "Colaboré en el desarrollo de una aplicación en Java para la gestión integral de hospitales, que incluye funcionalidades como la consulta de listados de hospitales, la integración de nuevos hospitales, la modificación de registros existentes y la eliminación de hospitales.",
              tech: ["Java"]
            },
            {
              year: "2022",
              title: "Desarrollador FullStack - Aplicación de Gestión de Restaurante",
              description: "En equipo, desarrollamos una aplicación en ASP.NET para gestionar restaurantes, incluyendo la administración de recetas, menús y pedidos, con enfoque en optimizar la experiencia del usuario y la eficiencia operativa.",
              tech: ["ASP.NET"]
            },
            {
              year: "2022",
              title: "Desarrollador FullStack - Checklist tipo Notion",
              description: "Fui parte de un equipo que creó una aplicación de checklist similar a Notion, utilizando Vue.js para el front-end y Laravel para el back-end. La aplicación permite a los usuarios crear y gestionar tareas de manera eficiente, con funcionalidades como arrastrar y soltar, edición en tiempo real y autenticación.",
              tech: ["Vue.js", "Laravel"]
            },
            {
              year: "2023",
              title: "Desarrollador FullStack - Newbie (Aplicación Similar a Spotify)",
              description: "En colaboración con un equipo, desarrollamos una aplicación de streaming musical utilizando React y Tailwind CSS, creando una interfaz de usuario atractiva y funcional, con características como listas de reproducción, reproducción de música y personalización de usuarios.",
              tech: ["React", "Tailwind CSS"]
            }
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-purple-950/40 border-2 border-purple-950 rounded-full p-3">
                  <FontAwesomeIcon icon="fa-solid fa-laptop-code" className="text-white text-lg" />
                </div>
                {index < 3 && <div className="h-full w-0.5 bg-purple-950 my-2"></div>}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  <span className="text-white text-sm border-2 border-purple-950 bg-purple-950/40 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                <p className="text-white mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, i) => (
                    <span key={i} className="text-sm text-purple-300 bg-white/10 rounded-full px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Proyectos */}
      <section>
        <SectionHeader icon="fa-solid fa-briefcase">Proyectos</SectionHeader>
        
        <div className="grid gap-8">
          {[
            {
              title: "Aplicación de Gestión Hospitalaria",
              type: "Proyecto Universitario",
              description: "El sistema incluye funcionalidades como la consulta de listados de hospitales, la integración de nuevos hospitales, la modificación de registros existentes y la eliminación de hospitales.",
              tech: ["Java"],
              github: "https://github.com/CapiFrank/supreme-meme.git",
              image: "/hospital.png"
            },
            {
              title: "Aplicación de Gestión de Restaurante",
              type: "Proyecto Universitario",
              description: "En equipo, desarrollamos una aplicación en ASP.NET para gestionar restaurantes, incluyendo la administración de recetas, menús e ingredientes, con enfoque en optimizar la experiencia del usuario y el uso de las buenas prácticas.",
              tech: ["ASP.NET"],
              github: "https://github.com/CapiFrank/turbo-fishstick.git",
              image: "/restaurante.png"
            },
            {
              title: "Checklist tipo Notion",
              type: "Proyecto Universitario",
              description: "Desarrollé una aplicación tipo checklist utilizando Vue.js para el front-end y Laravel para el back-end. La aplicación permite a los usuarios crear, editar, eliminar y visualizar tareas.",
              tech: ["Vue.js", "Laravel"],
              github: [
                { url: "https://github.com/CapiFrank/Front-End.git", label: "Frontend (Vue)" },
                { url: "https://github.com/CapiFrank/Back-End.git", label: "Backend (Laravel)" }
              ],
              image: "/checklist.png"
            },
            {
              title: "Newbie (Aplicación Similar a Spotify)",
              type: "Proyecto Universitario",
              description: "Desarrollé una aplicación que permite la búsqueda de artistas y visualización de álbumes utilizando la API de Spotify. Los usuarios pueden explorar la música de diferentes artistas y acceder a sus álbumes.",
              tech: ["React"],
              github: "https://github.com/CapiFrank/newbie.git",
              image: "/newbie.png"
            }
          ].map((project, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-6 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
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
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-purple-300 text-sm">{project.type}</p>
                </div>
                
                <p className="text-white">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-sm text-purple-300 bg-white/10 rounded-full px-3 py-1">
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
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Educación */}
      <section>
        <SectionHeader icon="fa-solid fa-graduation-cap">Educación</SectionHeader>
        
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-purple-950/40 border-2 border-purple-950 rounded-full p-3">
              <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className="text-white text-lg" />
            </div>
          </div>
          
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
              <h3 className="text-white text-lg font-bold">Bachillerato en Informática Empresarial</h3>
              <span className="text-white text-sm border-2 border-purple-950 bg-purple-950/40 px-3 py-1 rounded-full">
                2020 - Actualmente
              </span>
            </div>
            <p className="text-white">Universidad De Costa Rica</p>
          </div>
        </div>
      </section>
    </main>
  );
}