import { PROJECT } from "/data";
import { Wrapper } from "/components/layouts";
import { Heading } from "/components/ui";
import Projectcard from "./Projectcard";

const Project = () => {
  return (
    <Wrapper>
      <div className="pb-2.5 mt-11.25 md:mt-12 xl:mt-36 md:pb-6 xl:pb-28.75">
        <Heading>Our Work</Heading>
      </div>
      <div className="mt-6.25 lg:px-11.5 1.1xl:px-0 md:mt-0 xl:-mx-20">
        {PROJECT.map((element, index) => (
          <Projectcard {...element} key={index} />
        ))}
      </div>
    </Wrapper>
  );
};
export default Project;
