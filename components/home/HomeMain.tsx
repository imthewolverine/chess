import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import Home from '../menu/Home';
import Activity from '../menu/Activity';
import Schedule from '../menu/Schedule';
import Puzzle from '../menu/Puzzle';
import LeaderBoard from '../menu/LeaderBoard';
import Poll from '../menu/Poll';
import Feedback from '../menu/Feedback';
import Payment from '../menu/Payment';
import { useRouter } from 'next/router'

const HomeMain: NextPage = () => {
    const [currentPage, setCurrentPage] = useState("Home");
    const handleMenuClick = (page: string) => {
        setCurrentPage(page);
    }
    return (
        <div className='mr-4 grid grid-cols-12 gap-4 my-[40px]'>
            <div className='pl-4 pr-4 col-span-2'>
                <div className='flex-row space-y-3 z-30'>
                    <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]' onClick={() => handleMenuClick("Home")}>Нүүр хуудас</div>
                    <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]' onClick={() => handleMenuClick("Activity")}>Үйл ажиллагаа</div>
                    <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]' onClick={() => handleMenuClick("Schedule")}>Хуваарь</div>
                    <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]' onClick={() => handleMenuClick("Puzzle")}>Бодлого</div>
                    <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]' onClick={() => handleMenuClick("LeaderBoard")}>Онооны самбар</div>
                    <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]' onClick={() => handleMenuClick("Poll")}>Санал асуулга</div>
                    <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]' onClick={() => handleMenuClick("Feedback")}>Санал хүсэлт</div>
                    <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]' onClick={() => handleMenuClick("Payment")}>Төлбөр</div>
                    <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] text-[#EB654B]'>Гарах</div>
                </div>
            </div>
            <div className='col-span-10 grid grid-cols-10 gap-4'>
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
