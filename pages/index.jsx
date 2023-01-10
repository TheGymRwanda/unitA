import Head from "next/head";
import React from "react";
import Services from "../components/sections/homepage/Services";
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
      <h1 className="text-center text-9xl underline font-semibold text-white">
        Unit A
      </h1>
      <Services />
    </>
  );
};
export default Home;
