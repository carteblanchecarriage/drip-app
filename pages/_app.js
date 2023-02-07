import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'


import { Asap } from '@next/font/google'

const asap = Asap({
  subsets: ['latin'],
  weight: "700",
  variable: "--font-asap"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  )
}