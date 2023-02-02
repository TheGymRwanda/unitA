import classNames from 'classnames';

const Wrapper = ({ children, size = 'large' }) => {
  const wrapperStyle = classNames('xl:max-w-7xl px-5 sm:px-0 sm:w-11/12 xl:px-0 mx-auto', {
    'xl:w-41/50': size === 'large',
    'xl:w-89/100': size !== 'large',
  });

  return <div className={wrapperStyle}>{children}</div>;
};

export default Wrapper;
