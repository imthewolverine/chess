import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import Home from '../menu/Home';

const HomeMain: NextPage = () => {
  
  return (
    <div className='mr-4 grid grid-cols-12 gap-4 my-[40px]'>
        <div className='pl-4 pr-4 col-span-2'>
            <div className='flex-row space-y-3 z-30'>
                <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Нүүр хуудас</div>
                <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Үйл ажиллагаа</div>
                <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Хуваарь</div>
                <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Бодлого</div>
                <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Онооны самбар</div>
                <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Санал асуулга</div>
                <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Санал хүсэлт</div>
                <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Төлбөр</div>
                <div className='p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] text-[#EB654B]'>Гарах</div>
            </div>
        </div>
        <div className='col-span-10 grid grid-cols-10 gap-4'>
            <Home />
        </div>
    </div>
  )
}

export default HomeMain
