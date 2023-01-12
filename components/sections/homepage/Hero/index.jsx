import Image from "next/image";
import React from "react";
import Wrapper from "../../../layouts/Wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <div className="text-white relative mt-31.25 xl:mt-41.75  leading-normal -tracking-stretch">
        <Image
          src="/assets/images/shape-2.webp"
          alt=""
          width={103.4}
          height={103.4}
          className="absolute -top-28 right-0 hidden xl:block"
        />

        <div className="font-semibold text-custom-xl sm:text-custom-3xl  inline-block">
          A
          <span className="relative ml-4.25 bg-hero-underline-1 bg-no-repeat bg-bottom pb-2 bg-contain">
            joint-force b
          </span>
          etween African & European developers & organizations working in{" "}
          <div className="">
            <span className="bg-hero-underline-2 bg-no-repeat bg-under pb-2 sm:pl-0.5 bg-contain sm:bg-auto">
              blockchain technology
            </span>
          </div>
        </div>

        <Image
          src="/assets/images/shape-1.webp"
          alt=""
          width={83}
          height={79}
          className="absolute -left-14 -bottom-5 hidden xl:block"
        />
        <div className="flex items-center justify-center">
          <Image
            src="/assets/icons/arrow-up-line.svg"
            className="mt-30.25 md:mt-32.75 xl:mt-29.25 "
            height={42}
            width={44}
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
