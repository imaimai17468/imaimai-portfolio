import Head from "next/head";

import { Playlist } from "@/components/screen";
import { Drag } from "@/components/Layout";
import { useWindowSize } from "@react-hook/window-size";

export default function Home() {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <>
      <Head>
        <title>imaimai Portfolio</title>
        <meta name="description" content="いまいまいのポートフォリオ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/frog_circle.png" />
      </Head>
      <main className="text-gray-200 font-mono">
        <Drag
          container={{
            left: - windowWidth / 10,
            top: - windowHeight / 10,
            right: windowWidth - windowWidth / 10,
            bottom: windowHeight - windowHeight / 10 ,
          }}
          className="collapse sm:visible"
        >
          <Playlist />
        </Drag>
      </main>
    </>
  );
}
