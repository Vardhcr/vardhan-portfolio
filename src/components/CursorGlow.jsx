import { useEffect, useRef, useState } from "react";

let rippleId = 0;

export default function CursorGlow() {
  const glowRef = useRef(null);
  const ripplesRef = useRef([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse).
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);

    const spawnRipple = (x, y) => {
      const el = document.createElement("span");
      el.className = "cursor-ripple";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      document.body.appendChild(el);
      ripplesRef.current.push(el);
      // Remove after animation completes to keep the DOM clean.
      setTimeout(() => {
        el.remove();
        ripplesRef.current = ripplesRef.current.filter((r) => r !== el);
      }, 1400);
    };

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        const el = e.target;
        const interactive = el && el.closest
          ? el.closest("a, button, [role='button'], input, textarea, select, .glow-border, .glass")
          : null;
        glowRef.current.style.opacity = interactive ? "1" : "0.5";
      }
      // Spawn a ripple periodically (throttled by time) to emulate water waves.
      const now = Date.now();
      if (!spawnRipple.last || now - spawnRipple.last > 90) {
        spawnRipple.last = now;
        spawnRipple(x, y);
      }
      rippleId += 1;
    };
    const onEnter = () => {
      if (glowRef.current) glowRef.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
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
      ripplesRef.current.forEach((r) => r.remove());
      ripplesRef.current = [];
    };
  }, []);

  if (!enabled) return null;

  return <div ref={glowRef} className="cursor-glow-indicator" aria-hidden="true" />;
}
