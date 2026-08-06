import { motion } from "framer-motion";
import Reveal from "./Reveal";

export function Eyebrow({ children }) {
  return (
    <p className="font-mono text-sm text-accent mb-3 flex items-center gap-2">
      <span className="text-muted">$</span> {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight relative inline-block">
        {title}
        <motion.span
          className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </h2>
      {subtitle && <p className="text-muted mt-5 max-w-2xl leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}

export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}
