import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'

const Feedback: NextPage = () => {
    return (
        <div className='rounded-xl shadow-special bg-[#eeeeee] p-5 grid grid-cols-6'>
            <div className='col-span-3'>
                <p className='text-4xl mb-5'>Санал хүсэлт</p>
                <div className=''>
                    <textarea  className='h-[200px] w-full' />
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4'>Илгээх</button>
            </div>
        </div>
    )
}

export default Feedback
