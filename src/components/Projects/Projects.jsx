import { useState, useRef } from "react";
import projects from "../../data/projects.json";
import "./Projects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const swiperRef = useRef(null);

  return (
    <section className="projects-section" id="projects">
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
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={4}
          loop={true}
          speed={400}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            setActiveProject(
              projects[swiper.realIndex]
            );
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                className={`project-thumb ${
                  activeProject.id === project.id
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setActiveProject(project);

                  if (
                    swiperRef.current &&
                    swiperRef.current.autoplay
                  ) {
                    swiperRef.current.autoplay.stop();
                  }
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                />

                <span>{project.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;