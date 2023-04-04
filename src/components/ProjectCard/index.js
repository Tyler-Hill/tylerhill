import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project">
      <a href={project.link}>
        <img src={project.image} alt={project.title} className="project-bg" />
      </a>
      <div className="project-text">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
