import { Section, SectionHeading } from "../components/Section";
import SkillCard from "../components/SkillCard";
import Reveal from "../components/Reveal";
import { skills, coreConcepts } from "../data/portfolio";

export default function Skills() {
  return (
    <>
      <Section className="pt-12 sm:pt-20 pb-10">
        <SectionHeading
          eyebrow="ls -la ./skills"
          title="Skills & Toolkit"
          subtitle="Technologies and concepts I use to design, build, and ship software."
        />
      </Section>

      <Section className="pt-0 space-y-16">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <p className="font-mono text-sm text-accent mb-5">// {category.toLowerCase()}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {list.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        ))}

        <Reveal>
          <div className="glass rounded-2xl p-8">
            <p className="font-mono text-sm text-accent mb-4">// foundations</p>
            <div className="flex flex-wrap gap-3">
              {coreConcepts.map((c) => (
                <span key={c} className="font-mono text-sm px-4 py-2 rounded-full border border-border text-muted">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
