import { PROJECT } from "/data";
import { Wrapper } from "/components/layouts";
import { Heading } from "/components/ui";
import Projectcard from "./Projectcard";

const Project = () => {
  return (
    <Wrapper>
      <div className="pb-4 mt-9.75 md:mt-12 xl:mt-30.25 md:pb-8.25">
        <Heading>Our Work</Heading>
      </div>
      <div className="lg:px-11.5 xl:px-0 xl:-mx-20">
        {PROJECT.map((element, index) => (
          <Projectcard {...element} key={index} />
        ))}
      </div>
    </Wrapper>
  );
};
export default Project;
