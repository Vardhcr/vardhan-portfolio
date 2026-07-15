import { FiAward } from "react-icons/fi";
import Reveal from "./Reveal";

export default function CertCard({ cert, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <div className="glass rounded-xl p-6 h-full glow-border flex flex-col">
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-gradient-to-br from-primary/25 to-accent/15 text-accent mb-4">
          <FiAward size={20} />
        </div>
        <h3 className="font-display font-semibold leading-snug">{cert.title}</h3>
        <p className="font-mono text-xs text-accent mt-1">{cert.issuer}</p>
        <p className="text-sm text-muted mt-3 leading-relaxed flex-1">{cert.description}</p>
        <p className="font-mono text-xs text-muted mt-4 pt-4 border-t border-border">{cert.date}</p>
      </div>
    </Reveal>
  );
}
