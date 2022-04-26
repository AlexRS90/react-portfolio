import React from 'react';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import medium from '../assets/medium.svg';
import linkedin from '../assets/linkedin.svg';
import angelist from '../assets/angelist.svg';

const SocialMedia = () => (
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
);

export default SocialMedia;
