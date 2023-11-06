import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import PollAddOptions from './molecules/PollAddOption';

const PollCreate: NextPage = () => {

  return (
    <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>
        <label htmlFor="pollTitle" className='text-2xl font-medium'>Асуулт</label>
        <textarea id="pollTitle" className='w-full h-[100px] my-5'/>
        <div className='text-xl font-medium my-5'>Сонголтууд</div>
        <button type='submit' className='bg-blue-500 font-semibold text-white py-2 px-4 border rounded-xl w-1/2 hover:bg-blue-700'>Сонголт нэмэх</button>
        <div className='border options'>
            <PollAddOptions/>
            <PollAddOptions/>
            <PollAddOptions/>
        </div>
        <button type='submit' className='bg-blue-500 font-semibold text-white py-2 px-4 border rounded-xl w-1/2 hover:bg-blue-700'>Оруулах</button>
    </div>
  )
}

export default PollCreate
