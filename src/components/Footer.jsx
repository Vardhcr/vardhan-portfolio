import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft/60">
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
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 grid place-items-center rounded-full glass hover:text-accent hover:border-accent/50 transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 grid place-items-center rounded-full glass hover:text-accent hover:border-accent/50 transition-colors"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-10 h-10 grid place-items-center rounded-full glass hover:text-accent hover:border-accent/50 transition-colors"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 sm:px-8 py-4 text-xs text-muted font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; a lot of coffee.
        </p>
      </div>
    </footer>
  );
}
