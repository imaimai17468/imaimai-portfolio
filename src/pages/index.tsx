import { useWindowWidth } from '@react-hook/window-size'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { Drag, MainLayout } from '@/components/layout'
import { SideNavi, Playlist, BackgroundAnimation, AboutWindow, SkillWindow, WorkWindow } from '@/components/screen'
import { useVariants, spring } from '@/hooks/useVariants'
import { cursorState } from '@/store/cursor'

export default function Home() {
  const [openMusic, setOpenMusic] = useState(false)
  const [openAbout, setOpenAbout] = useState(false)
  const [openWorks, setOpenWorks] = useState(false)
  const [openSkills, setOpenSkills] = useState(false)
  const cursor = useRecoilValue(cursorState)
  const ref = useRef(null)
  const variants = useVariants(ref)
  const width = useWindowWidth()

  useEffect(() => {
    if (width > 768) {
      setOpenAbout(true)
    }
  }, [width])

  const toggleMusic = useCallback(() => {
    setOpenMusic(!openMusic)
  }, [openMusic])

  const toggleAbout = useCallback(() => {
    setOpenAbout(!openAbout)
  }, [openAbout])

  const toggleWorks = useCallback(() => {
    setOpenWorks(!openWorks)
  }, [openWorks])

  const toggleSkills = useCallback(() => {
    setOpenSkills(!openSkills)
  }, [openSkills])

  const onClicks = useMemo(
    () => ({
      onMusicClick: toggleMusic,
      onAboutClick: toggleAbout,
      onWorksClick: toggleWorks,
      onSkillsClick: toggleSkills,
    }),
    [toggleAbout, toggleMusic, toggleSkills, toggleWorks],
  )

  const isOpens = useMemo(
    () => ({
      isOpenMusic: openMusic,
      isOpenAbout: openAbout,
      isOpenWorks: openWorks,
      isOpenSkills: openSkills,
    }),
    [openAbout, openMusic, openSkills, openWorks],
  )

  return (
    <>
      <Head>
        <title>imaimai Portfolio</title>
        <meta name='description' content='いまいまいのポートフォリオ' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/frog_circle.png' />
      </Head>
      <main className='font-mono text-gray-200'>
        <div ref={ref}>
          <MainLayout>
            <BackgroundAnimation />
            <motion.div
              variants={variants}
              className='invisible absolute z-50 flex items-center justify-center rounded-full md:visible'
              animate={cursor.variant}
              transition={spring}
            >
              <div>{cursor.text}</div>
            </motion.div>
            <SideNavi onClicks={onClicks} isOpens={isOpens} />
            <Drag>
              <Playlist setOpen={setOpenMusic} isOpen={openMusic} />
            </Drag>
            <AboutWindow
              onClose={() => {
                setOpenAbout(false)
              }}
              isOpen={openAbout}
            />
            <Drag>
              <SkillWindow
                onClose={() => {
                  setOpenSkills(false)
                }}
                isOpen={openSkills}
              />
            </Drag>
            <Drag>
              <WorkWindow
                onClose={() => {
                  setOpenWorks(false)
                }}
                isOpen={openWorks}
              />
            </Drag>
          </MainLayout>
        </div>
      </main>
    </>
  )
}
