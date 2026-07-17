import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A React + TypeScript admin dashboard with real-time analytics, order management, and inventory tracking.",
    tags: ["React", "TypeScript", "Redux"],
    link: "#",
  },
  {
    title: "Recipe Finder App",
    description:
      "A responsive app that lets users search recipes by ingredients, save favorites, and plan weekly meals.",
    tags: ["React", "Tailwind CSS", "REST API"],
    link: "#",
  },
  {
    title: "Task Management Tool",
    description:
      "A drag-and-drop kanban board with team collaboration, deadlines, and notification support.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Portfolio Builder",
    description:
      "A no-code tool that lets creatives assemble and publish a personal portfolio site in minutes.",
    tags: ["React", "Vite", "Firebase"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__ambient" aria-hidden="true">
        <span className="projects__orb projects__orb--one" />
        <span className="projects__orb projects__orb--two" />
      </div>

      <div className="projects__container">
        <div className="projects__header">
          <span className="projects__eyebrow">My Work</span>
          <h2 className="projects__title">Selected Projects</h2>
          <p className="projects__subtitle">
            A few things I've built, from concept to shipped product.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <a
              className="projects__card"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
            >
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>
              <div className="projects__card-tags">
                {project.tags.map((tag) => (
                  <span className="projects__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="projects__card-link">View Project →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
