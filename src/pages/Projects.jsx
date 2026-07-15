import { Section, SectionHeading } from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <>
      <Section className="pt-12 sm:pt-20 pb-10">
        <SectionHeading
          eyebrow="git log --oneline ./projects"
          title="Projects"
          subtitle="A mix of shipped and in-progress builds — from AI tooling to systems-level fundamentals."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
