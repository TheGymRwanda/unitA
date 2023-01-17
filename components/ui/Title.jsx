const Title = ({ children }) => {
  return (
    <div className="relative w-fit text-white">
      <h2 className="text-14.75 lg:text-18.25 leading-none font-semibold -tracking-stretch">
        {children}
      </h2>
      <div className="h-6.25 w-full absolute  left-1 -bottom-3 bg-primary-700 -z-10"></div>
    </div>
  );
};

export default Title;
