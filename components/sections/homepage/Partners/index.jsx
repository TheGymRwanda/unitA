import Image from 'next/image';
import { PARTNERS } from '/data';
import Wrapper from '/components/layouts/Wrapper';
import Title from '/components/ui/Title';
import Link from 'next/link';

const Partners = () => {
  return (
    <Wrapper>
      <div className='flex flex-col items-center mt-29.25'>
        <Title>Partners</Title>
        <div className='mt-3 lg:mt-5.5 text-2xl text-secondary-400 text-center leading-normal'>
          We partner with the leading brands
        </div>
        <div className='mt-3.25 xl:w-4/5 justify-center flex gap-y-4 gap-x-1.5 sm:gap-x-6 xl:gap-x-6 flex-wrap sm:justify-center'>
          {PARTNERS.map(({ image, name, width, height, link }, index) => (
            <div key={index}>
              <Link href={link} target={'_blank'}>
                <Image
                  src={image}
                  alt={name}
                  width={width}
                  height={height}
                  className='h-9 w-18.75 object-contain xl:w-auto xl:h-auto xl:min-w-min xl:object-cover'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Partners;
