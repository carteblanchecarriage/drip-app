import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MeasureSystem from '@/components/MeasureSystem'
import Calc from '@/components/Calc'
import { useState, useEffect } from 'react'

export default function Home() {
  const [measure, setMeasure] = useState();

  return (
    <>
      <Head>
        <title>DRIP</title>
        <meta name="description" content="DRIP is an app for sizing gutters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      <div className="flex flex-col justify-center items-center px-20 mt-8">

        <MeasureSystem
          setMeasure={setMeasure}
        />

        {measure ? (<Calc
          measure={measure}
        />) : null}

      </div>

      <Footer
        className="absolute bottom-0 bg-h-48"
      />
    </>
  )
}