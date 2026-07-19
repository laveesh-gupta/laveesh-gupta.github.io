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
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 11.5A7 7 0 0 1 8.5 3.5a7 7 0 1 0 8 8z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="3.5" fill="currentColor" />
                <g
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <line x1="10" y1="1.5" x2="10" y2="3.5" />
                  <line x1="10" y1="16.5" x2="10" y2="18.5" />
                  <line x1="1.5" y1="10" x2="3.5" y2="10" />
                  <line x1="16.5" y1="10" x2="18.5" y2="10" />
                  <line x1="4.1" y1="4.1" x2="5.5" y2="5.5" />
                  <line x1="14.5" y1="14.5" x2="15.9" y2="15.9" />
                  <line x1="15.9" y1="4.1" x2="14.5" y2="5.5" />
                  <line x1="5.5" y1="14.5" x2="4.1" y2="15.9" />
                </g>
              </svg>
            )}
          </span>
        </span>

        {/* Opposite icon sits on the empty side of the track */}
        <span
          className="hero__theme-toggle-icon"
          aria-hidden="true"
          style={{
            [theme === "dark" ? "left" : "right"]: "auto",
            [theme === "dark" ? "right" : "left"]: "10px",
          }}
        >
          {theme === "dark" ? (
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="3.5" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="10" y1="1.5" x2="10" y2="3.5" />
                <line x1="10" y1="16.5" x2="10" y2="18.5" />
                <line x1="1.5" y1="10" x2="3.5" y2="10" />
                <line x1="16.5" y1="10" x2="18.5" y2="10" />
                <line x1="4.1" y1="4.1" x2="5.5" y2="5.5" />
                <line x1="14.5" y1="14.5" x2="15.9" y2="15.9" />
                <line x1="15.9" y1="4.1" x2="14.5" y2="5.5" />
                <line x1="5.5" y1="14.5" x2="4.1" y2="15.9" />
              </g>
            </svg>
          ) : (
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 11.5A7 7 0 0 1 8.5 3.5a7 7 0 1 0 8 8z"
                fill="currentColor"
              />
            </svg>
          )}
        </span>
      </span>
    </button>
  );
}

function Blob() {
  const [anim, setAnim] = useState("hidden");

  useEffect(() => {
    let isMounted = true;
    
    const sequence = async () => {
      if (!isMounted) return;

      // 1. Rise up from behind the card
      setAnim("rising");
      await new Promise((r) => setTimeout(r, 600));

      // 2. Fall down to the front of the card
      setAnim("front");
      await new Promise((r) => setTimeout(r, 500));

      // 3. Lean in and look down at the text
      setAnim("looking");
      await new Promise((r) => setTimeout(r, 1400));

      // 4. Look up and smile big
      setAnim("smiling");
      await new Promise((r) => setTimeout(r, 1400));

      // 5. Jump back up above the card
      setAnim("retreating");
      await new Promise((r) => setTimeout(r, 500));

      // 6. Drop back down behind the card
      setAnim("hidden");
    };

    const interval = setInterval(sequence, 8000);
    setTimeout(sequence, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const isLooking = anim === "looking";
  const isSmiling = anim === "smiling";

  // Base positions (adjusted slightly inward so bigger eyes don't clip the edge)
  let leftEyeX = 24;
  let rightEyeX = 34;
  let eyeY = 16;
  let pupilXOffset = 0;
  let pupilYOffset = 0;

  // Mouth path (must maintain the exact same M... Q... command structure)
  let mouthPath = "M26 22 Q29 23 32 22"; // Neutral/Small

  if (isLooking) {
    // Look down and to the RIGHT (at the card content)
    leftEyeX = 27; 
    rightEyeX = 37; 
    eyeY = 22; 
    pupilXOffset = 2; // Look right
    pupilYOffset = 1.5;  // Look down
    mouthPath = "M29 27 Q32 30 35 27"; // Shifted right and down
  } else if (isSmiling) {
    // Big happy smile, slightly squinched eyes
    eyeY = 15;
    pupilXOffset = 0.5;
    pupilYOffset = -0.5;
    mouthPath = "M22 23 Q29 35 36 23"; // Wide smile
  }

  // Calculate coordinates for pupils dynamically
  const leftPupilX = leftEyeX + pupilXOffset;
  const leftPupilY = eyeY + pupilYOffset;
  const rightPupilX = rightEyeX + pupilXOffset;
  const rightPupilY = eyeY + pupilYOffset;

  return (
    <div className={`hero__blob hero__blob--${anim}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" className="hero__blob-svg">
        
        {/* Flowy animated blob body - redesigned to be perfectly round at the top and bottom */}
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

        {/* Bigger Eyes */}
        <circle cx={leftEyeX} cy={eyeY} r="4" fill="white" className="hero__blob-eye" />
        <circle cx={rightEyeX} cy={eyeY} r="4" fill="white" className="hero__blob-eye" />

        {/* Bigger Pupils */}
        <circle cx={leftPupilX} cy={leftPupilY} r="2.2" fill="#1d1d1f" className="hero__blob-eye" />
        <circle cx={rightPupilX} cy={rightPupilY} r="2.2" fill="#1d1d1f" className="hero__blob-eye" />
        
        {/* Slightly larger Sparkles (Catchlights) */}
        <circle cx={leftPupilX - 0.7} cy={leftPupilY - 0.7} r="0.8" fill="white" className="hero__blob-eye" />
        <circle cx={rightPupilX - 0.7} cy={rightPupilY - 0.7} r="0.8" fill="white" className="hero__blob-eye" />

        {/* Morphing Mouth */}
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
        <Blob />
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
