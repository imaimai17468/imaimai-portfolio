import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { AnimatePresence } from 'framer-motion'
import MainLayout from '@components/Layout/MainLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AnimatePresence  exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AnimatePresence>
    </RecoilRoot>
  )
}

export default MyApp
