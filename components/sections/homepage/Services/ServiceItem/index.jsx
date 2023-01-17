import Image from 'next/image';
import classNames from 'classnames';
const ServiceItem = ({ title, description, reverse, index, fadeDir, icon, width, height }) => {
  const serviceStyle = classNames('flex flex-col-reverse gap-8 justify-between leading-normal', {
    'lg:flex-row-reverse': reverse,
    'lg:flex-row': !reverse,
  });
  const imageStyle = classNames(
    'object-contain w-69.5 m-0 h-44.75 md:w-74.5 md:h-44.75 md:m-auto xl:h-auto xl:w-auto',
    { 'md:h-28.75': index === 2 }
  );
  return (
    <div className={serviceStyle}>
      <div className='flex flex-col gap-4 md:w-2/3 xl:max-w-1/2'>
        <div className='text-9.5 lg:text-11.75 lg:-tracking-stretch text-white '>{title}</div>
        <div className='text-2xl text-secondary-400'>{description}</div>
      </div>
      <Image src={icon} alt='icon' width={width} height={height} className={imageStyle} data-aos={`fade-${fadeDir}`} />
    </div>
  );
};

export default ServiceItem;
