import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image';
import backgroundPic from '../images/background.jpeg'
import Menu from '../components/menu/Menu';
import NavHome from '../components/menu/Home';

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
      <div className='mr-4 grid grid-cols-12 gap-4 my-[40px]'>
          <div className='pl-4 pr-4 col-span-2'>
              <Menu />
          </div>
          <div className='col-span-10'>
              <NavHome />
          </div>
      </div>
    </div>
  )
}

export default Home
