import { useState } from "react";
import projects from "../../data/projects.json";
import "./Projects.css";

function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="projects-section">
      <div className="hero-card">

        <div className="hero-content">
          <span>{activeProject.category}</span>

          <h2>{activeProject.title}</h2>

          <p>{activeProject.description}</p>

          <a href={activeProject.link}>
            View More ↗
          </a>
        </div>

        <div className="hero-image">
          <img
            src={activeProject.image}
            alt={activeProject.title}
          />
        </div>

      </div>

      <div className="project-selector">

        {projects.map((project) => (
          <a
            key={project.id}
            className={`project-thumb ${
              activeProject.id === project.id
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveProject(project)
            }
          >
            <img
              src={project.image}
              alt={project.title}
            />
            <span>{project.title}</span>
          </a>
        ))}

      </div>
    </section>
  );
}

export default Projects;