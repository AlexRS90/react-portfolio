import React from 'react';
import projects from '../assets/projects.json';

const Projects = () => {
  console.table(projects);
  return (
    <section className="m-5 lg:m-36">
      <ul className="flex flex-col gap-10">
        {
          projects.map((project) => (
            <li className="flex flex-col rounded-xl bg-stone-50 p-5 gap-4 lg:flex-row lg:odd:flex-row-reverse" key={project.id}>
              <div>
                <img
                  src={project.picture}
                  alt={`${project.title} project`}
                  className="border border-primary rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-3xl">{project.title}</p>
                <p>{project.description}</p>
                <ul className="flex justify-between flex-wrap md:w-80">
                  {
                    project.tecnhologies.map((tec) => (
                      <li key="1" className="bg-second p-2 rounded-md text-primary">
                        <p>{tec}</p>
                      </li>
                    ))
                  }
                </ul>
                <button
                  type="button"
                  className="border border-primary w-32 rounded-md p-2 text-center text-primary hover:bg-primary hover:text-stone-50 active:bg-focus active:border-focus"
                >
                  See Project
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Projects;
