import React from 'react';
import projects from '../assets/projects.json';

const Projects = () => {
  console.table(projects);
  return (
    <section className="m-5 lg:m-36">
      <ul>
        <li className="flex flex-col rounded-xl bg-stone-50 p-5 gap-4">
          <img
            src={projects[0].picture}
            alt={`${projects[0].title} project`}
            className="border border-primary rounded-xl"
          />
          <p className="text-3xl">{projects[0].title}</p>
          <p>{projects[0].description}</p>
          <ul className="flex justify-between md:w-80">
            {
              projects[0].tecnhologies.map((tec) => (
                <li key="1" className="bg-second p-2 rounded-md text-primary">
                  <p>{tec}</p>
                </li>
              ))
            }
          </ul>
          <button
            type="button"
            className="border border-primary w-32 rounded-md p-2 text-center text-primary"
          >
            See Project
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
