import '@/styles/globals.css'


import { Asap } from '@next/font/google'

const asap = Asap({
  subsets: ['latin'],
  weight: "700",
  variable: "--font-asap"
})


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}