import Image from 'next/image'
import React from 'react'

const ServiceItem = ({title, description, iconSrc, reverse}) => {
  return (
    <div className={`flex flex-col-reverse gap-8 justify-between leading-normal ${reverse ? 'lg:flex-row-reverse': 'lg:flex-row'}`}>
        <div className="flex flex-col gap-4 lg:max-w-1/2">
            <div className="text-custom-xl lg:text-custom-2xl text-white">{title}</div>
            <div className="text-2xl text-secondary">{description}</div>
        </div>
        <Image src={iconSrc} alt="icon" width={264} height={244} className="object-contain" />
    </div>
  )
}

export default ServiceItem