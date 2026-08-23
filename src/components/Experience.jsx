import "./Experience.css";

const experiences = [
  {
    role: "Developer",
    company: "IDFC FIRST Bank",
    period: "2022 – Present",
    desc: "Led frontend development of scalable React SPAs, cutting onboarding time by 40% and boosting performance by 35% for 10K+ daily users.",
    icon: (
      /* IDFC FIRST Bank — wordmark "F" lettermark approximation */
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="experience__company-icon">
        <rect width="40" height="40" rx="8" fill="#E8002D"/>
        <path d="M11 10h18v4H15v5h12v4H15v7h-4V10z" fill="#ffffff"/>
      </svg>
    ),
  },
  {
    role: "Tech Intern",
    company: "Unisys",
    period: "2021",
    desc: "Migrated the legacy C++ MCP System Log Analyzer to a modern architecture, achieving platform independence and seamless cross-functional integration.",
    icon: (
      /* Unisys — based on their blue wordmark initial U */
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="experience__company-icon">
        <rect width="40" height="40" rx="8" fill="#0047BB"/>
        <path d="M12 10h4v13c0 3.314 1.686 5 4 5s4-1.686 4-5V10h4v13c0 5.523-3.582 9-8 9s-8-3.477-8-9V10z" fill="#ffffff"/>
      </svg>
    ),
  },
  {
    role: "ML Research Intern",
    company: "Samsung SRIB",
    period: "2020",
    desc: "Enhanced Bixby's recommendation models with collaborative filtering and location-based logic, boosting user engagement and retention by 15%.",
    icon: (
      /* Samsung — blue background with S lettermark */
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="experience__company-icon">
        <rect width="40" height="40" rx="8" fill="#1428A0"/>
        <path d="M25.5 13.5c0-1.933-1.567-3.5-3.5-3.5h-5C15.015 10 13 12.015 13 14.5c0 1.7.956 3.18 2.36 3.94l5.64 2.56c.617.294 1 .917 1 1.594C22 23.57 21.105 24.5 20 24.5h-3c-1.105 0-2-.93-2-2.094V22h-3v.5C12 24.985 14.015 27 16.5 27H20c2.761 0 5-2.239 5-5 0-1.748-.944-3.275-2.36-4.06l-5.64-2.56A1.765 1.765 0 0 1 16 13.906C16 12.853 16.895 12 18 12h2c1.105 0 2 .853 2 1.906V14h3v-.5z" fill="#ffffff"/>
      </svg>
    ),
  },
];

const stats = [
  { label: "Years Active", value: "4+" },
  { label: "Roles Held", value: "3" },
  { label: "Companies", value: "3" },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">

        {/* Left Stats */}
        <div className="experience__stats">
          <span className="experience__stats-eyebrow">Overview</span>
          {stats.map((stat) => (
            <div className="experience__stat-card" key={stat.label}>
              <div className="experience__stat-value">{stat.value}</div>
              <div className="experience__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Right — eyebrow + glass card */}
        <div className="experience__timeline-section">
          <span className="experience__eyebrow">Experience</span>

          <div className="experience__glass">
            {/* Vertical line lives INSIDE the glass, alongside entries */}
            <div className="experience__timeline">
              <div className="experience__vline" aria-hidden="true" />

              {experiences.map((exp, idx) => (
                <div className="experience__entry" key={exp.role + exp.company}>

                  {/* Node on the line */}
                  <div
                    className="experience__node"
                    style={{ animationDelay: `${idx * 0.18}s` }}
                    aria-hidden="true"
                  />

                  {/* Card content */}
                  <div className="experience__entry-body">
                    <div className="experience__entry-header">
                      <div className="experience__title-row">
                        <div
                          className="experience__icon-wrap"
                          style={{ animationDelay: `${idx * 0.18 + 0.1}s` }}
                        >
                          {exp.icon}
                        </div>
                        <h3 className="experience__role">{exp.role}</h3>
                      </div>
                      <span className="experience__period">{exp.period}</span>
                    </div>
                    <p className="experience__company">{exp.company}</p>
                    <p className="experience__desc">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}