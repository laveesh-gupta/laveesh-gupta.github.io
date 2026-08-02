import { useState, useEffect, useRef, useCallback } from "react";
import "./About.css";

/* ─── Data ─── */
const stats = [
  { display: "4+", label: "Years Experience" },
  { display: "5+", label: "Projects Shipped" },
];

const ticker = [
  { icon: "⚡", text: "Currently building in React" },
  { icon: "🎵", text: "Listening to lo-fi" },
  { icon: "📍", text: "Based in India" },
  { icon: "☕", text: "Fuelled by coffee" },
  { icon: "🚀", text: "Open to new projects" },
];

const funFacts = [
  { emoji: "🌙", text: "I do my best work after midnight — the quieter the better." },
  { emoji: "🐛", text: "I name my git branches after Star Wars characters." },
  { emoji: "🎮", text: "I've rage-quit more games than I've shipped — still counts as shipping." },
];

/* ─── Hook: IntersectionObserver ─── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.2, ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

/* ─── 3. Live ticker (flip animation) ─── */
function LiveTicker() {
  const [index, setIndex]   = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ticker.length);
        setFlipping(false);
      }, 300);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const item = ticker[index];

  return (
    <div className="about__ticker" aria-live="polite" aria-label="Current status">
      <span className="about__ticker-dot" aria-hidden="true" />
      <span className={`about__ticker-content${flipping ? " about__ticker-content--flip" : ""}`}>
        <span className="about__ticker-icon" aria-hidden="true">{item.icon}</span>
        <span className="about__ticker-text">{item.text}</span>
      </span>
    </div>
  );
}

/* ─── Emoji reactions ─── */
const REACTION_EMOJIS = ["😎", "❤️", "🔥", "🚀"];

function EmojiReactions() {
  const reducedMotion = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  const burst = useCallback((emoji) => {
    if (reducedMotion) return;
    const count = 8;

    for (let i = 0; i < count; i++) {
      const el = document.createElement("span");
      el.textContent = emoji;
      el.className = "about__burst-particle";

      // Spread across full screen width, start from bottom
      const startX = 8 + Math.random() * 84; // 8–92vw
      const sway   = (Math.random() - 0.5) * 120; // gentle horizontal drift
      const size   = 4 + Math.random() * 3;       // 4–7rem
      const duration = 1800 + Math.random() * 800; // 1.8–2.6s
      const delay    = Math.random() * 600;
      const rotation = (Math.random() - 0.5) * 30; // slight tilt

      el.style.cssText = `
        left: ${startX}vw;
        top: 100vh;
        font-size: ${size}rem;
        --sway: ${sway.toFixed(1)}px;
        --rot: ${rotation.toFixed(1)}deg;
        animation-duration: ${duration}ms;
        animation-delay: ${delay}ms;
      `;

      document.body.appendChild(el);
      el.addEventListener("animationend", () => el.remove(), { once: true });
    }
  }, [reducedMotion]);

  return (
    <div className="about__reactions" aria-label="React to my portfolio">
      {REACTION_EMOJIS.map((emoji) => (
        <button
          key={emoji}
          className="about__reaction-btn"
          onClick={() => burst(emoji)}
          aria-label={`Send ${emoji}`}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}

/* ─── 5. Fun facts toggle ─── */
function FunFacts() {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) setHeight(bodyRef.current.scrollHeight);
  }, [open]);

  return (
    <div className="about__facts">
      <button
        className="about__facts-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{open ? "− Less about me" : "+ More about me"}</span>
        <span className="about__facts-toggle-hint">fun facts inside</span>
      </button>

      <div
        className="about__facts-body"
        style={{ maxHeight: open ? bodyRef.current?.scrollHeight + "px" : "0px" }}
        aria-hidden={!open}
      >
        <div ref={bodyRef} className="about__facts-inner">
          {funFacts.map((f) => (
            <div className="about__fact" key={f.emoji}>
              <span className="about__fact-emoji" aria-hidden="true">{f.emoji}</span>
              <span className="about__fact-text">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main About ─── */
export default function About() {
  const [sectionRef, inView] = useInView();

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__container">

        {/* Top row: glass card + orb */}
        <div className="about__top">
          <div className={`about__glass${inView ? " about__glass--in" : ""}`}>
            <span className="about__eyebrow">About Me</span>
            <h2 className="about__title">
              Frontend Developer crafting interfaces that feel effortless
            </h2>
            <p className="about__text">
              I build responsive, accessible, and performant web applications
              with React. My focus is on clean architecture, thoughtful motion,
              and interfaces that get out of the user's way — letting the
              product speak for itself.
            </p>
            <p className="about__text">
              I care about the details: the easing curve on a hover state, the
              padding that makes a layout breathe, the code that stays readable
              six months from now.
            </p>

            {/* Stats */}
            <div className="about__stats">
              {stats.map((s) => (
                <div className="about__stat" key={s.label}>
                  <span className="about__stat-value">{s.display}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* 5. Fun facts */}
            <FunFacts />
          </div>

          {/* Emoji reactions + ticker */}
          <div className="about__right-col">
            <EmojiReactions />
            <LiveTicker />
          </div>
        </div>

      </div>
    </section>
  );
}