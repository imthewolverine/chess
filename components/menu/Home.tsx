import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import { MdCardMembership, MdOutlinePermIdentity, MdOutlineSchool } from 'react-icons/md'
import { AiOutlinePhone, AiOutlineTrophy } from 'react-icons/ai';
import { GiRank3 } from 'react-icons/gi'

const NavHome: NextPage = () => {

  return (
    <div className='grid grid-cols-10 gap-4'>
        <div className='col-span-7 space-y-3'>
            <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] h-3/5'>
                <div className='text-[22px] font-medium mb-4'>Мэдээлэл</div>
                <div className='text-[18px] '>"Num chess club" 2023-2024 оны хичээлийн шинэ жилийн анхны хурал</div>
            </div>
            <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] h-1/2'>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click here</Link>
            </div>
        </div>
        <div className='col-span-3'>
            {/*Засах хэсэг Хувийн мэдээлэл*/}
            <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>
                <div className='text-xl font-medium border-b border-gray-600 pb-1'>Хувийн мэдээлэл</div>
                <div className='flex space-x-4 items-center pt-2'>
                    {/*<div className='w-16 h-16 rounded-full bg-[#C4C4C4]'></div>*/}
                    <div className='flex-row text-[18px]'>
                            <div>Баттулга</div>
                            <div className=''>Батлхагва</div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div></div>
                    <div className='flex items-center'><MdOutlinePermIdentity className='mr-2 text-lg'/> 20b1num1562</div>
                    <div className='flex items-center'><MdOutlineSchool className='mr-2 text-lg'/> ХШИУС</div>
                    <div className='flex items-center'><AiOutlinePhone className='mr-2 text-lg'/> 80553609</div>
                    <div className='flex items-center'><AiOutlineTrophy className='mr-2 text-lg'/> 1980</div>
                    <div className='flex items-center'><GiRank3 className='mr-2 text-lg'/> Ахисан дунд</div>
                    <div className='flex items-center'><MdCardMembership className='mr-2 text-lg'/> Гишүүн</div>
                    <div className='flex items-center'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavHome
