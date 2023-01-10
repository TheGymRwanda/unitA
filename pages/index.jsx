import Head from "next/head";
import React from "react";
import Wrapper from "../components/layouts/Wrapper"
import Projects from "../components/sections/homepage/Project";
const Home = () => {
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
        <Projects/> 
    </>
  );
};
export default Home;
