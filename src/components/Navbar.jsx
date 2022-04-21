import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = 'h-1 w-6 my-1 rounded-full bg-primary transition ease transform duration-300';
  return (
    <nav className="flex justify-between p-5 bg-yellow-500 items-center">
      <p className="text-primary">Alex Logo</p>
      <div>
        <button //eslint-disable-line
          className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group lg:hidden"
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
        <ul className="justify-between w-80 hidden text-primary lg:flex">
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
