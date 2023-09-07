import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'

const Feedback: NextPage = () => {

  return (
    <><div className='col-span-7 space-y-3'>
          <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] h-3/5'>
              <div className='text-[22px] font-medium mb-4'>Мэдээлэл</div>
              <div>Барсаа үсээ хусжээ</div>
          </div>
          <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] h-1/2'></div>
      </div>
      <div className='col-span-3'>
              <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>
                  <div className='flex space-x-4 items-center'>
                      <div className='w-16 h-16 rounded-full bg-[#C4C4C4]'></div>
                      <div className='flex-row text-[20px]'>
                          <div>test</div>
                          <div>tset</div>
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
          </div></>
  )
}

export default Feedback
