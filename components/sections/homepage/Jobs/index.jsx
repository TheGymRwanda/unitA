import Image from "next/image";
import React from "react";
import { jobs } from "../../../../data";
import Wrapper from "../../../layouts/Wrapper";
import Title from "../../../ui/Title";
import arrow from "/public/assets/icons/job-arrow.svg";

const Jobs = () => {
  return (
    <div className="mt-25.5 md:mt-24.1 xl:mt-52.75">
      <Wrapper>
        <Title>Join Our Team</Title>
        <div className="flex flex-col border-t-2 border-gray-8 mt-14">
          {jobs.map((job, index) => (
            <div
              className="flex justify-between py-6 border-b-2 border-gray-8 cursor-pointer group"
              key={index}
            >
              <div className="text-custom-lg sm:text-custom-xl font-medium text-white">
                {job}
              </div>
              <Image
                src={arrow}
                alt="arrow"
                className="group-hover:rotate-45 transition-transform"
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Jobs;