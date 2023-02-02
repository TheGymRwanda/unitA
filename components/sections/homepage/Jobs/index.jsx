import Image from "next/image";
import { JOBS } from "/data";
import { Wrapper } from "/components/layouts";
import { Heading } from "/components/ui";

const Jobs = () => {
  return (
    <Wrapper>
      <div className="mt-10.5 md:mt-24.1 xl:mt-52.75">
        <Heading>Join Our Team</Heading>
        <div className="flex flex-col border-t-2 border-primary-800 mt-6 md:mt-10">
          {JOBS.map((job, index) => (
            <div
              className="flex justify-between py-6 border-b-2 border-primary-800 cursor-pointer group"
              key={index}
            >
              <div className="text-5.75 md:text-9.5 font-normal text-white leading-9 md:leading-12.25 -tracking-stretch">
                {job}
              </div>
              <Image
                src={"/icons/job-arrow.svg"}
                width={34.86}
                height={34.73}
                alt="arrow"
                className="group-hover:rotate-45 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Jobs;
