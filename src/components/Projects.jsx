import "./Projects.css";

const projects = [
  {
    title: "MedScan",
    description:
      "Architected a Hyperledger Fabric blockchain based drug supply chain platform using Node.js, MongoDB, and React.js, featuring real-time QR code verification and JWT authentication to prevent counterfeiting.",
    tags: ["React", "Node.js", "Blockchain"],
    link: "#",
  },
  {
    title: "EdgeVision",
    description:
      "Engineered an edge-computing facial recognition system using TensorFlow.js and Flask with AES-256 encryption, delivering secure, low-latency, and anti-spoofing identity verification without cloud dependency.",
    tags: ["React", "Python", "TensorFlow.js", "Flask"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
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
