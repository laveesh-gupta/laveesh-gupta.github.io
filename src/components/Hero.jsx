import { useState, useEffect, useRef, useCallback } from "react";
import "./Hero.css";

const ROLES = [
  { label: "Frontend Developer", color: "#8ab4ff" },
  { label: "React Developer",    color: "#a78bfa" },
  { label: "UI Engineer",        color: "#34d399" },
  { label: "Creative Coder",     color: "#fb923c" },
];

const ROLE_LIGHT_COLORS = {
  "#8ab4ff": "#2f6fed",
  "#a78bfa": "#7c3aed",
  "#34d399": "#059669",
  "#fb923c": "#ea580c",
};

const BLOB_QUIPS = [
  "nice portfolio ✨",
  "hire me? 👀",
  "boo! 👻",
  "let's build! 🚀",
  "i like it here 🥹",
];

const TYPE_SPEED   = 90;
const DELETE_SPEED = 45;
const HOLD_TIME    = 1400;

/* ─── Theme Switcher ─── */
function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      className="hero__theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="hero__theme-toggle-track">
        <span className="hero__theme-toggle-thumb">
          <span className="hero__theme-toggle-icon" aria-hidden="true">
            {theme === "dark" ? (
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 11.5A7 7 0 0 1 8.5 3.5a7 7 0 1 0 8 8z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="3.5" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="10" y1="1.5"  x2="10" y2="3.5"  />
                  <line x1="10" y1="16.5" x2="10" y2="18.5" />
                  <line x1="1.5"  y1="10" x2="3.5"  y2="10" />
                  <line x1="16.5" y1="10" x2="18.5" y2="10" />
                  <line x1="4.1"  y1="4.1"  x2="5.5"  y2="5.5"  />
                  <line x1="14.5" y1="14.5" x2="15.9" y2="15.9" />
                  <line x1="15.9" y1="4.1"  x2="14.5" y2="5.5"  />
                  <line x1="5.5"  y1="14.5" x2="4.1"  y2="15.9" />
                </g>
              </svg>
            )}
          </span>
        </span>

        <span
          className="hero__theme-toggle-icon"
          aria-hidden="true"
          style={{
            [theme === "dark" ? "left" : "right"]: "auto",
            [theme === "dark" ? "right" : "left"]: "10px",
          }}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="3.5" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="10" y1="1.5"  x2="10" y2="3.5"  />
                <line x1="10" y1="16.5" x2="10" y2="18.5" />
                <line x1="1.5"  y1="10" x2="3.5"  y2="10" />
                <line x1="16.5" y1="10" x2="18.5" y2="10" />
                <line x1="4.1"  y1="4.1"  x2="5.5"  y2="5.5"  />
                <line x1="14.5" y1="14.5" x2="15.9" y2="15.9" />
                <line x1="15.9" y1="4.1"  x2="14.5" y2="5.5"  />
                <line x1="5.5"  y1="14.5" x2="4.1"  y2="15.9" />
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 11.5A7 7 0 0 1 8.5 3.5a7 7 0 1 0 8 8z" fill="currentColor" />
            </svg>
          )}
        </span>
      </span>
    </button>
  );
}

/* ─── Blob ─── */
function Blob() {
  const [anim, setAnim]       = useState("hidden");
  const [quip, setQuip]       = useState("");
  const [showQuip, setShowQuip] = useState(false);
  const reducedMotion = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  useEffect(() => {
    if (reducedMotion) {
      setAnim("smiling");
      return;
    }

    let isMounted = true;
    let quipIndex = 0;

    const sequence = async () => {
      if (!isMounted) return;

      setAnim("rising");
      await new Promise((r) => setTimeout(r, 600));

      setAnim("front");
      await new Promise((r) => setTimeout(r, 500));

      setAnim("looking");
      await new Promise((r) => setTimeout(r, 2000));

      // Show speech bubble quip
      setQuip(BLOB_QUIPS[quipIndex % BLOB_QUIPS.length]);
      quipIndex++;
      setShowQuip(true);

      setAnim("smiling");
      await new Promise((r) => setTimeout(r, 1600));

      setShowQuip(false);
      await new Promise((r) => setTimeout(r, 400));

      setAnim("retreating");
      await new Promise((r) => setTimeout(r, 500));

      setAnim("hidden");
    };

    const interval = setInterval(sequence, 10000);
    setTimeout(sequence, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [reducedMotion]);

  const isLooking = anim === "looking";
  const isSmiling = anim === "smiling";

  let leftEyeX = 24, rightEyeX = 34, eyeY = 15;
  let pupilXOffset = 0, pupilYOffset = 0;
  let mouthPath = "M26 25 Q29 26 32 25";

  if (isLooking) {
    leftEyeX = 27; rightEyeX = 37; eyeY = 20;
    pupilXOffset = 2; pupilYOffset = 1.5;
    mouthPath = "M29 30 Q32 33 35 30";
  } else if (isSmiling) {
    eyeY = 15; pupilXOffset = 0.5; pupilYOffset = -0.5;
    mouthPath = "M22 25 Q29 37 36 25";
  }

  const leftPupilX  = leftEyeX  + pupilXOffset;
  const leftPupilY  = eyeY      + pupilYOffset;
  const rightPupilX = rightEyeX + pupilXOffset;
  const rightPupilY = eyeY      + pupilYOffset;

  return (
    <div className={`hero__blob hero__blob--${anim}`} aria-hidden="true">
      {/* Speech bubble */}
      <div className={`hero__blob-bubble${showQuip ? " hero__blob-bubble--visible" : ""}`}>
        {quip}
      </div>

      <svg viewBox="0 0 48 48" fill="none" className="hero__blob-svg">
        <path fill="var(--hero-eyebrow)" opacity="0.95">
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="
              M 8 24 C 8 15, 15 8, 24 8 C 33 8, 40 15, 40 24 C 40 33, 33 40, 24 40 C 15 40, 8 33, 8 24 Z;
              M 6 24 C 6 14, 16 6, 26 6 C 36 6, 42 14, 42 24 C 42 34, 34 42, 24 42 C 14 42, 6 34, 6 24 Z;
              M 10 24 C 10 14, 14 6, 24 6 C 34 6, 38 14, 38 24 C 38 34, 32 42, 22 42 C 12 42, 10 34, 10 24 Z;
              M 8 24 C 8 15, 15 8, 24 8 C 33 8, 40 15, 40 24 C 40 33, 33 40, 24 40 C 15 40, 8 33, 8 24 Z
            "
          />
        </path>

        <circle cx={leftEyeX}  cy={eyeY} r="4"   fill="white" className="hero__blob-eye" />
        <circle cx={rightEyeX} cy={eyeY} r="4"   fill="white" className="hero__blob-eye" />
        <circle cx={leftPupilX}  cy={leftPupilY}  r="2.2" fill="#1d1d1f" className="hero__blob-eye" />
        <circle cx={rightPupilX} cy={rightPupilY} r="2.2" fill="#1d1d1f" className="hero__blob-eye" />
        <circle cx={leftPupilX  - 0.7} cy={leftPupilY  - 0.7} r="0.8" fill="white" className="hero__blob-eye" />
        <circle cx={rightPupilX - 0.7} cy={rightPupilY - 0.7} r="0.8" fill="white" className="hero__blob-eye" />

        <path
          d={mouthPath}
          className="hero__blob-mouth"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

/* ─── Scroll Arrow ─── */
function ScrollArrow() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="hero__scroll-arrow"
      aria-hidden="true"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero__scroll-arrow-icon"
      >
        <path
          d="M12 5v14M5 12l7 7 7-7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ─── Hero ─── */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText]           = useState("");
  const [phase, setPhase]         = useState("typing");
  const [mounted, setMounted]     = useState(false);
  const timeoutRef   = useRef(null);
  const glassRef     = useRef(null);
  const tiltFrameRef = useRef(null);

  /* #1 — Staggered entrance */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  /* #4 — Role color on CSS variable */
  const currentRole = ROLES[roleIndex];
  useEffect(() => {
    const root = document.documentElement;
    const isDark = root.getAttribute("data-theme") !== "light";
    const color  = isDark ? currentRole.color : (ROLE_LIGHT_COLORS[currentRole.color] ?? currentRole.color);
    root.style.setProperty("--hero-eyebrow-dynamic", color);
  }, [roleIndex]);

  /* Card tilt on mousemove */
  const handleMouseMove = useCallback((e) => {
    if (!glassRef.current) return;
    cancelAnimationFrame(tiltFrameRef.current);
    tiltFrameRef.current = requestAnimationFrame(() => {
      const rect = glassRef.current.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width  / 2);
      const dy   = (e.clientY - cy) / (rect.height / 2);
      const rotX = (-dy * 5).toFixed(2);
      const rotY = ( dx * 5).toFixed(2);
      glassRef.current.style.transform =
        `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(tiltFrameRef.current);
    if (glassRef.current) {
      glassRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  /* Typewriter */
  useEffect(() => {
    const current = currentRole.label;
    if (phase === "typing") {
      if (text.length < current.length) {
        timeoutRef.current = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("holding"), HOLD_TIME);
      }
    } else if (phase === "holding") {
      timeoutRef.current = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeoutRef.current = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [text, phase, roleIndex, currentRole.label]);

  const scrollToContact  = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="hero">
      <ThemeSwitcher />

      <div className="hero__container">
        <Blob />

        <div
          className={`hero__glass${mounted ? " hero__glass--in" : ""}`}
          ref={glassRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* #1 — Staggered children */}
          <span className="hero__eyebrow hero__anim hero__anim--1">Hi there! 👋🏻</span>
          <p   className="hero__text    hero__anim hero__anim--2">I am</p>
          <h1  className="hero__name    hero__anim hero__anim--3">Laveesh Gupta</h1>
          <p   className="hero__role    hero__anim hero__anim--4">
            a{" "}
            <span
              className="hero__role-text"
              style={{ color: "var(--hero-eyebrow-dynamic, var(--hero-eyebrow))", transition: "color 0.45s ease" }}
            >
              {text}
            </span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </p>
          <p className="hero__text hero__anim hero__anim--5">
            I design and build clean, performant web experiences with a focus on
            detail, motion, and usability.
          </p>

          <div className="hero__actions hero__anim hero__anim--6">
            <button className="hero__btn hero__btn--primary" onClick={scrollToProjects}>
              View Projects
            </button>
            <button className="hero__btn hero__btn--secondary" onClick={scrollToContact}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <ScrollArrow />
    </section>
  );
}