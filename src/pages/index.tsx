import Head from "next/head";
import { useState, useMemo, useCallback } from "react";

import { SideNavi } from "@/components/screen";
import { Playlist } from "@/components/screen";
import { Drag } from "@/components/Layout";
import { useWindowSize } from "@react-hook/window-size";

export default function Home() {
  const [windowWidth, windowHeight] = useWindowSize();
  const [openMusic, setOpenMusic] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openWorks, setOpenWorks] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);

  const toggleMusic = useCallback(() => {
    setOpenMusic(!openMusic);
  }, [openMusic]);

  const toggleAbout = useCallback(() => {
    setOpenAbout(!openAbout);
  }, [openAbout]);

  const toggleWorks = useCallback(() => {
    setOpenWorks(!openWorks);
  }, [openWorks]);

  const toggleSkills = useCallback(() => {
    setOpenSkills(!openSkills);
  }, [openSkills]);

  const onClicks = useMemo(
    () => ({
      onMusicClick: toggleMusic,
      onAboutClick: toggleAbout,
      onWorksClick: toggleWorks,
      onSkillsClick: toggleSkills,
    }),
    [toggleAbout, toggleMusic, toggleSkills, toggleWorks]
  );

  const isOpens = useMemo(
    () => ({
      isOpenMusic: openMusic,
      isOpenAbout: openAbout,
      isOpenWorks: openWorks,
      isOpenSkills: openSkills,
    }),
    [openAbout, openMusic, openSkills, openWorks]
  );

  return (
    <>
      <Head>
        <title>imaimai Portfolio</title>
        <meta name="description" content="いまいまいのポートフォリオ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/frog_circle.png" />
      </Head>
      <main className="text-gray-200 font-mono">
        <SideNavi onClicks={onClicks} isOpens={isOpens} />
        <Drag
          container={{
            left: -windowWidth / 10,
            top: -windowHeight / 10,
            right: windowWidth - windowWidth / 10,
            bottom: windowHeight - windowHeight / 10,
          }}
          className="collapse sm:visible"
        >
          <Playlist />
        </Drag>
      </main>
    </>
  );
}
