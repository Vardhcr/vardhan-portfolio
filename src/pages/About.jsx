import { FiTarget, FiBookOpen } from "react-icons/fi";
import { Section, SectionHeading } from "../components/Section";
import Reveal from "../components/Reveal";
import { profile, education, goals, interests } from "../data/portfolio";

export default function About() {
  return (
    <>
      <Section className="pt-12 sm:pt-20 pb-10">
        <SectionHeading
          eyebrow="cat about.md"
          title="About Me"
          subtitle="A quick rundown of who I am, where I've studied, and what I'm working toward."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <Reveal direction="left">
            <div className="glass-strong rounded-2xl p-8 sticky top-24">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary grid place-items-center font-display text-2xl font-semibold">
                {profile.firstName.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-display text-xl font-semibold mt-5">{profile.name}</h3>
              <p className="font-mono text-sm text-accent mt-1">{profile.role}</p>
              <p className="text-sm text-muted mt-4 leading-relaxed">{profile.college}</p>
              <p className="text-sm text-muted mt-2">{profile.location}</p>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-mono text-xs text-muted mb-3"># interests</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <span key={i} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border text-muted">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-14">
            <Reveal direction="right">
              <div>
                <p className="font-mono text-sm text-accent mb-3 flex items-center gap-2">
                  <FiBookOpen /> journey
                </p>
                <p className="text-muted leading-relaxed">{profile.summary}</p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div>
                <p className="font-mono text-sm text-accent mb-5">education</p>
                <div className="relative pl-8">
                  <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
                  {education.map((e) => (
                    <div key={e.title} className="relative pb-2">
                      <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(6,182,212,0.15)]" />
                      <p className="font-mono text-xs text-muted">{e.year}</p>
                      <h4 className="font-display font-semibold mt-1">{e.title}</h4>
                      <p className="text-sm text-accent mt-0.5">{e.place}</p>
                      <p className="text-sm text-muted mt-2 leading-relaxed max-w-xl">{e.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div>
                <p className="font-mono text-sm text-accent mb-5 flex items-center gap-2">
                  <FiTarget /> career goals
                </p>
                <ul className="space-y-3">
                  {goals.map((g) => (
                    <li key={g} className="flex gap-3 text-sm text-muted">
                      <span className="text-accent font-mono">▸</span>
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
