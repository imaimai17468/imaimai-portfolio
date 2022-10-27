import clsx from 'clsx'
import type { NextPage } from 'next'
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import styles from '@styles/Home.module.css'
import { MotionConfig } from 'framer-motion'
import { motion } from 'framer-motion'
import { RotateBox } from '@animations/common'

const Home: NextPage = () => {
  return (
    <div className={styles.cotnainer}>
      <Head>
        <title>Imaimai's Portfoliio</title>
        <meta name="description" content="いまいまいのポートフォリオ" />
        <link rel="icon" href="/frog.PNG" />
      </Head>

      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-text-main-white flex flex-col items-center gap-20">
            <img src="/frog.svg" alt="frog" />
            <p className="text-5xl">ようこそ</p>
          </div>
        </motion.div>
        <RotateBox />
      </main>
    </div>
  )
}

export default Home
