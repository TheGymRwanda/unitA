import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
const Button = ({ children, link = '#', target, size = 'normal' }) => {
  const buttonStyle = classNames('bg-white text-black -tracking-stretch flex w-fit px-8.75 lg:px-12 gap-6 group', {
    'py-4 text-xl sm:text-3xl leading-7.5 sm:leading-9.5 rounded-5xl': size === 'large',
    'py-3 leading-9 text-lg sm:text-2xl rounded-4xl': size !== 'large',
  });
  return (
    <Link href={link} target={target}>
      <div className={buttonStyle}>
        {children}
        <Image
          src={'/icons/arrow.svg'}
          width={28}
          height={28}
          alt='arrow'
          className='group-hover:rotate-45 transition-transform leading-6.75 lg:leading-7.5 -tracking-stretch'
        />
      </div>
    </Link>
  );
};

export default Button;
