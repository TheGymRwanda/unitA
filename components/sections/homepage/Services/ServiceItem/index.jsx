import Image from 'next/image';
import React from 'react';

const ServiceItem = ({ title, description, reverse, index, fadeDir, icon }) => {
  return (
    <div
      className={`flex flex-col-reverse gap-8 justify-between leading-normal ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div className='flex flex-col gap-4 md:w-2/3 xl:max-w-1/2'>
        <div className='text-9.5 lg:text-11.75 text-white'>{title}</div>
        <div className='text-2xl text-secondary-400'>{description}</div>
      </div>
      <Image
        src={icon}
        alt='icon'
        className={`object-contain w-69.5 m-0 h-44.75 md:w-74.5 md:h-44.75 ${
          index === 2 && ' md:h-28.75'
        }  md:m-auto xl:h-auto xl:w-auto`}
        data-aos={`fade-${fadeDir}`}
      />
    </div>
  );
};

export default ServiceItem;
