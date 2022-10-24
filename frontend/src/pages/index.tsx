import clsx from 'clsx'
import type { NextPage } from 'next'
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import styles from '@styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Imaimai's Portfoliio</title>
        <meta name="description" content="いまいまいのポートフォリオ" />
        <link rel="icon" href="/frog.PNG" />
      </Head>

      <main className={styles.main}>
        <div>
          <p>test</p>
        </div>
      </main>
    </div>
  )
}

export default Home
