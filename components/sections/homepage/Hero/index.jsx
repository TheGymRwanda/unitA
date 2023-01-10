import Image from "next/image";
import React from "react";
import Wrapper from "../../../layouts/Wrapper";
const Index = () => {
  return (
    <Wrapper>
      <div className="text-white relative  mt-31.25 xl:mt-11.75">
        <Image
          src="/assets/images/shape-2.webp"
          alt=""
          width={103.4}
          height={103.4}
          className="absolute right-6 top-0 hidden xl:block"
        />
        <div className="font-semibold custom-xl sm:text-custom-3xl  xl:mt-26.75 inline-block">
          A
          <span className="relative ml-4.25">
            joint-force b
            <Image
              src="/assets/icons/small-line.svg"
              alt=""
              className="absolute left-0 w-11.4/12 -bottom-1 md:-bottom-3"
              width={314}
              height={13.59}
            />
          </span>
          etween African & European developers & organizations working in
          <span className="relative  ml-4.25">
            blockchain technology
            <Image
              src="/assets/icons/large-line.svg"
              alt=""
              className="absolute  w-11.8/12 -left-1 -bottom-1 md:-bottom-3 "
              width={589}
              height={14}
            />
          </span>
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
            className="mt-30.25 md:mt-32.75 xl:mt-27.75 "
            height={42}
            width={44}
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Index;
