import { FiDownload, FiExternalLink } from "react-icons/fi";
import { Section, SectionHeading } from "../components/Section";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { profile, education, skills, projects, certifications } from "../data/portfolio";

export default function Resume() {
  return (
    <>
      <Section className="pt-12 sm:pt-20 pb-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="curl -O ./resume.pdf"
            title="Resume"
            subtitle="A snapshot of my background — download the full PDF for the complete version."
          />
          <div className="flex gap-3">
            <Button href="/resume.pdf" variant="primary">
              <FiDownload /> Download PDF
            </Button>
            <Button href="/resume.pdf" variant="ghost">
              <FiExternalLink /> Open Preview
            </Button>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="glass-strong rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-between gap-4 border-b border-border pb-6">
              <div>
                <h2 className="font-display text-2xl font-semibold">{profile.name}</h2>
                <p className="font-mono text-sm text-accent mt-1">{profile.role}</p>
              </div>
              <div className="text-sm text-muted text-right font-mono">
                <p>{profile.location}</p>
                <p>{profile.email}</p>
              </div>
            </div>

            <ResumeBlock title="Education">
              {education.map((e) => (
                <div key={e.title} className="mb-2">
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-muted">{e.place} · {e.year}</p>
                </div>
              ))}
            </ResumeBlock>

            <ResumeBlock title="Skills">
              <p className="text-sm text-muted leading-relaxed">
                {Object.values(skills).flat().map((s) => s.name).join(" · ")}
              </p>
            </ResumeBlock>

            <ResumeBlock title="Projects">
              {projects.map((p) => (
                <div key={p.id} className="mb-3">
                  <p className="font-medium">{p.title}</p>
                  <p className="text-sm text-muted">{p.tagline} — {p.tech.join(", ")}</p>
                </div>
              ))}
            </ResumeBlock>

            <ResumeBlock title="Certifications" last>
              <ul className="text-sm text-muted space-y-1">
                {certifications.map((c) => (
                  <li key={c.title}>{c.title} — {c.issuer}</li>
                ))}
              </ul>
            </ResumeBlock>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function ResumeBlock({ title, children, last }) {
  return (
    <div className={`py-6 ${!last ? "border-b border-border" : ""}`}>
      <p className="font-mono text-xs text-accent mb-3">{title.toLowerCase()}</p>
      {children}
    </div>
  );
}
