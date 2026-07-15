import { Section, SectionHeading } from "../components/Section";
import CertCard from "../components/CertCard";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <>
      <Section className="pt-12 sm:pt-20 pb-10">
        <SectionHeading
          eyebrow="ls ./certifications"
          title="Certifications"
          subtitle="Programs and courses I've completed or participated in to build on core fundamentals."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <CertCard key={c.title} cert={c} index={i} />
          ))}
        </div>
        <p className="text-xs text-muted font-mono mt-8">
          // certificate images coming soon
        </p>
      </Section>
    </>
  );
}
