import React from "react";
import Button from "../../../ui/Button";
import unit8 from "/public/assets/images/unit8.webp";
import lab3 from "/public/assets/images/lab3.webp"
import Image from "next/image";
function Projectcard({ title, description, link, imageName }) {
  const getImage = () => {
    if(imageName === "unit8"){
      return unit8;
    }
    return lab3
  };
  return (
    <div className="bg-gray-8  p-4 space-y-8  lg:p-9 xl:pr-0  xl:grid grid-cols-2 gap-x-5.57 place-items-center  xl:pl-12.75 xl:pt-32.75 xl:pb-26.5 rounded-4xl  mt-6 xl:mt-8">
      <div className="lg:max-w-141.75">
        <div className="pb-6">
          <h1 className="text-custom-xl lg:text-custom-3xl font-semibold leading-22.12 text-white ">
            {title}
          </h1>
          <p className="text-custon-md lg:text-custom-lg text-secondary-1 font-normal">
            {description}
          </p>
        </div>
        <Button>Visit</Button>
      </div>
      <Image
        src={getImage()}
        alt="unit8"
        className="w-full xl:h-102 object-left-top object-cover right-0"
      />
    </div>
  );
}
export default Projectcard;
