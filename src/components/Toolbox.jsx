import "./Toolbox.css";

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

export default function Toolbox() {
  return (
    <section className="toolbox" id="toolbox">
      <div className="toolbox__container">
        <span className="toolbox__eyebrow">Toolbox</span>
        <div className="toolbox__grid">
          {toolboxCategories.map((cat, catIdx) => (
            <div
              className={`toolbox__card toolbox__card--${cat.id}`}
              key={cat.id}
            >
              <div className="toolbox__icon" aria-hidden="true">
                {cat.icon}
              </div>
              <div className="toolbox__category">{cat.label}</div>
              <div className="toolbox__pills">
                {cat.skills.map((skill, i) => (
                  <span
                    className="toolbox__pill"
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
    </section>
  );
}