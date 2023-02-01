import React, { useState } from 'react';
import type { NextPage } from 'next'
import AnswerMain from './AnswerMain'
import BlogMain from './BlogMain'
import Link from 'next/link'

const HomeMain: NextPage = () => {
  const [currentPage, setCurrentPage] = useState("blog");
  
  function handleClick(page: string) {
    setCurrentPage(page);
  }
  function setNavigateClass(setClass: string) {
    return (setClass === currentPage ? ' text-[#1E90FF] border-[#1E90FF] border-b-2 py-[5px]' : '');
  }
  
  return (
    <div className='container mx-auto grid grid-cols-12 gap-6 my-[50px]'>
        <div className='col-span-3'>
            <div className='bg-[#D9D9D9] h-[1176px]'></div>
        </div>
        <div className='col-span-8'>
            <div className='h-[148px] bg-[#D9D9D9] mb-[50px]'>
            </div>
            <div className='flex text-[16px] text-[#6D7280]'>
              <button className={'px-3 hover:text-[#1E90FF] '+setNavigateClass('blog')} onClick={() => handleClick("blog")}>Blog</button>
              <button className={'px-3 hover:text-[#1E90FF] '+setNavigateClass('answer')} onClick={() => handleClick("answer")}>Answer</button>
            </div>
            <div>
              {currentPage === 'blog' ? <BlogMain /> : <AnswerMain />}
            </div>
        </div>
    </div>
  )
}

export default HomeMain
