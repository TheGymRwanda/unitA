const Heading = ({ children }) => {
  return (
    <div className="relative w-fit text-white">
      <h2 className="text-6.5 md:text-11.75 leading-9.75 md:leading-14.75 font-normal -tracking-stretcher">
        {children}
      </h2>
    </div>
  );
};

export default Heading;
