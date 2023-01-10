import React from 'react'
import services from '../../../../data/services'
import Wrapper from '../../../layouts/Wrapper'
import Title from '../../../ui/Title'
import ServiceItem from './ServiceItem/indes'

const Services = () => {
  return (
    <div className="mt-16">
        <Wrapper>
            <Title>What we do</Title>
            <div className="mt-26.75 flex flex-col gap-32">
                {
                    services.map((ser, i) => i % 2 !== 0 ? {...ser, reverse: true}: ser).map((service, index) =>(
                        <ServiceItem {...service} key={index} />
                    ))
                }
            </div>
        </Wrapper>
    </div>
  )
}

export default Services