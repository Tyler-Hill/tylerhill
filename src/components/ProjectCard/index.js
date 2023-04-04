import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a href={project.link}>
        <img src={project.image} alt={project.title} height="200" width="300" />
      </a>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
