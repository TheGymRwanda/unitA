import { Wrapper } from '/components/layouts';
import { Button } from '/components/ui';

const CallToAction = () => {
  return (
    <Wrapper size='small'>
      <div className='h-max bg-primary-800 rounded-4xl lg:py-16 py-5.5 px-5.5 flex flex-col items-center mt-12 md:mt-32'>
        <h1 className='md:text-11.75 text-6.5 font-normal text-center leading-10 md:leading-14.75 -tracking-stretcher'>
          Ready to talk about your project?
        </h1>
        <p className='text-center mx-auto text-lg md:text-2xl  md:leading-7.5 text-white opacity-70 xl:w-4/5 pt-3'>
          Are you looking for a consultancy partnership to address your blockchain challenges? We’d love to hear from
          you. Let’s build something amazing together.
        </p>
        <div className='text-black pt-8 md:pt-16'>
          <Button size='large'>Schedule a call</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CallToAction;
