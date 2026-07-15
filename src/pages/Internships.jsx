import { FiBriefcase } from "react-icons/fi";
import { Section, SectionHeading } from "../components/Section";
import Reveal from "../components/Reveal";
import { internships } from "../data/portfolio";

export default function Internships() {
  return (
    <>
      <Section className="pt-12 sm:pt-20 pb-10">
        <SectionHeading
          eyebrow="cat ./internships.log"
          title="Internships"
          subtitle="Hands-on experience applying what I've learned in a structured, real-world setting."
        />
      </Section>

      <Section className="pt-0">
        <div className="relative pl-10 max-w-2xl">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
          {internships.map((i, idx) => (
            <Reveal key={i.org} delay={idx * 0.1} direction="right">
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-10 top-1 w-8 h-8 rounded-full glass-strong grid place-items-center text-accent">
                  <FiBriefcase size={14} />
                </span>
                <div className="glass rounded-xl p-6">
                  <p className="font-mono text-xs text-muted">{i.duration}</p>
                  <h3 className="font-display text-lg font-semibold mt-1">{i.role}</h3>
                  <p className="font-mono text-sm text-accent mt-0.5">{i.org}</p>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{i.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
