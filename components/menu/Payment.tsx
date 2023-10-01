import React, { useState } from 'react';
import type { NextPage } from 'next'
import Link from 'next/link'

const Payment: NextPage = () => {

    return (
        <div className='grid grid-cols-10 gap-4'>
            <div className='col-span-6 space-y-3'>
                <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee] h-1/2'>
                    <table></table>
                </div>
            </div>
            <div className='col-span-4'>
                <div className='p-4 border border-[#D9D9D9] rounded-xl shadow-special bg-[#eeeeee]'>
                    <div className='text-[22px] pb-3 font-medium'>Төлбөр</div>
                        <table className='w-full border-collapse border border-slate-400 '>
                            <thead className='bg-[#808080]'>
                                <th className='border border-slate-300 py-3'>Банк</th>
                                <th className='border border-slate-300'>Дансны дугаар</th>
                                <th className='border border-slate-300'>Дансны нэр</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='border border-slate-300 py-3'>Хаан банк</th>
                                    <th className='border border-slate-300'>5862109647</th>
                                    <th className='border border-slate-300'>Баттулга Батлхагва</th>
                                </tr>
                                <tr>
                                    <th className='border border-slate-300 py-3'>Хаан банк</th>
                                    <th className='border border-slate-300'>5862109647</th>
                                    <th className='border border-slate-300'>Баттулга Батлхагва</th>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>

        </div>
    )
}

export default Payment
