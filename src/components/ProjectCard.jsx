import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCode } from "react-icons/fi";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  // Hover tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });

const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  // Touch support: tilt the card as a finger drags across it (mobile "sensor" feel)
  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    mx.set((touch.clientX - rect.left) / rect.width);
    my.set((touch.clientY - rect.top) / rect.height);
  };

  const resetTilt = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <>
      <Reveal delay={index * 0.08} direction={index % 2 === 0 ? "up" : "up"}>
        <motion.div
          className="group relative rounded-2xl glow-border glass overflow-hidden h-full flex flex-col"
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          onTouchMove={handleTouchMove}
          onTouchEnd={resetTilt}
        >
          <div className="relative h-44 flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 border-b border-border overflow-hidden shine">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <FiCode className="relative text-5xl text-text/25 transition-all duration-300 group-hover:scale-110 group-hover:text-accent/50" />
            <span className="absolute top-3 right-3 font-mono text-[11px] px-2 py-1 rounded-full glass-strong text-accent">
              {project.status}
            </span>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
            <p className="text-sm text-muted mt-1">{project.tagline}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, ti) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + ti * 0.04 }}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border text-muted group-hover:border-accent/30 group-hover:text-accent/80 transition-colors"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 font-mono text-sm">
              <button
                onClick={() => setOpen(true)}
                className="text-accent hover:underline underline-offset-4"
              >
                view details
              </button>
              <span className="text-border">/</span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted hover:text-text transition-colors"
              >
                <FiGithub /> code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted hover:text-text transition-colors"
                >
                  <FiExternalLink /> demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </Reveal>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center p-5 bg-bg/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl max-w-lg w-full p-7 relative"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 text-muted hover:text-text transition-colors"
              >
                <FiX size={20} />
              </button>

              <p className="font-mono text-xs text-accent mb-2">{project.status}</p>
              <h3 className="font-display text-2xl font-semibold pr-8">{project.title}</h3>
              <p className="text-muted mt-3 leading-relaxed">{project.description}</p>

              <p className="font-mono text-xs text-muted mt-6 mb-2">// key features</p>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="text-sm flex gap-2">
                    <span className="text-accent mt-1">▸</span> {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border text-muted">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-7 font-mono text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-accent hover:underline underline-offset-4"
                >
                  <FiGithub /> view code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-accent hover:underline underline-offset-4"
                  >
                    <FiExternalLink /> live demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
