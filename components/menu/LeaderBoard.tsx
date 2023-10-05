import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import LeaderBoardElement from '../molecules/leaderBoardElement';

const LeaderBoard: NextPage = () => {

    return (
    <div className=' rounded-xl shadow-special bg-[#eeeeee] bg-opacity-70 overflow-hidden mr-[220px]'>
        <table className='w-full overflow-auto'> 
            <thead className='bg-[#3B4354] text-white'>
                <th className='py-4 font-semibold text-lg'>Байр</th>
                <th className='py-4 font-semibold text-lg'>Нэр</th>
                <th className='py-4 font-semibold text-lg'>Sisi ID</th>
                <th className='py-4 font-semibold text-lg'>Түвшин</th>
                <th className='py-4 font-semibold text-lg'>Rating</th>
                <th className='py-4 font-semibold text-lg'>Оноо</th>
            </thead>
            <tbody>
                <LeaderBoardElement />
                <LeaderBoardElement />
                <LeaderBoardElement />
                <LeaderBoardElement />
                <LeaderBoardElement />
                <LeaderBoardElement />
                <LeaderBoardElement />
                <LeaderBoardElement />
            </tbody>
        </table>
    </div>
    )
}

export default LeaderBoard
