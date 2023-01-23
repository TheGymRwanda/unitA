import Image from "next/image";
import Link from "next/link";
import { PARTNERS } from "/data";
import { Wrapper } from "/components/layouts";
import { Heading } from "/components/ui";

const Partners = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center mt-29.25">
        <Heading>Partners</Heading>
        <div className="mt-3 lg:mt-5.5 text-2xl text-secondary-400 text-center leading-normal">
          We partner with the leading brands
        </div>
        <div className="mt-3.25 md:w-4/5 lg:w-4/5 justify-center flex gap-y-4 gap-x-6 xl:gap-x-6 flex-wrap">
          {PARTNERS.map(({ image, name, width, height, link }, index) => (
            <div key={index}>
              <Link href={link} target="_blank">
                <Image
                  src={image}
                  alt={name}
                  width={width}
                  height={height}
                  className="xl:object-cover"
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
