import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MeasureSystem from '@/components/MeasureSystem'
import Calc from '@/components/Calc'
import { useState, useEffect } from 'react'
import TestForm from '@/components/TestForm'

export default function Home() {
  const [measure, setMeasure] = useState();

  return (
    <>
      <Head>
        <title>DRIP</title>
        <meta name="description" content="DRIP is an app for sizing gutters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="static top-0 flex flex-col justify-center items-center h-screen w-screen">
        {measure ? null :
          (<h3 className="text-white section-heading w-4/6 md:3/6 lg:w-2/6 bg-blue-400 flex justify-center mt-4">Select a Measurement System</h3>)
        }

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