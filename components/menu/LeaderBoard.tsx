import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import LeaderBoardElement from '../molecules/leaderBoardElement';

const LeaderBoard: NextPage = () => {

    return (
    <div className='col-span-10 overflow-auto'>
        <table className='w-full'>
            <thead className='bg-[#808080]'>
                <th className='py-4'>Байр</th>
                <th className='py-4'>Нэр</th>
                <th className='py-4'>Sisi ID</th>
                <th className='py-4'>Түвшин</th>
                <th className='py-4'>Rating</th>
                <th className='py-4'>Оноо</th>
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
                <LeaderBoardElement />
            </tbody>
        </table>
    </div>
    )
}

export default LeaderBoard
