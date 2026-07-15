import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import { Section, SectionHeading } from "../components/Section";
import Reveal from "../components/Reveal";
import { profile } from "../data/portfolio";

// Replace with your own EmailJS credentials: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (EMAILJS_SERVICE_ID.startsWith("YOUR_")) {
        throw new Error("EmailJS not configured yet");
      }
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <Section className="pt-12 sm:pt-20 pb-10">
        <SectionHeading
          eyebrow="mailto ./contact"
          title="Let's Connect"
          subtitle="Have an opportunity, project, or just want to talk tech? My inbox is open."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal direction="left">
            <div className="glass rounded-2xl p-8 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <ContactRow icon={<FiMail />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <ContactRow icon={<FiMapPin />} label="Location" value={profile.location} />
                <ContactRow icon={<FiGithub />} label="GitHub" value="@vardhacr" href={profile.github} />
                <ContactRow icon={<FiLinkedin />} label="LinkedIn" value="Bonumuddula Jyothi Vardhan" href={profile.linkedin}/>
              </div>
              <p className="font-mono text-xs text-muted mt-10 pt-6 border-t border-border">
                // usually responds within 24–48 hours
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-5">
              <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
              <div>
                <label className="font-mono text-xs text-muted mb-2 block" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-bg-soft/60 border border-border rounded-lg px-4 py-3 text-sm focus-visible:border-accent transition-colors resize-none"
                  placeholder="Tell me a bit about what you have in mind..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 font-mono text-sm px-5 py-3 rounded-lg text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-60"
              >
                {status === "sending" ? "sending..." : <>Send Message <FiSend /></>}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-accent"><FiCheck /> Message sent — thank you!</p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-amber-400">
                  <FiAlertCircle /> EmailJS isn't configured yet — email me directly at {profile.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="w-11 h-11 grid place-items-center rounded-lg bg-white/5 text-accent">{icon}</span>
      <div>
        <p className="font-mono text-xs text-muted">{label}</p>
        <p className="text-sm mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="font-mono text-xs text-muted mb-2 block" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-bg-soft/60 border border-border rounded-lg px-4 py-3 text-sm focus-visible:border-accent transition-colors"
        placeholder={label === "Name" ? "Your name" : "you@example.com"}
      />
    </div>
  );
}
