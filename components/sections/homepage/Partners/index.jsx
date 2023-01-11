import Image from 'next/image'
import React from 'react'
import { partners } from '../../../../data'
import Wrapper from '../../../layouts/Wrapper'
import Title from '../../../ui/Title'

const Partners = () => {
  return (
    <div className='mt-29.25'>
        <Wrapper>
            <div className="flex flex-col items-center">
                <Title>Partners</Title>
                <div className="text-custom-md text-secondary text-center leading-normal">We partner with the leading brands</div>
                <div className="mt-[13px] flex gap-y-6 gap-x-4.5 sm:gap-x-8 flex-wrap justify-center">
                    {
                        partners.map((partner, index) =>(
                            <div key={index}>
                                <Image src={partner.image} alt={partner.name} className="w-full object-cover" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Partners