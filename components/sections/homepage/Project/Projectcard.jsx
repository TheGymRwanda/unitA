import Image from "next/image";
import { Button } from "/components/ui";
const Projectcard = ({ title, description, link, image, width, height }) => {
  return (
    <div className="bg-primary-800 p-4 xl:h-170 w-full space-y-8 lg:p-8 xl:pr-0 xl:grid grid-cols-2 gap-x-5.57 place-items-center xl:pl-12.75 xl:pt-32.75 xl:pb-26.5 rounded-4xl first-of-type:mb-6 xl:mb-8">
      <div className="bg-transparent">
        <div className="pb-6">
          <h1 className="text-5.75 leading-9 md:text-9.5 -tracking-stretch font-normal md:leading-12.25 text-white ">
            {title}
          </h1>
          <p className="text-xl -tracking-stretch leading-7.5 md:text-7.5 md:leading-9.5 text-secondary-400 font-normal">
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
        width={width}
        height={height}
        className="w-full xl:h-102 object-left-top object-cover right-0 rounded-lg"
      />
    </div>
  );
};
export default Projectcard;
