import React, { useState } from 'react';

const TechStack = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-primary' : 'bg-red-500'} `}
      >
        Languages
      </button>
    </div>
  );
};

export default TechStack;
