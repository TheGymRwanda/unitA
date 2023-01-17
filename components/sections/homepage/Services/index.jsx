import { SERVICES } from "../../../../data";
import Wrapper from "../../../layouts/Wrapper";
import Title from "../../../ui/Title";
import ServiceItem from "./ServiceItem";
const Services = () => {
  return (
    <div className="px-6.5 md:px-0 mt-17.5 md:mt-15 xl:mt-16">
      <Wrapper>
        <Title>What we do</Title>
        <div className="pt-16.25 md:pt-20.5 xl:pt-31.25 flex flex-col gap-32">
          {SERVICES.map((element, key) =>
            key % 2 !== 0
              ? { ...element, reverse: true, fadeDir: "right" }
              : { ...element, fadeDir: "left" }
          ).map((service, index) => (
            <ServiceItem {...service} key={index} index={index} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Services;
