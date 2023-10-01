import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'

const Menu: NextPage = () => {

  return (
    <div className='flex-row z-30'>
        <Link href="/"><div className='my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Нүүр хуудас</div></Link>
        <Link href="/Activity"><div className='my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Үйл ажиллагаа</div></Link>
        <Link href="/Schedule"><div className='my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Хуваарь</div></Link>
        <Link href="/Puzzle"><div className='my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Бодлого</div></Link>
        <Link href="/LeaderBoard"><div className='my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Онооны самбар</div></Link>
        <Link href="/Poll"><div className='my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Санал асуулга</div></Link>
        <Link href="/Feedback"><div className='my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Санал хүсэлт</div></Link>
        <Link href="/Payment"><div className='my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>Төлбөр</div></Link>
        <div className='my-3 p-3 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] text-[#EB654B]'>Гарах</div>
    </div>
  )
}

export default Menu
