import { useState, useEffect, useRef } from "react";
import "./Hero.css";

const ROLES = [
  "Frontend Developer",
  "React Developer",
  "UI Engineer",
  "Creative Coder",
];

const TYPE_SPEED = 90;
const DELETE_SPEED = 45;
const HOLD_TIME = 1400;

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
        {/* Circle thumb — carries the active-theme icon */}
        <span className="hero__theme-toggle-thumb">
          <span className="hero__theme-toggle-icon" aria-hidden="true">
            {theme === "dark" ? (
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 11.5A7 7 0 0 1 8.5 3.5a7 7 0 1 0 8 8z" fill="currentColor"/>
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="3.5" fill="currentColor"/>
                <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="10" y1="1.5" x2="10" y2="3.5"/>
                  <line x1="10" y1="16.5" x2="10" y2="18.5"/>
                  <line x1="1.5" y1="10" x2="3.5" y2="10"/>
                  <line x1="16.5" y1="10" x2="18.5" y2="10"/>
                  <line x1="4.1" y1="4.1" x2="5.5" y2="5.5"/>
                  <line x1="14.5" y1="14.5" x2="15.9" y2="15.9"/>
                  <line x1="15.9" y1="4.1" x2="14.5" y2="5.5"/>
                  <line x1="5.5" y1="14.5" x2="4.1" y2="15.9"/>
                </g>
              </svg>
            )}
          </span>
        </span>

        {/* Opposite icon sits on the empty side of the track */}
        <span
          className="hero__theme-toggle-icon"
          aria-hidden="true"
          style={{ [theme === "dark" ? "left" : "right"]: "auto", [theme === "dark" ? "right" : "left"]: "10px" }}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="3.5" fill="currentColor"/>
              <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="10" y1="1.5" x2="10" y2="3.5"/>
                <line x1="10" y1="16.5" x2="10" y2="18.5"/>
                <line x1="1.5" y1="10" x2="3.5" y2="10"/>
                <line x1="16.5" y1="10" x2="18.5" y2="10"/>
                <line x1="4.1" y1="4.1" x2="5.5" y2="5.5"/>
                <line x1="14.5" y1="14.5" x2="15.9" y2="15.9"/>
                <line x1="15.9" y1="4.1" x2="14.5" y2="5.5"/>
                <line x1="5.5" y1="14.5" x2="4.1" y2="15.9"/>
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 11.5A7 7 0 0 1 8.5 3.5a7 7 0 1 0 8 8z" fill="currentColor"/>
            </svg>
          )}
        </span>
      </span>
    </button>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | holding | deleting
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("holding"), HOLD_TIME);
      }
    } else if (phase === "holding") {
      timeoutRef.current = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, DELETE_SPEED);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [text, phase, roleIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <ThemeSwitcher />

      <div className="hero__ambient" aria-hidden="true">
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
      </div>

      <div className="hero__container">
        <div className="hero__glass">
          <span className="hero__eyebrow">Hi there! 👋🏻</span>
          <p className="hero__text">I am</p>
          <h1 className="hero__name">Laveesh Gupta</h1>
          <p className="hero__role">
            a <span className="hero__role-text">{text}</span>
            <span className="hero__cursor" aria-hidden="true">
              |
            </span>
          </p>
          <p className="hero__text">
            I design and build clean, performant web experiences with a focus on
            detail, motion, and usability.
          </p>

          <div className="hero__actions">
            <button
              className="hero__btn hero__btn--primary"
              onClick={scrollToProjects}
            >
              View Projects
            </button>
            <button
              className="hero__btn hero__btn--secondary"
              onClick={scrollToContact}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}