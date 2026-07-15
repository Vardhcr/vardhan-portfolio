import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload, FiMail, FiCloud, FiGithub as GhIcon } from "react-icons/fi";
import {
  SiPython, SiReact, SiFastapi,
} from "react-icons/si";
import TypingText from "../components/TypingText";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import { Section, Eyebrow } from "../components/Section";
import { profile, projects, skills } from "../data/portfolio";

const floatIcons = [
  { Icon: SiPython, label: "Python", style: "top-[8%] left-[6%]", duration: 7 },
  { Icon: SiReact, label: "React", style: "top-[18%] right-[8%]", duration: 9 },
  { Icon: FiCloud, label: "AWS", style: "bottom-[22%] left-[4%]", duration: 8 },
  { Icon: SiFastapi, label: "FastAPI", style: "bottom-[10%] right-[10%]", duration: 6.5 },
  { Icon: GhIcon, label: "GitHub", style: "top-[45%] right-[2%]", duration: 10 },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-16 sm:pt-24 pb-16 relative">
        <div className="absolute inset-0 -z-10 hidden lg:block">
          {floatIcons.map(({ Icon, label, style, duration }) => (
            <motion.div
              key={label}
              className={`absolute ${style} text-muted/30`}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={34} />
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <Reveal direction="left">
              <Eyebrow>whoami</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display font-semibold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
                Hi, I'm
                <br />
                <span className="text-gradient">{profile.name}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="font-mono text-lg sm:text-xl text-muted mt-5 h-8">
                <TypingText words={profile.taglines} className="text-accent" />
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-muted mt-6 max-w-xl leading-relaxed">{profile.summary}</p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="flex flex-wrap gap-3 mt-9">
                <Button to="/projects" variant="primary">
                  View Projects <FiArrowRight />
                </Button>
                <Button to="/resume" variant="ghost">
                  <FiDownload /> Download Resume
                </Button>
                <Button to="/contact" variant="ghost">
                  <FiMail /> Contact Me
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="flex gap-4 mt-8">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent transition-colors">
                  <FiGithub size={20} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent transition-colors">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.15}>
            <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-3 font-mono text-xs text-muted">vardhan.py</span>
              </div>
              <pre className="font-mono text-[13px] sm:text-sm leading-relaxed p-6 overflow-x-auto">
<code>
<span className="text-secondary">class</span> <span className="text-accent">Engineer</span>:
{"\n    "}<span className="text-secondary">def</span> <span className="text-primary">__init__</span>(self):
{"\n        "}self.name = <span className="text-green-300">"{profile.name}"</span>
{"\n        "}self.role = <span className="text-green-300">"{profile.role}"</span>
{"\n        "}self.based_in = <span className="text-green-300">"{profile.location.split(",")[0]}"</span>
{"\n        "}self.focus = [
{"\n            "}<span className="text-green-300">"Backend Dev"</span>,
{"\n            "}<span className="text-green-300">"Applied AI"</span>,
{"\n            "}<span className="text-green-300">"Cloud Systems"</span>,
{"\n        "}]
{"\n\n    "}<span className="text-secondary">def</span> <span className="text-primary">ship</span>(self):
{"\n        "}<span className="text-secondary">return</span> <span className="text-green-300">"always learning ⚡"</span>
</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* QUICK STATS / OBJECTIVE STRIP */}
      <Section className="pt-0 pb-20">
        <Reveal>
          <div className="glass rounded-2xl p-8 sm:p-10 grid sm:grid-cols-3 gap-8">
            <div className="sm:col-span-2">
              <Eyebrow>cat objective.md</Eyebrow>
              <p className="text-muted leading-relaxed">{profile.objective}</p>
            </div>
            <div className="flex flex-col justify-center gap-4 sm:border-l sm:border-border sm:pl-8">
              <Stat label="Graduating" value={profile.graduation} />
              <Stat label="Certifications" value="6+" />
              <Stat label="Projects Shipped" value="2" />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section className="pt-0">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <Eyebrow>ls ./projects</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">Featured Work</h2>
          </div>
          <Button to="/projects" variant="ghost">
            All Projects <FiArrowRight />
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </Section>

      {/* SKILLS SNAPSHOT */}
      <Section className="pt-0">
        <Eyebrow>grep -r "skills" ./</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-10">Core Stack</h2>
        <div className="flex flex-wrap gap-3">
          {Object.values(skills).flat().map((s, i) => (
            <Reveal key={s.name} delay={i * 0.03} direction="up" className="inline-block">
              <span className="font-mono text-sm px-4 py-2 rounded-full glass hover:border-accent/50 hover:text-accent transition-colors">
                {s.name}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="font-display text-3xl font-semibold text-gradient">{value}</p>
      <p className="font-mono text-xs text-muted mt-1">{label}</p>
    </div>
  );
}
