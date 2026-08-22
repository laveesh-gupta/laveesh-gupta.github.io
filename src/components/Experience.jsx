import "./Experience.css";

const toolboxCategories = [
  {
    id: "backend",
    icon: "⚙️",
    label: "Backend & Dev",
    skills: ["Node.js", "Docker", "MongoDB", "REST APIs", "Microservices", "GoCD"],
  },
  {
    id: "frontend",
    icon: "🎨",
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "CSS3", "HTML"],
  },
  {
    id: "tools",
    icon: "🛠️",
    label: "Tools & Core",
    skills: ["Git", "Figma", "Web Security", "Accessibility", "Vite", "Redux"],
  },
];

const experiences = [
  {
    role: "Developer",
    company: "IDFC FIRST Bank",
    period: "2022 – Present",
    desc: "Led frontend development of scalable React SPAs, cutting onboarding time by 40% and boosting performance by 35% for 10K+ daily users.",
  },
  {
    role: "Tech Intern",
    company: "Unisys",
    period: "2021",
    desc: "Migrated the legacy C++ MCP System Log Analyzer to a modern architecture, achieving platform independence and seamless cross-functional integration.",
  },
  {
    role: "Machine Learning Research Intern",
    company: "Samsung SRIB",
    period: "2020",
    desc: "Enhanced Bixby's recommendation models with collaborative filtering and location-based logic, boosting user engagement and retention by 15%.",
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">

        {/* Experience card - centered */}
        <div className="experience__glass experience__timeline-container">
          <span className="experience__eyebrow">Experience</span>
          <div className="experience__timeline">
            {experiences.map((exp) => (
              <div className="experience__entry" key={exp.role + exp.company}>
                <div className="experience__entry-header">
                  <h3 className="experience__role">{exp.role}</h3>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <p className="experience__company">{exp.company}</p>
                <p className="experience__desc">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Toolbox - full width below */}
        <div className="experience__bento-container">
          <span className="experience__eyebrow experience__bento-eyebrow">Toolbox</span>
          <div className="experience__bento-grid">
            {toolboxCategories.map((cat, catIdx) => (
              <div
                className={`experience__bento-card experience__bento-card--${cat.id}`}
                key={cat.id}
              >
                <div className="experience__bento-icon" aria-hidden="true">{cat.icon}</div>
                <div className="experience__bento-cat">{cat.label}</div>
                <div className="experience__bento-pills">
                  {cat.skills.map((skill, i) => (
                    <span
                      className="experience__bento-pill"
                      key={skill}
                      style={{ animationDelay: `${catIdx * 0.1 + i * 0.06}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}