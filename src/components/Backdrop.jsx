import { motion } from "framer-motion";

const particles = [
  { top: "12%", left: "25%", size: 3, duration: 9, delay: 0 },
  { top: "28%", left: "78%", size: 2, duration: 11, delay: 1 },
  { top: "55%", left: "12%", size: 2.5, duration: 8, delay: 2 },
  { top: "70%", left: "88%", size: 3, duration: 12, delay: 0.5 },
  { top: "40%", left: "48%", size: 2, duration: 10, delay: 3 },
  { top: "85%", left: "35%", size: 2, duration: 9.5, delay: 1.5 },
  { top: "16%", left: "60%", size: 2, duration: 13, delay: 2.5 },
  { top: "64%", left: "62%", size: 2.5, duration: 10.5, delay: 0.8 },
];

export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-grid grain">
      {/* Aurora blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full aurora-blob opacity-30"
        style={{ background: "radial-gradient(circle at 30% 30%, var(--color-primary), transparent 70%)" }}
        animate={{ x: [0, 50, -20, 0], y: [0, 35, -25, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full aurora-blob opacity-25"
        style={{ background: "radial-gradient(circle at 60% 40%, var(--color-secondary), transparent 70%)" }}
        animate={{ x: [0, -40, 20, 0], y: [0, 45, -20, 0], scale: [1, 1.08, 0.94, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full aurora-blob opacity-20"
        style={{ background: "radial-gradient(circle at 50% 50%, var(--color-accent), transparent 70%)" }}
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 20, 0], scale: [1, 0.94, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[10%] left-[45%] w-[22rem] h-[22rem] rounded-full aurora-blob opacity-15"
        style={{ background: "radial-gradient(circle at 30% 60%, #60A5FA, transparent 70%)" }}
        animate={{ x: [0, -25, 15, 0], y: [0, 20, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating micro-particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent/40"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,17,32,0.6)_60%,rgba(11,17,32,0.95))]" />
    </div>
  );
}
