import React from 'react';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import medium from '../assets/medium.svg';
import linkedin from '../assets/linkedin.svg';
import angelist from '../assets/angelist.svg';

const MainView = () => (
  <main
    className="h-screen bg-hero-pattern bg-cover"
  >
    <section className="flex flex-col py-44 px-6 gap-5 lg:p-72">
      <h1 className="text-6xl">
        I&apos;m Alejandro
        <br />
        Glad to see you!!
      </h1>
      <p>
        I’m a software developer! I can help you build a product,
        feature or website Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        don’t hestiate to contact me.
      </p>
      <p className="text-primary">Let&apos;s connect</p>
      <ul className="flex justify-between sm:w-52">
        <li>
          <a href="https://twitter.com/AlejandroRBenji" target="_blank" rel="noopener noreferrer">
            <img aria-label="Twitter link" src={twitter} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexrs90/" target="_blank" rel="noopener noreferrer">
            <img aria-label="LinkedIn link" src={linkedin} />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@AlexRS90" target="_blank" rel="noopener noreferrer">
            <img aria-label="Medium link" src={medium} />
          </a>
        </li>
        <li>
          <a href="https://github.com/AlexRS90" target="_blank" rel="noopener noreferrer">
            <img aria-label="Github link" src={github} />
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/alejandro-ramos-7" target="_blank" rel="noopener noreferrer">
            <img aria-label="Angelist link" src={angelist} />
          </a>
        </li>
      </ul>
    </section>
  </main>
);

export default MainView;
