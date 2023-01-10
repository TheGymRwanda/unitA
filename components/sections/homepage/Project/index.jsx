import Image from "next/image";
import React from "react";
import { projects } from "../../../../data";
import Button from "../../../ui/Button";
import Projectcard from "./Projectcard";

function Index() {
  return (
      <div>
        {projects.map((element, index) => (
          <Projectcard {...element} key={index} />
        ))}
      </div>
  );
}
export default Index;
