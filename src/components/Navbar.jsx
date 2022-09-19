import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = 'h-1 w-6 my-1 rounded-full bg-primary transition ease transform duration-300';

  return (
    <nav className="flex justify-between px-10 items-center bg-stone-50 sticky top-0 z-50 border-solid border-b border-primary">
      <a href="#main">
        <img src="/assets/alejandro_ramos.png" alt="Home" className="w-28" />
      </a>
      <div>
        <button
          className="flex flex-col h-12 w-12 border-2 border-primary rounded justify-center items-center group lg:hidden"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100'
            }`}
          />
          <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`} />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                : 'opacity-50 group-hover:opacity-100'
            }`}
          />
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'}`}>
          <ul className="text-primary">
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <ul className="justify-between w-80 hidden text-primary lg:flex">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
