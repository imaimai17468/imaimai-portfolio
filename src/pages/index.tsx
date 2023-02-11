import Head from "next/head";
import { useState, useMemo, useCallback } from "react";
import {
  SideNavi,
  Playlist,
  BackgroundAnimation,
  AboutWindow,
  SkillWindow,
  WorkWindow,
} from "@/components/screen";
import { Drag } from "@/components/Layout";
import { useWindowSize } from "@react-hook/window-size";
import { Modal } from "@/components/common";

export default function Home() {
  const [windowWidth, windowHeight] = useWindowSize();
  const [openMusic, setOpenMusic] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openWorks, setOpenWorks] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);

  const ModalContainer = {
    left: -windowWidth / 10,
    top: -windowHeight / 10,
    right: windowWidth - windowWidth / 10,
    bottom: windowHeight - windowHeight / 10,
  };

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
        <BackgroundAnimation />
        <Drag
          drag="y"
          container={{
            left: 0,
            top: -windowHeight / 10,
            right: 0,
            bottom: windowHeight / 3,
          }}
        >
          <SideNavi onClicks={onClicks} isOpens={isOpens} />
        </Drag>
        <Drag
          container={ModalContainer}
        >
          <Playlist setOpen={setOpenMusic} isOpen={openMusic} />
        </Drag>
        <Drag container={ModalContainer}>
          <AboutWindow
            onClose={() => {
              setOpenAbout(false);
            }}
            isOpen={openAbout}
          />
        </Drag>
        <Drag
          container={ModalContainer}
        >
          <SkillWindow
            onClose={() => {
              setOpenSkills(false);
            }}
            isOpen={openSkills}
          />
        </Drag>
        <Drag
          container={ModalContainer}
        >
          <WorkWindow
            onClose={() => {
              setOpenWorks(false);
            }}
            isOpen={openWorks}
          />
        </Drag>
      </main>
    </>
  );
}
