import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { useRef } from 'react'
import { useRecoilValue } from 'recoil'

import { MainLayout } from '@/components/layout'
import { BackgroundAnimation } from '@/components/screen'
import { useVariants, spring } from '@/hooks/useVariants'
import { cursorState } from '@/store/cursor'

export default function Home() {
  const cursor = useRecoilValue(cursorState)
  const ref = useRef(null)
  const variants = useVariants(ref)

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
          </MainLayout>
        </div>
      </main>
    </>
  )
}
