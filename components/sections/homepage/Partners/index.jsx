import Image from "next/image";
import Link from "next/link";
import { PARTNERS } from "/data";
import { Wrapper } from "/components/layouts";
import { Heading } from "/components/ui";

const Partners = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center mt-12 md:mt-33">
        <Heading>Partners</Heading>
        <div className="text-lg md:text-2xl text-secondary-400 text-center md:leading-7.5">
          We partner with the leading brands
        </div>
        <div className="mt-6 lg:mt-5 md:w-7/10 items-center justify-center flex gap-y-4 gap-x-6 flex-wrap">
          {PARTNERS.map(({ image, name, width, height, link }, index) => (
            <div key={index}>
              <Link href={link} target="_blank">
                <Image
                  src={image}
                  alt={name}
                  width={width}
                  height={height}
                  className="w-fit md:w-20 md:h-10 object-contain xl:w-28 xl:h-12 xl:object-scale-down"
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
