import React from 'react';
import Wrapper from '../../../layouts/Wrapper';
import Button from '../../../ui/Button';

const CallToAction = () => {
  return (
    <Wrapper size='small'>
      <div className='h-max bg-gray-8 rounded-4xl lg:py-16 py-5.5  px-5.5 flex flex-col items-center mt-32'>
        <h1 className='lg:text-custom-3xl text-custom-2xl font-semibold text-center'>
          Ready to talk about your project?
        </h1>
        <p className='text-center mx-auto text-custom-md text-white opacity-80 xl:w-4/5'>
          Are you looking for a consultancy partnership to address your blockchain challenges? We’d love to hear from
          you. Let’s build something <br />
          amazing together.
        </p>
        <div className='text-black pt-16'>
          <Button size='large'>Schedule a call</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CallToAction;
