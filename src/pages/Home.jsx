import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload, FiMail, FiCloud, FiGithub as GhIcon } from "react-icons/fi";
import { SiPython, SiReact, SiFastapi } from "react-icons/si";
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

const marqueeItems = [
  ...Object.values(skills).flat().map((s) => s.name),
  "AWS", "FastAPI", "React", "Cloud", "AI", "Data Science", "Backend", "REST APIs",
];

export default function Home() {
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 400], [0, -24]);
  const portraitRotate = useTransform(scrollY, [0, 400], [0, 3]);

  // Touch tilt for the portrait (mobile "sensor" interaction)
  const pmx = useMotionValue(0.5);
  const pmy = useMotionValue(0.5);
  const portraitRotateX = useSpring(useTransform(pmy, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const portraitRotateY = useSpring(useTransform(pmx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const handlePortraitTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    pmx.set((touch.clientX - rect.left) / rect.width);
    pmy.set((touch.clientY - rect.top) / rect.height);
  };
  const resetPortraitTilt = () => {
    pmx.set(0.5);
    pmy.set(0.5);
  };

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
                <span className="text-gradient-animated">{profile.name.split(" ").slice(-2).join(" ") || profile.name}</span>
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
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent hover:-translate-y-0.5 transition-all">
                  <FiGithub size={20} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent hover:-translate-y-0.5 transition-all">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.15}>
<motion.div
              style={{ y: portraitY, rotate: portraitRotate, rotateX: portraitRotateX, rotateY: portraitRotateY, transformPerspective: 1000 }}
              className="relative mx-auto w-full max-w-sm cursor-pointer"
              onTouchMove={handlePortraitTouchMove}
              onTouchEnd={resetPortraitTilt}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                pmx.set((e.clientX - rect.left) / rect.width);
                pmy.set((e.clientY - rect.top) / rect.height);
              }}
              onMouseLeave={resetPortraitTilt}
            >
              {/* Glow behind the figure */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary/40 via-secondary/30 to-accent/30 opacity-60 blur-2xl" />

              {/* Organic standing-portrait frame */}
              <div className="relative overflow-hidden rounded-[2rem] rounded-tl-[6rem] border border-white/10 shadow-2xl shadow-black/50">
<div className="relative aspect-[4/5]">
                  <img
                    src="/profile-photo.jpeg"
                    alt={`Portrait of ${profile.name}`}
                    className="h-full w-full object-cover object-[50%_18%]"
                  />
                  {/* grounded gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg via-bg/25 to-transparent" />
                  {/* nameplate */}
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-bg/70 px-3 py-1.5 font-mono text-xs text-slate-100 backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                      Building what's next
                    </div>
                    <p className="font-display text-xl font-semibold text-white drop-shadow">{profile.firstName}</p>
                    <p className="mt-1 font-mono text-xs text-slate-300">{profile.location}</p>
                  </div>
                </div>
              </div>

              {/* floating accent chips on the frame */}
              <div className="absolute -left-4 top-10 float-anim rounded-xl glass-strong px-3 py-2 font-mono text-xs text-accent shadow-lg">
                ~ available &#10003;
              </div>
              <div className="absolute -right-3 bottom-16 float-anim rounded-xl glass-strong px-3 py-2 font-mono text-xs text-slate-200 shadow-lg" style={{ animationDelay: "1.5s" }}>
                {profile.graduation} &#183; B.Tech
              </div>
            </motion.div>
          </Reveal>
        </div>
      </Section>

      {/* TECH MARQUEE */}
      <Section className="pt-0 pb-20">
        <div className="marquee-mask marquee glass rounded-2xl py-4 overflow-hidden">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-3 px-6 font-mono text-sm text-muted whitespace-nowrap"
              >
                <span className="text-accent">▹</span> {item}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* QUICK STATS / OBJECTIVE STRIP */}
      <Section className="pt-0 pb-20">
        <Reveal>
          <div className="glass rounded-2xl p-8 sm:p-10 grid sm:grid-cols-3 gap-8 glow-border">
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
              <span className="font-mono text-sm px-4 py-2 rounded-full glass hover:border-accent/50 hover:text-accent hover:-translate-y-0.5 transition-all">
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
