import React from 'react';

const Footer = () => {
  const pumas = 'Concacaf Champion';
  return (
    <footer className="bg-primary rounded-tl-extraLarge p-20">
      <div className="bg-footer-pattern bg-no-repeat h-screen">
        <p>{pumas}</p>
      </div>
    </footer>
  );
};

export default Footer;
