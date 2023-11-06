import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import PollOptions from './molecules/PollOptions';

const PollComponent: NextPage = () => {

  return (
    <div className='col-span-2 p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>
        <div className='text-xl font-medium mb-5'>Барсаагийн өндөр хэд вэ?</div>
        <div className='flex-row space-y-2' id="options">
            <PollOptions />
            <PollOptions />
            <PollOptions />
        </div>
        <button type="submit" className='bg-blue-500 font-semibold text-white py-2 px-4 border rounded-xl w-full mt-6 hover:bg-blue-700'>Submit</button>
    </div>
  )
}

export default PollComponent
