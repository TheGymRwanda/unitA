import React from 'react';

const Wrapper = ({ children, size = 'large' }) => {
  return (
    <div
      className={`xl:max-w-7xl mx-auto px-5 sm:px-11.5 ${
        size === 'large' ? 'xl:px-20 sm:px-11.5' : 'lg:px-11.5 1.1xl:px-0'
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
