import "./About.css";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "HTML",
  "CSS3",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "Docker",
  "Git",
  "Microservices",
  "REST APIs",
  "GoCD (CI/CD)",
  "MongoDB",
  "Figma",
  "Vite",
  "Web Security",
  "Accessibility",
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "5+", label: "Projects Shipped" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__glass about__intro">
          <span className="about__eyebrow">About Me</span>
          <h2 className="about__title">
            Frontend Developer crafting interfaces that feel effortless
          </h2>
          <p className="about__text">
            I build responsive, accessible, and performant web applications with
            React. My focus is on clean architecture, thoughtful motion, and
            interfaces that get out of the user's way — letting the product
            speak for itself.
          </p>
          <p className="about__text">
            I care about the details: the easing curve on a hover state, the
            padding that makes a layout breathe, the code that stays readable
            six months from now.
          </p>

          <div className="about__stats">
            {stats.map((s) => (
              <div className="about__stat" key={s.label}>
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__glass about__skills">
          <span className="about__eyebrow">Toolbox</span>
          <div className="about__skill-grid">
            {skills.map((skill) => (
              <span className="about__skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
