import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import type { NavItem } from "~/types/nav_item";
import type { NavbarProps } from "~/types/navbar_props";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const mobileMenuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "beforeChildren",
      delayChildren: 0.35,
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
};

const navItemHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

const navItemTap = {
  scale: 0.95,
};

export const Navbar: React.FC<NavbarProps> = ({
  t,
  languages,
  experience,
  projects,
  menuOpen,
  setMenuOpen,
}) => {
  const navItems: NavItem[] = [
    { to: "about", text: t("about") },
    { to: "languages", text: languages.title },
    { to: "technologies", text: t("technologies") },
    { to: "experience", text: experience.title },
    { to: "projects", text: projects.title },
    { to: "education", text: t("education") },
  ];

  return (
    <motion.nav
      className={`bg-primary-dark dark:bg-primary-light fixed top-0 left-0 w-full z-50 shadow-lg`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <motion.button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`relative inline-flex items-center justify-center rounded-md p-2 text-on-primary-light dark:text-on-primary-dark hover:bg-primary-light hover:dark:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon
                icon={menuOpen ? faTimes : faBars}
                className="size-5"
              />
            </motion.button>
          </div>

          {/* Logo and desktop menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <motion.div
              className="flex shrink-0 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="personal_info"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-on-primary-light dark:text-on-primary-dark font-bold text-xl"
              >
                Jose A. Guevara
              </Link>
            </motion.div>

            <motion.div
              className="hidden sm:ml-6 sm:block"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex space-x-1">
                {navItems.map((item) => (
                  <motion.div
                    key={item.to}
                    variants={itemVariants}
                    whileHover={navItemHover}
                    whileTap={navItemTap}
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className={`text-on-primary-light dark:text-on-primary-dark hover:bg-primary-light hover:dark:bg-primary-dark hover:text-on-primary-light hover:dark:text-on-primary-dark rounded-md px-3 py-2 text-sm font-medium cursor-pointer block`}
                    >
                      {item.text}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sm:hidden overflow-hidden"
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <motion.div
              className="space-y-1 px-2 pb-3 pt-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.to}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setMenuOpen(false)}
                    className={`text-on-primary-light dark:text-on-primary-dark hover:bg-primary-light hover:dark:bg-primary-dark hover:text-on-primary-light hover:dark:text-on-primary-dark block rounded-md px-3 py-2 text-base font-medium cursor-pointer`}
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
