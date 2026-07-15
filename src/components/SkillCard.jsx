import { motion } from "framer-motion";

export default function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="glass rounded-xl p-5 glow-border"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium text-sm">{skill.name}</span>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
