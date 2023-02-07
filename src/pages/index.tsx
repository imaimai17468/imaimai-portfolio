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
        <div className="border-2 m-5 rounded-md border-gray-200 w-fit h-fit p-5 shadow-lg shadow-gray-200">
          <p className="text-3xl">Replacing Now... </p>
          <p className="text-3xl">
            Please watch my{" "}
            <a
              className="font-bold text-orange-300"
              href="https://www.wantedly.com/id/imaimai17468"
              target="_blank"
              rel="noopener noreferrer"
            >
              wantedly page
            </a>
          </p>
        </div>
        <Playlist />
      </main>
    </>
  );
}
