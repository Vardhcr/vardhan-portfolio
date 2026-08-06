import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { href: profile.github, label: "GitHub", Icon: FiGithub },
  { href: profile.linkedin, label: "LinkedIn", Icon: FiLinkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-soft/60 overflow-hidden">
      {/* Top gradient hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-muted mt-2 leading-relaxed">
            {profile.role}
            <br />
            {profile.location}
          </p>
        </div>

        <div className="font-mono text-sm">
          <p className="text-muted mb-3"># navigation</p>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-text/80 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-sm text-muted mb-3"># connect</p>
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="w-10 h-10 grid place-items-center rounded-full glass hover:text-accent hover:border-accent/50 transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-4 flex items-center justify-between gap-4 text-xs text-muted font-mono">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React &amp; a lot of coffee.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
