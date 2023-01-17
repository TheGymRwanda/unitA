import { Footer } from "../components/layouts";
import {
  Hero,
  About,
  Project,
  Jobs,
  Services,
  Partners,
  CallToAction,
} from "../components/sections";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Services />
      <Jobs />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
};
export default Home;
