import React, { useState } from 'react';

const TechStack = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFrame, setIsOpenFrame] = useState(false);
  const languages = ['JavaScript', 'Ruby', 'HTML/CSS', 'PostgreSQL'];
  const frameworks = ['React', 'Ruby on Rails', 'Tailwind', 'Bootstrap', 'RSpec', 'CapyBara'];
  // const skills = ['Git/GitHub', 'Terminal', 'Mobile First', 'OOP', 'TDD'];
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full mt-10 p-5 flex justify-between border-b-2 border-background text-xl"
      >
        Languages
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isOpen ? 'rotate-90' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <ul className={`${isOpen ? 'block' : 'hidden'}`}>
        {
          languages.map((language) => (
            <li
              className="w-9/12 bg-background m-2 p-8"
              key="1"
            >
              {language}
            </li>
          ))
        }
      </ul>
      <button
        type="button"
        onClick={() => setIsOpenFrame(!isOpenFrame)}
        className="w-full mt-10 p-5 flex justify-between border-b-2 border-background text-xl"
      >
        Frameworks
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isOpenFrame ? 'rotate-90' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <ul className={`${isOpenFrame ? 'block' : 'hidden'}`}>
        {
          frameworks.map((frame) => (
            <li
              className="w-9/12 bg-background m-2 p-8"
              key="1"
            >
              {frame}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TechStack;
