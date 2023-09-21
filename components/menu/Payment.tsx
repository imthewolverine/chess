import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'

const Payment: NextPage = () => {

    return (
        <div className='grid grid-cols-10 gap-4'>
            <div className='col-span-6 space-y-3'>
                <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] h-3/5'>
                    <div className='text-[22px] font-medium mb-4'>Мэдээлэл</div>
                    <div>Барсаа үсээ хусаагүй.</div>
                </div>
                <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] h-1/2'></div>
            </div>
            <div className='col-span-4'>
                <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>
                    <div className='text-[22px] font-medium'>Данс</div>
                    <div className='flex gap-2 br-'>
                        <div className='font-medium'>Хаан банк</div>
                        <div className=''>5862109647</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='font-medium'>Нэр</div>
                        <div className=''>Батлхагва</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
