import { PROJECTS } from "/data";
import { Wrapper } from "/components/layouts";
import { Heading } from "/components/ui";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Wrapper size="small">
      <div className="pb-4 mt-9.75 md:mt-12 xl:w-93/100 mx-auto xl:mt-30.25 md:pb-8.25">
        <Heading>Our Work</Heading>
      </div>
      <div>
        {PROJECTS.map((element, index) => (
          <ProjectCard {...element} key={index} />
        ))}
      </div>
    </Wrapper>
  );
};
export default Project;
