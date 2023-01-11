import React from "react";
import Button from "../../../ui/Button";
import Image from "next/image";
function Projectcard({ title, description, link, image }) {
  return (
    <div className="bg-gray-8 p-4 space-y-8 lg:p-8 xl:pr-0 xl:grid grid-cols-2 gap-x-5.57 place-items-center xl:pl-12.75 xl:pt-32.75 xl:pb-26.5 rounded-4xl mb-6 xl:mb-8">
      <div className="md:max-w-141.75 ">
        <div className="pb-6">
          <h1 className="text-custom-xl leading-14.25 lg:text-custom-3xl font-medium lg:font-semibold lg:leading-22.12 text-white ">
            {title}
          </h1>
          <p className="text-custom-md -tracking-stretch leading-9 lg:text-custom-lg lg:leading-11 text-secondary font-normal">
            {description}
          </p>
        </div>
        <Button target="_blank" link={link}>
          Visit
        </Button>
      </div>
      <Image
        src={image}
        alt="unit8"
        className="w-full xl:h-102 object-left-top object-cover right-0 rounded-lg"
      />
    </div>
  );
}
export default Projectcard;