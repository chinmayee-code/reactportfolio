import React from 'react';
import ProjectItem from "../components/ProjectItem";

import"../styles/Project.css";
import { ProjectsList } from "../helpers/ProjectsList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personel Projects</h1>
      <div className="projectList">
        {ProjectsList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;