import React from 'react';
import Wrapper from '../../../layouts/Wrapper';
import Button from '../../../ui/Button';
import Title from '../../../ui/Title';

const About = () => {
  return (
    <Wrapper>
      <div className='mt-23.75 md:mt-24.5 xl:mt-45.75'>
        <Title>Who we are</Title>
        <div className='lg:mt-13.25 pb-5 md:py-8.75 xl:py-4.5 text-2xl font-normal text-secondary-400 md:text-custom-xl md:font-medium leading-25 -tracking-stretch mt-5'>
          <p className='md:pb-6'>
            Ape Unit was founded in 2010 in Berlin. Since 2017 Ape Unit{"'"}s Unit 8 has been working in the field of
            blockchain technology. We are working together with web3 protocols such as Ethereum, Tezos, Celo, NEAR,
            Algorand, and Cosmos, but also for large international clients such as VW and small African Startups like
            BitLipa.
          </p>
          <p>
            With the new Unit A, we want to shift our focus to African developers and create joint European and African
            organizations to work in blockchain technology.
          </p>
        </div>
        <Button link='mailto:u2467@apeunit.com'>Contact us</Button>
      </div>
    </Wrapper>
  );
};

export default About;
