import Image from 'next/image'
import React from 'react'
import shape0 from '/public/assets/images/shape-1.webp';
import shape1 from '/public/assets/images/shape-2.webp';
import shape2 from '/public/assets/images/shape-3.webp';
import shape3 from '/public/assets/images/shape-4.webp';

const ServiceItem = ({title, description, reverse, index, fadeDir}) => {

  const getImgSrc = () =>{
    switch (index) {
      case 0:
        return shape0
      
      case 1:
        return shape1

      case 2:
        return shape2
    
      default:
        return shape3
    }
  };

  return (
    <div className={`flex flex-col-reverse gap-8 justify-between leading-normal ${reverse ? 'lg:flex-row-reverse': 'lg:flex-row'}`}>
        <div className="flex flex-col gap-4 lg:max-w-1/2">
            <div className="text-custom-xl lg:text-custom-2xl text-white">{title}</div>
            <div className="text-2xl text-secondary">{description}</div>
        </div>
        <Image src={getImgSrc()} alt="icon" className="object-contain" data-aos={`fade-${fadeDir}`} />
    </div>
  )
}

export default ServiceItem