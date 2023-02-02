import React, { useEffect } from "react";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import "/styles/globals.css";
import font from "/config/font";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    (() => {
      if (window?.document) {
        Aos.init({
          duration: 800,
          offset: 200,
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
          content="Unit A is a joint-force between African & European developers & organizations working in blockchain technology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
