import { Header, Footer } from "../components/layouts";
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
      <Header />
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
