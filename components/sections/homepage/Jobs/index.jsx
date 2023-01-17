import Image from "next/image";
import { JOBS } from "/data";
import { Wrapper } from "/components/layouts";
import { Title } from "/components/ui";

const Jobs = () => {
  return (
    <Wrapper>
      <div className='mt-25.5 md:mt-24.1 xl:mt-52.75'>
        <Title>Join Our Team</Title>
        <div className="flex flex-col border-t-2 border-primary-800 mt-14">
          {JOBS.map((job, index) => (
            <div
              className="flex justify-between py-6 border-b-2 border-primary-800 cursor-pointer group"
              key={index}
            >
              <div className="text-7.5 sm:text-9.5 font-medium text-white">
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
