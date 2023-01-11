
import React from "react";
import { projects } from "../../../../data";
import Wrapper from "../../../layouts/Wrapper";
import Projectcard from "./Projectcard";
import Title from "../../../ui/Title"
function Index() {
  return (
    <>
      <Wrapper>
        <div className="pb-2.5 mt-11.25 md:mt-12 xl:mt-34.5 md:pb-6 xl:pb-24">
          <Title>Our Work</Title>
        </div>
      </Wrapper>
      <Wrapper size="small">
        {projects.map((element, index) => (
          <Projectcard {...element} key={element.id} />
        ))}
      </Wrapper>
    </>
  );
}
export default Index;
