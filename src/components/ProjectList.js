import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects }) => {
  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
