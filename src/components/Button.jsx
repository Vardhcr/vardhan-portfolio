import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const base =
  "shine inline-flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-lg transition-transform duration-200 focus-visible:outline-none active:scale-95";

const variants = {
  primary:
    "text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5",
  ghost:
    "glass text-text hover:border-accent/60 hover:text-accent hover:-translate-y-0.5",
};

export default function Button({ to, href, onClick, type = "button", variant = "primary", children, className = "" }) {
  const cls = `${base} ${variants[variant]} ${className}`;

  const interactive = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.96 },
    transition: { type: "spring", stiffness: 400, damping: 18 },
  };

  if (to) {
    return (
      <motion.div {...interactive} className="inline-block">
        <Link to={to} className={cls}>
          {children}
        </Link>
      </motion.div>
    );
  }
  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...interactive}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type={type} onClick={onClick} className={cls} {...interactive}>
      {children}
    </motion.button>
  );
}
