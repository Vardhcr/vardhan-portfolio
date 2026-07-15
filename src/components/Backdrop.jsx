import { motion } from "framer-motion";

export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-grid">
      <motion.div
        className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full blur-[120px] opacity-30"
        style={{ background: "var(--color-primary)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full blur-[120px] opacity-25"
        style={{ background: "var(--color-secondary)" }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[26rem] h-[26rem] rounded-full blur-[120px] opacity-20"
        style={{ background: "var(--color-accent)" }}
        animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,17,32,0.6)_60%,rgba(11,17,32,0.95))]" />
    </div>
  );
}
