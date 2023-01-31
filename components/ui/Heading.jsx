const Heading = ({ children }) => {
  return (
    <div className='relative w-fit text-white'>
      <h2 className='text-6.5 md:text-11.75 leading-9.5 md:leading-14.75 font-normal -tracking-stretcher'>
        {children}
      </h2>
      <div className='h-6.25 w-full absolute left-1 -bottom-3 bg-primary-700 -z-10'></div>
    </div>
  );
};

export default Heading;
