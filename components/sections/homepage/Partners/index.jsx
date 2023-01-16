import Image from "next/image";
import React from "react";
import { partners } from "../../../../data";
import Wrapper from "../../../layouts/Wrapper";
import Title from "../../../ui/Title";

const Partners = () => {
  return (
    <div className="mt-29.25">
      <Wrapper>
        <div className="flex flex-col items-center">
          <Title>Partners</Title>
          <div className="mt-3 lg:mt-5.5 text-2xl text-secondary-400 text-center leading-normal">
            We partner with the leading brands
          </div>
          <div className="mt-3.25 xl:w-4/5 justify-center flex gap-y-4 gap-x-1.5 sm:gap-x-6 xl:gap-x-6 flex-wrap sm:justify-center">
            {partners.map((partner, index) => (
              <div key={index}>
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="h-9 w-18.75 object-contain xl:w-auto xl:h-auto xl:min-w-min xl:object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Partners;
