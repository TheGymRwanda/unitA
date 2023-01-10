
import React from "react";
import { projects } from "../../../../data";
import Wrapper from "../../../layouts/Wrapper";
import Projectcard from "./Projectcard";
function Index() {
  return (
    <Wrapper size="small">
      {projects.map((element, index) => (
        <Projectcard {...element} key={index} />
      ))}
    </Wrapper>
  );
}
export default Index;
