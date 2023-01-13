import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import arrow from '/public/assets/icons/arrow.svg';

const Button = ({ children, link = '#', target, size = 'normal' }) => {
  return (
    <Link href={link} target={target}>
      <div
        className={`bg-white text-black -tracking-stretch flex w-fit px-[35px] lg:px-12 gap-6 group ${
          size === 'large' ? 'py-4 text-3xl leading-11 rounded-5xl' : 'py-3 leading-9 text-custom-md rounded-4xl'
        }`}
      >
        {children}
        <Image src={arrow} alt='arrow' className='group-hover:rotate-45 transition-transform' />
      </div>
    </Link>
  );
};

export default Button;
