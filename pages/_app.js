import React, { useEffect } from "react";
import Head from "next/head";
import localFont from "@next/font/local";
import Aos from "aos";
import "aos/dist/aos.css";
import "/styles/globals.css";
const neufileGrotesk = localFont({
  src: "../public/fonts/NeufileGrotesk-Regular.woff2",
});

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
          content="Ape Unit was founded in 2010 in Berlin. Since 2017 Ape Unit's
                  Unit 8 has been working in the field of blockchain technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={neufileGrotesk.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
