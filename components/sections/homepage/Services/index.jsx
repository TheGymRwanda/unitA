import React from 'react'
import services from '../../../../data/services'
import Wrapper from '../../../layouts/Wrapper'
import Title from '../../../ui/Title'
import ServiceItem from './ServiceItem'

const Services = () => {
  return (
    <div className="mt-18.5 lg:mt-15 xl:mt-16">
        <Wrapper>
            <Title>What we do</Title>
            <div className="mt-26.75 flex flex-col gap-32">
                {
                    services.map((ser, i) => i % 2 !== 0 ? {...ser, reverse: true, fadeDir: "right"}: {...ser, fadeDir: 'left'}).map((service, index) =>(
                        <ServiceItem {...service} key={index} index={index} />
                    ))
                }
            </div>
        </Wrapper>
    </div>
  )
}

export default Services