import Head from "next/head";
import Title from "../components/ui/Title";
import React from "react";
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
      <div className="ml-3 z-50">
        <Title>Who we are</Title>
        <Title>Our work</Title>
      </div>
    </>
  );
};
export default Home;
