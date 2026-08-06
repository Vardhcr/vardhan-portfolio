import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import Reveal from "./Reveal";

export default function CertCard({ cert, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
className="glass rounded-xl p-6 h-full glow-border shine flex flex-col group"
      >
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-gradient-to-br from-primary/25 to-accent/15 text-accent mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <FiAward size={20} />
        </div>
        <h3 className="font-display font-semibold leading-snug group-hover:text-accent transition-colors">{cert.title}</h3>
        <p className="font-mono text-xs text-accent mt-1">{cert.issuer}</p>
        <p className="text-sm text-muted mt-3 leading-relaxed flex-1">{cert.description}</p>
        <p className="font-mono text-xs text-muted mt-4 pt-4 border-t border-border">{cert.date}</p>
      </motion.div>
    </Reveal>
  );
}
