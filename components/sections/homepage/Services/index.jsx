import { SERVICES } from "/data";
import { Wrapper } from "/components/layouts";
import { Heading } from "/components/ui";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <Wrapper>
      <div className="px-6.5 md:px-0 mt-17.5 md:mt-15 xl:mt-16">
        <Heading>What we do</Heading>
        <div className="pt-16.25 md:pt-20.5 xl:pt-31.25 flex flex-col gap-32">
          {SERVICES.map((element, key) =>
            key % 2 !== 0
              ? { ...element, reverse: true, fadeDir: "right" }
              : { ...element, fadeDir: "left" }
          ).map((service, index) => (
            <ServiceItem {...service} key={index} index={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
