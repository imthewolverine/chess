import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'
import { AiOutlineDatabase, AiOutlineHome, AiOutlineSchedule } from 'react-icons/ai';
import { HiOutlinePuzzle } from 'react-icons/hi'
import { MdOutlineLeaderboard, MdOutlineFeedback, MdPayment } from 'react-icons/md'
import { BiPoll } from 'react-icons/bi'
import { IoMdExit } from 'react-icons/io'
const Menu: NextPage = () => {

  return (
    <div className='flex-row z-30'>
      
        <Link href="/Home"><div className='flex mb-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] hover:bg-[#D9D9D9] items-center'><AiOutlineHome className='text-lg mr-1'/>Нүүр хуудас</div></Link>
        <Link href="/Activity"><div className='flex my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] hover:bg-[#D9D9D9] items-center'><AiOutlineDatabase className='text-lg mr-1'/>Үйл ажиллагаа</div></Link>
        <Link href="/Schedule"><div className='flex my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] hover:bg-[#D9D9D9] items-center'><AiOutlineSchedule className='text-lg mr-1'/> Хуваарь</div></Link>
        <Link href="/Puzzle"><div className='flex my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] hover:bg-[#D9D9D9] items-center'><HiOutlinePuzzle className='text-lg mr-1'/> Бодлого</div></Link>
        <Link href="/LeaderBoard"><div className='flex my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] hover:bg-[#D9D9D9] items-center'><MdOutlineLeaderboard className='text-lg mr-1'/> Онооны самбар</div></Link>
        <Link href="/Poll"><div className='flex my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] hover:bg-[#D9D9D9] items-center'><BiPoll className='text-lg mr-1'/> Санал асуулга</div></Link>
        <Link href="/Feedback"><div className='flex my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] hover:bg-[#D9D9D9] items-center'><MdOutlineFeedback className='text-lg mr-1'/> Санал хүсэлт</div></Link>
        <Link href="/Payment"><div className='flex my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] hover:bg-[#D9D9D9] items-center'><MdPayment className='text-lg mr-1'/> Төлбөр</div></Link>
        <div className='flex my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] text-[#EB654B] hover:bg-[#D9D9D9] items-center'><IoMdExit className='text-lg mr-1'/>Гарах</div>
    </div>
  )
}

export default Menu
