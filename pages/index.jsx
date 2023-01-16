import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "../components/layouts/Footer";
import CallToAction from "../components/sections/homepage/CallToAction";
import Projects from "../components/sections/homepage/Project";
import Hero from "../components/sections/homepage/Hero";
import Services from "../components/sections/homepage/Services";
import "aos/dist/aos.css";
import Aos from "aos";
import Header from "../components/layouts/Header";
import { About, Jobs, Partners } from "../components/sections";
const Home = () => {
  useEffect(() => {
    (() => {
      if (window?.document) {
        Aos.init({
          duration: 800,
          offset: 200
        });
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Unit A</title>
        <meta
          name="description"
          content="Ape Unit was founded in 2010 in Berlin. Since 2017 Ape Unit's
                  Unit 8 has been working in the field of blockchain technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Jobs />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
};
export default Home;
