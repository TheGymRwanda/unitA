import { Wrapper } from "/components/layouts";
import { Heading, LinkButton } from "/components/ui";

const About = () => {
  return (
    <Wrapper>
      <div className="mt-9.75 md:mt-24.4 xl:mt-39.25">
        <Heading>Who we are</Heading>
        <div className="xl:mt-0 pb-5 md:py-4.5 text-5.75 font-normal text-secondary-400 md:text-9.5 leading-9 md:leading-12.25 -tracking-stretch mt-5.75 md:mt-0">
          <p className="md:pb-6">
            Ape Unit was founded in 2010 in Berlin. Since 2017 Ape Unit{"'"}s
            Unit 8 has been working in the field of blockchain technology. We
            are working together with web3 protocols such as Ethereum, Tezos,
            Celo, NEAR, Algorand, and Cosmos, but also for large international
            clients such as VW and small African Startups like BitLipa.
          </p>
          <p>
            With the new Unit A, we want to shift our focus to African
            developers and create joint European and African organizations to
            work in blockchain technology.
          </p>
        </div>
        <LinkButton link="mailto:u2467@apeunit.com" target="_blank">
          Contact us
        </LinkButton>
      </div>
    </Wrapper>
  );
};

export default About;
