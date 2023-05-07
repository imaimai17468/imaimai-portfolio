import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>imaimai Portfolio</title>
        <meta name='description' content='いまいまいのポートフォリオ' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/frog_circle.png' />
      </Head>
      <Analytics />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
