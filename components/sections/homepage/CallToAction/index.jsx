import React from 'react';
import Wrapper from '../../../layouts/Wrapper';
import Button from '../../../ui/Button';

const CallToAction = () => {
  return (
    <Wrapper size='small'>
      <div className='hidden lg:block w-full h-max bg-gray-8 rounded-4xl py-16 text-center mt-32'>
        <h1 className='text-custom-3xl'>Ready to talk about your project?</h1>
        <p className='text-center mx-auto text-custom-md mt-5 text-gray-1'>
          Are you looking for a consultancy partnership to address your blockchain challenges? <br /> We’d love to hear
          from you. Let’s build something <br /> amazing together.
        </p>
        <div className='text-black w-full flex justify-center pt-16 px-5'>
          <Button>Schedule a call</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CallToAction;
