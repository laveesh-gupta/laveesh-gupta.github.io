import "./Experience.css";

// Grouped skills structured for clean grid layouts
const mindMapNodes = [
  {
    id: "backend",
    label: "Backend & Dev",
    skills: ["Node.js", "Docker", "MongoDB", "REST APIs", "Microservices", "GoCD"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "CSS3", "HTML"],
  },
  {
    id: "tools",
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
        
        {/* Timeline Card - Ordered 2nd on mobile */}
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

        {/* Toolbox Mind-Map Area (Glass Card Removed) - Ordered 1st on mobile */}
        <div className="experience__toolbox-container">
          <div className="toolbox__mindmap">
            
            {/* Connecting lines — dim track + flowing bright dash */}
            <svg
              className="toolbox__connections"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Dim base tracks */}
              <line className="toolbox__track" x1="43" y1="44" x2="34" y2="33" />
              <line className="toolbox__track" x1="57" y1="44" x2="68" y2="30" />
              <line className="toolbox__track" x1="50" y1="59" x2="50" y2="71" />

              {/* Flowing dashes on top */}
              <line className="toolbox__flow" x1="43" y1="44" x2="34" y2="33" />
              <line className="toolbox__flow toolbox__flow--2" x1="57" y1="44" x2="68" y2="30" />
              <line className="toolbox__flow toolbox__flow--3" x1="50" y1="59" x2="50" y2="71" />
            </svg>

            {/* Central Orb */}
            <div className="toolbox__center-orb">
              <h3>Toolbox</h3>
            </div>

            {/* Category Blocks */}
            {mindMapNodes.map((node) => (
              <div 
                className={`toolbox__category-node toolbox__category-node--${node.id}`} 
                key={node.id}
              >
                {/* Category Anchor/Label */}
                <div className="toolbox__category-label">
                  {node.label}
                </div>

                {/* Flexible Skills Wrap */}
                <div className="toolbox__skills-flex">
                  {node.skills.map((skill) => (
                    <span className="experience__skill-pill" key={skill}>
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