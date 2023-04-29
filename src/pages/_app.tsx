import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
