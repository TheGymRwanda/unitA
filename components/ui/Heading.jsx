const Heading = ({ children }) => {
  return (
    <div className="relative w-fit text-white">
      <h2 className="text-14.75 lg:text-18.25 leading-none font-semibold -tracking-stretch">
        {children}
      </h2>
    </div>
  );
};

export default Heading;
