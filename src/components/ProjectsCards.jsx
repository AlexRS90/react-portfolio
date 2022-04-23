import React from 'react';
import projects from '../assets/projects.json';

const Projects = () => {
  console.log(projects);
  return (
    <section>
      <img src={require(`../assets/${projects[1].picture}`)} alt="twitter" />
    </section>
  );
};

export default Projects;
