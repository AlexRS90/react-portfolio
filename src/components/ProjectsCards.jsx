import React from 'react';
import projects from '../assets/projects.json';

const Projects = () => (
  <>
    <section className="m-5 lg:m-36" id="portfolio">
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
                <div className="flex gap-2 md:gap-4 lg:gap-10">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-primary w-32 rounded-md p-2 text-center text-primary hover:bg-primary hover:text-stone-50 active:bg-focus active:border-focus"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-primary w-32 rounded-md p-2 text-center text-primary hover:bg-primary hover:text-stone-50 active:bg-focus active:border-focus"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  </>
);

export default Projects;
