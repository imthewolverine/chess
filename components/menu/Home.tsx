import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <div className='grid grid-cols-10 gap-4'>
        <div className='col-span-7 space-y-3'>
          <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] h-3/5'>
              <div className='text-[22px] font-medium mb-4'>Мэдээлэл</div>
              <div className='text-[18px] '>"Num chess club" 2023-2024 оны хичээлийн шинэ жилийн анхны хурал</div>
          </div>
          <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] h-1/2'></div>
        </div>
        <div className='col-span-3'>
            <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>
                <div className='flex space-x-4 items-center'>
                    <div className='w-16 h-16 rounded-full bg-[#C4C4C4]'></div>
                    <div className='flex-row text-[20px]'>
                        <div>Баттулга</div>
                        <div>Батлхагва</div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <div></div>
                    <div>20b1num1562</div>
                    <div>ХШИУС</div>
                    <div>80553609</div>
                    <div>1980</div>
                    <div>Ахисан дунд</div>
                    <div>Гишүүн</div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
