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
      <div className="hero__ambient" aria-hidden="true">
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
      </div>

      <div className="hero__container">
        <div className="hero__glass">
          <span className="hero__eyebrow">Welcome to my portfolio</span>
          <h1 className="hero__name">Your Name</h1>
          <p className="hero__role">
            I'm a <span className="hero__role-text">{text}</span>
            <span className="hero__cursor" aria-hidden="true">
              |
            </span>
          </p>
          <p className="hero__tagline">
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
