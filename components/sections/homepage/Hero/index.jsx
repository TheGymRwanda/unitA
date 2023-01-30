import Image from "next/image";
import { Wrapper } from "/components/layouts";

const Hero = () => {
  return (
    <Wrapper size="small">
      <header className="text-white mt-9.25">
        <h1 className="text-11.75 font-semibold -tracking-stretch leading-normal">
          Unit A
        </h1>
      </header>
      <div className="xl:px-20">
        <div className="text-white relative mt-31.25 xl:mt-41.75 leading-normal -tracking-stretch">
          <Image
            src="/images/shape-2.webp"
            alt="circle shape"
            width={103.4}
            height={103.4}
            className="absolute -top-10 md:-top-28 right-0 h-10.2 w-10.2 md:w-25.85 md:h-25.85"
          />

          <div className="font-semibold text-9.5 sm:text-14.75 sm:-tracking-stretch inline-block">
            A
            <span className="relative ml-2.5 bg-hero-underline-1 bg-no-repeat bg-bottom pb-2 bg-contain">
              joint-force b
            </span>
            etween African & European developers & organizations working in
            <div className="bg-transparent">
              <span className="bg-hero-underline-2 bg-no-repeat bg-under pb-2 sm:pl-0.5 bg-contain sm:bg-auto">
                blockchain technology
              </span>
            </div>
          </div>

          <Image
            src="/images/shape-1.webp"
            alt="polgon shape"
            width={83}
            height={79}
            className="absolute bottom-5 -left-2 xl:-left-14 md:-bottom-5 block h-9 w-9 md:w-auto md:h-auto"
          />
          <div className="flex items-center justify-center">
            <Image
              src="/icons/arrow-up-line.svg"
              className="mt-30.25 md:mt-32.75 xl:mt-29.25 "
              height={42}
              width={44}
              alt="arrow down"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
