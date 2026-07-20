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
    role: "Frontend Developer",
    company: "Acme Corp",
    period: "2022 – Present",
    desc: "Built and maintained React-based dashboards serving 50k+ users. Led the migration from CRA to Vite, cutting build times by 70%.",
  },
  {
    role: "UI Engineer",
    company: "Startup XYZ",
    period: "2020 – 2022",
    desc: "Designed and shipped a component library used across three products. Introduced accessibility audits into the CI pipeline.",
  },
  {
    role: "Junior Developer",
    company: "Agency ABC",
    period: "2019 – 2020",
    desc: "Delivered responsive marketing sites and internal tools with React and vanilla CSS. First exposure to REST API integration.",
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
            
            {/* Connecting SVG Lines mapped to the new expanded layout */}
            <svg 
              className="toolbox__connections" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Center orb connects to Backend */}
              <line x1="50" y1="50" x2="20" y2="20" />
              {/* Center orb connects to Frontend */}
              <line x1="50" y1="50" x2="80" y2="20" />
              {/* Center orb connects to Tools */}
              <line x1="50" y1="50" x2="50" y2="82" />
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