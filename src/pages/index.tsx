import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>imaimai Portfolio</title>
        <meta name="description" content="いまいまいのポートフォリオ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
