import { Link } from "react-router-dom";

const base =
  "inline-flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-lg transition-all duration-200 focus-visible:outline-none";

const variants = {
  primary:
    "text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5",
  ghost:
    "glass text-text hover:border-accent/60 hover:text-accent hover:-translate-y-0.5",
};

export default function Button({ to, href, onClick, type = "button", variant = "primary", children, className = "" }) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
