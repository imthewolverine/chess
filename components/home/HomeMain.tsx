import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import Home from '../menu/Home';
import Activity from '../../pages/Activity';
import Schedule from '../../pages/Schedule';
import Puzzle from '../../pages/Puzzle';
import LeaderBoard from '../../pages/LeaderBoard';
import Poll from '../../pages/Poll';
import Feedback from '../../pages/Feedback';
import Payment from '../../pages/Payment';
import { useRouter } from 'next/router'
import Menu from '../menu/Menu';

const HomeMain: NextPage = () => {
    const [currentPage, setCurrentPage] = useState("Home");
    const handleMenuClick = (page: string) => {
        setCurrentPage(page);
    }
    return (
        <div className='mr-4 grid grid-cols-12 gap-4 my-[40px]'>
            <div className='pl-4 pr-4 col-span-2'>
                <Menu />
            </div>
            <div className='col-span-10'>
                {currentPage === 'Home' ? <Home /> : ""}
                {currentPage === 'Activity' ? <Activity /> : ""}
                {currentPage === 'Schedule' ? <Schedule /> : ""}
                {currentPage === 'Puzzle' ? <Puzzle /> : ""}
                {currentPage === 'LeaderBoard' ? <LeaderBoard /> : ""}
                {currentPage === 'Poll' ? <Poll /> : ""}
                {currentPage === 'Feedback' ? <Feedback /> : ""}
                {currentPage === 'Payment' ? <Payment /> : ""}
            </div>
        </div>
    )
}
export default HomeMain
