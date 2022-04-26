import React from 'react';
import projects from '../assets/projects.json';

const Projects = () => {
  console.log(projects);
  return (
    <section>
      <img src={projects[3].picture} alt="twitter" />
    </section>
  );
};

export default Projects;
