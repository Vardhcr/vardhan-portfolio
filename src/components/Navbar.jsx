import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/skills", label: "skills" },
  { to: "/projects", label: "projects" },
  { to: "/certifications", label: "certifications" },
  { to: "/internships", label: "internships" },
  { to: "/resume", label: "resume" },
  { to: "/contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-16">
        <NavLink to="/" className="font-mono text-sm sm:text-base font-semibold tracking-tight text-text">
          <span className="text-accent">~/</span>jyothivardhan
          <span className="blink-cursor h-4 align-middle" />
        </NavLink>

        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition-colors relative ${
                    isActive ? "text-accent" : "text-muted hover:text-text"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-text p-2 -mr-2"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden glass-strong overflow-hidden font-mono text-sm"
          >
            {links.map((l) => (
              <li key={l.to} className="border-t border-border/60">
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block px-6 py-3 ${isActive ? "text-accent" : "text-muted"}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
