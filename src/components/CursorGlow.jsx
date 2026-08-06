import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse).
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);

    const onMove = (e) => {
      if (!ref.current) return;
      // Smoothly follow the cursor with a trailing feel.
      ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

      // Detect if hovering an interactive element -> intensify the glow.
      const el = e.target;
      const interactive = el && el.closest
        ? el.closest("a, button, [role='button'], input, textarea, select, .glow-border, .glass")
        : null;
      ref.current.style.opacity = interactive ? "1" : "0.55";
    };
    const onEnter = () => {
      if (ref.current) ref.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (ref.current) ref.current.style.opacity = "0";
    };

    if (mq.matches) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseenter", onEnter);
      document.addEventListener("mouseleave", onLeave);
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return <div ref={ref} className="cursor-glow-indicator" aria-hidden="true" />;
}
