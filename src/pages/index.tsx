import Head from "next/head";

import { Playlist } from "@/components/screen";

export default function Home() {
  return (
    <>
      <Head>
        <title>imaimai Portfolio</title>
        <meta name="description" content="いまいまいのポートフォリオ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/frog_circle.png" />
      </Head>
      <main className="text-gray-200 font-mono">
        <Playlist />
      </main>
    </>
  );
}
