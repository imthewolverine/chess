import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Menu from '../components/menu/Menu';
import { useRouter } from 'next/router';
import NavHome from '../components/menu/Home';
import Activity from '../components/menu/Activity';
import Schedule from '../components/menu/Schedule';
import Puzzle from '../components/menu/Puzzle';
import LeaderBoard from '../components/menu/LeaderBoard';
import Poll from '../components/menu/Poll';
import Feedback from '../components/menu/Feedback';
import Payment from '../components/menu/Payment';
import Image from 'next/image';
import backgroundPic from '../images/background.jpeg'

const Home: NextPage = () => {
    const router = useRouter();
    const navName = router.query.navName;
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
                    {navName === 'Home' ? <NavHome /> : ""}
                    {navName === 'Activity' ? <Activity /> : ""}
                    {navName === 'Schedule' ? <Schedule /> : ""}
                    {navName === 'Puzzle' ? <Puzzle /> : ""}
                    {navName === 'LeaderBoard' ? <LeaderBoard /> : ""}
                    {navName === 'Poll' ? <Poll /> : ""}
                    {navName === 'Feedback' ? <Feedback /> : ""}
                    {navName === 'Payment' ? <Payment /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Home
