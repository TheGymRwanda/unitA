import { PROJECT } from "../../../../data";
import Wrapper from "../../../layouts/Wrapper";
import Projectcard from "./Projectcard";
import Title from "../../../ui/Title";
const project = () => {
  return (
    <>
      <Wrapper>
        <div className="pb-2.5 mt-11.25 md:mt-12 xl:mt-34.5 md:pb-6 xl:pb-24">
          <Title>Our Work</Title>
        </div>
      </Wrapper>
      <Wrapper size="small">
        {PROJECT.map((element, index) => (
          <Projectcard {...element} key={index} />
        ))}
      </Wrapper>
    </>
  );
};
export default project;
