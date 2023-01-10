import Head from "next/head";
import Button from "../components/ui/Button";
export default function Home() {
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
      <h1 className="text-center text-9xl underline font-semibold">Unit A</h1>

      {/* Displaying the button component in order to allow the QA reviewer to see the current result, this will be removed later */}
      <div className="bg-black w-full h-screen p-5 space-y-12">
        <div className="flex flex-col gap-5">
          <Button>Normal button</Button>
          <Button size="large">Large button</Button>
          <Button link="mailto:ktesialine@gmail.com" target="blank">Email button</Button>
        </div>
      </div>
    </>
  );
}
