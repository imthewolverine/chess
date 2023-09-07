import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import HomeMain from '../components/home/HomeMain';
import Image from 'next/image';
import backgroundPic from '../images/background.jpeg'

const Home: NextPage = () => {

  return (
    <div className="min-h-screen">
      <Head>
        <title>Chess</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
      className='-z-10 opacity-80'
      src={backgroundPic}
      layout='fill'
      alt="background"
      objectFit='cover'
      objectPosition='center'
      />
      <Navbar/>
      <HomeMain />
    </div>
  )
}

export default Home
