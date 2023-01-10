import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import arrow from '/public/assets/icons/arrow.svg'

const Button = ({children, link="#"}) => {
  return (
    <Link href={link}>
        <div className="bg-white text-custom-md leading-9 flex w-max px-12 py-3 rounded-4xl gap-6 group">
            {children}
            <Image src={arrow} alt='arrow' className='group-hover:rotate-45 transition-transform' />
        </div>
    </Link>
  )
}

export default Button