import React from "react";

const Title = ({ children }) => {
  return (
    <div className="relative w-fit text-white">
      <h2 className="text-custom-3xl lg:text-custom-4xl leading-normal font-medium">
        {children}
      </h2>
      <div className="h-6.25 w-full absolute  left-1 bottom-4.12 bg-gray-7 -z-10"></div>
    </div>
  );
};

export default Title;
